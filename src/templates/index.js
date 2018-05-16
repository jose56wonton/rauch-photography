import Link from "gatsby-link";
import React, { Component } from "react";
import Img from "gatsby-image";
class Index extends Component {
  render() {
    const aboutData = this.props.data.allMarkdownRemark.edges[0].node;
    return (
      <div className="">
        <div className="about-spacer" />
        <div className="columns vertical-spacer">
          <div className="column is-offset-2-desktop is-4-desktop is-10-mobile is-offset-1-mobile text-right text-center">
            <div className="text-wrapper-1">
              <p className="about-title">{aboutData.frontmatter.row1Title}</p>
              <p className="about-text">{aboutData.frontmatter.row1Text}</p>
            </div>
          </div>
          <div className="column relative height1  is-12-mobile  is-hidden-mobile">
            <div className="about-image-wrapper-1">
              <Img
                sizes={aboutData.frontmatter.row1Image.childImageSharp.sizes}
                className="about-image"
              />
            </div>
          </div>
        </div>
        <div className="columns vertical-spacer">
          <div className="column relative  is-6-tablet image-container-2 is-hidden-mobile">
            <div className="about-image-wrapper-2">
              <Img
                sizes={aboutData.frontmatter.row2Image.childImageSharp.sizes}
                className="about-image"
              />
            </div>           
          </div>
          <div className="column is-offset-4-sm is-6-tablet  is-10-mobile is-offset-1-mobile relative text-center">
            <div className="text-wrapper-2">
              <p className="about-title">{aboutData.frontmatter.row2Title}</p>
              <p className="about-text">{aboutData.frontmatter.row2Text}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Index;

export const query = graphql`
  query aboutQuery {
    allMarkdownRemark(filter: { frontmatter: { type: { eq: "index" } } }) {
      totalCount
      edges {
        node {
          frontmatter {
            row1Title
            row1Text
            row2Title
            row2Text
            path
            row1Image {
              childImageSharp {
                sizes {
                  ...GatsbyImageSharpSizes
                }
              }
            }
            row2Image {
              childImageSharp {
                sizes {
                  ...GatsbyImageSharpSizes
                }
              }
            }  
          }
        }
      }
    }
  }
`;
