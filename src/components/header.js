import React from 'react'
import Link from 'gatsby-link'

const Header = ({ siteTitle }) => (
  <nav className="navbar" role="navigation" aria-label="main navigation">
    <div className="navbar-brand">
      <Link className="navbar-item" to="/">
        Zach Rauch
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
        <Link className="navbar-item" to="/">
          About
        </Link>
        <Link className="navbar-item" to="/work">
          Work
        </Link>
        <Link className="navbar-item" to="/contact">
          Contact
        </Link>
      </div>
    </div>
  </nav>
)

export default Header

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