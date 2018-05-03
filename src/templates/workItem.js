import React, { Component } from "react";
import * as ScrollMagic from "scrollmagic";
import {TweenMax} from 'gsap'
export default ({ data }) => {
  return <WorkItem data={data} />;
};

export const query = graphql`
  query findMarkdown($name: String!) {
    markdownRemark(frontmatter: { path: { eq: $name } }) {
      frontmatter {
        title
        attachments {
          publicURL
        }
      }
    }
  }
`;
class WorkItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      controller: new ScrollMagic.Controller()
    };
  }
  componentDidMount() {
    this.props.data.markdownRemark.frontmatter.attachments.forEach((ele, i) => {

      
      

      var ourScene = new ScrollMagic.Scene({
        triggerElement: `#work-item-${i}`,
        triggerHook: ".5",
        reverse:true
      })
      .setClassToggle(`#work-item-${i}`, "fade-in-wrapper")
      .setClassToggle(`#work-item-${i} img`, "fade-in-img")
      .addTo(this.state.controller);

      var ourScene = new ScrollMagic.Scene({
        triggerElement: `#work-item-${i}`,
        triggerHook: "onLeave",
        reverse:true
      })
      .setClassToggle(`#work-item-${i}`, "fade-out-wrapper")
      .setClassToggle(`#work-item-${i} img`, "fade-out-img")
      .addTo(this.state.controller);
      // var ourScene = new ScrollMagic.Scene({
      //   triggerElement: `#work-item-${i - 1}`,
      // })
      // .setTween(fadeout_tween).addTo(this.state.controller);
     
        
    });
  }
  render() {
    console.log(this.props.data);

    const asdf = this.props.data.markdownRemark.frontmatter.attachments.map(
      (ele, i) => {
        return (
          <div key={i} className="work-item-box">
            <div className="work-item-photo-wrapper" id={`work-item-${i}`} >
              <img
                className="work-item-photo"
                
                src={ele.publicURL}
              />
            </div>
          </div>
        );
      }
    );
    return <div className="container">{asdf}</div>;
  }
}
