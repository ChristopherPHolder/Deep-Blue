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