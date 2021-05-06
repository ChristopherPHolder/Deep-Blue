import React from 'react'
import {Link} from 'gatsby'
import starIcon from '../../assets/images/star-icon.png'
import project1 from '../../assets/images/projects/project1.png'
import project2 from '../../assets/images/projects/project2.jpg'
import project3 from '../../assets/images/projects/project3.png'

const RecentProjects = () => {
    return (
        <section className="projects-area bg-color pt-100 pb-70">
            <div className="container">
                <div className="section-title">
                    <span className="sub-title">
                        <img src={starIcon} alt="project" /> Recent Projects
                    </span>
                    <h2>Check Some Of Our Recent Work</h2>
                    <p>We work to satify our clients need and follow there contraints.</p>
                </div>

                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="single-projects-box">
                            <div className="image">
                                <img src={project1} alt="project" />

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
                                <img src={project2} alt="project" />

                                <Link className="link-btn" to="/case-studies-details/purelily">
                                    <i className='bx bx-plus'></i>
                                </Link>
                            </div>

                            <div className="content">
                                <h3>
                                    <Link to="/case-studies-details/purelily">
                                        PureMind Automation
                                    </Link>
                                </h3>
                                <span>Internal Process Automation</span>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="single-projects-box">
                            <div className="image">
                                <img src={project3} alt="project" />

                                <Link className="link-btn" to="/case-studies-details/serum">
                                    <i className='bx bx-plus'></i>
                                </Link>
                            </div>

                            <div className="content">
                                <h3>
                                    <Link to="/case-studies-details/serum">
                                        Clinc Serum
                                    </Link>
                                </h3>
                                <span>Wordpress Website</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default RecentProjects;