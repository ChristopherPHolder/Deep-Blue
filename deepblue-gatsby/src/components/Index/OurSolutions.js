import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import ServicesOne from '../Services/ServicesOne';

const OurSolutions = () => {
    return (
        <section className="solutions-area pb-70">
            <div className="container">
                <div className="section-title">
                    <span className="sub-title">
                        <StaticImage
                            src="../../assets/images/star-icon.png"
                            alt="rotating animated colorful dots in star structure"
                            objectFit="scale-down"
                            objectPosition="50% 50%"
                            loading="lazy"
                            placeholder="tracedSVG"
                        />
                        <span className="sub-title-text">
                            Our Solutions
                        </span>
                    </span>
                    <h2>We are dedicated to seeing you succeed</h2>
                    <p>Our main goal is to help you succeed, our team of specialists will be there when you need us, able to expand and contract for your needs.</p>
                </div>

                <div className="row">
                    <ServicesOne />
                </div>
            </div>
        </section>
    )
}

export default OurSolutions;