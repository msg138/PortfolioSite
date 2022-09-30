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
      resolve: "gatsby-source-mongodb",
      options: {
        dbName: 'site',
        connectionString: `mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@${process.env.MONGO_HOST}:27017/admin?retryWrites=true&w=majority`,
        collection: ['posts'],
      },
    },
  ],
};

export default config;
