import React from 'react'
import starIcon from '../../assets/images/star-icon.png'
import starIconW from '../../assets/images/star-icon.webp'
import contact from '../../assets/images/contact.png'
import contactW from '../../assets/images/contact.webp'

const ContactForm = () => {
    return (
        <section className="contact-area pb-100">
            <div className="container">
                <div className="section-title">
                    <span className="sub-title">
                        <picture>
                            <source type="image/webp" srcset={starIconW} alt="rotating animated colorful dots in star structure" />
                            <source type="image/png" srcset={starIcon} alt="rotating animated colorful dots in star structure" />
                            <img src={starIcon} alt="rotating animated colorful dots in star structure" />
                        </picture>
                        Get in Touch
                    </span>
                    <h2>Ready to Get Started?</h2>
                    <p>Make an appointment for a free consultation.</p>
                </div>

                <div className="row">
                    <div className="col-lg-6 col-md-12">
                        <div className="contact-image">
                            <picture>
                                <source type="image/webp" srcset={contactW} alt="man at a help desk ready to be contacted" />
                                <source type="image/png" srcset={contact} alt="man at a help desk ready to be contacted" />
                                <img src={contact} alt="man at a help desk ready to be contacted" />
                            </picture>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                        <div className="contact-form">
                            <form id="contactForm">
                                <div className="row">
                                    <div className="col-lg-12 col-md-6">
                                        <div className="form-group">
                                            <input type="text" name="name" className="form-control" required placeholder="Your name" />
                                        </div>
                                    </div>

                                    <div className="col-lg-12 col-md-6">
                                        <div className="form-group">
                                            <input type="email" name="email" className="form-control" required placeholder="Your email address" />
                                        </div>
                                    </div>

                                    <div className="col-lg-12 col-md-12">
                                        <div className="form-group">
                                            <input type="text" name="phone_number" className="form-control" required placeholder="Your phone number" />
                                        </div>
                                    </div>

                                    <div className="col-lg-12 col-md-12">
                                        <div className="form-group">
                                            <textarea name="message" className="form-control" cols="30" rows="6" required placeholder="Write your message..." />
                                        </div>
                                    </div>

                                    <div className="col-lg-12 col-md-12">
                                        <button type="submit" className="default-btn">
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

export default ContactForm