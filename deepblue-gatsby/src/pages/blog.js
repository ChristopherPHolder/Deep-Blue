import React from 'react'
import Layout from "../components/App/Layout"
import PageBanner from '../components/Common/PageBanner'
import BlogCard from '../components/BlogContent/BlogCard'

const Blog = () => {
    return (
        <Layout 
        title="Blog"
        description="Deep Blue blog post"
        type="website"
        url="https://www.deep-blue.io/blog"
        imageUrl="https://www.deep-blue.io/static/dc650cff7cf5f94403cae44ca5bbd068/078c3/deepblue-logo-name-right.webp"
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