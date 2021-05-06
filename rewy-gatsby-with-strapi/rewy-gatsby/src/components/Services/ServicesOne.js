import React from 'react'
import {Link} from 'gatsby'

const ServicesOne = () => {
    return (
        <section className="solutions-area pt-100 pb-70">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-solutions-box">
                            <div className="icon">
                                <i className="flaticon-rocket"></i>
                            </div>
                            <h3>
                                {/*<Link to="/service-details">*/}
                                Web Applications
                                {/*</Link>*/}
                            </h3>
                            <p>Web application and development support. We can build it with you from start to finish or come support you when you need the help. </p>

                            {/*<Link className="view-details-btn" to="/service-details">
                                View Details
                            </Link>*/}
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-solutions-box">
                            <div className="icon">
                                <i className="flaticon-laptop"></i>
                            </div>
   
                            <h3>
                                {/*<Link to="/service-details">*/}
                                Digital Automation
                                {/*</Link>*/}
                            </h3>

                            <p>We don't like soul breaking repetitive work, but our software really does. It needs no no breaks, doesn't make mistakes and best needs no salary.</p>
                            
                            {/*<Link className="view-details-btn" to="/service-details">
                                View Details
                            </Link>*/}
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-solutions-box">
                            <div className="icon">
                                <i className="flaticon-money"></i>
                            </div>

                            <h3>
                                {/*<Link to="/service-details">*/}
                                Digitalization Consulting
                                {/*</Link>*/}
                            </h3>

                            <p>Inefficiencies waste time and hurt moral, and more often then not you don't need more people, you need better process and better software.</p>
                            
                            {/*<Link className="view-details-btn" to="/service-details">
                                View Details
                            </Link>*/}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ServicesOne