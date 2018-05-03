import { navigateTo } from "gatsby-link"
import React, { Component } from 'react';

class ShootSnippet extends Component {
  constructor(props){
    super(props);
  }
  link = () => {
    navigateTo('/'+this.props.path)
  }
  render() {
    
    const leftStyle = {
      background: `no-repeat center url('${this.props.left}')`
    };
    const centerStyle = {
      background: `no-repeat center url('${this.props.center}')`
    };
    const rightStyle = {
      background: `no-repeat center url('${this.props.right}')`
    };
    return (
      <div className="columns work-item " >
        <div ref="left" className="left column work-item-column hide-md col-3 col-sm-3">
          <div className="left-picture" style={leftStyle} />
        </div>
        <div  ref="center" className="center column work-item-column col-5 col-sm-6 col-xs-6" >
          <div className="center-picture" style={centerStyle} onClick={this.link}/>
          <div className="center-content" onClick={this.link} >           
            <h3>
              {this.props.title} <span>— {this.props.date}</span>
            </h3>
          </div>
        </div>
        <div  ref="right" className="right column work-item-column col-sm-6 col-xs-6">
          <div className="right-picture" style={rightStyle} />
        </div>
      </div>
    );
  }
}

export default ShootSnippet;


