import React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
 
const AboutUsContent = () => {
    return (
        <section className="about-area ptb-100">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <div className="about-image">
                            <StaticImage
                                src='../../assets/images/about/about-img5.png'
                                alt="high tech animation of people doing data input and working with computers"
                                placeholder="tracedSVG"
                            />
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                        <div className="about-content">
                            <div className="content">
                                <span className="sub-title">
                                    <StaticImage
                                        src='../../assets/images/star-icon.png'
                                        alt="rotating animated colorful dots in star structure"
                                        placeholder="tracedSVG"
                                    />
                                    About Us
                                </span>
                                <h2>Drive Digital Revolution Through Automation</h2>
                                <p>Our goal is too be the digital interface off our clients, develop what ever they need in the most efficient way posible and remove inefficiencies through technology.</p>
                                <p>We believe that to compete in todays enviroment, it is necessary to embrace technology. And that the change that is upon us now it the one promised by Deep Blue, and it will only accelerate.</p>

                                <Link to="/about-us/" className="default-btn">
                                    <i className="flaticon-right"></i>More About Us<span></span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="circle-shape1">
                <StaticImage
                    src='../../assets/images/shape/circle-shape1.png'
                    alt="world like globe with high tech design"
                    placeholder="tracedSVG"
                />
            </div>
        </section>
    )
}

export default AboutUsContent;