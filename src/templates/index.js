import React from "react";
import Link from "gatsby-link";

export default ({ data }) => {
  console.log(data);

  const aboutData = data.allMarkdownRemark.edges[0].node;
  console.log(aboutData);
  return (
    <div className="columns">
      <div className="column ">
        <img
          src={aboutData.frontmatter.left.publicURL}
          className="about-image-1"
        />
        <img
          src={aboutData.frontmatter.right.publicURL}
          className="about-image-2"
        />
      </div>
      <div className="column">
        <h1>{aboutData.frontmatter.title}</h1>
        
        <div dangerouslySetInnerHTML ={{__html: aboutData.html}} />
      </div>
    </div>
  );
};

export const query = graphql`
  query aboutQuery {
    allMarkdownRemark(filter: { frontmatter: { type: { eq: "index" } } }) {
      totalCount
      edges {
        node {
          frontmatter {
            title
            path
            
            left {
              publicURL
            }
            right {
              publicURL
            }
          }
        }
      }
    }
  }
`;
