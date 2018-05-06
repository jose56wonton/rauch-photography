import React, { Component } from "react";
import WorkLayout from "../components/work-layout";
import Link from "gatsby-link";
import Blank from '../components/blank'

export default ({ data }) => {  
  let content;
  if(data.allMarkdownRemark){
    content = data.allMarkdownRemark.edges.map(({ node },i) => {
      const version = i%2;
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
            version={version}
            path={`work/${node.frontmatter.path}`}
          />
        </div>
      );
    });
  } else{
    content = <Blank />
  }
  return (
    <div className="container">   
    <div className="work-spacer" />   
      {content}
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
