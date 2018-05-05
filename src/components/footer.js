import React from 'react'
import Link from 'gatsby-link'

const Footer = ({ siteTitle }) => (
  <div className="footer">
    <div>
      <p>All right reserved - Zach Rauch</p>
    </div>
    <div>
      <p>
        Folow me on <a>facebook</a> and <a>instagram</a>
      </p>
    </div>
  </div>
)

export default Footer

/*

<div className="columns">
<div className="column is-8">
  <p className="footer-title">hi there</p>
  <p>
    incidunt. Orci varius natoque penatibus et magnis dis parturient
    montes, nascetur ridiculus mus. Proin congue nibh sit amet libero
    tempor, in semper dui gravida.
  </p>
</div>
<div className="column is-4">
  <div className="columns">
    <div className="column">
      <p className="footer-title">contact</p>
      <p>515-357-3803</p>
      <p>jose56wonton@gmail.com</p>
    </div>
    <div className="column">
      <p className="footer-title">follow</p>
      <p>facebook</p>
      <p>instagram</p>
    </div>
  </div>
</div>
</div>
<div className="columns">
<div className="column">
  <p className="">© 2018 Zach Rauch All Rights Reserved.</p>
</div>
<div className="column" />
</div>



*/

/*
 <nav
    className="navbar is-transparent is-fixed-top"
    role="navigation"
    aria-label="main navigation"
  >
    <div className="navbar-brand">
        <Link className="navbar-item" activeClassName="navbar-item-active" to="/">
          <span className="underline" />zach rauch
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
            <span className="underline"></span>work
          </Link>
          <Link className="navbar-item" activeClassName="navbar-item-active" to="/contact">
            <span className="underline"></span>contact
          </Link>
      </div>
    </div>
  </nav>
  */
