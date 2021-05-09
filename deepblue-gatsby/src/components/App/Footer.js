import React from 'react'
import {Link} from 'gatsby'
import logo from "../../assets/images/logos/deepblue-logo-name.png"
import logoW from "../../assets/images/logos/deepblue-logo-name.webp"
import footerMap from "../../assets/images/footer-map.png"
import footerMapW from "../../assets/images/footer-map.webp"

const Footer = () => {

    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer-area bg-color">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-sm-6">
                        <div className="single-footer-widget">
                            <a href="/" className="logo">
                                <picture>
                                    <source type="image/webp" srcset={logoW} alt="Deep Blue logo" />
                                    <source type="image/png" srcset={logo} alt="Deep Blue logo" />
                                    <img src={logo} alt="logo" alt="Deep Blue logo" />
                                </picture>
                            </a>
                            <p>It is time to join the forth industrial revolution.</p>

                            <ul className="social-link">
                                <li>
                                    <Link to="" className="d-block" target="_blank" rel="noreferrer">
                                        <i className='bx bxl-facebook'></i>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="" className="d-block" target="_blank" rel="noreferrer">
                                        <i className='bx bxl-twitter'></i>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="" className="d-block" target="_blank" rel="noreferrer">
                                        <i className='bx bxl-instagram'></i>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="" className="d-block" target="_blank" rel="noreferrer">
                                        <i className='bx bxl-linkedin'></i>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-2 col-sm-6">
                        <div className="single-footer-widget pl-5">
                            <h3>Explore</h3>
                            
                            <ul className="footer-links-list">
                                <li>
                                    <Link to="/">
                                        Home
                                    </Link>
                                </li>
                                    <li>
                                    <Link to="/about-us">
                                        About
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/blog">
                                        Our Blog
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/contact">
                                        Contact
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-2 col-sm-6">
                        <div className="single-footer-widget">
                            <h3>Resources</h3>
                            <ul className="footer-links-list">
                                <li>
                                    <Link to="/services">
                                        Our Services
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/testimonials">
                                        Testimonials
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/case-studies">
                                        Case Studies
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6">
                        <div className="single-footer-widget">
                            <h3>Address</h3>

                            <ul className="footer-contact-info">
                                <li>
                                    <i className='bx bx-map'></i> 
                                    Ausstellungsstraße 71 Top 32 <br/>
                                    1020 Wien<br /> Austria
                                </li>
                                <li>
                                    <i className='bx bx-phone-call'></i>
                                    <a href="tel:+436601418824">+43 660 1418824</a>
                                </li>
                                <li>
                                    <i className='bx bx-envelope'></i>
                                    <a href="mailto:chris@deep-blue.io"> chris@deep-blue.io</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom-area">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-6">
                            <p>Copyright @{currentYear} <strong>Deep Blue</strong> All rights reserved.</p>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <ul>
                                <li>
                                    <Link to="/privacy-policy">
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/terms-of-service">
                                        Terms & Conditions
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-map">
                <picture>
                    <source type="image/webp" srcset={footerMapW} alt="ilustration of an interconected world" />
                    <source type="image/png" srcset={footerMap} alt="ilustration of an interconected world" />
                    <img src={footerMap} alt="ilustration of an interconected world" />
                </picture>

            </div>
        </footer>
    );
}

export default Footer;