import React, {useState} from 'react'
import {StaticImage} from 'gatsby-plugin-image'

const url = 'https://ob402y9vji.execute-api.eu-central-1.amazonaws.com/dev/email/send'

const ContactForm = () => {
    const [toastText, setToastText] = useState('')
    const [disabled, setDisabled] = useState(false)

    const onSuccess = (form) => {
        setToastText('Thanks for sending us a message! We will get in touch with you ASAP.')
        setDisabled(false)
        form.name.focus()
        form.name.value = ''
        form.email.value = ''
        form.phone_number.value = ''
        form.message.value = ''
    }

    const onError = (err) => {
        setToastText('There was an error with sending your message! Please contact us directly via email.')
        setDisabled(false)
        console.log(err)
    }

    const onSubmit = (e) => {
        e.preventDefault()
        setToastText('Sending')
        setDisabled(true)

        const form = e.target;
        const payload = {
            name: form.name.value,
            email: form.email.value,
            content: form.message.value,
            phone_number: form.phone_number.value
        }

        post(url, payload, function (err) {
            if (err) {
                return onError(err)
            }
            onSuccess(form)
        })
    }

    return (
        <section className="contact-area pb-100">
            <div className="container">
                <div className="section-title">
                    <span className="sub-title">
                        <StaticImage
                            src='../../assets/images/star-icon.png'
                            alt=""
                            placeholder="tracedSVG"
                        />
                        Get in Touch
                    </span>
                    <h2>Ready to Get Started?</h2>
                    <p>Make an appointment for a free consultation.</p>
                </div>

                <div className="row">
                    <div className="col-lg-6 col-md-12">
                        <div className="contact-image">
                            <StaticImage
                                src='../../assets/images/contact.png'
                                alt="person at a help desk ready to be contacted"
                                placeholder="tracedSVG"
                            />
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                        <div className="contact-form">
                            <form id="contactForm" onSubmit={onSubmit}>
                                <div className="row">
                                    <div className="col-lg-12 col-md-6">
                                        <div className="form-group">
                                            <input
                                                name="name"
                                                type="text"
                                                className="form-control"
                                                required
                                                placeholder="Your name"
                                            />
                                        </div>
                                    </div>

                                    <div className="col-lg-12 col-md-6">
                                        <div className="form-group">
                                            <input
                                                name="email"
                                                type="email"
                                                className="form-control"
                                                required
                                                placeholder="Your email address"
                                            />
                                        </div>
                                    </div>

                                    <div className="col-lg-12 col-md-12">
                                        <div className="form-group">
                                            <input
                                                name="phone_number"
                                                type="text"
                                                className="form-control"
                                                required
                                                placeholder="Your phone number"
                                            />
                                        </div>
                                    </div>

                                    <div className="col-lg-12 col-md-12">
                                        <div className="form-group">
                                            <textarea
                                                name="message"
                                                className="form-control"
                                                cols="30"
                                                rows="6"
                                                required
                                                placeholder="Write your message..."
                                            />
                                        </div>
                                    </div>

                                    <div className="col-lg-12 col-md-12">{toastText}</div>

                                    <div className="col-lg-12 col-md-12">
                                        <button id="submit" type="submit" className="default-btn" disabled={disabled}>
                                            <i className="flaticon-tick"></i>
                                            Send Message <span></span>
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )

}

// TODO: this should be moved to another file, something like utils/http.js
function post(url, body, callback) {
    const req = new XMLHttpRequest();

    req.open("POST", url, true);
    req.setRequestHeader("Content-Type", "application/json");
    req.addEventListener("load", function () {
        if (req.status < 400) {
            callback(null, JSON.parse(req.responseText));
        } else {
            callback(new Error("Request failed: " + req.statusText));
        }
    });
    req.send(JSON.stringify(body));
}

export default ContactForm