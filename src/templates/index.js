import Link from 'gatsby-link'
import React, { Component } from 'react'
import Img from 'gatsby-image'
import OnVisible from 'react-on-visible'
class Index extends Component {
  render() {
    const aboutData = this.props.data.allContentfulAbout.edges[0].node
    return (
      <div className="about-wrapper">
        <div className="columns vertical-spacer row-1">
          <div className="column is-6-tablet is-12-mobile  text-box-1">
            <div className="text-wrapper-1">
              <div
                dangerouslySetInnerHTML={{
                  __html: aboutData.row1.childMarkdownRemark.html,
                }}
              />
            </div>
          </div>
          <div className="column relative height  is-12-mobile  is-hidden-mobile">
            <OnVisible className="about-image-wrapper-1">
              <Img sizes={aboutData.images[0].sizes} className="about-image" />
              <div className="visible-cover" />
            </OnVisible>
          </div>
        </div>
        <div className="columns vertical-spacer row-2">
          <div className="column relative height is-6-tablet is-hidden-mobile">
            <OnVisible className="about-image-wrapper-2">
              <Img sizes={aboutData.images[1].sizes} className="about-image" />
              <div className="visible-cover" />
            </OnVisible>
          </div>
          <div className="column is-6-desktop is-12-mobile  text-box-2">
            <div className="text-wrapper-2">
              <div
                dangerouslySetInnerHTML={{
                  __html: aboutData.row2.childMarkdownRemark.html,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Index

export const query = graphql`
  query aboutQuery {
    allContentfulAbout {
      edges {
        node {
          title
          path
          row1 {
            childMarkdownRemark {
              html
            }
          }
          row2 {
            childMarkdownRemark {
              html
            }
          }
          images {
            sizes(maxWidth: 1000, quality: 90) {
              ...GatsbyContentfulSizes
            }
          }
        }
      }
    }
  }
`
