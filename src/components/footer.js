import React from "react";
import Link from "gatsby-link";

const Footer = ({ siteTitle }) => (
  <div className="footer">
    <div>
      <p>All right reserved - Zach Rauch</p>
    </div>
    <div>
      <p>
        Folow me on
        <a className="underline-inverse" href="https://www.facebook.com/zach.rauch27">
          <span/>facebook
        </a> 
        and
         <a className="underline-inverse" href="https://www.instagram.com/zacharydakery/">
          <span/>instagram
        </a>
      </p>
    </div>
    
  </div>
);

export default Footer;

