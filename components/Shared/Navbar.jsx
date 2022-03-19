import React, { useState } from 'react'
import { RiArrowDropDownLine } from 'react-icons/ri'

export const Navbar = () => {
    const valentineWeek = [
        "Rose Day",
        "Propose Day",
        "Chocolate Day",
        "Teddy Day",
        "Promise Day",
        "Hug Day",
        "Kiss Day",
        "Valentine's Day",
        "Valentine Week"
    ];
    const byFlowers = [
        "Flowers",
        "Heart Shaped Arrangements",
        "Roses",
        "Carnations",
        "Gerberas",
        "Flowers In Sleeve",
        "Exotic Flowers",
        "Premium Flowers",
        "Box Arrangements",
        "Flowers N Chocolates",
        "Flowers N Cake",
        "Flowers N Personalised",
        "Flowers N Greeting Cards",
        "Flowers N Teddy bear",
        "Flowers N Guitarist"
    ]
     const flowerPersonalised =[

        "All Personalised Gifts",
        "Personalised Mugs",
        "Cushions N Pillow Covers",
        "Water Bottles N Flasks",
        "Photo Frames N Table Tops"
    ]
    const byPersonalised = [
        "All Personalised Gifts",
        "Mugs",
        "Water Bottles",
        "Explosion Boxes",
        "Gadgets",
        "Lamps",
        "Photo Frames",
        "Accessories",
        "Personalised Combos",
        "Cushions"
    ]
    const byChocolate = [

        
        "All Chocolates",
        "Chocolate Bouquets",
        "Chocolate Combos",
        "Cadbury Chocolates",
        "Ferrero Rocher Chocolates",
        "Nestle Chocolates",
        "Handmade Chocolates",
        "Chocolates Combos"
    ]
    const byCakes = [
        "All Cakes",
        "Chocolate Cakes",
        "Pineapple Cakes",
        "Heart Shaped Cakes",
        "Designer Cakes",
        "Photo Cakes",
        "Dry Cakes",
    ]
    const ByPlants = [
        "All Plants",
        "Lucky Bamboo",
        "Premium Plants",
        "Bonsai Plants",
        "Terrariums",
        "Plant Combos",
        "Flowering Plants"
    ]
    const ByMoreGifts = [
        "All Combos",
        "Cosmetic Hampers",
        "Balloon Decorations",
        "Premium Gifts",
        "Jewellery",
        "Soft Toys",
        "Gift Hampers",
        "Perfumes",
        "Accessories",
        "Dining Experiences",
        "Gifts & Guitarist Services"
    ]
    const International = [
        "USA",
        "UAE",
        "UK",
        "Canada",
        "Singapore",
        "Australia",
        "All Countries"
    ]

    const birthday = {
        giftsByChoice : [
            "All Birthday Gifts",
            "Best Seller Birthday Gifts",
            "Premium Gifts",
            "Balloon Decorations",
            "Live Guitarists",
            "Celebrity Video Messages",
            "Same Day Delivery",
            "Midnight Delivery"
        ],
        cakes: [
            "All Birthday Cakes",
            "Birthday Cakes for Kids",
            "Designer Cakes",
            "Photo Cakes",
            "Chocolate Cakes"
        ],
        chocolates : [
            "All Birthday Chocolates",
            "Chocolate Bouquets",
            "Imported Chocolates",
            "Handmade Chocolates",
            "Personalised Chocolates"
        ],
        flowers : [
            "All Birthday Flowers",
            "Roses",
            "Lilies",
            "Exotic Flowers",
            "Mixed Flowers"
        ],
        plants : [
            "Money Plants",
            "All Birthday Plants",
            "Lucky Bamboo",
            "Air Purifying Plants",
            "Bonsai Plants"
        ],
        personalisedGifts : [
            "All Personalised Gifts",
            "Personalised Mugs",
            "Cushion N Pillow Covers",
            "Water Bottle N Flask",
            "Photo Frames N Table Top"
        ],
        moreGifts : [
            "Unusual Gifts",
            "Cosmetic N Spa Hampers",
            "Perfumes N Fragrances",
            "Fashion N Accessories",
            "Gift Mall"
        ],
        combos : [
            "All Birthday Combos",
            "Flowers N Cakes",
            "Flowers N Chocolates",
            "Cakes N Plants",
            "Gift Hampers"
        ],
        reciepents : [
            "For Her",
            "For Him",
            "For Kids",
            "For Mother",
            "For Father"
        ]

    }

    const [display, setDisplay] = useState(false)
    const togglemenu = () => {
        setDisplay(!display)
    }
    return (
        <>
            <style jsx >{`
                a {
                    color: #000000;
                }
            `}</style>
            <ul className={`viewInDesktop exo-menu ${display ? "display" : " "}`}>
                <li className="mega-drop-down"><a href="#"> birthday <RiArrowDropDownLine style={{width:"1.5rem",height:"1.5rem"}} /></a>
                    <div className="animated fadeIn mega-menu">
                        <div className="mega-menu-wrap">
                            <div className="row">
                                <div className="col-md-2 bg-light">
                                    <h4 className="row mega-title">gifts by choice</h4>
                                    <ul className="stander">
                                        {
                                            birthday.giftsByChoice.map((val,i)=>{
                                                return <li key={i}><a href="" className="td-none">{val}</a></li>
                                            })
                                        }
                                    </ul>
                                </div>
                                <div className="col-md-2">
                                    <h4 className="row mega-title">Cakes</h4>
                                    <ul className="stander">
                                        {
                                            birthday.cakes.map((val, i) => {
                                                return <li key={i}><a href="" className="td-none">{val}</a></li>
                                            })
                                        }
                                    </ul>
                                    <h4 className="row mega-title">chocolates</h4>
                                    <ul className="stander">
                                        {
                                            birthday.chocolates.map((val, i) => {
                                                return <li key={i}><a href="" className="td-none">{val}</a></li>
                                            })
                                        }
                                    </ul>
                                </div>
                                <div className="col-md-2 bg-light">
                                    <h4 className="row mega-title">Flowers</h4>
                                    <ul className="stander">
                                        {
                                            birthday.flowers.map((val, i) => {
                                                return <li key={i}><a href="" className="td-none">{val}</a></li>
                                            })
                                        }
                                    </ul>

                                    <h4 className="row mega-title">plants</h4>
                                    <ul className="stander">
                                        {
                                            birthday.plants.map((val, i) => {
                                                return <li key={i}><a href="" className="td-none">{val}</a></li>
                                            })
                                        }
                                    </ul>
                                </div>
                                <div className="col-md-3">
                                    <h4 className="row mega-title">PERSONALISED GIFTS</h4>
                                    <ul className="stander">
                                        {
                                            birthday.personalisedGifts.map((val, i) => {
                                                return <li key={i}><a href="" className="td-none">{val}</a></li>
                                            })
                                        }
                                    </ul>
                                    <h4 className="row mega-title">MORE GIFTS</h4>
                                    <ul className="stander">
                                        {
                                            birthday.moreGifts.map((val, i) => {
                                                return <li key={i}><a href="" className="td-none">{val}</a></li>
                                            })
                                        }
                                    </ul>
                                </div>
                                <div className="col-md-3 bg-light">
                                    <h4 className="row mega-title">COMBOS</h4>
                                    <ul className="stander">
                                        {
                                            birthday.combos.map((val, i) => {
                                                return <li key={i}><a href="" className="td-none">{val}</a></li>
                                            })
                                        }
                                    </ul>
                                    <h4 className="row mega-title">RECIPIENTS</h4>
                                    <ul className="stander">
                                        {
                                            birthday.reciepents.map((val, i) => {
                                                return <li key={i}><a href="" className="td-none">{val}</a></li>
                                            })
                                        }
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>
                </li>
                <li className="mega-drop-down"><a href="#"> VALANTINE'S <RiArrowDropDownLine style={{ width: "1.5rem", height: "1.5rem" }} /></a>
                    <div className="animated fadeIn mega-menu">
                        <div className="mega-menu-wrap">
                            <div className="row">
                                <div className="col-md">
                                    <h4 className="row mega-title">Valentine Week</h4>
                                    <ul className="stander">
                                        {
                                            valentineWeek.map((val, i) => {
                                                return <li key={i}><a href="" className="td-none">{val}</a></li>
                                            })
                                        }
                                    </ul>
                                </div>
                                <div className="col-md bg-light">
                                    <h4 className="row mega-title">BY FLOWERS</h4>
                                    <ul className="stander">
                                        {
                                            byFlowers.map((val, i) => {
                                                return <li key={i}><a href="" className="td-none">{val}</a></li>
                                            })
                                        }
                                    </ul>
                                </div>
                                <div className="col-md">
                                    <h4 className="row mega-title">BY PERSONALISED</h4>
                                    <ul className="stander">
                                        {
                                            byPersonalised.map((val, i) => {
                                                return <li key={i}><a href="" className="td-none">{val}</a></li>
                                            })
                                        }
                                    </ul>
                                </div>
                                <div className="col-md bg-light">
                                    <h4 className="row mega-title">BY FLOWERS</h4>
                                    <ul className="stander">
                                        {
                                            byFlowers.map((val, i) => {
                                                return <li key={i}><a href="" className="td-none">{val}</a></li>
                                            })
                                        }
                                    </ul>
                                </div>
                                <div className="col-md">
                                    <h4 className="row mega-title">Valentine Week</h4>
                                    <ul className="stander">
                                        {
                                            valentineWeek.map((val, i) => {
                                                return <li key={i}><a href="" className="td-none">{val}</a></li>
                                            })
                                        }
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>
                </li>
                <li className="mega-drop-down"><a href="#">Images <RiArrowDropDownLine style={{width:"1.5rem",height:"1.5rem"}} /></a>
                    <div className="mega-menu animated fadeIn">
                        <div className="mega-menu-wrap">
                            <div className="row">
                                <div className="col-md-2 bg-light">
                                    <h4 className="row mega-title">gifts by choice</h4>
                                    <ul className="stander">
                                        {
                                            birthday.giftsByChoice.map((val,i)=>{
                                                return <li key={i}><a href="" className="td-none">{val}</a></li>
                                            })
                                        }
                                    </ul>
                                </div>
                                <div className="col-md-2">
                                    <h4 className="row mega-title">Cakes</h4>
                                    <ul className="stander">
                                        {
                                            birthday.cakes.map((val, i) => {
                                                return <li key={i}><a href="" className="td-none">{val}</a></li>
                                            })
                                        }
                                    </ul>
                                    <h4 className="row mega-title">chocolates</h4>
                                    <ul className="stander">
                                        {
                                            birthday.chocolates.map((val, i) => {
                                                return <li key={i}><a href="" className="td-none">{val}</a></li>
                                            })
                                        }
                                    </ul>
                                </div>
                                <div className="col-md-2 bg-light">
                                    <h4 className="row mega-title">Flowers</h4>
                                    <ul className="stander">
                                        {
                                            birthday.flowers.map((val, i) => {
                                                return <li key={i}><a href="" className="td-none">{val}</a></li>
                                            })
                                        }
                                    </ul>

                                    <h4 className="row mega-title">plants</h4>
                                    <ul className="stander">
                                        {
                                            birthday.plants.map((val, i) => {
                                                return <li key={i}><a href="" className="td-none">{val}</a></li>
                                            })
                                        }
                                    </ul>
                                </div>
                                <div className="col-md-2">
                                    <h4 className="row mega-title">PERSONALISED GIFTS</h4>
                                    <ul className="stander">
                                        {
                                            birthday.personalisedGifts.map((val, i) => {
                                                return <li key={i}><a href="" className="td-none">{val}</a></li>
                                            })
                                        }
                                    </ul>
                                    <h4 className="row mega-title">MORE GIFTS</h4>
                                    <ul className="stander">
                                        {
                                            birthday.moreGifts.map((val, i) => {
                                                return <li key={i}><a href="" className="td-none">{val}</a></li>
                                            })
                                        }
                                    </ul>
                                </div>
                                <div className="col-md-2">
                                    <img src="Images/menu-img/bestseller-Cakes.jpg" alt="bestseller" className="img-fluid mt-3" />
                                </div>
                                <div className="col-md-2">
                                    <img src="Images/menu-img/bestseller-Cakes.jpg" alt="bestseller" className="img-fluid mt-3" />
                                </div>

                            </div>
                        </div>

                    </div>
                </li>
                <button className="toggle-menu " onClick={togglemenu}>|||</button>
            </ul>
        </>
    )
}
