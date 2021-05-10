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
  flags: { PRESERVE_WEBPACK_CACHE: true },
  plugins: [
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          "G-KF0ZF5YNWJ",
        ],
        pluginConfig: {
          head: true,
          respectDNT: true,
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images/`,
      },
    },
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
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
          siteUrl: siteAddress.href.slice(0, -1),
      }
    },
  ],
}
