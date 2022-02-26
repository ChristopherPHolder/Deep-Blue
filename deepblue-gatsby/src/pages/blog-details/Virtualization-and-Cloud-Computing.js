import React from 'react';
import Layout from "../../components/App/Layout";
import PageBanner from '../../components/Common/PageBanner';
import BlogDetailsContent from '../../components/BlogContent/Virtualization-and-Cloud-Computing/BlogDetailsContent';

import metaImage from '../../assets/images/blog/cloud-computing-2.jpg';
const BlogDetails = () => {
    return (
        <Layout 
        title="Virtualization and Cloud Computing"
        description="An in-depth introduction to client-side and 
        server-side virtualization, types of hypervisors, 
        cloud computing, and its 3 common models SaaS, PaaS, and IaaS."
        type="article" 
        url="https://www.deep-blue.io/blog-details/Virtualization-and-Cloud-Computing/" 
        imageUrl={metaImage}
        >
            <PageBanner
                pageTitle="Virtualization and Cloud computing" 
                homePageText="Home" 
                homePageUrl="/" 
                activePageText="Blog Details" 
            /> 
            <BlogDetailsContent />
        </Layout>
    )
}

export default BlogDetails;