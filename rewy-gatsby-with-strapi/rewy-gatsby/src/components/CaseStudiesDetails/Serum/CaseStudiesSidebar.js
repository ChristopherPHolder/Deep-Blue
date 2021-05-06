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
                        <a href="" target="_blank" rel="noreferrer">Serum</a>
                        <a href="" target="_blank" rel="noreferrer">Tatiana Holder</a>
                    </li>
                    <li>
                        <div className="icon">
                            <i className='bx bx-map'></i>
                        </div>
                        <span>Location:</span>
                        Merida, Yucatan, Mexico
                    </li>
                    <li>
                        <div className="icon">
                            <i className='bx bx-purchase-tag'></i>
                        </div>
                        <span>Technologies:</span>
                        Wordpress

                    </li>
                    <li>
                        <div className="icon">
                            <i className='bx bx-check'></i>
                        </div>
                        <span>Completed:</span>
                        In development
                    </li>
                    <li>
                        <div className="icon">
                            <i className='bx bx-globe'></i>
                        </div>
                        <span>Website:</span>
                        <a href="stemcellmerida.com" target="_blank" rel="noreferrer">stemcellmerida.com</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default CaseStudiesSidebar