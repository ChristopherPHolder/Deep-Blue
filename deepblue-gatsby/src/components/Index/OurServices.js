import React from 'react'
import service1 from '../../assets/images/services/service1.png'
import service2 from '../../assets/images/services/service2.png'
import starIcon from '../../assets/images/star-icon.png'

const OurServices = () => {
    return (
        <React.Fragment>
            {/* Service Left Image Style */}
            <div className="about-area pb-100">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="about-img">
                                <img src={service1} alt="service" />
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="about-content">
                                <div className="content">
                                    <span className="sub-title">
                                        <img src={starIcon} alt="icon" /> Services
                                    </span>
                                    
                                    <h2>Process Automation</h2>
                                    <p>If you are doing anything repetitive on a computer, it can probably be automated giving you more time to do what makes your business great.</p>
                                    <ul className="about-list mb-0">
                                        <li>
                                            <i className="flaticon-tick"></i>
                                            Lead Generations Automation
                                        </li>
                                        <li>
                                            <i className="flaticon-tick"></i>
                                            Templating Automation
                                        </li>
                                        <li>
                                            <i className="flaticon-tick"></i>
                                            Social Post Automation
                                        </li>
                                        <li>
                                            <i className="flaticon-tick"></i>
                                            Data Input Automation
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Service Left Image Style */}

            {/* Service Right Image Style */}
            <div className="our-mission-area pb-100">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="our-mission-content">
                                <div className="content">
                                    <span className="sub-title">
                                        <img src={starIcon} alt="icon" /> Services
                                    </span>
                                    
                                    <h2>Design & Development</h2>
                                    <p>Web and mobil applications can be a great way to bring value to your customers or digitalize internal processes.</p>

                                    <ul className="our-mission-list mb-0">
                                        <li>
                                            <i className="flaticon-tick"></i>
                                            UX/UI Design
                                        </li>
                                        <li>
                                            <i className="flaticon-tick"></i>
                                            Responsive Design
                                        </li>
                                        <li>
                                            <i className="flaticon-tick"></i>
                                            Django Development
                                        </li>
                                        <li>
                                            <i className="flaticon-tick"></i>
                                            React Development
                                        </li>
                                        <li>
                                            <i className="flaticon-tick"></i>
                                            API Development
                                        </li>
                                        <li>
                                            <i className="flaticon-tick"></i>
                                            Cloud & DevOps
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="our-mission-image">
                                <img src={service2} alt="service" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Service Right Image Style */}
        </React.Fragment>
    )
}

export default OurServices;