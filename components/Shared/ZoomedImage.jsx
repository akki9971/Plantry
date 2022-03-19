import React from 'react'

export const ZoomedImage = ({src, name="image", rounded=false, width="100%" , height="100%", border=false}) => {
  const isBorder = border ? "1px solid #fff" : "none"
  const shadow = border ? "0 0 5px 2px rgba(0, 0, 0, 0.3)" : "none"
  const style = { 
    width: width, 
    height: height, 
    border: isBorder,
    boxShadow: shadow
  }
  return (
    <div className={`zoomImageOnHover ${rounded ? 'circular' : ''}`} style={style} >
        <img src={src} alt={name} className="zoomImage"  />
    </div>
  )
}
