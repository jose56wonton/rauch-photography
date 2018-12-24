import React, { Component } from 'react';

class ShootTile extends Component {
  
  render() {
    const {index,active,style,pictureSrc} = this.props;
    //console.log(this.props.pictureSize.sizes.src)
    return (
      <div key={index} className="shoot-box">
        <div
          className={`shoot-photo-wrapper ${active === index && "fade-in-wrapper"}`}
          style={active === index ? null : style}
          id={`shoot-${index}`}
        >
          <img
            className={`shoot-photo ${active === index && "fade-in-photo"}`}
            src={this.props.pictureSize.sizes.src}
            
          />
        </div>
      </div>
    );
  }
}

export default ShootTile;