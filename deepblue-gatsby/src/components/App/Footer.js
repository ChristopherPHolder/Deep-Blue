import React from 'react'
import {Link} from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

const socialProfiles = [
    {
        socialMedia: 'Facebook',
        socialLink: 'https://www.facebook.com/deepblue.io',
        iconClassName: 'bx bxl-facebook',
        alt: 'Link to Deep Blue Company Facebook Page'
    },
    {
        socialMedia: 'Twitter',
        socialLink: 'https://twitter.com/DeepBlu30402872',
        iconClassName: 'bx bxl-twitter',
        alt: 'Link to Deep Blue Company Twitter Page'
    },
    {
        socialMedia: 'Instagram',
        socialLink: 'https://www.facebook.com/deepblue.io',
        iconClassName: 'bx bxl-instagram',
        alt: 'Link to Deep Blue Company Instagram Page'
    },
    {
        socialMedia: 'LinkedIn',
        socialLink: 'https://www.linkedin.com/company/82262849',
        iconClassName: 'bx bxl-linkedin',
        alt: 'Link to Deep Blue Company LinkedIn Page'
    }
]

const Footer = () => {

    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer-area bg-color">
            <nav className="container">
                <div className="row">
                    <div className="col-lg-4 col-sm-6">
                        <div className="single-footer-widget">
                        <div className='svg-logo-name-right'>
                            <Link to="/" className="logo">
                                <StaticImage
                                    src="../../assets/images/logos/deepblue-logo-name-right.svg"
                                    alt="Deep Blue logo"
                                    placeholder="tracedSVG"
                                    height={300}
                                />
                            </Link>
                            </div>
                            <p>It is time to join the fourth industrial revolution.</p>

                            <ul className="social-link">
                                {socialProfiles.map((profile) => (
                                    <li>
                                        <a href={profile.socialLink} className="d-block" target="_blank" rel="noreferrer">
                                            <i className={profile.iconClassName} alt={profile.alt}></i>
                                        </a>
                                    </li>
                                ))}
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
                                    <Link to="/">
                                        Testimonials
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/case-studies">
                                        Recent Projects
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6">
                        <address className="single-footer-widget">
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
                        </address>
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
            </nav>

            <div className="footer-map">
                <StaticImage
                    src="../../assets/images/footer-map.png"
                    alt="ilustration of an interconected world"
                    placeholder="tracedSVG"
                />
            </div>
        </footer>
    );
}

export default Footer;