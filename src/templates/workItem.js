import React, { Component } from "react";
import * as ScrollMagic from "scrollmagic";
import * as Vibrant from "node-vibrant";


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

    const isBrowser = typeof window !== 'undefined';
    const ScrollMagic = isBrowser ? require('scrollmagic') : undefined;
    if(ScrollMagic){
      this.setState({controller: new ScrollMagic.Controller()}, ()=>{
        this.initialScrollScenes(attachments,ScrollMagic);
        this.initializePhotoBackgrounds(attachments);
      });      
    }   
  }
  initialScrollScenes = (attachments,ScrollMagic) => {
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

  initializePhotoBackgrounds = (photos) => {
    photos.forEach((photo,i) => {
      Vibrant.from(photo.publicURL).getPalette((err, palette) => {    
        
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