import React from 'react'
import Layout from "../components/App/Layout"
import PageBanner from '../components/Common/PageBanner'
import AboutUsContent from '../components/AboutUs/AboutUsContent'
import WhyChooseUs from '../components/AboutUs/WhyChooseUs'
 
const AboutUs = () => {
    return (
        <Layout 
        title="About Us"
        description="The best way to get to know us if talking to us, but in the meantime here is some information about how we work."
        type="website"
        url="https://www.deep-blue.io/about-us/"
        imageUrl="https://www.deep-blue.io/static/dc650cff7cf5f94403cae44ca5bbd068/078c3/deepblue-logo-name-right.webp"
        >
            <PageBanner
                pageTitle="About Us" 
                homePageText="Home" 
                homePageUrl="/" 
                activePageText="About Us" 
            />
            <AboutUsContent />
            <WhyChooseUs />
        </Layout>
    );
}

export default AboutUs;