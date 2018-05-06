import Link from "gatsby-link";
import React, { Component } from "react";

class Index extends Component {
  render() {
    console.log(this.props.data);

    const aboutData = this.props.data.allMarkdownRemark.edges[0].node;
    console.log(aboutData);
    return (
      <div className="">
        <div className="about-spacer" />
        <div className="columns vertical-spacer">
          <div className="column is-offset-2-desktop is-4-desktop is-10-mobile is-offset-1-mobile text-right text-center">
            <div className="text-wrapper">
              <p className="about-title">{aboutData.frontmatter.row1Title}</p>
              <p className="about-text">{aboutData.frontmatter.row1Text}</p>
            </div>
          </div>
          <div className="column relative height1 is-offset-3-mobile is-9-mobile">
            <div className="about-image-wrapper-1">
              <img
                src={aboutData.frontmatter.row1Image.publicURL}
                className="about-image"
              />
            </div>
          </div>
        </div>
        <div className="columns vertical-spacer">
          <div className="column is-7 relative image-container-2 is-hidden-touch">
            <div className="about-image-wrapper-2">
            <img
                src={aboutData.frontmatter.row21Image.publicURL}
                className="about-image"
              />
              
            </div>
            <div className="about-image-wrapper-3">                  
            <img
                src={aboutData.frontmatter.row22Image.publicURL}
                className="about-image"
              />
            </div>
          </div>
          <div className="column is-offset-4-sm  relative text-center">
            <div className="text-wrapper">
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
              publicURL
            }
            row21Image {
              publicURL
            }
            row22Image {
              publicURL
            }
          }
        }
      }
    }
  }
`;
