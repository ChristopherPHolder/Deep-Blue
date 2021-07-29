import React from 'react'
import Layout from "../../components/App/Layout"
import Navbar from "../../components/App/Navbar"
import PageBanner from '../../components/Common/PageBanner'
import CaseStudiesDetailsContent from '../../components/CaseStudiesDetails/Dribblz/CaseStudiesDetailsContent.js'

const CaseDetails = () => {
    return (
        <Layout>
            <Navbar />
            <PageBanner
                pageTitle="Case Studies Details - Dribblz" 
                homePageText="Home" 
                homePageUrl="/" 
                activePageText="Case Studies Details -Dribblz" 
            />
            <CaseStudiesDetailsContent />
        </Layout>
    );
}

export default CaseDetails