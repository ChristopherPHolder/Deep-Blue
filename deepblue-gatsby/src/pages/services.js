import React from 'react'
import Layout from "../components/App/Layout"
import PageBanner from '../components/Common/PageBanner'
import ServicesOne from '../components/Services/ServicesOne'
import StartProject from '../components/Common/StartProject'

const Services = () => {
    return (
        <Layout 
        title="Services"
        description="Deep Blue offers a variety of software development 
        services including, Web Application Development & Optimization, 
        Digital Automation, and Digital Consultation."
        >
            <PageBanner
                pageTitle="Services" 
                homePageText="Home" 
                homePageUrl="/" 
                activePageText="Services" 
            />
            <ServicesOne />
            <StartProject />
        </Layout>
    );
}

export default Services