import React from 'react'
import Layout from "../../components/App/Layout"
import PageBanner from '../../components/Common/PageBanner'
import BlogDetailsContent from '../../components/BlogContent/Virtualization-and-Cloud-Computing/BlogDetailsContent'

const BlogDetails = () => {
    return (
        <Layout 
        title="Virtualization and Cloud Computing"
        description="An in-depth introduction to client-side and 
        server-side virtualization, types of hypervisors, 
        cloud computing, and its 3 common models SaaS, PaaS, and IaaS."
        type="article" 
        url="https://www.deep-blue.io//blog-details/Virtualization-and-Cloud-Computing/" 
        imageUrl="https://deep-blue.io/static/893521fad2ade0f0c2e2b1ec751f5630/7a708/cloud-computing.webp"
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