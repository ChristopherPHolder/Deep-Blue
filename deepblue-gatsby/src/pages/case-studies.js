import React from 'react'
import Layout from "../components/App/Layout"
import Navbar from "../components/App/Navbar"
import PageBanner from '../components/Common/PageBanner'
import RecenProjects from "../components/Index/RecentProjects"
import ProjectStartArea from "../components/Index/ProjectStartArea"

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
        </Layout>
    );
}

export default CaseStudies