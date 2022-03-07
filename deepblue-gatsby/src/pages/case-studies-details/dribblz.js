import React from 'react';
import Layout from "../../components/App/Layout";
import PageBanner from '../../components/Common/PageBanner';
import CaseStudiesDetailsContent from '../../components/CaseStudiesDetails/Dribblz/CaseStudiesDetailsContent.js';

import dribblzImageUrl from '../../assets/images/projects/dribblz-ss-training.png';

const CaseDetails = () => {
    return (
        <Layout 
        title="Dribblz Case Study Details"
        description="The case study of Dribblz, a subscription-based web application for web 
        streaming education content and tracking improvements with a social component."
        type="article"
        url="https://www.deep-blue.io/case-studies-details/dribblz/"
        imageUrl={dribblzImageUrl}
        >
            <PageBanner
                pageTitle="Dribblz Case Studies Details" 
                homePageText="Home" 
                homePageUrl="/" 
                activePageText="Case Studies Details - Dribblz" 
            />
            <CaseStudiesDetailsContent />
        </Layout>
    );
}

export default CaseDetails