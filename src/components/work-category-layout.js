import { navigateTo } from "gatsby-link";
import React, { Component } from "react";

class WorkCategoryLayout extends Component {
  constructor(props) {
    super(props);
    this.state= { 
      textHover: false
    }
  }
  link = () => {
    navigateTo("/" + this.props.path);
  };
  hoverOffText = () => {
    this.setState({textHover: false})
  }
  hoverOnText = () => {
    this.setState({textHover: true})
  }
  render() {
    console.log(this.state.textHover)
    return (
      <div className="work-category">
        <div className="work-category-pictures">
          <img className="work-category-left-picture" src={this.props.left} />         
          <img
            className="work-category-center-picture"
            src={this.props.center}
            onClick={this.link}
            onMouseEnter={this.hoverOffText}
            onMouseLeave={this.hoverOnText}
          />
          <img className="work-category-right-picture" src={this.props.right} />
        </div>
        <div className="work-category-content" onClick={this.link}>
          <h3 className={`strike ${this.state.textHover ? "" : "strike-hover"}`}>            
            <span>{this.props.title} — {this.props.date}</span>
          </h3>
        </div>
      </div>
    );
  }
}

export default WorkCategoryLayout;
