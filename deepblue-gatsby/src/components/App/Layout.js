import React from 'react'
import { RecoilRoot } from 'recoil'
import GoTop from './GoTop'
import Seo from './SEO'
import Footer from './Footer'


const Layout = ({ children }) => {
    return (
        <RecoilRoot>
            <Seo />
            {children}
            <Footer />
            <GoTop scrollStepInPx="100" delayInMs="10.50" />
        </RecoilRoot>
    )
}

export default Layout
