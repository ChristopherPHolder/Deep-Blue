import React from 'react'
import { Link } from 'gatsby'
import start1 from '../../assets/images/project-start1.png'
import start1W from '../../assets/images/project-start1.webp'
import shape9 from '../../assets/images/shape/vector-shape9.png'
import shape9W from '../../assets/images/shape/vector-shape9.webp'
import shape10 from '../../assets/images/shape/vector-shape10.png'
import shape10W from '../../assets/images/shape/vector-shape10.webp'

const StartProject = () => {
    return (
        <div className="project-start-area bg-color ptb-100">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <div className="project-start-image">
                            <picture>
                                <source type="image/webp" srcset={start1W} alt="people working on there computers" />
                                <source type="image/png" srcset={start1} alt="people working on there computers" />
                                <img src={start1} alt="people working on there computers" />
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

            <div className="vector-shape9">
                    <picture>
                        <source type="image/webp" srcset={shape9W} alt="background" />
                        <source type="image/png" srcset={shape9} alt="background" />
                        <img src={shape9} alt="background" />
                    </picture>
            </div>
            <div className="vector-shape10">
                <picture>
                    <source type="image/webp" srcset={shape10W} alt="background" />
                    <source type="image/png" srcset={shape10} alt="background" />
                    <img src={shape10} alt="background" />
                </picture>
            </div>
        </div>
    )
}

export default StartProject