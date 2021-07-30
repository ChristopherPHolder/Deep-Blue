import React from 'react'
import Layout from "../components/App/Layout"
import PageBanner from '../components/Common/PageBanner'
import BlogCard from '../components/BlogContent/BlogCard'

const Blog = () => {
    return (
        <Layout 
        title="Blog"
        description="Deep Blue blog post"
        >
            <PageBanner
                pageTitle="Blog" 
                homePageText="Home" 
                homePageUrl="/" 
                activePageText="Blog" 
            />
            <BlogCard />
        </Layout>
    );
}

export default Blog;