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
    if (this.props.data.allContentfulCategory) {
      content = this.props.data.allContentfulCategory.edges.map(({ node }, i) => {
        const version = i % 2;
        return (
          <div key={i * 11}  >
            <WorkTile
              smaller={node.images[1].sizes}
              larger={node.images[0].sizes}
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
            sizes(maxWidth: 1000, quality: 90) {
              ...GatsbyContentfulSizes
            }
          }
        }
      }
    }
  }
`;
