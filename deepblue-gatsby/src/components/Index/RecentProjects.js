import React from 'react'
import {Link} from 'gatsby'
import starIcon from '../../assets/images/star-icon.png'
import starIconW from '../../assets/images/star-icon.webp'
import project1 from '../../assets/images/projects/dribblz-ss-training.png'
import project1W from '../../assets/images/projects/dribblz-ss-training.webp'
import project2 from '../../assets/images/projects/project8.jpg'
import project2W from '../../assets/images/projects/project8.webp'
import project3 from '../../assets/images/projects/serum-ss-lp.png'
import project3W from '../../assets/images/projects/serum-ss-lp.webp'

const RecentProjects = () => {
    return (
        <section className="projects-area bg-color pt-100 pb-70">
            <div className="container">
                <div className="section-title">
                    <span className="sub-title">
                        <picture>
                            <source type="image/webp" srcset={starIconW} alt="rotating animated colorful dots in star structure" />
                            <source type="image/png" srcset={starIcon} alt="rotating animated colorful dots in star structure" />
                            <img src={starIcon} alt="rotating animated colorful dots in star structure" /> 
                        </picture>
                    </span>
                    <h2>Check Some Of Our Recent Work</h2>
                    <p>We work to satify our clients need and follow there contraints.</p>
                </div>

                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="single-projects-box">
                            <div className="image">
                                <picture>
                                    <source type="image/webp" srcset={project1W} alt="screenshot of dribblz an educational video streaming membership web application about football / socer designed by Deep Blue" />
                                    <source type="image/png" srcset={project1} alt="screenshot of dribblz an educational video streaming membership web application about football / socer designed by Deep Blue" />
                                    <img src={project1} alt="screenshot of dribblz an educational video streaming membership web application about football / socer designed by Deep Blue" />
                                </picture>
                            
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
                                <picture>
                                    <source type="image/webp" srcset={project2W} alt="ilustration of digital process automation with three people working desk jpbs doing data input and scraping around a computer and a server" />
                                    <source type="image/jpg" srcset={project2} alt="ilustration of digital process automation with three people working desk jpbs doing data input and scraping around a computer and a server" />
                                    <img src={project2} alt="ilustration of digital process automation with three people working desk jpbs doing data input and scraping around a computer and a server" />
                                </picture>
                                

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
                                <picture>
                                    <source type="image/webp" srcset={project3W} alt="screenshot of responsive wordpress website for a stemcell clinic with attractive design" />
                                    <source type="image/png" srcset={project3} alt="screenshot of responsive wordpress website for a stemcell clinic with attractive design" />
                                    <img src={project3} alt="screenshot of responsive wordpress website for a stemcell clinic with attractive design" />
                                </picture>
                                

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
        </section>
    )
}

export default RecentProjects;