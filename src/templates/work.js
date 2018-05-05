import React, { Component } from "react";
import WorkLayout from "../components/work-layout";
import Link from "gatsby-link";


export default ({ data }) => {  
  const asdf = data.allMarkdownRemark.edges.map(({ node }) => {
    return (
      <div key={node.id} >
        <WorkLayout
          left={node.frontmatter.left.publicURL}
          center={node.frontmatter.center.publicURL}
          right={node.frontmatter.right.publicURL}
          leftOrientation={node.frontmatter.leftOrientation}
          centerOrientation={node.frontmatter.centerOrientation}
          rightOrientation={node.frontmatter.rightOrientation}
          title={node.frontmatter.title}
          path={`work/${node.frontmatter.path}`}
        />
      </div>
    );
  });
  return (
    <div className="container">   
    <div className="work-spacer" />   
      {asdf}
    </div>
  );
};

export const query = graphql`
  query workQuery {
    allMarkdownRemark(filter: {fileAbsolutePath: {regex:"/work-category/.*\\.md$/"}}) {
      totalCount
      edges {
        node {
          frontmatter {
            title
            type
            path
            left {
              publicURL
            }
            right {
              publicURL
            }
            center {
              publicURL
            }
            leftOrientation
            rightOrientation
            centerOrientation
          }
        }
      }
    }
  }
`;
