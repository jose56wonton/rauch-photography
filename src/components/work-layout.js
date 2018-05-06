import { navigateTo } from "gatsby-link";
import React, { Component } from "react";

class WorkLayout extends Component {
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
    return (
      <div className="work">
        <div className="work-pictures">
          <img className={`work-left-picture ${this.props.leftOrientation}`} src={this.props.left} />         
          <img
            className={`work-center-picture ${this.props.centerOrientation}`}
            src={this.props.center}
            onClick={this.link}
            onMouseEnter={this.hoverOffText}
            onMouseLeave={this.hoverOnText}
          />
          <img className={`work-right-picture ${this.props.rightOrientation}`} src={this.props.right} />
        </div>
        <div className="work-content" onClick={this.link}>
          <h3 className={`strike ${this.state.textHover ? "" : "strike-hover" }`}>            
            <span>{this.props.title} </span>
          </h3>
        </div>
      </div>
    );
  }
}

export default WorkLayout;
