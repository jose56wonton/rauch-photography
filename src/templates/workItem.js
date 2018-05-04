import React, { Component } from "react";
import * as ScrollMagic from "scrollmagic";
import * as Vibrant from "node-vibrant";

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
      active: 0,
      styles: []
    };
  }
  componentDidMount() {
    const { attachments } = this.props.data.markdownRemark.frontmatter;
    const controller = new ScrollMagic.Controller();
    let scenes = [];
    attachments.forEach((ele, i) => {
      scenes.push(
        new ScrollMagic.Scene({
          triggerElement: `#work-item-${i}`,
          triggerHook: ".5"
          // reverse: true,
        })
          .duration(10)
          .on("start", event => {
            if (event.scrollDirection === "REVERSE") {
              this.setState({
                active: i - 1
              });
            } else {
              this.setState({
                active: i
              });
            }
          })
          .addTo(controller)
      );
    });

    this.props.data.markdownRemark.frontmatter.attachments.forEach((ele,i) => {
      Vibrant.from(ele.publicURL).getPalette((err, palette) => {    
        console.log(palette)    
        let rgb
        if(palette.Muted)
          rgb = palette.Muted._rgb;
        else if (palette.LightMuted)
          rgb = palette.LightMuted._rgb;
        
        this.state.styles.push({
          backgroundColor: `rgb(${rgb[0]},${rgb[1]},${rgb[2]})`
        }) 
        
      });
    });

  }
 
  render() {
    const asdf = this.props.data.markdownRemark.frontmatter.attachments.map(
      (ele, i) => {
        
       
        return (
          <div key={i} className="work-item-box">
            <div
              className={`work-item-photo-wrapper ${
                this.state.active === i ? "fade-in-wrapper" : ""
              }`}
              style={this.state.active === i ? {} : this.state.styles[i]}
              id={`work-item-${i}`}
            >
              <img
                className={`work-item-photo ${
                  this.state.active === i ? "fade-in-photo" : ""
                }`}
                src={ele.publicURL}
              />
            </div>
          </div>
        );
      }
    );
    return (
      <div className="container">
        <div className="work-spacer" />
        {asdf}
      </div>
    );
  }
}
export default WorkItem;
