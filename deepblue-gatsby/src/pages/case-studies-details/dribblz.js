import React from 'react'
import Layout from "../../components/App/Layout"
import PageBanner from '../../components/Common/PageBanner'
import CaseStudiesDetailsContent from '../../components/CaseStudiesDetails/Dribblz/CaseStudiesDetailsContent.js'

const CaseDetails = () => {
    return (
        <Layout 
        title="Dribblz Case Study Details"
        description="The case study of Dribblz, a subscription-based web application for web 
        streaming education content and tracking improvements with a social component."
        type="article"
        url="https://www.deep-blue.io/case-studies-details/dribblz"
        imageUrl="https://www.deep-blue.io/static/d1c0a1864cba4509a02e8a4f20817229/063cc/dribblz-ss-training.webp"
        >
            <PageBanner
                pageTitle="Dribblz Case Studies Details" 
                homePageText="Home" 
                homePageUrl="/" 
                activePageText="Case Studies Details -Dribblz" 
            />
            <CaseStudiesDetailsContent />
        </Layout>
    );
}

export default CaseDetails