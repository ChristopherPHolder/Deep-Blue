import React from 'react';

const services = [
    {
        serviceName: 'Web Applications',
        serviceDescription: 'Web application and development support. We can build it with you from start to finish or come support you when you need help.',
        serviceFavicon: 'flaticon-rocket'
    },
    {
        serviceName: 'Digital Automation',
        serviceDescription: 'We do not like soul-breaking repetitive work, but our software really does. It needs no breaks, does not make mistakes, and takes no salary.',
        serviceFavicon: 'flaticon-laptop'
    },
    {
        serviceName: 'Digitalization Consulting',
        serviceDescription: 'Inefficiencies waste time and hurt morale, and more often than not you do not need more people, you need better processes and better software.',
        serviceFavicon: 'flaticon-money'
    }
]


const ServicesOne = () => {
    return (
        <section className="solutions-area pt-100 pb-70">
            <div className="container">
                <div className="row">
                    {services.map((service) =>(
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-solutions-box">
                                <div className="icon"><i className={service.serviceFavicon}></i></div>
                                <h3>{service.serviceName}</h3>
                                <p>{service.serviceDescription}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ServicesOne;