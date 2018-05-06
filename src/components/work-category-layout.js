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
  determineOrientation = () => {

  }
  getClassesFromProps = () => {
    const {leftOrientation,centerOrientation,rightOrientation} = this.props;
    const classes = []
    if(leftOrientation === "portrait"){
      classes[0] = `${leftOrientation} is-3-tablet is-hidden-touch`
    }else if(leftOrientation === "landscape"){
      classes[0] =`${leftOrientation} is-4-tablet is-hidden-touch`
    }
    if(centerOrientation === "portrait"){
      classes[1] =`${centerOrientation} is-9-mobile is-5-tablet`
    }else if(centerOrientation === "landscape"){
      classes[1] =`${centerOrientation} is-9-mobile is-6-tablet`
    }
    if(rightOrientation === "portrait"){
      classes[2] =`${rightOrientation} is-6-mobile is-3-tablet`
    }else if(rightOrientation === "landscape"){
      classes[2] =`${rightOrientation} is-9-mobile is-5-tablet is-4-desktop`
    } 
    return classes;
  }


  render() {
    
    const classes = this.getClassesFromProps();
    

    


    return (
      <div className="work-category">
        <div className="work-category-pictures columns is-gapless ">
          <img className={`work-category-left-picture column  ${classes[0]}`} src={this.props.left} />         
          <img
            className={`work-category-center-picture column  ${classes[1]}`}
            src={this.props.center}
            onClick={this.link}
            onMouseEnter={this.hoverOffText}
            onMouseLeave={this.hoverOnText}
          />
          <img className={`work-category-right-picture column  ${classes[2]}`} src={this.props.right} />
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
