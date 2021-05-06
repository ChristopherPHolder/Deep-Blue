import React from 'react'
import CaseStudiesSidebar from './CaseStudiesSidebar'
import details1 from '../../../assets/images/projects/project3.png'
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
                            <span className="sub-title">Wordpress Site</span>
                            <h3>Wordpress website for a stem cells clinic</h3>
                            <p>Currently waiting for content from the owner to be able to continue development.</p>
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