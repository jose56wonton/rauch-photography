import React, { Component } from "react";
import WorkTile from '../components/work/workTile';
import Link from "gatsby-link";
import Blank from '../components/blank'


class Work extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 0
    };
  }
  render() {
    let content;
    console.log(this.props.data.allContentfulCategory)
    if (this.props.data.allContentfulCategory) {
      content = this.props.data.allContentfulCategory.edges.map(({ node }, i) => {
        const version = i % 2;
        console.log(node);
        return (
          <div key={i * 11}  >
            <WorkTile
              left={node.images[0].sizes}
              center={node.images[1].sizes}
              right={node.images[0].sizes}
              leftOrientation={"portrait"}
              centerOrientation={"portrait"}
              rightOrientation={"portrait"}
              index={i}
              title={node.title}
              version={version}
              path={`work/${node.path}`}
            />
          </div>
        );
      });
    } else {
      content = <Blank />
    }
    return (
      <div className="container min-size">
        <div className="work-spacer" />
        {content}
      </div>
    );
  }
}

export default Work;

export const query = graphql`
  query workQuery {
    allContentfulWork {
      edges {
        node {
          title,
          path
        }
      }
    }
    allContentfulCategory{
      edges{
        node{
          title,
          path,
          images{
            sizes{
              base64
            aspectRatio
            src
            srcSet
            srcWebp
            srcSetWebp
            sizes
            }
          }
        }
      }
    }
  }
`;


// allMarkdownRemark(filter: {fileAbsolutePath: {regex:"/categories/.*\\.md$/"}}) {
//   totalCount
//   edges {
//     node {
//       frontmatter {
//         title
//         type
//         path
//         left {
//           childImageSharp{
//             sizes {
//               ...GatsbyImageSharpSizes
//             }
//           }
//         }
//         right {
//           childImageSharp{
//             sizes {
//               ...GatsbyImageSharpSizes
//             }
//           }
//         }
//         center{
//           childImageSharp{
//             sizes {
//               ...GatsbyImageSharpSizes
//             }
//           }
//         }
//         leftOrientation
//         rightOrientation
//         centerOrientation
//       }
//     }
//   }
// }