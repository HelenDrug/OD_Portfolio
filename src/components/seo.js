import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

const SEO = ({ title }) => {
  const { site } = useStaticQuery(
    graphql`
      {
        site {
          siteMetadata {
            description
            title
            twitter
          }
        }
      }
    `
  );

  return <Helmet title={title} htmlAttributes={{ lang: "en" }} />;
};
export default SEO;
