import React, { Component } from "react";
import Link,{navigateTo} from "gatsby-link";

class SideBar extends Component {
  link = () => {   
  
    this.props.toggleBurger();
  };
  render() {
    return (
      <div
        className={`hamburger-menu ${
          this.props.burgerActive ? "is-active" : ""
        }`}
      >
        <div className="hamburger-content">
          <Link
            className="hamburger-element strike"
            activeClassName="strike-active"
            onClick={this.link}
            exact 
            to="/"
          >
            <span >zach rauch</span>
          </Link>
          <Link
            className="hamburger-element strike"
            activeClassName="strike-active"
            onClick={this.link}
            exact 
            to="/work"
          >
            <span>work</span>
          </Link>
          <Link
            className="hamburger-element strike"
            activeClassName="strike-active"
            onClick={this.link}  
            exact   
            to="/contact"        
          >
            <span>contact</span>
          </Link>
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
