import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import Header from "../components/header";
import "../styles/styles.css";
import Footer from '../components/footer';

const Layout = ({ children, data }) => {
  
  return (
    <div className="min-size">
      <Helmet
        title={data.site.siteMetadata.title}
        meta={[
          { name: "description", content: "Sample" },
          { name: "keywords", content: "sample, something" }
        ]}
      />
      <Header siteTitle={data.site.siteMetadata.title} />
      {children()}
      <Footer siteTitle={data.site.siteMetadata.title} />
    </div>
  );
};
Layout.propTypes = {
  children: PropTypes.func
};

export default Layout;

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
