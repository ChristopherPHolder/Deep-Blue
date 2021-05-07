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
                        <a href="" target="_blank" rel="noreferrer">Dribblz</a>
                        <a href="" target="_blank" rel="noreferrer">Jan Gassmann</a>
                        <a href="" target="_blank" rel="noreferrer">David Cancola</a>
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
                        Python, Django, Vimeo, Stripe

                    </li>
                    <li>
                        <div className="icon">
                            <i className='bx bx-check'></i>
                        </div>
                        <span>Completed:</span>
                        18 February 2021
                    </li>
                    <li>
                        <div className="icon">
                            <i className='bx bx-globe'></i>
                        </div>
                        <span>Website:</span>
                        <a href="" target="_blank" rel="noreferrer">Currently offline</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default CaseStudiesSidebar