import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { SESClient, SendEmailCommand, SendEmailCommandInput, SendEmailCommandOutput } from "@aws-sdk/client-ses";

const ERROR_001 = 'The request body is empty! Make sure the body has all the required parameters.';
const ERROR_002 = 'Missing parameters! Make sure to add parameters \'name\', \'email\', \'content\'.'

const MY_DOMAIN = 'https://deep-blue.io';
const MY_EMAIL = 'chris@deep-blue.io';

function generateSuccessResponse(
  responseCode: APIGatewayProxyResult['statusCode'], 
  payload: SendEmailCommandOutput
): APIGatewayProxyResult {
  return {
    statusCode: responseCode,
    headers: {
      'Access-Control-Allow-Origin': MY_DOMAIN,
      'Access-Control-Allow-Headers': 'x-requested-with',
      'Access-Control-Allow-Credentials': true,
    },
    body: JSON.stringify(payload),
  };
}

function generateErrorResponse(
  responseCode: APIGatewayProxyResult['statusCode'], 
  error: unknown
): APIGatewayProxyResult {
  return {
    statusCode: responseCode,
    headers: {
      'Access-Control-Allow-Origin': MY_DOMAIN,
      'Access-Control-Allow-Headers': 'x-requested-with',
      'Access-Control-Allow-Credentials': true,
    },
    body: JSON.stringify(error),
  };
}

interface ContactFormParameters {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

function getValidatedFormParameters(body: APIGatewayProxyEvent['body']): ContactFormParameters {
  if (!body) throw new Error(ERROR_001);
  const { name, email, phone, message } = JSON.parse(body);
  if (!(name && email && message)) throw new Error(ERROR_002);
  return { name, email, phone, message };
}

function generateResponseMessage(formParams: ContactFormParameters): string {
  return `
    Message sent via ${MY_DOMAIN}/contact!\n
    Name: ${formParams.name}\n
    Email: ${formParams.email}\n
    ${formParams.phone ? `Phone: ${formParams.phone}\n` : ''}
    Content: ${formParams.message}\n
  `
}

function generateEmailParameters(event: APIGatewayProxyEvent): SendEmailCommandInput {
  const formParams = getValidatedFormParameters(event.body);
  const responseMessage = generateResponseMessage(formParams);
  return {
    Source: MY_EMAIL,
    Destination: { ToAddresses: [MY_EMAIL] },
    ReplyToAddresses: [formParams.email],
    Message: {
      Body: {
        Text: {
          Charset: 'UTF-8',
          Data: responseMessage
        }
      },
      Subject: {
        Charset: 'UTF-8',
        Data: `Someone tried to contact you via ${MY_DOMAIN}/contact!`
      }
    }
  }
}

function sendEmailRequest(emailParams: SendEmailCommandInput): Promise<SendEmailCommandOutput> {
  const client = new SESClient({ region: 'eu-central-1' });
  const command = new SendEmailCommand(emailParams)
  return client.send(command);
}

export const lambdaHandler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  let response: APIGatewayProxyResult;
  try {
    const emailParams = generateEmailParameters(event);
    console.log("Logging Email Params", emailParams)
    const sesResponse = await sendEmailRequest(emailParams);
    response = generateSuccessResponse(200, sesResponse)
  } catch (error) {
    response = generateErrorResponse(500, error);
  }
  return response;
};
