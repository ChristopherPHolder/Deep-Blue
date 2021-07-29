import React from 'react'
import Layout from "../components/App/Layout"
import Navbar from "../components/App/Navbar"
import PageBanner from '../components/Common/PageBanner'
import BlogDetailsContent from '../components/BlogContent/BlogDetailsContent'

const BlogDetails = () => {
    return (
        <Layout title="Virtualization and Cloud Computing">
            <Navbar />
            <PageBanner
                pageTitle="Blog Details" 
                homePageText="Home" 
                homePageUrl="/" 
                activePageText="Blog Details" 
            /> 
            <BlogDetailsContent />
        </Layout>
    )
}

export default BlogDetails;