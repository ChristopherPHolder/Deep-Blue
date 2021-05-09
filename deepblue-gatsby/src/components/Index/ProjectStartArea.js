import React from 'react'
import {Link} from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

const ProjectStartArea = () => {
    return (
        <div className="project-start-area ptb-100">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <div className="project-start-image">
                            <StaticImage
                                src='../../assets/images/project-start1.png'
                                alt="four people planning to join the digital revolution"
                                placeholder="tracedSVG"
                            />
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                        <div className="project-start-content">
                            <h2>Join The Digital Revolition</h2>
                            <p>Get a free consultation and learn more about how to take advantage of the digital revolution.</p>

                            <Link to="/contact" className="default-btn">
                                <i className="flaticon-web"></i> 
                                Free Consultation
                                <span></span>
                            </Link>
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
        </div>
    )
}

export default ProjectStartArea;