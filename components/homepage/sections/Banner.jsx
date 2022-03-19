import React from 'react'

export const Banner = ({src, title='image'}) => {
  return (
    <>
        <div className="main_banner">
            <img src={src} alt={title} />
        </div>
    </>
  )
}
