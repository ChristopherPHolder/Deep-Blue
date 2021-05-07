import React from "react"
import Navbar from "../components/App/Navbar"
import Footer from "../components/App/Footer"
import Layout from "../components/App/Layout"
import Banner from "../components/Index/Banner"
import OurSolutions from "../components/Index/OurSolutions"
import OurServices from "../components/Index/OurServices"
import RecentProjects from "../components/Index/RecentProjects"
import ProjectStartArea from "../components/Index/ProjectStartArea"

const Home = () => {
  return (
    <Layout>
      <Navbar />
      <Banner />
      <OurSolutions />
      <OurServices />
      <RecentProjects />
      <ProjectStartArea />
      <Footer />
    </Layout>
  )
}

export default Home