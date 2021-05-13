module.exports = {
  siteMetadata: {
    title: "Chris R",
  },
  plugins: [
    "gatsby-plugin-material-ui",
    "gatsby-plugin-netlify-cms",
    "gatsby-plugin-sass",
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-transformer-remark",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ],
};
