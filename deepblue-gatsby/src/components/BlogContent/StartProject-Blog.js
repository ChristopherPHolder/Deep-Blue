import React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

const StartProject = ({title, description}) => {
    return (
        <div className="project-start-area bg-color ptb-100">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <div className="project-start-image">
                            <StaticImage
                                src='../../assets/images/project-start1.png'
                                alt="people working on there computers"
                                placeholder="tracedSVG"
                            />
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                        <div className="project-start-content">
                            <h2>{title}</h2>
                            <p>{description}</p>

                            <Link to="/contact" className="default-btn">
                                <i className="flaticon-web"></i> 
                                Free Consultation
                                <span></span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="vector-shape9">
                <StaticImage
                    src='../../assets/images/shape/vector-shape10.png'
                    alt=""
                    placeholder="tracedSVG"
                />
            </div>
            <div className="vector-shape10">
                <StaticImage
                    src='../../assets/images/shape/vector-shape9.png'
                    alt=""
                    placeholder="tracedSVG"
                />
            </div>
        </div>
    )
}

export default StartProject