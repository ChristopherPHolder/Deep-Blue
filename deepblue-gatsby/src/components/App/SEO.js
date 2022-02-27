import React from 'react'
import { Helmet } from "react-helmet"
import deepBlueLogo from '../../assets/images/logos/deepblue-logo-name-right.png'

const Seo = ({ title, description, type, url, imageUrl }) => {
    const title_name = title + " | Deep Blue"
    const fullImageUrl = imageUrl ? 'http://www.deep-blue.io' + imageUrl : 'http://www.deep-blue.io' + deepBlueLogo
    return (
        <div>
            <Helmet>
                <title>{title_name}</title>
                <meta name="description" content={description} />
                <meta name="og:title" property="og:title" content={title_name} />
                <meta name="og:type" property="og:type" content={type} />
                <meta name="og:description" property="og:description" content={description} />
                <meta name="og:url" property="og:url" content={url} />
                <meta name="og:image" property="og:image" content={fullImageUrl} />

                <meta name="twitter:card" property="twitter:card" content="summary"/>
                <meta name="twitter:title"  property="twitter:title" content={title_name} />
                <meta name="twitter:description" property="twitter:description" content={description} />
                <meta name="twitter:site" property="twitter:site" content="@DeepBlue_io" />
                <meta name="twitter:image" property="twitter:image" content={fullImageUrl} />
                <meta name="twitter:label1" property="twitter:label1" content="Reading time" />
                <meta name="twitter:data1" property="twitterdata1" content="5 min read" />
            </Helmet>
        </div>
    )
}

export default Seo
