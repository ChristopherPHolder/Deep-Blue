import React from 'react'
import Layout from "../components/App/Layout"
import PageBanner from '../components/Common/PageBanner'
import RecenProjects from "../components/Index/RecentProjects"
import ProjectStartArea from "../components/Index/ProjectStartArea"

const CaseStudies = () => {
    return (
        <Layout 
        title="Recent Projects"
        description="Take a look at some of our most recent projects using 
        technologies such as Django, React, Gatsby, WordPress, and Python CLI"
        type="website"
        url="https://www.deep-blue.io/case-study/"
        imageUrl="https://www.deep-blue.io/static/dc650cff7cf5f94403cae44ca5bbd068/078c3/deepblue-logo-name-right.webp"
        >
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