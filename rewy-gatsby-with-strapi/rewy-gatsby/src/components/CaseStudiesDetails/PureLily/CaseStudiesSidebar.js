import React from 'react'

const CaseStudiesSidebar = () => {
    return (
        <div className="case-studies-sidebar-sticky">
            <div className="case-studies-details-info">
                <ul>
                    <li>
                        <div className="icon">
                            <i className='bx bx-user-pin'></i>
                        </div>
                        <span>Client:</span>
                        <a href="" target="_blank" rel="noreferrer">PureMind Digital</a>
                        <a href="" target="_blank" rel="noreferrer">Angelo Bradvica</a>
                    </li>
                    <li>
                        <div className="icon">
                            <i className='bx bx-map'></i>
                        </div>
                        <span>Location:</span>
                        Vienna, Austria
                    </li>
                    <li>
                        <div className="icon">
                            <i className='bx bx-purchase-tag'></i>
                        </div>
                        <span>Technologies:</span>
                        Python, Selenium, Pandas

                    </li>
                    <li>
                        <div className="icon">
                            <i className='bx bx-check'></i>
                        </div>
                        <span>Completed:</span>
                        Continuos Integration
                    </li>
                    <li>
                        <div className="icon">
                            <i className='bx bx-globe'></i>
                        </div>
                        <span>Website:</span>
                        <a href="puremind-digital.com" target="_blank" rel="noreferrer">puremind-digital.com</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default CaseStudiesSidebar