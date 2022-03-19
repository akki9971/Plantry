import React, { useState } from 'react'
import { Carousel } from 'react-responsive-carousel'
import { AiFillStar } from 'react-icons/ai'
import { TiTick } from 'react-icons/ti'
import Link from 'next/link'

export const ProductCard = ({
    name = "Two Layer Bamboo Plant Anneversery Greetings",
    price = '399',
    rating = '4.8',
    reviews = 3,
    images = [],
    desc = [
        "Plant Name - Two Layer Lucky Bamboo Plant",
        "Plant Type - Lucky Bamboo",
        "Plant Height - Upto 5 inches",
        "Plant Placement - Indoors",
        "Square Glass Vase - 3 x 3 inches",
        "Happy Anniversary Peel Off Sticker"
    ]
}) => {

    const [canPlay, setCanPlay] = useState(false)
    return (
        <>
            <div className="product-card m-sm-2 my-2 mx-1" onMouseEnter={() => setCanPlay(true)} onMouseLeave={() => setCanPlay(false)}>
                <Link href="/proDetail">
                    <a className="td-none text-dark pd-card">
                        <div className="img-box">
                            <Carousel autoPlay={canPlay} interval="2000" stopOnHover={false} transitionTime="500" infiniteLoop showIndicators={true} showThumbs={false} showArrows={false} showStatus={false} axis="horizontal" >
                                {
                                    images.map((e, i) => {
                                        return <div key={i} className="PD-img-car">
                                            <img src={`Images/${e}`} height="290px" />
                                            {/* <p className="legend">Legend 1</p> */}
                                        </div>
                                    })
                                }

                            </Carousel>
                        </div>
                        <div className="content-box">
                            <div className="content p-2">
                                <h6 className="p-name text-left lg_hide_over_text">{name}</h6>
                                <div className="d-flex justify-content-between">
                                    <div className="">
                                        <h6 className="fs-20">
                                            <span className="me-1">&#8377;</span>
                                            {price}
                                        </h6>
                                        <p className="text-green fs-14 mb-0">Get it Tomorrow</p>
                                    </div>
                                    <div className="">
                                        <h6 className="text-white bg-orange text-center p-1 br-4px">
                                            {rating}
                                            <span className="ms-1">
                                                <AiFillStar />
                                            </span>
                                        </h6>
                                        <p className="fs-14 mb-0">{reviews} reviews</p>
                                    </div>
                                </div>
                                <div className="product-desc mt-2">
                                    <ul className="list-unstyled">
                                        {
                                            desc.map((e, i) => {
                                                return <li key={i} className="fs-14 lg_hide_over_text">
                                                    <TiTick /> {e}
                                                </li>
                                            })
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </a>
                </Link>
            </div>
        </>
    )
}
