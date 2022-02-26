import React from 'react';
import Layout from "../../components/App/Layout";
import PageBanner from '../../components/Common/PageBanner';
import BlogDetailsContent from '../../components/BlogContent/Does-a-faster-website-bring-more-conversions/BlogDetailsContent';
import StartProjectBlog from '../../components/BlogContent/StartProject-Blog';

import metaImage from '../../assets/images/blog/blog-img12.jpg';

const BlogDetails = () => {
    return (
        <Layout 
        title="Does a faster website bring more conversions?"
        description="Facts about the impact of a website speed on conversions and bounce rate, 
        especially for e-commerce stores. Along with some tips on how to improve web speed."
        type="article" 
        url="https://www.deep-blue.io/blog-details/Does-a-faster-website-bring-more-conversions/" 
        imageUrl={metaImage}
        >
            <PageBanner
                pageTitle="Does a faster website bring more conversions?" 
                homePageText="Home" 
                homePageUrl="/" 
                activePageText="Blog Details" 
            /> 
            <BlogDetailsContent />
            <StartProjectBlog 
            title="Free Speed Optimzation Consultation" 
            description="Speeding up your website can have great return on 
            investment but can be difficult to do on your own. Because of this 
            we are currenly offering a free consultation to help you get a 
            faster website and increase your conversion." />
        </Layout>
    )
}

export default BlogDetails;