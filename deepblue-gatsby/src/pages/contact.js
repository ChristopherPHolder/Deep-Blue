import React from 'react'
import Layout from "../components/App/Layout"
import PageBanner from '../components/Common/PageBanner'
import ContactInfo from '../components/Contact/ContactInfo'
import ContactForm from '../components/Contact/ContactForm'

const Contact = () => {
    return (
        <Layout 
        title="Contact Form"
        description="Get in touch with us to recive a free consultation."
        >
            <PageBanner
                pageTitle="Contact" 
                homePageText="Home" 
                homePageUrl="/" 
                activePageText="Contact" 
            />
            <ContactInfo />
            <ContactForm />
        </Layout>
    );
}

export default Contact