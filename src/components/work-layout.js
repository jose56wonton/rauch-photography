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
      css: {}
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
          shift: Math.floor(event.progress * 50),
          css: {transform: "translateX(" + Math.floor(event.progress * 50) + "px)"}
        })
      })
      .addTo(this.state.controller);
  };
  render() {
    console.log(this.state.css);
    
    return (
      <div  className="work" id={`work-${this.props.index}`}>
        <div className={`work-pictures version-${this.props.version}`}>
          <div className="col-1" >
            <div key={this.state.progress} className="work-image-sizing-wrapper" style={this.state.css}>
              <Img
                className={`work-center-picture version-${this.props.version}`}
                sizes={this.props.center}
                onClick={this.link}
                onMouseEnter={this.hoverOffText}
                onMouseLeave={this.hoverOnText}
              />
            </div>
          </div>
          <div className="col-2">
            <div className="asdf">
              <div key={this.state.progress} className="work-image-sizing-wrapper" style={this.state.css}>
                <Img
                  className={`work-left-picture  version-${this.props.version}`}
                  sizes={this.props.left}
                />
              </div>
            </div>
            <div
              className={`work-content  version-${this.props.version}`}
              onClick={this.link}
            >
              <h3
                className={`strike ${
                  this.state.textHover ? "" : "strike-hover"
                }`}
              >
                <span>{this.props.title} </span>
              </h3>
            </div>

            <div className="asdf">
              <div key={this.state.progress} className="work-image-sizing-wrapper" style={this.state.css}>
                <Img
                  className={`work-right-picture version-${
                    this.props.version
                  } `}
                  sizes={this.props.right}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default WorkLayout;
