const aws = require('aws-sdk')
const ses = new aws.SES()
const myEmail = process.env.EMAIL
const myDomain = process.env.DOMAIN

function generateResponse (code, payload) {
  return {
    statusCode: code,
    headers: {
      'Access-Control-Allow-Origin': myDomain,
      'Access-Control-Allow-Headers': 'x-requested-with',
      'Access-Control-Allow-Credentials': true
    },
    body: JSON.stringify(payload)
  }
}

function generateError (code, err) {
  console.log(err)
  return {
    statusCode: code,
    headers: {
      'Access-Control-Allow-Origin': myDomain,
      'Access-Control-Allow-Headers': 'x-requested-with',
      'Access-Control-Allow-Credentials': true
    },
    body: JSON.stringify(err.message)
  }
}

function generateEmailParams (body) {
  const { name, email, phone, content } = JSON.parse(body)
  //console.log(email, name, content)
  if (!(name && email && content)) {
    throw new Error('Missing parameters! Make sure to add parameters \'name\', \'email\', \'content\'.')
  }

  return {
    Source: myEmail,
    Destination: { ToAddresses: [myEmail] },
    ReplyToAddresses: [email],
    Message: {
      Body: {
        Text: {
          Charset: 'UTF-8',
          Data: `
          Message sent via ${myDomain}/contact!\n
          Name: ${name}\n
          Email: ${email}\n
          Phone: ${phone}\n
          Content: ${content}\n`
        }
      },
      Subject: {
        Charset: 'UTF-8',
        Data: `Someone tried to contact you via ${myDomain}/contact!`
      }
    }
  }
}

module.exports.send = async (event) => {
  try {
    const emailParams = generateEmailParams(event.body)
    const data = await ses.sendEmail(emailParams).promise()
    return generateResponse(200, data)
  } catch (err) {
    return generateError(500, err)
  }
}