import React from 'react'
import Layout from "../components/App/Layout"
import PageBanner from '../components/Common/PageBanner'
import ImageSizeCompairer from '../components/ImageSizeCompairer/ImageSizeCompairer';

const ImageSizeIlustrator = () => {
  return (
    <Layout 
      title="Contact Form"
      description="Contact Deep Blue though our contact form for a free consultation, or can send us an email directly at chris@deep-blue.io"
      type="website"
      url="https://www.deep-blue.io/contact/"
      imageUrl="https://www.deep-blue.io/static/dc650cff7cf5f94403cae44ca5bbd068/078c3/deepblue-logo-name-right.webp"
    >
      <PageBanner
          pageTitle="Image Size Ilustrator" 
          homePageText="Home" 
          homePageUrl="/" 
          activePageText="Image Size Ilustrator" 
      />

      <ImageSizeCompairer />
    </Layout>
  );
}

export default ImageSizeIlustrator;