import React from 'react'
import ReactWOW from 'react-wow'
import { Link } from 'gatsby'
import bannerImg from '../../assets/images/banner-img1.png'
import bannerImgW from '../../assets/images/banner-img1.webp'

const Banner = () => {
    return (
        <div className="it-services-banner">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <div className="main-banner-content">
                            <ReactWOW delay='.1s' animation='fadeInLeft'>
                                <h1>Grow your business with custom software</h1>
                            </ReactWOW>

                            <ReactWOW delay='.1s' animation='fadeInLeft'>
                                <p>Our goal at Deep Blue is to help our customers grow and join the digitalization revolution.</p>
                            </ReactWOW>

                            <ReactWOW delay='.1s' animation='fadeInRight'>
                                <div className="btn-box">
                                    <Link to="/contact" className="default-btn">
                                        <i className="flaticon-right"></i> 
                                        Get Started <span></span>
                                    </Link>
                                </div>
                            </ReactWOW>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                        <ReactWOW delay='.1s' animation='fadeInUp'>
                            <div className="main-banner-image">
                                <picture>
                                    <source type="image/webp" srcset={bannerImgW} alt="animation of two woman and two men doing digital work" />
                                    <source type="image/png" srcset={bannerImg} alt="animation of two woman and two men doing digital work" />
                                    <img src={bannerImg} alt="animation of two woman and two men doing digital work" />
                                </picture>
                                
                            </div>
                        </ReactWOW>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner