import React, { Component } from "react";
import CategoryTile from '../components/category/categoryTile';
import Link from "gatsby-link";
import Blank from "../components/blank";

export default ({ data }) => {
  let content;
  if (data.allMarkdownRemark) {
    content = data.allMarkdownRemark.edges.map(({ node }, i ) => {
      const version = i%2;
      return (
        <div key={i*10}>
          <CategoryTile
            left={node.frontmatter.left.childImageSharp.sizes}
            center={node.frontmatter.center.childImageSharp.sizes}
            right={node.frontmatter.right.childImageSharp.sizes}
            leftOrientation={node.frontmatter.leftOrientation}
            centerOrientation={node.frontmatter.centerOrientation}
            rightOrientation={node.frontmatter.rightOrientation}
            title={node.frontmatter.title}
            date={node.frontmatter.date}
            index={i}
            version={version}
            path={`work/${node.frontmatter.category}/${node.frontmatter.path}`}
          />
        </div>
      );
    });
  } else {
    content = <Blank />;
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
   filter: {fileAbsolutePath: {regex:"/shoots/.*\\.md$/"},frontmatter: { category : {eq: $name } }}
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
              childImageSharp{
                sizes {
                  ...GatsbyImageSharpSizes
                }
              }
             }
             left {
              childImageSharp{
                sizes {
                  ...GatsbyImageSharpSizes
                }
              }
             }
             right {
              childImageSharp{
                sizes {
                  ...GatsbyImageSharpSizes
                }
              }
             }
             center {
              childImageSharp{
                sizes {
                  ...GatsbyImageSharpSizes
                }
              }
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
