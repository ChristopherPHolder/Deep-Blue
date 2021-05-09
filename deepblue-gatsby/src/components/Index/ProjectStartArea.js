import React from 'react'
import {Link} from 'gatsby'
import projectStart from '../../assets/images/project-start1.png'
import projectStartW from '../../assets/images/project-start1.webp'
import shape from '../../assets/images/shape/circle-shape1.png'
import shapeW from '../../assets/images/shape/circle-shape1.webp'

const ProjectStartArea = () => {
    return (
        <div className="project-start-area ptb-100">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <div className="project-start-image">
                            <picture>
                                <source type="image/webp" srcset={projectStartW} />
                                <source type="image/png" srcset={projectStart} />
                                <img src={projectStart} alt="four people planning to join the digital revolution" />
                            </picture>

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
                <picture>
                    <source type="image/webp" srcset={shapeW} alt="world like globe with high tech design" />
                    <source type="image/png" srcset={shape} alt="world like globe with high tech design" />
                    <img src={shape} alt="world like globe with high tech design" />
                </picture>
            </div>
        </div>
    )
}

export default ProjectStartArea;