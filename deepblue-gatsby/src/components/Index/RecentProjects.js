import React from 'react'
import { Link } from 'gatsby'
import { getImage, StaticImage } from 'gatsby-plugin-image'

import { graphql, useStaticQuery } from 'gatsby'
import { BgImage } from 'gbimage-bridge'


const RecentProjects = () => {

    const { backgroundImage123 } = useStaticQuery(
        graphql`
            query {
                backgroundImage123: file(relativePath: {eq: "black-bg.jpg"}) {
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
            Tag='section'
            image={pluginImage}
            className='projects-area bg-color pt-100 pb-70'
        >

                <div className="container">
                    <div className="section-title">

                        <h2>Check Some Of Our Recent Work</h2>
                        <p>We work to satify our clients need and follow there contraints.</p>
                    </div>

                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="single-projects-box">
                                <div className="image">
                                    <StaticImage
                                        src='../../assets/images/projects/dribblz-ss-training.png'
                                        alt="screenshot of dribblz an educational video streaming membership web application about football / socer designed by Deep Blue"
                                        loading="lazy"
                                        width={400}
                                        height={320}
                                        placeholder="tracedSVG"
                                    />
                                    <Link className="link-btn" to="/case-studies-details/dribblz">
                                        <i className='bx bx-plus'></i>
                                    </Link>
                                </div>

                                <div className="content">
                                    <h3>
                                        <Link to="/case-studies-details/dribblz">
                                            Dribblz
                                        </Link>
                                    </h3>
                                    <span>Video Stream Membership Web-App</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-projects-box">
                                <div className="image">
                                    <StaticImage
                                        src='../../assets/images/projects/project8.jpg'
                                        alt="ilustration of digital process automation with three people working desk jpbs doing data input and scraping around a computer and a server"
                                        loading="lazy"
                                        width={400}
                                        height={320}
                                        placeholder="tracedSVG"
                                    />
                                
                                    <Link className="link-btn" to="/case-studies-details/purelily">
                                        <i className='bx bx-plus'></i>
                                    </Link>
                                </div>

                                <div className="content">
                                    <h3>
                                        <Link to="/case-studies-details/purelily">
                                            PureLily Automation
                                        </Link>
                                    </h3>
                                    <span>Internal Process Automation</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-projects-box">
                                <div className="image">
                                    <StaticImage
                                        src='../../assets/images/projects/serum-ss-lp.png'
                                        alt="screenshot of responsive wordpress website for a stemcell clinic with attractive design"
                                        loaded="lazy"
                                        width={400}
                                        height={320}
                                        placeholder="tracedSVG"
                                    />
                                    <Link className="link-btn" to="/case-studies-details/serum">
                                        <i className='bx bx-plus'></i>
                                    </Link>
                                </div>

                                <div className="content">
                                    <h3>
                                        <Link to="/case-studies-details/serum">
                                            Clinic Serum
                                        </Link>
                                    </h3>
                                    <span>Responsive Website</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </BgImage>
    )
}

export default RecentProjects;