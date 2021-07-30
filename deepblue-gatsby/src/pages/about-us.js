import React from 'react'
import Layout from "../components/App/Layout"
import Navbar from "../components/App/Navbar"
import PageBanner from '../components/Common/PageBanner'
import AboutUsContent from '../components/AboutUs/AboutUsContent'
import WhyChooseUs from '../components/AboutUs/WhyChooseUs'
 
const AboutUs = () => {
    return (
        <Layout 
        title="About Us"
        description="Deep Blue's goals and work process"
        >
            <Navbar />
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