import { navigateTo } from "gatsby-link";
import React, { Component } from "react";
import Img from "gatsby-image";
import * as Vibrant from "node-vibrant";


class CategoryTile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textHover: false,
      shift: 0,
      progress: 0,
      color: {},
      cssForLeftImage: {},
      cssForRightImage: {},
      classes: []
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
          classes: this.getClassesFromProps(),
          textHover: false
        },
        () => {
          this.initializeScene();
          this.initializeColor();
        }
      );
    }
  }
  componentWillUnmount = () => {
    this.setState({
      controller: null
    });
  };
  getClassesFromProps = () => {
    const {
      leftOrientation,
      centerOrientation,
      rightOrientation,
      version
    } = this.props;
    const classes = [];
    if (leftOrientation === "portrait") {
      classes[0] = `${leftOrientation} version-${version} is-3-tablet is-offset-1 is-hidden-touch`;
    } else if (leftOrientation === "landscape") {
      classes[0] = `${leftOrientation} version-${version} is-4-tablet is-hidden-touch`;
    }
    if (centerOrientation === "portrait") {
      classes[1] = `${centerOrientation} version-${version} is-10-mobile is-offset-1-mobile is-5-tablet`;
    } else if (centerOrientation === "landscape") {
      classes[1] = `${centerOrientation} version-${version} is-12-mobile is-7-tablet `;
    }
    if (rightOrientation === "portrait") {
      classes[2] = `${rightOrientation} version-${version} is-6-mobile is-4-tablet is-3-desktop is-hidden-mobile`;
    } else if (rightOrientation === "landscape") {
      classes[2] = `${rightOrientation} version-${version} is-6-mobile is-7-tablet is-4-desktop is-hidden-mobile`;
    }
    return classes;
  };
  initializeScene = () => {
    const isBrowser = typeof window !== "undefined";
    const ScrollMagic = isBrowser ? require("scrollmagic") : undefined;
    let scene = new ScrollMagic.Scene({
      triggerElement: `#category-${this.props.index}`,
      triggerHook: ".5"
    })
      .duration(1000)
      .on("progress", event => {
        console.log(event);
        if (this.props.version) {
          this.setState({
            cssForLeftImage: {
              transform:
                "translate(" +
                Math.floor(event.progress * 50) +
                "px, " +
                Math.floor(event.progress * 25) +
                "px)"
            },
            cssForRightImage: {
              transform:
                "translate(" +
                -Math.floor(event.progress * 50) +
                "px, " +
                -Math.floor(event.progress * 25) +
                "px)"
            }
          });
        } else {
          this.setState({
            cssForLeftImage: {
              transform:
                "translate(" +
                +Math.floor(event.progress * 50) +
                "px, " +
                -Math.floor(event.progress * 25) +
                "px)"
            },
            cssForRightImage: {
              transform:
                "translate(" +
                -Math.floor(event.progress * 50) +
                "px, " +
                Math.floor(event.progress * 25) +
                "px)"
            }
          });
        }
      })
      .addTo(this.state.controller);
  };
  initializeColor = () => {
    this.props.pictureSample;
    Vibrant.from(this.props.pictureSample).getPalette((err, palette) => {
      let rgb;
      //if (palette.Muted) rgb = palette.Muted._rgb;
      // else if (palette.LightMuted) rgb = palette.LightMuted._rgb;
      rgb = palette.Vibrant._rgb;
      
      console.log(rgb)
      foreach

      this.setState({
        color: {color: `rgb(${Math.round(rgb[0],1)},${Math.round(rgb[1],1)},${Math.round(rgb[2],1)})`}
      });      
    });
  }
  render() {
    return (
      <div className="category" id={`category-${this.props.index}`}>
        <div className="category-pictures columns is-gapless ">
          <div
            className={`column work-image-wrapper ${this.state.classes[0]}`}
            key={(this.state.progress + 1) * 400}
            style={this.state.cssForLeftImage}
          >
            <Img
              className={`category-left-picture`}
              sizes={this.props.left}
            /> 
          </div>
          <div
            className={`column category-center work-image-wrapper ${this.state.classes[1]}`}
            onClick={this.link}
            onMouseEnter={this.hoverOffText}
            onMouseLeave={this.hoverOnText}
          >
            <Img
              className={`category-center-picture`}
              sizes={this.props.center}
            />
          </div>
          <div
            className={`column work-image-wrapper ${this.state.classes[2]}`}
            key={(this.state.progress + 1) * 300}
            style={this.state.cssForRightImage}
          >
            <Img
              className={`category-right-picture`}
              sizes={this.props.right}              
            />
          </div>
        </div>
        <div
          className="category-content"
          onClick={this.link}
          onMouseEnter={this.hoverOffText}
          onMouseLeave={this.hoverOnText}
        >
          <h3
            className={`underline ${
              this.state.textHover ? "" : "underline-active"
            }`}
            styles={this.state.color}
          >
            <span styles={this.state.color}>{this.props.title}</span>
          </h3>
        </div>
      </div>
    );
  }
}

export default CategoryTile;

