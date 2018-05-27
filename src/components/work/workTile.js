import { navigateTo } from "gatsby-link";
import React, { Component } from "react";
import Img from "gatsby-image";

class WorkTile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textHover: false,
      shift: 0,
      progress: 0,
      cssForLargerImages: {},
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
    const isBrowser = typeof window !== "undefined";
    const ScrollMagic = isBrowser ? require("scrollmagic") : undefined;
    if (ScrollMagic) {
      this.setState(
        {
          controller: new ScrollMagic.Controller(),
          textHover: false
        },
        () => {
          this.initializeScene(ScrollMagic);
        }
      );
    }
  }
  componentWillUnmount = () => {
    this.setState({
      controller: null
    });
  };

  initializeScene = ScrollMagic => {

    let scene = new ScrollMagic.Scene({
      triggerElement: `#work-${this.props.index}`,
      triggerHook: ".9"
    })
      .duration(5000)
      .on("progress", event => {
        if (this.props.version) {
          this.setState({
            cssForSmallerImages: {
              transform:
                "translate(" +
                -Math.floor(event.progress * 200) +
                "px, " +
                -Math.floor(event.progress * 25) +
                "px)"
            },
            cssForLargerImages: {
              transform:
                "translate(" +
                Math.floor(event.progress * 200) +
                "px, " +
                -Math.floor(event.progress * 25) +
                "px)"
            }
          });
        } else {
          this.setState({
            cssForSmallerImages: {
              transform:
                "translate(" +
                Math.floor(event.progress * 200) +
                "px, " +
                -Math.floor(event.progress * 25) +
                "px)"
            },
            cssForLargerImages: {
              transform:
                "translate(" +
                -Math.floor(event.progress * 200) +
                "px, " +
                -Math.floor(event.progress * 25) +
                "px)"
            }
          });
        }
      })
      .addTo(this.state.controller);
  };
  render() {
    return (
      <div className="work" id={`work-${this.props.index}`}>
        <div className={`work-pictures columns is-gapless version-${this.props.version}`}>
          <div className="column col-1 is-6 is-hidden-touch">
          <div
            key={this.state.progress * 10}
            onClick={this.link}
            className="work-image-wrapper"
            style={this.state.cssForLargerImages}
            onMouseEnter={this.hoverOffText}
            onMouseLeave={this.hoverOnText}
          >
            <Img
              className={`work-large-picture version-${this.props.version}`}
              sizes={this.props.larger}
            />
          </div>
          </div>
          
          <div className="column col-2 is-6 is-12-touch">
            <div className="columns is-gapless is-multiline">
            <div
              key={this.state.progress * 20}
              className="work-image-wrapper column is-12 no-motion-touch"
              style={this.state.cssForSmallerImages}
              onClick={this.link}
              onMouseEnter={this.hoverOffText}
              onMouseLeave={this.hoverOnText}
            >
              <Img
                className={`work-small-picture version-${this.props.version}`}
                sizes={this.props.smaller}
              />
            </div>
            <div
              className={`work-content column is-12 version-${this.props.version}`}
              onClick={this.link}
              onMouseEnter={this.hoverOffText}
              onMouseLeave={this.hoverOnText}
            >
              <h3
                className={`underline ${
                  this.state.textHover ? "" : "underline-active"
                  }`}
              >
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

export default WorkTile;
