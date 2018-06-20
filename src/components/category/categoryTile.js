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
    const {version} = this.props;  
    const classes = [];    
    classes[0] = `is-3-tablet ${this.props.version === 1 ? "is-offset-1-inverse" : "is-offset-1"} portrait is-hidden-touch`; 
    classes[1] = ` is-5-desktop is-hidden-touch`;   
    classes[2] = ` is-12-tablet is-4-desktop `;    
    return classes;
  };
  initializeScene = () => {
    const isBrowser = typeof window !== "undefined";
    const ScrollMagic = isBrowser ? require("scrollmagic") : undefined;
    let scene = new ScrollMagic.Scene({
      triggerElement: `#category-${this.props.index}`,
      triggerHook: ".9"
    })
      .duration(5000)
      .on("progress", event => {
        if (this.props.version) {
          this.setState({
            cssForLeftImage: {
              transform:
                "translate(" +
                Math.floor(event.progress * 200) +
                "px, " +
                Math.floor(event.progress * 25) +
                "px)"
            },
            cssForRightImage: {
              transform:
                "translate(" +
                -Math.floor(event.progress * 200) +
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
                +Math.floor(event.progress * 200) +
                "px, " +
                -Math.floor(event.progress * 25) +
                "px)"
            },
            cssForRightImage: {
              transform:
                "translate(" +
                -Math.floor(event.progress * 200) +
                "px, " +
                Math.floor(event.progress * 25) +
                "px)"
            }
          });
        }
      })
      .addTo(this.state.controller);
  };
  render() {
    return (
      <div className="category" id={`category-${this.props.index}`}>
        <div className="category-pictures columns  is-gapless ">
          <div
            className={`column category-image-wrapper no-motion-touch ${this.props.version === 0 ? this.state.classes[0] : this.state.classes[2]}`}
            key={(this.state.progress + 1) * 400}
            style={this.state.cssForLeftImage}
          >
            <Img
              className={`category-left-picture`}
              sizes={this.props.version === 0 ? this.props.left : this.props.right}
            />
          </div>
          <div
            className={`column category-image-wrapper ${this.state.classes[1]}`}
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
            className={`column category-image-wrapper no-motion-touch ${this.props.version === 0 ? this.state.classes[2] : this.state.classes[0]}`}
            key={(this.state.progress + 1) * 300}
            style={this.state.cssForRightImage}
          >
            <Img
              className={`category-right-picture`}
              sizes={this.props.version === 0 ? this.props.right : this.props.left}
            />
          </div>
        </div>
        <div
          className="category-content"
          onClick={this.link}
          onMouseEnter={this.hoverOffText}
          onMouseLeave={this.hoverOnText}
        >
          <h1
            className={`underline ${
              this.state.textHover ? "" : "underline-active"
              }`}
          >
            <span >{this.props.title}</span>
          </h1>
        </div>
      </div>
    );
  }
}

export default CategoryTile;

