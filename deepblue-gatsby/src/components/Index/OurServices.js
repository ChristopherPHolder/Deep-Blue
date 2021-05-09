import React from 'react'
import service1 from '../../assets/images/services/service1.png'
import service1W from '../../assets/images/services/service1.webp'
import service2 from '../../assets/images/services/service2.png'
import service2W from '../../assets/images/services/service2.webp'
import starIcon from '../../assets/images/star-icon.png'
import starIconW from '../../assets/images/star-icon.webp'

const OurServices = () => {
    return (
        <React.Fragment>
            {/* Service Left Image Style */}
            <div className="about-area pb-100">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="about-img">
                                <picture>
                                    <source type="image/webp" src={service1W} alt="animation of three people working a digital jobs, two computers, one smart tablet, one cloud with a server icon representing cloud computing" />
                                    <source type="image/png" src={service1} alt="animation of three people working a digital jobs, two computers, one smart tablet, one cloud with a server icon representing cloud computing"  />
                                    <img src={service1} alt="animation of three people working a digital jobs, two computers, one smart tablet, one cloud with a server icon representing cloud computing" />
                                </picture>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="about-content">
                                <div className="content">
                                    <span className="sub-title">
                                        <picture>
                                            <source type="image/webp" src={starIconW} alt="rotating animated colorful dots in star structure" />
                                            <source type="image/png" src={starIcon} alt="rotating animated colorful dots in star structure" />
                                            <img src={starIcon} alt="rotating animated colorful dots in star structure" />
                                        </picture>
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
                                        <picture>
                                            <source type="image/webp" src={starIconW} alt="rotating animated colorful dots in star structure" />
                                            <source type="image/png" src={starIcon} alt="rotating animated colorful dots in star structure" />
                                            <img src={starIcon} alt="rotating animated colorful dots in star structure" />
                                        </picture>
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
                                <picture>
                                    <source type="image/webp" src={service2W} alt="five people working a digital job, a woman typing input in a computer while talking to a man under a light bulb symbolizing innovation, man holding a gear for system and through other people a woman and a man debating in front of a digital gear" />
                                    <source type="image/png" src={service2} alt="five people working a digital job, a woman typing input in a computer while talking to a man under a light bulb symbolizing innovation, man holding a gear for system and through other people a woman and a man debating in front of a digital gear" />
                                    <img src={service2} alt="five people working a digital job, a woman typing input in a computer while talking to a man under a light bulb symbolizing innovation, man holding a gear for system and through other people a woman and a man debating in front of a digital gear" />
                                </picture>

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