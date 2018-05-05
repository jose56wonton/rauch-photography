import React from "react";
import Link from "gatsby-link";

const Header = ({ siteTitle }) => (
  <nav
    className="navbar is-transparent is-fixed-top"
    role="navigation"
    aria-label="main navigation"
  >
    <div className="navbar-brand">
        <Link className="navbar-element strike" activeClassName="active" to="/">
          <span >zach rauch</span>
        </Link>

      <a
        role="button"
        className="navbar-burger"
        aria-label="menu"
        aria-expanded="false"
      >
        <span aria-hidden="true" />
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </a>
    </div>
    <div className="navbar-menu">
      <div className="navbar-end">
          
          <Link className="navbar-element strike" activeClassName="strike-active" to="/work">
            <span >work</span>
          </Link>
          <Link className="navbar-element strike" activeClassName="strike-active" to="/contact">
            <span >contact</span>
          </Link>
      </div>
    </div>
  </nav>
);

export default Header;
