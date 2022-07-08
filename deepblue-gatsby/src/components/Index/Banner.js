import React from 'react'

import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

const Banner = () => {
    const backGround = 
    `
    -webkit-mask-image: radial-gradient(61% 10% at bottom, transparent 99%, #fff 1%);
    background: linear-gradient(45deg,rgba(197,250,254,100%),rgba(255, 255, 255,100%));
    `
    return (
        <div className='it-services-banner' style={ backGround }>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <div className="main-banner-content">
                            <h1>Grow your business with custom software</h1>

                            <p>Our goal at Deep Blue is to help our customers grow and join the digitalization revolution.</p>

                            <div className="btn-box">
                                <Link to="/contact" className="default-btn">
                                    <i className="flaticon-right"></i> 
                                    Get Started <span></span>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                        <div className="main-banner-image">
                            <StaticImage
                                src="../../assets/images/banner-img1.png"
                                alt="animation of two woman and two men doing digital work"
                                loading="eager"
                                placeholder="tracedSVG"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner