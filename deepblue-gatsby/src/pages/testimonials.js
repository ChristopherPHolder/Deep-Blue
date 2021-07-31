import React from 'react'
import Layout from "../components/App/Layout"
import PageBanner from '../components/Common/PageBanner'
import TestimonialsStyleOne from '../components/Testimonials/TestimonialsStyleOne'

const Testimonials = () => {
    return (
        <Layout 
        title="Testimonials"
        description="Deep Blue Client Testimonials"
        type="website"
        url="https://www.deep-blue.io/testimonials"
        imageUrl="https://www.deep-blue.io/static/dc650cff7cf5f94403cae44ca5bbd068/078c3/deepblue-logo-name-right.webp"
        >
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