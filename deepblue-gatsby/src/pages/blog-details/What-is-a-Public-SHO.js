import React from 'react';
import Layout from "../../components/App/Layout";
import PageBanner from '../../components/Common/PageBanner';

import BlogDetailsContent from '../../components/BlogContent/What-is-a-Public-SHO/BlogDetailsContent';
import metaImage from '../../assets/images/blog/public-sho-ilustration.jpeg';

const BlogDetails = () => {

    const schemaMarkup = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [{
          "@type": "Question",
          "name": "What is a Public SHO? (Public Strong Holder Offering)",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "<p>A <a href='https://medium.com/daomaker/introducing-the-public-sho-dao-maker-for-all-290e14af9bf7' target=\"_blank\" rel=\"noreferrer\"> Public SHO </a>  is a funding mechanism for crypto projects which helps startups build custom communities based on desired characteristics by <a href=\"https://www.blockstar.ch/post/an-introduction-to-on-chain-analysis\" target=\"_blank\" rel=\"noreferrer\"> analyzing the  on-chain activities </a> of every <a href=\"https://complyadvantage.com/insights/what-is-kyc-crypto-exhanges/\" target=\"_blank\" rel=\"noreferrer\">  KYCed user </a> with over specific worth of any token.</p>"
          }
        },{
          "@type": "Question",
          "name": "How is a Public SHO different from a SHO?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "<p>Public SHO&#39;s make <a href=\"https://coinmarketcap.com/alexandria/glossary/sho-strong-holder-offering\" target=\"_blank\" rel=\"noreferrer\">SHO's </a> available to any KYCed user with $2,500 worth of tokens of any kind on EVM compatible chains. However, this access can also be compared to a  Freemium model, where switching to a Premium model means holding DAO and getting full  access to a DAO SHO. This means that projects launched on DAO Pad will benefit from potentially billions of dollars and massive exposure.</p>"
          }
        },{
          "@type": "Question",
          "name": "What additional benefits do Strong Holder get from a Public SHO?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "<p>There are strong incentives for first time users to stay with in the ecosystem and convert  them to launch pads token holders which insuring the long term success of their projects  and tokens. These come in many forms such as $DAO unlocking tokens with out a fee  and <a href=\"https://infinitypad.com/\" target=\"_blank\" rel=\"dofollow\"> Infinity Pad&#39;s </a> <a href=\"https://medium.com/infinity-pad/infinity-pad-introduces-the-public-sho-c221b5acf23\" target=\"_blank\" rel=\"noreferrer\"> $IPAD  tokens having a 3x value in their SHO </a>.</p>"
          }
        },{
          "@type": "Question",
          "name": "How does the Scoring System and Dynamic Chance in a Public SHO work?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "<p>Your chance of winning a Public SHO depend on a dynamic score calculated based  on an investors wallet holding and activity. The program will take into account  a number of variables such as your total assets in various chains, currently  Ethereum, Avalanche, Binance Smart Chain, Fantom, Polygon, as well as <a href=\"https://debank.com/protocol\" target=\"_blank\" rel=\"noreferrer\"> any assets supported by debank.com</a>.</p>"
          }
        }]
    }
    
    return (
        <Layout 
        title="What is a Public SHO? (Public Strong Holder Offering)"
        description="A funding mechanism for crypto projects which helps startups build custom 
        communities based on desired characteristics by analyzing the on-chain activities."
        type="article" 
        url="https://www.deep-blue.io/blog-details/What-is-a-Public-SHO/" 
        imageUrl={metaImage}
        schemaMarkup={schemaMarkup}
        >
            <PageBanner
                pageTitle="What is a Public SHO? (Public Strong Holder Offering)" 
                homePageText="Home" 
                homePageUrl="/" 
                activePageText="Blog Details" 
            /> 
            <BlogDetailsContent />
        </Layout>
    )
}

export default BlogDetails;