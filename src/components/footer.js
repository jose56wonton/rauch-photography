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
        <a className="underline" href="https://www.facebook.com/zach.rauch27">
          <span>facebook </span>
        </a> 
        and
         <a className="underline" href="https://www.instagram.com/zacharydakery/">
          <span>instagram </span>
        </a>
      </p>
    </div>
  </div>
);

export default Footer;

