import React from 'react'
import Layout from "../components/App/Layout"
import PageBanner from '../components/Common/PageBanner'

const TermsOfService = () => {
    return (
        <Layout 
        title="Terms of Service"
        description="We know it’s tempting to skip these Terms of Service, but it’s important to establish what you can expect from us as you use Deep Blue services."
        type="website"
        url="https://www.deep-blue.io/terms-of-service/"
        imageUrl="https://www.deep-blue.io/static/dc650cff7cf5f94403cae44ca5bbd068/078c3/deepblue-logo-name-right.webp"
        >
            <PageBanner
                pageTitle="Terms of Service" 
                homePageText="Home" 
                homePageUrl="/" 
                activePageText="Terms of Service" 
            />
            <section className="terms-of-service-area ptb-100">
            Currently in development.
            </section>
        </Layout>
    )
}

export default TermsOfService;