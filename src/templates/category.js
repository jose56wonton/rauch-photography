import React, { Component } from "react";
import CategoryTile from '../components/category/categoryTile';
import Link from "gatsby-link";
import Blank from "../components/blank";

export default ({ data }) => {
  let content;
  if (data.allContentfulShoot) {
    content = data.allContentfulShoot.edges.map(({ node }, i ) => {
      const version = i%2;
      console.log(node.images[1].sizes.src);
      return (
        <div key={i*10}>
          <CategoryTile
            left={node.images[0].sizes}
            center={node.images[1].sizes}
            right={node.images[2].sizes}
            title={node.title}
            date={node.date}
            index={i}
            version={version}
            path={`work/${node.category.path}/${node.path}`}
          />
        </div>
      );
    });
  } else {
    content = <Blank />;
  }
  return (
    <div className="container min-size">
      <div className="work-spacer" />
      {content}
    </div>
  );
};

export const query = graphql`
query findShit($name: String!){
  allContentfulShoot(filter: {category:{path:{eq:$name}}}){
    edges{
      node{
        title
        path
        category {
          path
        }
        images{
          sizes {
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


// allMarkdownRemark(   
//   filter: {fileAbsolutePath: {regex:"/shoots/.*\\.md$/"},frontmatter: { category : {eq: $name } }}
//  ) {
//       totalCount
//       edges {
//         node {
//           frontmatter {
//             title
//             date(formatString: "DD MMMM, YYYY")
//             path
//             category
//             attachments {
//              childImageSharp{
//                sizes {
//                  ...GatsbyImageSharpSizes
//                }
//              }
//             }
//             left {
//              childImageSharp{
//                sizes {
//                  ...GatsbyImageSharpSizes
//                }
//              }
//             }
//             right {
//              childImageSharp{
//                sizes {
//                  ...GatsbyImageSharpSizes
//                }
//              }
//             }
//             center {
//              childImageSharp{
//                sizes {
//                  ...GatsbyImageSharpSizes
//                }
//              }
//              publicURL
//             }
//             leftOrientation
//             rightOrientation
//             centerOrientation
//           }
//         }
//       }
//     }