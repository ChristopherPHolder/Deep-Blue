import React from 'react'
import { Link } from 'gatsby'
import aboutImage from '../../assets/images/about/about-img5.png'
import starIcon from '../../assets/images/star-icon.png'
import icon4 from '../../assets/images/icons/icon4.png'
import icon5 from '../../assets/images/icons/icon5.png'
import icon6 from '../../assets/images/icons/icon6.png'
import icon7 from '../../assets/images/icons/icon7.png'
import shape1 from '../../assets/images/shape/circle-shape1.png'
 
const AboutUsContent = () => {
    return (
        <section className="about-area ptb-100">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <div className="about-image">
                            <img src={aboutImage} alt="banner" />
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                        <div className="about-content">
                            <div className="content">
                                <span className="sub-title">
                                    <img src={starIcon} alt="banner" /> 
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
                <img src={shape1} alt="banner" />
            </div>
        </section>
    )
}

export default AboutUsContent;