import React, { useState } from 'react'
import useForm from 'react-hook-form'
import { StaticImage } from 'gatsby-plugin-image'



const ContactForm = () => {

    const form = document.getElementById('contactForm')
    const url = 'https://ob402y9vji.execute-api.eu-central-1.amazonaws.com/dev/email/send'
    const toast = document.getElementById('toast')
    const submit = document.getElementById('submit')
    
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
                            <form id="contactForm">
                                <div className="row">
                                    <div className="col-lg-12 col-md-6">
                                        <div className="form-group">
                                            <input
                                                name="name"
                                                type="text"
                                                className="form-control"
                                                required
                                                placeholder="Your name"
                                                //value={name} 
                                                //onChange={e => setName(e.target.value)}
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
                                                //value={email}
                                                //onChange={e => setEmail(e.target.value)}
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
                                                //value={phone}
                                                //onChange={e => setPhoneNumber(e.target.value)}
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
                                                //value={message}
                                                //onChange={e => setMessage(e.target.value)}
                                            />
                                        </div>
                                    </div>

                                    <div id="toast"></div>

                                    <div className="col-lg-12 col-md-12">
                                        <button id="submit" type="submit" className="default-btn">
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

    function post(url, body, callback) {
        var req = new XMLHttpRequest();
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
    function success () {
        toast.innerHTML = 'Thanks for sending me a message! I\'ll get in touch with you ASAP. :)'
        submit.disabled = false
        submit.blur()
        form.name.focus()
        form.name.value = ''
        form.email.value = ''
        form.content.value = ''
    }
    function error (err) {
        toast.innerHTML = 'There was an error with sending your message, hold up until I fix it. Thanks for waiting.'
        submit.disabled = false
        console.log(err)
    }

    form.addEventListener('submit', function (e) {
        e.preventDefault()
        toast.innerHTML = 'Sending'
        submit.disabled = true

        const payload = {
            name: form.name.value,
            email: form.email.value,
            content: form.content.value
        }
        post(url, payload, function (err, res) {
            if (err) { return error(err) }
            success()
        })
    })
}

export default ContactForm