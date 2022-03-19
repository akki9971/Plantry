import React from 'react'
import { AiFillStar, AiOutlineExclamationCircle } from 'react-icons/ai'
import { BsTagFill } from 'react-icons/bs'
import { RiArrowDropDownLine } from 'react-icons/ri'
import { ImgCarousel } from './Sections'

const images = [
    "flowers/Syngonium.jpg",
    "flowers/Syngonium.jpg",
    "flowers/Syngonium.jpg",
    "flowers/Syngonium.jpg",
    "flowers/Syngonium.jpg"
]
export const ProductDetail = ({
    name = "Two Layer Bamboo Plant Anniversary Greetings",
    rating = "4.6",
    reviewsCount = "37",
    prices = "399",
    details = [
        "Plant Name - Two Layer Lucky Bamboo Plant",
        "Plant Type - Lucky Bamboo",
        "Plant Height - Upto 5 inches",
        "Plant Placement - Indoors",
        "Square Glass Vase - 3 x 3 inches",
        "Happy Anniversary Peel Off Sticker"
    ],
    trivia = [
        "Lucky Bamboo is a very common indoor plant in various parts of the world like India, China & Taiwan.",
        "Lucky bamboo plant represents wood as a natural element and a red ribbon tied around the bamboo represents the element fire.The plant tends to create a sense of balance and safety in the room."
    ]
}) => {

    const offers = [
        {
            provider: 'fsone',
            offer: "Get 15% Off* on First Order",
            tnc: "*T&C"
        },
        {
            provider: 'fsone',
            offer: "Get 15% Off* on First Order",
            tnc: "*T&C"
        },
        {
            provider: 'fsone',
            offer: "Get 15% Off* on First Order",
            tnc: "*T&C"
        },
        {
            provider: 'fsone',
            offer: "Get 15% Off* on First Order",
            tnc: "*T&C"
        },
        {
            provider: 'fsone',
            offer: "Get 15% Off* on First Order",
            tnc: "*T&C"
        },
        {
            provider: 'fsone',
            offer: "Get 15% Off* on First Order",
            tnc: "*T&C"
        },
        {
            provider: 'fsone',
            offer: "Get 15% Off* on First Order",
            tnc: "*T&C"
        },
        {
            provider: 'fsone',
            offer: "Get 15% Off* on First Order",
            tnc: "*T&C"
        },
        {
            provider: 'fsone',
            offer: "Get 15% Off* on First Order",
            tnc: "*T&C"
        }

    ]
    return (
        <>
            <style jsx>{`
            .arrow {
                border: solid #0d6efd;
                border-width: 0 2px 2px 0;
                display: inline-block;
                padding: 3px;
                margin-right: 5px;
            }
            .down {
                transform: rotate(45deg) translateY(-5px);
                -webkit-transform: rotate(45deg) translateY(-5px);
            }
            li {
                font-size: 14px;
            }
            li::marker {
                color: rgb(200,200,200);
            }
        `}</style>
            <div className="pro_detail py-4">
                <div className="w-large-90">
                    <div className="row">
                        <div className="col-md-6 ">
                            <div className="stick-top">
                                <ImgCarousel images={images} />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <h6>{name}</h6>
                            <p className="fs-12 text-gold m-0" >
                                <span className="me-1">
                                    {rating}
                                </span>
                                {Array.apply(null, { length: Math.floor(rating) }).map((e, i) => {

                                    return <span className=""><AiFillStar /> </span>
                                })}
                                <a href="" className="ms-5 td-none">{reviewsCount} reviews</a>
                            </p>
                            <div className="d-flex justify-content-start ">
                                <div className="">
                                    <span style={{ verticalAlign: '22px', marginRight: '2px' }} className=" d-inline-block fs-16 text-danger">&#8377;</span>
                                    <span className="fs-48 lh-1 text-danger">{prices}</span>
                                </div>
                                <div className="ms-4">
                                    <p className="m-0 ">
                                        <a href="" className="td-none text-dark"><AiOutlineExclamationCircle /></a>
                                    </p>
                                    <p className="fs-14 rounded bg-green px-2 text-white"><BsTagFill />  &nbsp;Offers available</p>
                                </div>
                            </div>
                            <p className="text-grey fs-14" style={{ margin: '-10px 0 10px 10px' }} >inclisive of all taxes</p>
                            <p className=""><a href="" className="td-none"><i className="arrow down"></i> view more details</a> </p>
                            <p className="text-green fw-600 mb-0"><AiOutlineExclamationCircle /> Enter correct Pincode for hassle free timely delivery.</p>
                            <div className="row" style={{ marginTop: '5px' }}>
                                <div className="col-6">
                                    <input type="text" className="glow-input w-100 p-2" placeholder="* Pincode" />
                                    <p className="m-0"><a href="" className="td-none fw-500">Don't know Pincode ?</a></p>
                                </div>
                                <div className="col-6">
                                    <input type="date" className="w-100 p-2 br-4px " disabled placeholder="date" />
                                </div>
                            </div>
                            <div className="row" style={{ marginTop: '5px' }}>
                                <div className="col-6">
                                    <button className="bg-green w-100 rounded border-0 text-white p-2">Add To Cart</button>
                                </div>
                                <div className="col-6">
                                    <button className="bg-orange w-100 rounded border-0 text-white p-2">Buy Now</button>
                                </div>
                            </div>
                            <h6 className="mt-4">
                                <BsTagFill />  Offers Available
                            </h6>
                            {
                                offers.map((e, i)=>{
                                    // console.log(e);
                                    return <div className="row border" key={i}>
                                        <div className="col-3 p-2">
                                            <h6 className="m-0">{e.provider}</h6>
                                        </div>
                                        <div className="col-6 p-2">
                                            <p className="m-0 text-center fs-14">{e.offer}</p>
                                        </div>
                                        <div className="col-3 p-2 text-end">
                                            <a href="" className="td-none">{e.tnc}</a>
                                        </div>
                                    </div>
                                })
                            }
                            <h6 className="mt-4 fs-20">
                               Description
                               <hr />
                            </h6>
                            <p className="fw-500">
                                Product Details
                            </p>
                            <ul>
                                {
                                    details.map((e, i) =>{
                                        return <li className="" key={i}>{e}</li>
                                    })
                                }
                            </ul>
                            <p className="fw-500">
                                Lucky Bamboo Trivia
                            </p>
                            <ul>
                                {
                                    trivia.map((e, i)=>{
                                        return <li className="" key={i}>{e}</li>
                                    })
                                }
                            </ul>
                            <h6 className="mt-4 fs-20">
                                Delivery Information
                               <hr />
                            </h6>
                            <ul>
                                <li>The image displayed is indicative in nature.</li>
                                <li>Actual product may vary in shape or design as per the availability.</li>
                                <li>The number of leaves and the size of the plant depends on seasonal availability.</li>
                                <li>Since flowers are seasonal in nature, flowering plants might be delivered without them.</li>
                                <li>Flowers, if present in plant, may be in fully bloomed, semi-bloomed or bud stage.</li>
                                <li>Since this product is shipped using the services of our courier partners, the date of delivery is an estimate.</li>
                                <li>Your gift may be delivered prior or after the chosen date of delivery.</li>
                                <li>A courier product is delivered separately from other hand delivered products.</li>
                                <li>No deliveries are made on Sundays and National Holidays.</li>
                                <li>Our courier partners do not call prior to delivering an order, so we recommend that you provide an address at which someone will be present to receive the package.</li>
                                <li>The delivery cannot be redirected to any other address.</li>
                                <li>All courier orders are carefully packed and shipped from our warehouse.</li>
                                <li>Soon after the order has been dispatched, you will receive a tracking number that will help you trace your gift.</li>
                            </ul>
                            <h6 className="mt-4 fs-20">
                                Care Instructions
                                <hr />
                            </h6>
                            <ul>
                                <li>Gently remove the plastic from around the plant and rinse the roots with clean water to remove any debris.</li>
                                <li>Place the bamboo in the centre of the pot.</li>
                                <li>You can add small marbles, pebbles or crystals in the container to give the stalks added stability.</li>
                                <li>Just remember to wash them thoroughly.</li>
                                <li>Add fresh, clean water to your bamboo plant two or three times each week.</li>
                                <li>It is important to keep several inches of water in the container, making sure to keep the roots of the plant wet.</li>
                                <li>Changing the water every 7 to 10 days keeps your lucky bamboo in top condition.</li>
                                <li>Indirect light at moderate levels is best for a lucky bamboo plant.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}