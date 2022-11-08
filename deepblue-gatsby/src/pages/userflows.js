import React, {useState} from 'react';
import { StaticImage } from 'gatsby-plugin-image'
import Layout from '../components/App/Layout';
import PageBanner from '../components/Common/PageBanner';
import { socket } from '../utils/http';
import '../assets/css/loading-spinner.css'

const socketUrl = 'wss://5ag9xf0aab.execute-api.us-east-1.amazonaws.com/ufo';

const resultsBox = `margin-top: 50px;`
const iframeStyles = `height: 800px; width: 100%;`

const Userflows = () => {

  const [toastText, setToastText] = useState('');
  const [disabled, setDisabled] = useState(false);
  const [resultBox, setResultBox] = useState(false);
  const [resultIFrame, setResultIFrame] = useState('');
  const [loadingSpinner, setLoadingSpinner] = useState(false);

  const onMessage = (data) => {
    setToastText(data.message);
    if (data.action === 'scheduled') {
      setResultBox(true);
      setLoadingSpinner(true);
    } else if (data.action === 'completed') {
      setLoadingSpinner(false);
      setToastText(data.message);
      setResultIFrame(data.reports.htmlReportUrl);
    }
  }

  const onSubmit = (event) => {
    event.preventDefault();
    setToastText('Sending audit request...');
    setDisabled(true);

    const form = event.target;
    const body = form.targetUrl.value + "";
    const payload = JSON.stringify({"action": "scheduleAudits", "targetUrl": body})

    socket(socketUrl, payload, function (response) {
      onMessage(JSON.parse(response.data));
    });
  }

  return (
    <Layout
      title="Userflows"
      description="Deep Blue Userflows is advance way to measure you websites performance."
      type="website"
      url="https://www.deep-blue.io/userflows/"
    >
      <PageBanner
        pageTitle="Userflows" 
        homePageText="Home" 
        homePageUrl="/" 
        activePageText="Userflows" 
      />
      
      <section className='contact-area pb-100'>
        <div className="container">
          <div className="section-title" style="margin-top: 20px;">
            <span className="sub-title">
              <StaticImage
                src='../../assets/images/star-icon.png'
                alt="star icon"
                placeholder="tracedSVG"
              />

            </span>
            <h2>Measure your sites performance</h2>
            <p>Make an appointment for a free consultation.</p>
          </div>
          <div className="contact-form">
            <form id="contactForm" onSubmit={onSubmit} >
              <div className="row">
                <div className="col-lg-12 col-md-6">
                  <div className="form-group">
                    <input
                      name="targetUrl"
                      type="url"
                      className="form-control"
                      required
                      placeholder="Enter an https:// URL"
                    />
                  </div>
                </div>
                <div className="col-lg-12 col-md-12">{toastText}</div>
                  <div className="col-lg-12 col-md-12">
                    <button id="submit" type="submit" className="default-btn" disabled={disabled} >
                      <i className="flaticon-right"></i>
                      Run Audit <span></span>
                    </button>
                </div>
              </div>
            </form>
          </div>
          {resultBox ?
              <div className="contact-form" style={resultsBox}>
                {resultIFrame ? <iframe style={iframeStyles} src={resultIFrame} title="W3Schools Free Online Web Tutorials"></iframe> : ''}

                {loadingSpinner ?
                    <div className="lds-roller">
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                : ''}
              </div>
          : ''}
        </div>
      </section>
    </Layout>
  );
}
export default Userflows;