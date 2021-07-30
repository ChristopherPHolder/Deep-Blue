import React from 'react'
import Layout from "../components/App/Layout"
import Navbar from "../components/App/Navbar"
import PageBanner from '../components/Common/PageBanner'
import BlogDetailsContent from '../components/BlogContent/BlogDetailsContent'

const BlogDetails = () => {
    return (
        <Layout 
        title="Virtualization and Cloud Computing"
        description="An in-depth introduction to client-side and 
        server-side virtualization, types of hypervisors, 
        cloud computing, and its 3 common models SaaS, PaaS, and IaaS."
        >
            <Navbar />
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