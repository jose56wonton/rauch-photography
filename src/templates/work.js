import React, { Component } from "react";
import WorkLayout from "../components/work-layout";
import Link from "gatsby-link";
import Blank from '../components/blank'
import * as ScrollMagic from "scrollmagic";

class Work extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 0,
      controller: new ScrollMagic.Controller(),
      styles: []
    };
  }
  componentDidMount() {
    this.initialScrollScenes();    
  }
  initialScrollScenes = () => {
    let scenes = [];
    attachments.forEach((attachment, i) => {
      scenes.push(
        new ScrollMagic.Scene({
          triggerElement: `#work-item-${i}`,
          triggerHook: ".5"
        })
          .duration(1000)
          .on("start", event => {
            if (event.scrollDirection === "REVERSE") {
              if(i !== 0){
                this.setState({ active: i - 1 });
              }                          
            } else if (event.scrollDirection === "FORWARD") {
              this.setState({
                active: i
              });
            }
          })
         
          .addTo(this.state.controller)
      );
      if(i === attachments.length -1 ){
        this.setState({active: 0})
        
      }
    });
    
  }
  render() {
    console.log(this.props);
    let content;
    if(this.props.data.allMarkdownRemark){
      content = this.props.data.allMarkdownRemark.edges.map(({ node },i) => {
        const version = i%2;
        return (
          <div key={node.id} >
            <WorkLayout
              left={node.frontmatter.left.childImageSharp.sizes}
              center={node.frontmatter.center.childImageSharp.sizes}
              right={node.frontmatter.right.childImageSharp.sizes}
              leftOrientation={node.frontmatter.leftOrientation}
              centerOrientation={node.frontmatter.centerOrientation}
              rightOrientation={node.frontmatter.rightOrientation}
              title={node.frontmatter.title}
              version={version}
              path={`work/${node.frontmatter.path}`}
            />
          </div>
        );
      });
    } else{
      content = <Blank />
    }
    return (
      <div className="container">   
        <div className="work-spacer" />   
        {content}
      </div>
    );
  }
}




export default Work;




export const query = graphql`
  query workQuery {
    allMarkdownRemark(filter: {fileAbsolutePath: {regex:"/work-category/.*\\.md$/"}}) {
      totalCount
      edges {
        node {
          frontmatter {
            title
            type
            path
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
            center{
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
