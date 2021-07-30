import React from 'react'
import Layout from "../../components/App/Layout"
import Navbar from "../../components/App/Navbar"
import PageBanner from '../../components/Common/PageBanner'
import CaseStudiesDetailsContent from '../../components/CaseStudiesDetails/Serum/CaseStudiesDetailsContent.js'

const CaseDetails = () => {
    return (
        <Layout 
        title="Serum Case Study Details"
        description="The case study of the development of a mobile responsive 
        WordPress website build by Deep Blue for Serum a Stem Cell Clinic"
        >
            <Navbar />
            <PageBanner
                pageTitle="Case Studies Details" 
                homePageText="Home" 
                homePageUrl="/" 
                activePageText="Case Studies Details" 
            />
            <CaseStudiesDetailsContent />
        </Layout>
    );
}

export default CaseDetails