import React from 'react'
import Layout from "../components/App/Layout"
import Navbar from "../components/App/Navbar"
import PageBanner from '../components/Common/PageBanner'
import BlogCard from '../components/BlogContent/BlogCard'

const Blog = () => {
    return (
        <Layout title="Blog">
            <Navbar />
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