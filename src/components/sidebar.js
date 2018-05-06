import React, { Component } from "react";
import Link,{navigateTo} from "gatsby-link";

class SideBar extends Component {
  link = (path) => {
    
    navigateTo(path);
    this.props.toggleBurger();
  };
  render() {
    console.log(this.props.active);
    return (
      <div
        className={`hamburger-menu ${
          this.props.burgerActive ? "is-active" : ""
        }`}
      >
        <div className="hamburger-content">
          <div
            className="hamburger-element strike"
            activeClassName="strike-active"
            onClick={() => this.link("/")}
          >
            <span >zach rauch</span>
          </div>
          <div
            className="hamburger-element strike"
            activeClassName="strike-active"
            onClick={() => this.link("/work")}
           
          >
            <span >work</span>
          </div>
          <div
            className="hamburger-element strike"
            activeClassName="strike-active"
            onClick={() => this.link("/contact")}            
          >
            <span>contact</span>
          </div>
          <button
          className={`hamburger  hamburger--slider ${
            this.props.burgerActive ? "is-active" : "is-invisible"
          }`}
          type="button"
          aria-label="Menu"
          aria-controls="navigation"
          aria-expanded="true"
          onClick={this.props.toggleBurger}
        >
          <span className="hamburger-box">
            <span className="hamburger-inner" />
          </span>
        </button>
        </div>
        
      </div>
    );
  }
}

export default SideBar;
