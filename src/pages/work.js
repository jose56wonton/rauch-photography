import React, { Component } from "react";
import ShootSnippet from "../components/shoot-snippet";
import Link from "gatsby-link";
export default ({ data }) => {
  console.log(data.allMarkdownRemark.edges[0].node);
  const asdf = data.allMarkdownRemark.edges.map(({ node }) => {
    return (
      <div key={node.id}>
        <ShootSnippet
          left={node.frontmatter.left.publicURL}
          center={node.frontmatter.center.publicURL}
          right={node.frontmatter.right.publicURL}
          title={node.frontmatter.title}
          date={node.frontmatter.date}
          path={node.frontmatter.path}
        />
      </div>
    );
  });
  return (
    <div className="container grid-xl">      
      {asdf}
    </div>
  );
};

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark(
      filter: { frontmatter: { type : {eq: "work" } } }
    ) {
      totalCount
      edges {
        node {
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            path
            attachments {
              publicURL
            }
            left {
              publicURL
            }
            right {
              publicURL
            }
            center {
              publicURL
            }
          }
        }
      }
    }
  }
`;
