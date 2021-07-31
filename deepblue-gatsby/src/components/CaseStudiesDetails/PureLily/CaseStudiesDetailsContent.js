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
                                src='../../../assets/images/projects/projects-details1.jpg'
                                alt="digital work automation ilustration"
                                placeholder="tracedSVG"
                            />
                        </div>
                        <div className="case-studies-details-desc">
                            <span className="sub-title">Process Automation</span>
                            <h3>Custom software to automate the outreach process</h3>
                            <p>We started by automating the process that consumed the most time yet was the most repetitive,
                            in their case that was lead scraping from an online directory. This process used to consume 
                            between 6 and 12 person-hours per week, producing around 800 leads and was the outreach bottleneck.
                            We built a seleinium python scraper, which saved all the data on excel sheets and reduced the weekly
                            workload to 10 min.</p>
                            <p>Next, we automated a qualification system for the leads, which qualifies the leads their
                            desire to hire employees. It does this by crawling on their website looking for a career page and 
                            analyzing the vocabulary they are using, greading them on a scale from 0 to 6. This data was 
                            particularly useful for their sales team.</p>
                            <p>After we created data cleaner that would prepare the information from the leads to be 
                            intoduced into a word template and svg for sticker printing. This allows them to fill in templates
                            for direct mail and their stickers with information from an excel file.</p>
                            <div className="row align-items-center">
                                <div className="col-lg-6 col-md-6">
                                    <div className="image">
                                        <StaticImage
                                            src='../../../assets/images/logos/puremind-logo.png'
                                            alt="PureMind Digital logo"
                                            placeholder="tracedSVG"
                                        />
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
                            Instead, we integrated as a Python terminal application operated by a command-line interface (CLI). The project was named PureLily,
                            as it is an extension of her and allows her to eliminate repetitive tasks and speed up her workflow.</p>
                            <h3>Results</h3>
                            <p>PureLily, a command-line application that allows its users to extract leads from an online directory, qualify them based on there 
                            liklihood of hiring employees, clean up their information, and fill in the word templates all as part of one process. Originally this
                            process consumed around 10 to 20 hours of a person's work week in the organization, now it's one integrated automated process.
                            It's hard to estimate how much time the process consumes because it's done automatically and only requires 2 min of the operator to
                            set it up. Then it might take 30 min to do 600 leads but it does not require the operator's presence.</p>
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