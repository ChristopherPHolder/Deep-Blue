import React from 'react'
import CaseStudiesSidebar from './../CaseStudiesSidebar'
import details1 from '../../../assets/images/projects/projects-details1.jpg'
import project2 from '../../../assets/images/projects/project2.jpg'

const CaseStudiesDetailsContent = () => {
    return (
        <section className="case-studies-details-area ptb-100">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-12">
                        <div className="case-studies-details-image">
                            <img src={details1} alt="about" />
                        </div>
                        <div className="case-studies-details-desc">
                            <span className="sub-title">Web Application</span>
                            <h3>An educational subcription video streaming web application for aspiring football stars</h3>
                            <p>The idea came about when two first division football players realized how lucky they were to have 
                            made it so far and decided they needed to help the next generation of football profecionals pursue their dreams.
                            They remenbered how little guidence they got on there journey, how hard they had to work along the way to success
                            how many of there friends with the same talent didn't make it but most of all how much luck played a part in there success.
                            So they decided to build something for there younger selves, something that would have made there journey easer,
                            and would have helped more of there friends succed in becoming profecional football stars.</p>
                            <div className="row align-items-center">
                                <div className="col-lg-6 col-md-6">
                                    <div className="image">
                                        <img src={project2} alt="about" />
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="content">
                                        <h3>Important Caracteristics</h3>
                                        <ul>
                                            <li>The Field of Data Science</li>
                                            <li>The Problem</li>
                                            <li>The Solution</li>
                                            <li>The Skills</li>
                                            <li>Statistics</li>
                                            <li>Mathematics</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ‘Content here, content here’, making it look like readable English. Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.</p>
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn’t anything embarrassing hidden in the middle of text.</p>
                            <h3>Results</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna ad aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco labori.</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-12">
                        <CaseStudiesSidebar />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CaseStudiesDetailsContent