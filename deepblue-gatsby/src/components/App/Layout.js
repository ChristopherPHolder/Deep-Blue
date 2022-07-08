import React from 'react'
import { RecoilRoot } from 'recoil'
import GoTop from './GoTop'
import Seo from './SEO'
import Navbar from './Navbar'
import Footer from './Footer'

const Layout = ({ children, title, description, type, url, imageUrl, schemaMarkup}) => {
    return (
        <RecoilRoot>
            <Seo 
                title={title} 
                description={description} 
                type={type}
                url={url}
                imageUrl={imageUrl}
                schemaMarkup={schemaMarkup}
            />
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
