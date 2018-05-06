import { navigateTo } from "gatsby-link";
import React, { Component } from "react";

class WorkLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textHover: true
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

  render() {
    return (
      <div className="work">
        <div className={`work-pictures version-${this.props.version}`}>
          <div className="col-1">
            <div className="work-image-sizing-wrapper">
              <img
                className={`work-center-picture version-${this.props.version}`}
                src={this.props.center}
                onClick={this.link}
                onMouseEnter={this.hoverOffText}
                onMouseLeave={this.hoverOnText}
              />
            </div>
          </div>
          <div className="col-2">
            <div className="asdf">
              <div className="work-image-sizing-wrapper">
                <img
                  className={`work-left-picture  version-${this.props.version}`}
                  src={this.props.left}
                />
              </div>
            </div>
            <div className={`work-content  version-${this.props.version}`} onClick={this.link}>
              <h3
                className={`strike ${
                  this.state.textHover ? "" : "strike-hover"
                }`}
              >
                <span>{this.props.title} </span>
              </h3>
            </div>

            <div className="asdf">
              <div className="work-image-sizing-wrapper">
                <img
                  className={`work-right-picture version-${this.props.version} `}
                  src={this.props.right}
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
