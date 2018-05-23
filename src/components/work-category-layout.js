import { navigateTo } from "gatsby-link";
import React, { Component } from "react";
import Img from "gatsby-image";
import OnVisible from "react-on-visible";
class WorkCategoryLayout extends Component {
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
          this.initializeScene()
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
    this.setTim
    const isBrowser = typeof window !== "undefined";
    const ScrollMagic = isBrowser ? require("scrollmagic") : undefined;
    let scene = new ScrollMagic.Scene({
      triggerElement: `#work-category-${this.props.index}`,
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
  render() {
    return (
      <div className="work-category" id={`work-category-${this.props.index}`}>
        <div className="work-category-pictures columns is-gapless ">
          <OnVisible
            className={`column work-image-wrapper ${this.state.classes[0]}`}
            key={(this.state.progress + 1) * 400}
            style={this.state.cssForLeftImage}
          >
            <Img
              className={`work-category-left-picture`}
              sizes={this.props.left}
            />
           
            
          </OnVisible>
          <OnVisible
            className={`column work-category-center work-image-wrapper ${this.state.classes[1]}`}
            onClick={this.link}
            onMouseEnter={this.hoverOffText}
            onMouseLeave={this.hoverOnText}
          >
            <Img
              className={`work-category-center-picture`}
              sizes={this.props.center}
            />
          </OnVisible>
          <OnVisible
            className={`column work-image-wrapper ${this.state.classes[2]}`}
            key={(this.state.progress + 1) * 300}
            style={this.state.cssForRightImage}
          >
            <Img
              className={`work-category-right-picture`}
              sizes={this.props.right}              
            />
          </OnVisible>
        </div>
        <div
          className="work-category-content"
          onClick={this.link}
          onMouseEnter={this.hoverOffText}
          onMouseLeave={this.hoverOnText}
        >
          <h3
            className={`underline ${
              this.state.textHover ? "" : "underline-active"
            }`}
          >
            <span>{this.props.title}</span>
          </h3>
        </div>
      </div>
    );
  }
}

export default WorkCategoryLayout;


// 