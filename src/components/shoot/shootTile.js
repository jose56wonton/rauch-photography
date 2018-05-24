import React, { Component } from 'react';

class ShootTile extends Component {
  
  render() {
    const {index,active,style,pictureSrc} = this.props;
    return (
      <div key={index} className="work-item-box">
        <div
          className={`work-item-photo-wrapper ${active === index && "fade-in-wrapper"}`}
          style={active === index ? null : style}
          id={`work-item-${index}`}
        >
          <img
            className={`work-item-photo ${active === index && "fade-in-photo"}`}
            src={pictureSrc}
          />
        </div>
      </div>
    );
  }
}

export default ShootTile;