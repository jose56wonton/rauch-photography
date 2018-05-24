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
    const { attachments } = this.props.data.markdownRemark.frontmatter;

    const isBrowser = typeof window !== "undefined";
    const ScrollMagic = isBrowser ? require("scrollmagic") : undefined;
    if (ScrollMagic) {
      this.setState({ controller: new ScrollMagic.Controller() }, () => {
        this.initialScrollScenes(attachments, ScrollMagic);
        this.initializePhotoBackgrounds(attachments);
      });
    }
  }
  initialScrollScenes = (attachments, ScrollMagic) => {
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
      if (i === attachments.length - 1) {
        this.setState({ active: 0 });
      }
    });
  };

  initializePhotoBackgrounds = photos => {
    this.setState({ styles: [] });
    const styles = [];
    photos.forEach((photo, i) => {
      Vibrant.from(photo.publicURL).getPalette((err, palette) => {
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
    const asdf = this.props.data.markdownRemark.frontmatter.attachments.map(
      (picture, i) => {
        return (
          <ShootTile
            index={i}
            active={this.state.active}
            style={this.state.styles[i]}
            pictureSrc={picture.publicURL}
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
