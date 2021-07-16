import React from 'react'

import { Link } from 'gatsby'
import { getImage, StaticImage } from 'gatsby-plugin-image'

import { graphql, useStaticQuery } from 'gatsby'
import { BgImage } from 'gbimage-bridge'

const Banner = () => {

    const { backgroundImage123 } = useStaticQuery(
        graphql`
            query {
                backgroundImage123: file(relativePath: {eq: "banner-bg.png"}) {
                    id
                    childImageSharp {
                        gatsbyImageData(
                            quality: 50, 
                            webpOptions: {quality: 70}
                        )
                    }
                }
            }
        `    
    )

    const pluginImage = getImage(backgroundImage123)

    return (
        <BgImage
            Tag='div'
            image={pluginImage}
            className='it-services-banner'
        >
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
                                placeholder="tracedSVG"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </BgImage>
    )
}

export default Banner