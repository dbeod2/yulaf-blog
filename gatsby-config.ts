import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `yulaf-blog`,
    plugins: [
      "gatsby-plugin-image",
      "gatsby-plugin-sharp",
    ],
  },
  graphqlTypegen: true,
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "pages",
        "path": "./src/pages/"
      },
      __key: "pages"
    }, 
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "blog",
        "path": "./blog"
      },
      __key: "blog"
    },
    {
      resolve: 'gatsby-transformer-remark',
    },
    "gatsby-plugin-mdx",
  ]
};

export default config;
