import { navigateTo } from "gatsby-link";
import React, { Component } from "react";

class ShootSnippet extends Component {
  constructor(props) {
    super(props);
  }
  link = () => {
    navigateTo("/" + this.props.path);
  };
  render() {
    return (
      <div className="work">
        <div className="work-pictures">
          <img className="left-picture" src={this.props.left} />
          <img
            className="center-picture"
            src={this.props.center}
            onClick={this.link}
          />
          <img className="right-picture" src={this.props.right} />
        </div>
        <div className="work-content" onClick={this.link}>
          <h3>
            {this.props.title} <span>— {this.props.date}</span>
          </h3>
        </div>
      </div>
    );
  }
}

export default ShootSnippet;
