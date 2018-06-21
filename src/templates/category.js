import React, { Component } from "react";
import CategoryTile from '../components/category/categoryTile';
import Link from "gatsby-link";
import Blank from "../components/blank";

export default ({ data }) => {
  let content;
  if (data.allContentfulShoot) {
    content = data.allContentfulShoot.edges.map(({ node }, i ) => {
      const version = i%2;
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
          sizes(maxWidth: 1000, quality: 90) {
            ...GatsbyContentfulSizes
          }
        }
      }	
    }
  }
 }
`;
