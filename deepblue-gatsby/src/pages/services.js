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
        type="website"
        url="https://www.deep-blue.io/services"
        imageUrl="https://www.deep-blue.io/static/dc650cff7cf5f94403cae44ca5bbd068/078c3/deepblue-logo-name-right.webp"
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