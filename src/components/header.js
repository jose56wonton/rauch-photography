import React from "react";
import Link from "gatsby-link";

const Header = ({ siteTitle }) => (
  <nav
    className="navbar is-transparent is-fixed-top"
    role="navigation"
    aria-label="main navigation"
  >
    <div className="navbar-brand">
        <Link className="navbar-item" activeClassName="navbar-item-active" to="/about">
          <span className="underline" />Zach Rauch
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
          
          <Link className="navbar-item" activeClassName="navbar-item-active" to="/work">
            <span className="underline"></span>Work
          </Link>
          <Link className="navbar-item" activeClassName="navbar-item-active" to="/contact">
            <span className="underline"></span>Contact
          </Link>
      </div>
    </div>
  </nav>
);

export default Header;

{
  /* <div className="page-frame">
  <header className="navbar">
    <div className="navbar-left">
      <h1>
        <Link to="/">{siteTitle}</Link>
      </h1>
    </div>
    <div className="navbar-right">
      <ul>
       
        <li>
          <Link to="/">About</Link>
        </li>
        <li>
          <Link to="/work">Work</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
    </header>
  </div> */
}
