import React from 'react';
import Layout from "../../components/App/Layout";
import PageBanner from '../../components/Common/PageBanner';
import BlogDetailsContent from '../../components/BlogContent/Web-Performance-your-Asset-or-Liability/BlogDetailsContent';

import metaImage from '../../assets/images/blog/Web-Optimization-Ilustration.jpeg';

const BlogDetails = () => {
    return (
        <Layout 
        title="Web Performance your Asset or Liability?"
        description="Web performance is the objective measurement and perceived user experience of a website or application. "
        type="article" 
        url="https://www.deep-blue.io/blog-details/Is-your-Web-Performance-an-Asset-or-Liability/" 
        imageUrl={metaImage}
        >
            <PageBanner
                pageTitle="Is your Web Performance an Asset or Liability?" 
                homePageText="Home" 
                homePageUrl="/" 
                activePageText="Blog Details" 
            /> 
            <BlogDetailsContent />
        </Layout>
    )
}

export default BlogDetails;