import React from 'react'
import {Link} from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
const OurSolutions = () => {
    return (
        <section className="solutions-area pb-70">
            <div className="container">
                <div className="section-title">
                    <span className="sub-title">
                    <StaticImage
                        src="../../assets/images/star-icon.png"
                        alt="rotating animated colorful dots in star structure"
                        loading="lazy"
                        placeholder="tracedSVG"
                    />
                        
                        Our Solutions
                    </span>
                    <h2>We are dedicated to see you succeed</h2>
                    <p>Our main goal is to help you succeed, our team of specialist will be there when you need us, able to expand and contract for your needs.</p>
                </div>

                <div className="row">
                    <div className="col-lg-4 col-sm-6">
                        <div className="single-solutions-box">
                            <div className="icon">
                                <i className="flaticon-rocket"></i>
                            </div>
                            <h3>
                                <Link to="">
                                    Code Security
                                </Link>
                            </h3>
                            <p>We are a security focused company and make sure all our code is up to local and international security standards.</p>

                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6">
                        <div className="single-solutions-box">
                            <div className="icon">
                                <i className="flaticon-laptop"></i>
                            </div>

                            <h3>
                                <Link to="">
                                    Agile Scrum
                                </Link>
                            </h3>

                            <p>Speed and efficiency are top of mind so we use scrum methodology were ever possible.</p>
                            
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6 offset-lg-0 offset-sm-3">
                        <div className="single-solutions-box">
                            <div className="icon">
                                <i className="flaticon-money"></i>
                            </div>

                            <h3>
                                <Link to="">
                                    Elastic Development
                                </Link>
                            </h3> 

                            <p>Only pay for what you are using, let our teams and servers expend and contract to suit your needs.</p>
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OurSolutions;