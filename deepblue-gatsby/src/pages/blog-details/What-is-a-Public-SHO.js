import React from 'react';
import Layout from "../../components/App/Layout";
import PageBanner from '../../components/Common/PageBanner';

import BlogDetailsContent from '../../components/BlogContent/What-is-a-Public-SHO/BlogDetailsContent';
import metaImage from '../../assets/images/blog/public-sho-ilustration.jpeg';

const BlogDetails = () => {
    return (
        <Layout 
        title="What is a Public SHO? (Public Strong Holder Offering)"
        description="A funding mechanism for crypto projects which helps startups build custom 
        communities based on desired characteristics by analyzing the on-chain activities."
        type="article" 
        url="https://www.deep-blue.io/blog-details/What-is-a-Public-SHO/" 
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