import React, { Component } from "react";
import ShootSnippet from "../components/shoot-snippet";
import Link from "gatsby-link";
import Blank from "../components/blank";

export default ({ data }) => {
  let content;
  if( data.allMarkdownRemark ){
  content = data.allMarkdownRemark.edges.map(({ node }) => {
    return (
      <div key={node.id} >
        <ShootSnippet
          left={node.frontmatter.left.publicURL}
          center={node.frontmatter.center.publicURL}
          right={node.frontmatter.right.publicURL}
          title={node.frontmatter.title}
          date={node.frontmatter.date}
          path={`work/${node.frontmatter.category}/${node.frontmatter.path}`}
        />
      </div>
    );
  });}
  else{
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
query findShit($name: String!){
  allMarkdownRemark(   
   filter: {fileAbsolutePath: {regex:"/work-item/.*\\.md$/"},frontmatter: { category : {eq: $name } }}
  ) {
       totalCount
       edges {
         node {
           frontmatter {
             title
             date(formatString: "DD MMMM, YYYY")
             path
             category
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
