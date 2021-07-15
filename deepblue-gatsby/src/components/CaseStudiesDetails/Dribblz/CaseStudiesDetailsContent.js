import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import CaseStudiesSidebar from './CaseStudiesSidebar'

const CaseStudiesDetailsContent = () => {
    return (
        <section className="case-studies-details-area ptb-100">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-12">
                        <div className="case-studies-details-image">
                            <StaticImage
                                src='../../../assets/images/projects/dribblz-ss-training.png'
                                alt="picture of the training section of the dribblz web-app"
                                placeholder="tracedSVG"
                            />
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
                            <p>After talking with many software development companies they decided to hire us, because we 
                            didn't just try to sell them software like the other companies did. We believed in their idea and wanted
                            to see it succed. So we helped them refine there wireframe and we got to work building a mobil friendly UI/UX design.</p>
                            <div className="row align-items-center">
                                <div className="col-lg-6 col-md-6">
                                    <div className="image">
                                        <StaticImage
                                            src='../../../assets/images/projects/dribblz-logo-round.png'
                                            alt="Dribblz logo"
                                            width={200}
                                            height={200}
                                            placeholder="tracedSVG"
                                        />
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="content">
                                        <h3>Important Caracteristics</h3>
                                        <ul>
                                            <li>MVP</li>
                                            <li>Video Streaming</li>
                                            <li>Gamification</li>
                                            <li>Social Media</li>
                                            <li>Subcription</li>
                                            <li>Progress Tracking</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <p>We decided on building a web application instead of a mobil applaication because they did not require any
                            mobil native features. Moreover, after talking with potencial user they decided they decided it would be easer to
                            get users to try it if they did not have to download the app. Additionally, speed and cost of development played a part in the decition.
                            However, it was also decided that once we had aquired enough users we would build and integrate a cross platform mobil application.</p>
                            <p>We dicided on build the backend using Python's Django Framework and simple HTML, CSS and JS for the frontend
                            to speed up development and keep cost low but intended to move to ReactJS in the future. For video hosting we chose Vimeo as it would be
                            easy to integrate while containing a full set of features to track user acctions and reduce the cost of hosting. For managing the subcription
                            payments we chose because of there numerous developer features which allow us to create a checkout designed by us as well as 
                            great userinterface for the owners to manage there subcriptions.</p>
                            <h3>Results</h3>
                            <p>The web application was completed successfully, however, unfortunarly the owners were not able to fill the content they wanted to due covid
                            and decided to wait until after the pandemic was over to launch.</p>
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