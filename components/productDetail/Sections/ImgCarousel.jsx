import React from 'react'
import { Carousel } from 'react-responsive-carousel'

export const ImgCarousel = ({
    images = [],imgWidth='75%' }) => {

    return (
        <>
            <Carousel autoPlay loop interval="5000" transitionTime="1000" showIndicators={true} showThumbs={true} showStatus={false} axis="horizontal" >
                {
                    images.map((e, i)=>{
                        return <div key={i} className="PD-img-car">
                            <img src={`Images/${e}`} style={{ width: imgWidth}} />
                            {/* <p className="legend">Legend 1</p> */}
                        </div>
                    })
                }
                
            </Carousel>
        </>
    )
}
