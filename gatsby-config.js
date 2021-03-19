module.exports = {
  siteMetadata: {
    title: "Olena Drugalya Portfolio",
    description: "My personal portfolio as web developer",
    twitter: "@OlenaDrugalya",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/posts`,
        name: `posts`,
      },
    },
    `gatsby-plugin-mdx`,
    {
      resolve: `gatsby-plugin-theme-ui`,
      options: {
        preset: `@theme-ui/preset-funk`,
        prismPreset: `okaidia`,
      },
    },
  ],
};
