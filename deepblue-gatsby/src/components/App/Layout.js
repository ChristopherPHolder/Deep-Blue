import React from 'react'
import { RecoilRoot } from 'recoil'
import GoTop from './GoTop'
import Seo from './SEO'
import Navbar from './Navbar'
import Footer from './Footer'

const Layout = ({ children, title, description }) => {
    return (
        <RecoilRoot>
            <Seo title={title} description={description}/>
            <Navbar />
            <main>
                {children}
            </main>
            <Footer />
            <GoTop scrollStepInPx="100" delayInMs="10.50" />
        </RecoilRoot>
    )
}

export default Layout
