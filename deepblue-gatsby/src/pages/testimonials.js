import React from 'react'
import Layout from "../components/App/Layout"
import Navbar from "../components/App/Navbar"
import PageBanner from '../components/Common/PageBanner'
import TestimonialsStyleOne from '../components/Testimonials/TestimonialsStyleOne'

const Testimonials = () => {
    return (
        <Layout title="Testimonials">
            <Navbar />
            <PageBanner
                pageTitle="Testimonials" 
                homePageText="Home" 
                homePageUrl="/" 
                activePageText="Testimonials" 
            />
            <TestimonialsStyleOne />
        </Layout>
    );
}

export default Testimonials