import React, { Component } from "react";
import * as ScrollMagic from "scrollmagic";
import * as Vibrant from "node-vibrant";
import ShootTile from '../components/shoot/shootTile';

class Shoot extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 0,
      styles: []
    };
  }
  componentDidMount() {
    const { images } = this.props.data.allContentfulShoot.edges[0].node;
    const isBrowser = typeof window !== "undefined";
    const ScrollMagic = isBrowser ? require("scrollmagic") : undefined;
    if (ScrollMagic) {
      this.setState({ controller: new ScrollMagic.Controller() }, () => {
        this.initialScrollScenes(images, ScrollMagic);
        this.initializePhotoBackgrounds(images);
      });
    }
  }
  initialScrollScenes = (images, ScrollMagic) => {
    let scenes = [];
    images.forEach((image, i) => {
      scenes.push(
        new ScrollMagic.Scene({
          triggerElement: `#shoot-${i}`,
          triggerHook: ".5"
        })
          .duration(1000)
          .on("start", event => {
            if (event.scrollDirection === "REVERSE") {
              if (i !== 0) {
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
      if (i === image.length - 1) {
        this.setState({ active: 0 });
      }
    });
  };

  initializePhotoBackgrounds = photos => {
    this.setState({ styles: [] });
    const styles = [];
    photos.forEach((photo, i) => {
      Vibrant.from(photo.sizes.base64).getPalette((err, palette) => {
        let rgb;
        if (palette.Muted) rgb = palette.Muted._rgb;
        else if (palette.LightMuted) rgb = palette.LightMuted._rgb;

        styles.push({
          backgroundColor: `rgb(${rgb[0]},${rgb[1]},${rgb[2]})`
        });

        if (i === photos.length - 1) {
          console.log(styles);
          this.setState({ styles: styles });
        }
      });
    });
  };

  render() {
    const asdf = this.props.data.allContentfulShoot.edges[0].node.images.map(
      (picture, i) => {
        return (
          <ShootTile
            index={i}
            active={this.state.active}
            style={this.state.styles[i]}
            pictureSrc={picture.file.url}
          />
        );
      }
    );
    return <div className="container min-size">{asdf}</div>;
  }
}
export default Shoot;

export const query = graphql`
  query findMarkdown($name: String!) {
    allContentfulShoot(filter:{path: {eq:$name}}){
      edges{
        node{
          title,        
          path,
          category{
            path
          }
          images{
            file{
              url
            }
            sizes{
              base64
            }
          }
        }	
      }
    }
    
  }
`;
