import React from 'react';
import Layout from "../../components/App/Layout";
import PageBanner from '../../components/Common/PageBanner';
import CaseStudiesDetailsContent from '../../components/CaseStudiesDetails/Serum/CaseStudiesDetailsContent.js';

import serumSsLp from '../../assets/images/projects/serum-ss-lp.png';

const CaseDetails = () => {
    return (
        <Layout 
            title="Serum Case Study Details"
            description="The case study of the development of a mobile responsive 
            WordPress website build by Deep Blue for Serum a Stem Cell Clinic"
            type="article"
            url="https://www.deep-blue.io/case-studies-details/serum/"
            imageUrl={serumSsLp}
        >
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