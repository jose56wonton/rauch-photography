import { navigateTo } from "gatsby-link";
import React, { Component } from "react";
import Img from "gatsby-image";
import * as ScrollMagic from "scrollmagic";
class WorkLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textHover: true,
      controller: new ScrollMagic.Controller(),
      shift: 0,
      progress: 0,
      cssForMainImage: {},
      cssForSmallerImages: {}
    };
  }
  link = () => {
    navigateTo("/" + this.props.path);
  };
  hoverOffText = () => {
    this.setState({ textHover: false });
  };
  hoverOnText = () => {
    this.setState({ textHover: true });
  };
  componentDidMount() {
    this.initializeScene();
  }
  initializeScene = () => {
    let scene = new ScrollMagic.Scene({
      triggerElement: `#work-${this.props.index}`,
      triggerHook: ".5"
    })
      .duration(1000)
      .on("progress", event => {
        this.setState({
          progress: event.progress,
          shift: Math.floor(event.progress * 50)
        });
        if (this.props.version) {
          this.setState({
            cssForMainImage: {
              transform: "translateX(" + Math.floor(event.progress * 50) + "px)"
            },
            cssForSmallerImages: {
              transform:
                "translateX(" + -Math.floor(event.progress * 50) + "px)"
            }
          });
        } else {
          this.setState({
            cssForMainImage: {
              transform:
                "translateX(" + -Math.floor(event.progress * 50) + "px)"
            },
            cssForSmallerImages: {
              transform: "translateX(" + Math.floor(event.progress * 50) + "px)"
            }
          });
        }
      })
      .addTo(this.state.controller);
  };
  render() {
    console.log(this.state.css);

    return (
      <div className="work" id={`work-${this.props.index}`}>
        <div className={`work-pictures version-${this.props.version}`}>
          <div className="col-1">
            <div key={this.state.progress} style={this.state.cssForMainImage}>
              <Img
                className={`work-large-picture version-${this.props.version}`}
                sizes={this.props.center}
                onClick={this.link}
                onMouseEnter={this.hoverOffText}
                onMouseLeave={this.hoverOnText}
              />
            </div>
          </div>
          <div className="col-2">
            <div
              key={this.state.progress}
              className="work-image-wrapper"
              style={this.state.cssForSmallerImages}
            >
              <Img
                className={`work-small-picture  version-${this.props.version}`}
                sizes={this.props.left}
              />
            </div>
            <div className="work-image-wrapper">
            <div
              className={`work-content  version-${this.props.version}`}
              onClick={this.link}
            >
              <h3 className={`strike ${this.state.textHover ? "" : "strike-hover"}`}>
                <span>{this.props.title} </span>
              </h3>
            </div>
            </div>
            
            
          </div>
        </div>
      </div>
    );
  }
}

export default WorkLayout;
