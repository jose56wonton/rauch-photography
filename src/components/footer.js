import React from "react";
import Link from "gatsby-link";

const Footer = ({ siteTitle,links }) => (
  <div className="footer">
    <div>
      <p>All right reserved - Zach Rauch</p>
    </div>
    <div>
      <p>
        Folow me on
        <a className="underline-inverse" href={links.facebook}>
          <span/>facebook
        </a> 
        and
         <a className="underline-inverse" href={links.instagram}>
          <span/>instagram
        </a>
      </p>
    </div>
    
  </div>
);

export default Footer;

