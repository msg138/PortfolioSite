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
  ],
};

export default config;
