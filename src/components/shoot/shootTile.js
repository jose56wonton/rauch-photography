import React, { Component } from 'react';

class ShootTile extends Component {
  
  render() {
    const {index,active,style,pictureSrc} = this.props;
    return (
      <div key={index} className="shoot-box">
        <div
          className={`shoot-photo-wrapper ${active === index && "fade-in-wrapper"}`}
          style={active === index ? null : style}
          id={`shoot-${index}`}
        >
          <img
            className={`shoot-photo ${active === index && "fade-in-photo"}`}
            src={pictureSrc}
          />
        </div>
      </div>
    );
  }
}

export default ShootTile;