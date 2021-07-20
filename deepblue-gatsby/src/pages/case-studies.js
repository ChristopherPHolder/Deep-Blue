import React from 'react'
import Layout from "../components/App/Layout"
import Navbar from "../components/App/Navbar"
import PageBanner from '../components/Common/PageBanner'
import RecenProjects from "../components/Index/RecentProjects"
import ProjectStartArea from "../components/Index/ProjectStartArea"
import Footer from "../components/App/Footer"
//import TwoColumns from '../components/Studies/TwoColumns'

const CaseStudies = () => {
    return (
        <Layout>
            <Navbar />
            <PageBanner
                pageTitle="Our Recent Projects" 
                homePageText="Home" 
                homePageUrl="/" 
                activePageText="Recent Projects" 
            />
            <RecenProjects />
            <ProjectStartArea />
            <Footer />
        </Layout>
    );
}

export default CaseStudies