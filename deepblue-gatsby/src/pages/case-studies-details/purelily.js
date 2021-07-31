import React from 'react'
import Layout from "../../components/App/Layout"
import PageBanner from '../../components/Common/PageBanner'
import CaseStudiesDetailsContent from '../../components/CaseStudiesDetails/PureLily/CaseStudiesDetailsContent.js'

const CaseDetails = () => {
    return (
        <Layout 
        title="PureLily Case Study Details"
        description="The case study of PureLily, a command-line application build 
        with python to improve the efficiency of tasks such as web scraping, 
        templating and data processing."
        type="article"
        url="https://www.deep-blue.io/case-studies-details/purelily/"
        imageUrl="https://www.deep-blue.io/static/e812ad4799732a7cd02ccab9dacd785a/e64aa/puremind-logo.webp"
        >
            <PageBanner
                pageTitle="PureLily's Case Studies Details" 
                homePageText="Home" 
                homePageUrl="/" 
                activePageText="Case Studies Details" 
            />
            <CaseStudiesDetailsContent />
        </Layout>
    );
}

export default CaseDetails