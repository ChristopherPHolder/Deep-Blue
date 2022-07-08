import React from 'react'
import {Link} from 'gatsby'

import { getImage, StaticImage } from 'gatsby-plugin-image'

import { graphql, useStaticQuery } from 'gatsby'
import { BgImage } from 'gbimage-bridge'

const PageBanner = ({pageTitle, homePageUrl, homePageText, activePageText}) => {

    const { backgroundImage123 } = useStaticQuery(
        graphql`
            query {
                backgroundImage123: file(relativePath: {eq: "page-title-bg.jpg"}) {
                    id
                    childImageSharp {
                        gatsbyImageData(
                            quality: 50, 
                            webpOptions: {quality: 80}
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
            className="page-title-area"
        >
            <div className="container">
                <div className="page-title-content">
                    <h1>{pageTitle}</h1>
                    <ul>
                        <li>
                            <Link to={homePageUrl}>
                                {homePageText}
                            </Link>
                        </li>
                        <li>{activePageText}</li>
                    </ul>
                </div>
            </div>

            <div className="shape-img1">
                <StaticImage
                    src='../../assets/images/shape/shape1.svg'
                    alt=''
                    placeholder="tracedSVG"
                />
            </div>
            <div className="shape-img2">
                <StaticImage
                    src='../../assets/images/shape/shape2.png'
                    alt=''
                    placeholder='tracedSVG'
                />
            </div>
            <div className="shape-img3">
                <StaticImage
                    src='../../assets/images/shape/shape3.png'
                    alt=''
                    placeholder='tracedSVG'
                />
            </div>
        </BgImage>
    )
}

export default PageBanner;