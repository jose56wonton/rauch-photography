import React from "react";
import { navigateTo } from "gatsby-link"

const ShootSnippet = (props) => {
  
 
    const leftStyle = {
      background: `no-repeat center url('${props.left}')`
    };
    const centerStyle = {
      background: `no-repeat center url('${props.center}')`
    };
    const rightStyle = {
      background: `no-repeat center url('${props.right}')`
    };
    const link =  () => {
      navigateTo('/'+props.path)
    }

    return (
      <div className="columns fill" >
        <div className="left column hide-md col-3 col-sm-3">
          <div className="left-picture" style={leftStyle} />
        </div>
        <div className="center column col-5 col-sm-6 col-xs-6" >
          <div className="center-picture" style={centerStyle} onClick={link}/>
          <div className="center-content" onClick={link} >           
            <h3>
              {props.title} <span>— {props.date}</span>
            </h3>
          </div>
        </div>
        <div className="right column col-sm-6 col-xs-6">
          <div className="right-picture" style={rightStyle} />
        </div>
      </div>
    );
  
}

export default ShootSnippet;
