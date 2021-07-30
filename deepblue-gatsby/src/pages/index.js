import React from "react"
import loadable from '@loadable/component'
import Layout from "../components/App/Layout"
import Banner from "../components/Index/Banner"
const OurSolutions = loadable(() => import("../components/Index/OurSolutions"))
const OurServices = loadable(() => import("../components/Index/OurServices"))
const RecentProjects = loadable(() => import("../components/Index/RecentProjects"))
const ProjectStartArea = loadable(() => import("../components/Index/ProjectStartArea"))

const Home = () => {
  return (
    <Layout 
    title="Software Development Services"
    description="Deep Blue is a Vienna-based Software Development Company focused on 
    producing and maintaining high-performance Web Applications at affordable prices."
    >
      <Banner />
      <OurSolutions />
      <OurServices />
      <RecentProjects />
      <ProjectStartArea />
    </Layout>
  )
}

export default Home