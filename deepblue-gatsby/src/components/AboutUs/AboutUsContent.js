import React from 'react'
import { Link } from 'gatsby'
import aboutImage from '../../assets/images/about/about-img5.png'
import aboutImageW from '../../assets/images/about/about-img5.webp'
import starIcon from '../../assets/images/star-icon.png'
import starIconW from '../../assets/images/star-icon.webp'
import shape1 from '../../assets/images/shape/circle-shape1.png'
import shape1W from '../../assets/images/shape/circle-shape1.webp'
 
const AboutUsContent = () => {
    return (
        <section className="about-area ptb-100">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <div className="about-image">
                            <picture>
                                <source type="image/webp" srcset={aboutImageW} alt="high tech animation of people doing data input and working with computers"/>
                                <source type="image/png" srcset={aboutImage} alt="high tech animation of people doing data input and working with computers"/>
                                <img src={aboutImage} alt="high tech animation of people doing data input and working with computers" />
                            </picture>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                        <div className="about-content">
                            <div className="content">
                                <span className="sub-title">
                                    <picture>
                                        <source type="image/webp" srcset={starIconW} alt="rotating animated colorful dots in star structure" />
                                        <source type="image/webp" srcset={starIcon} alt="rotating animated colorful dots in star structure" />
                                        <img src={starIcon} alt="rotating animated colorful dots in star structure" /> 
                                    </picture>
                                    About Us
                                </span>
                                <h2>Drive Digital Revolution Through Automation</h2>
                                <p>Our goal is too be the digital interface off our clients, develop what ever they need in the most efficient way posible and remove inefficiencies through technology.</p>
                                <p>We believe that to compete in todays enviroment, it is necessary to embrace technology. And that the change that is upon us now it the one promised by Deep Blue, and it will only accelerate.</p>

                                <Link to="/about-us" className="default-btn">
                                    <i className="flaticon-right"></i>More About Us<span></span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="circle-shape1">
                <picture>
                    <source type="image/webp" srcset={shape1W} alt="world like globe with high tech design" />
                    <source type="image/png" srcset={shape1} alt="world like globe with high tech design" />
                    <img src={shape1} alt="world like globe with high tech design" />
                </picture>
            </div>
        </section>
    )
}

export default AboutUsContent;