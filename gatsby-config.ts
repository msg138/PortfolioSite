import type { GatsbyConfig } from "gatsby";

require("dotenv").config({
  path: '.env',
});

const config: GatsbyConfig = {
  siteMetadata: {
    title: `The Michael George`,
    siteUrl: `https://www.themichaelgeorge.com`
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /image.*\.svg$/,
        },
      },
    },
    {
      resolve: 'gatsby-source-strapi',
      options: {
        apiURL: process.env.STRAPI_API_URL,
        queryLimit: 1000,
        collectionTypes: ['Posts'],
        loginData: {
          identifier: process.env.STRAPI_USER,
          password: process.env.STRAPI_PASS,
        },
      },
    },
  ],
};

export default config;
