import React from 'react'
import { Helmet } from "react-helmet"

const SEO = () => {
    return (
        <div>
            <Helmet>
                <title>Deep Blue - Custom automation to speed up your business</title>
                <meta name="description" content="Deep Blue - Custom automation to speed up your business" />
                <meta name="og:title" property="og:title" content="Deep Blue - Custom automation to speed up your business"></meta>
                <meta name="twitter:card" content="Deep Blue - Custom automation to speed up your business"></meta>
                <meta property="og:image" content="https://res.cloudinary.com/dev-empty/image/upload/v1593069801/explore-learning.jpg" />
            </Helmet>
        </div>
    )
}

export default SEO
