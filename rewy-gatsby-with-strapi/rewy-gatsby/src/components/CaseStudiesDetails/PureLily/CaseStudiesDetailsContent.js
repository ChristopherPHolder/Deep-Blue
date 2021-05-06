import React from 'react'
import CaseStudiesSidebar from './CaseStudiesSidebar'
import project2 from '../../../assets/images/partner/partner1.png'
import details1 from '../../../assets/images/projects/projects-details1.jpg'

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
                            <span className="sub-title">Process Automation</span>
                            <h3>Custom software to automate outreach process</h3>
                            <p>We started by automating the process that consumed the most time yet was the most repetetive,
                            in there case that was lead scraping from an online directory. This process use to consume 
                            between 6 and 12 person hours per week, producing around 800 leads and was the outreach bottle neck.
                            We built a selinium python scraper, which saved all the data on excel sheets and reduced the weekly
                            workload to 10 min.</p>
                            <p>Next we automated a qualification system for the leads, which qualifies the leads there 
                            desire to hire employes. It does this by crawling on there website looking for a carrer page and 
                            analyzing the vocabulary they are using, greading them on a scale from 0 to 6. This data was 
                            particularly useful for there sales team.</p>
                            <p>After we created data cleaner that would prepare the information from the leads to be 
                            intoduced into a word template and svg for sticker printing. This allows them to fill in templates
                            for direct mail and there stickers with information from an excel file.</p>
                            <div className="row align-items-center">
                                <div className="col-lg-6 col-md-6">
                                    <div className="image">
                                        <img src={project2} alt="about" />
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="content">
                                        <h3>PureLily</h3>
                                        <ul>
                                            <li>Terminal application</li>
                                            <li>Lead scraper</li>
                                            <li>Lead Qualifier</li>
                                            <li>Information cleaning</li>
                                            <li>Template Filler</li>
                                            <li>Progress Integration</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <p>Since it is only used by a couple of members of the organization, we did not build a graphic user interface (GUI).
                            Instead we integrated as a Python terminal application operated by a command line interface (CLI). The project was named PureLily,
                            as it is an extention of her, and allows her to eliminate repetitive tasks and speed up her workflow.</p>
                            <h3>Results</h3>
                            <p>PureLily, a command line application which allows its user extract leads from an online directory, qualify them based on there 
                            liklyhood of hiring employes, clean up there information and fill in the word templates all as part of one process. Originally this
                            process consumed around 10 to 20 hours of a person work week in the organization, now its one integrated automated process.
                            Its hard to estimate how much time the process consumes because it's done automatically and only requires 2 min of the operator to
                            set it up. Then it might take 30 min to do 600 leads but it does not require the operators presence.</p>
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