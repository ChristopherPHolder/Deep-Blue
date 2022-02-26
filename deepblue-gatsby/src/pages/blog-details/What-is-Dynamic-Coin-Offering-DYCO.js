import React from 'react';
import Layout from "../../components/App/Layout";
import PageBanner from '../../components/Common/PageBanner';
import BlogDetailsContent from '../../components/BlogContent/What-is-Dynamic-Coin-Offering-DYCO/BlogDetailsContent';

import metaImage from '../../assets/images/blog/token-converion-ilustration.jpeg';

const BlogDetails = () => {
    return (
        <Layout 
        title="What is a DYCO (Dynamic Coin Offering)?"
        description="A way to finance crypto projects which reduces the 
        risk of participants by granting refund with a deflationary supply"
        type="article" 
        url="https://www.deep-blue.io/blog-details/What-is-Dynamic-Coin-Offering-DYCO/" 
        imageUrl={metaImage}
        >
            <PageBanner
                pageTitle="What is a DYCO (Dynamic Coin Offering)?" 
                homePageText="Home" 
                homePageUrl="/" 
                activePageText="Blog Details" 
            /> 
            <BlogDetailsContent />
        </Layout>
    )
}

export default BlogDetails;