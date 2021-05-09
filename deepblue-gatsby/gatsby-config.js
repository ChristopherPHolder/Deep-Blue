/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 * 
 * All configuration related things are here
 * 
 * This is configuration file
 */

const siteAddress =  new URL("https://deep-blue.io")

module.exports = {
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: 'gatsby-plugin-html-attributes',
      options: {
        lang: 'zxx'
      }
    },
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: "deep-blue.io",
        protocol: "siteAddress.protocol.slice(0, -1)",
        hostname: "siteAddress.hostname",
      },
    },
  ],
}
