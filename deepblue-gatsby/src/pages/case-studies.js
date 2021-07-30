import React from 'react'
import Layout from "../components/App/Layout"
import Navbar from "../components/App/Navbar"
import PageBanner from '../components/Common/PageBanner'
import RecenProjects from "../components/Index/RecentProjects"
import ProjectStartArea from "../components/Index/ProjectStartArea"

const CaseStudies = () => {
    return (
        <Layout 
        title="Recent Projects"
        description="Take a look at some of our most recent projects using 
        technologies such as Django, React, Gatsby, WordPress, and Python CLI"
        >
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