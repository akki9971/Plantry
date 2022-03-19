import React, { useState } from 'react'
import Link from 'next/link' 
import { FaBars, FaGift, FaMale, FaFemale,FaShoppingCart, FaSearch,FaPhoneAlt ,FaUserCircle, FaMapMarkerAlt } from 'react-icons/fa'
import { RiCloseLine } from 'react-icons/ri'
import { FiFramer } from 'react-icons/fi'
import { HiUsers } from 'react-icons/hi'
import { BiDotsVertical, BiDownload } from 'react-icons/bi'
import { AccAnne, AccBirth, AccCakes, AccFlowers, AccPerGifts, AccPlants } from './Comp'

export const MobileHeader = () => {
    const [navOpen, setNavOpen] = useState(false)
    const [manageOpen, setManageOpen] = useState(false)
    return (
        <>
            <div className="viewInMobile">
                <div className="bg-green">
                    <div className="mb-header">
                        <div className="menuNlogo">
                            <div className="navigatn">
                                <button className="navbtn" onClick={() => setNavOpen(true)}><FaBars size="22px" color="white" /></button>
                                <div className={`navsec ${navOpen ? "open" : "hide"}`}>
                                    <div className="topSec">
                                        <div className="userSec">
                                            <div className="user">
                                                <FaUserCircle size="30px" color="white" />
                                                <span className="">Hi User</span>
                                            </div>
                                            <div className="closeBtnSec">
                                                <button className="closeBtn" onClick={() => setNavOpen(false)} ><RiCloseLine size="22px" color="white" /></button>
                                            </div>
                                        </div>
                                        <ul className="funBtns">
                                            <li className="funBtn"><Link href="/auth"><a>Login</a></Link></li>
                                            <li className="funBtn"><Link href="/needhelp/tracking"><a>Track Order</a></Link></li>
                                            <li className="funBtn"><Link href="/needhelp"><a>Help Center</a></Link></li>
                                        </ul>
                                    </div>
                                    <div className="menu">
                                        <div class="accordion " id="accordionExample">
                                            <div class="accordion-item">
                                                <h6 class="accordion-header" id="headingOne">
                                                    <button class="accordion-button collapsed fs-14 fw-500" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                                        Birthday
                                                    </button>
                                                </h6>
                                                <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                                    <div class="accordion-body parent">
                                                        <AccBirth />
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accordion-item">
                                                <h2 class="accordion-header" id="headingTwo">
                                                    <button class="accordion-button collapsed fs-14 fw-500" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                        Anneversery
                                                    </button>
                                                </h2>
                                                <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                                    <div class="accordion-body parent">
                                                        <AccAnne />
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accordion-item">
                                                <h2 class="accordion-header" id="headingThree">
                                                    <button class="accordion-button collapsed fs-14 fw-500" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                        Cakes
                                                    </button>
                                                </h2>
                                                <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                                    <div class="accordion-body parent">
                                                        <AccCakes />
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accordion-item">
                                                <h2 class="accordion-header" id="headingFour">
                                                    <button class="accordion-button collapsed fs-14 fw-500" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                                        Flowers
                                                    </button>
                                                </h2>
                                                <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                                    <div class="accordion-body parent">
                                                        <AccFlowers />
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accordion-item">
                                                <h2 class="accordion-header" id="headingFive">
                                                    <button class="accordion-button collapsed fs-14 fw-500" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                                        Personalised Gifts
                                                    </button>
                                                </h2>
                                                <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                                                    <div class="accordion-body parent">
                                                        <AccPerGifts />
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accordion-item">
                                                <h2 class="accordion-header" id="headingSix">
                                                    <button class="accordion-button collapsed fs-14 fw-500" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                                        Plants
                                                    </button>
                                                </h2>
                                                <div id="collapseSix" class="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
                                                    <div class="accordion-body parent">
                                                        <AccPlants />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={`navShade ${navOpen ? "open" : "hide"}`} onClick={() => setNavOpen(false)}></div>
                            </div>
                            <div className="logo" >
                                <h6>F</h6>
                            </div>
                        </div>
                        <div className="multFuncs">
                            <div className="searchsec">
                                <Link href="" ><a><FaSearch size="22px" color="white" /> </a></Link>
                            </div>
                            <div className="giftsec">
                                <Link href="" ><a><FaGift size="22px" color="white" /> </a></Link>
                            </div>
                            <div className="cartsec">
                                <Link href="" ><a><FaShoppingCart size="22px" color="white" /> </a></Link>
                            </div>
                            <div className="managasec">
                                <button className="managebtn" onClick={() => setManageOpen(true)}><BiDotsVertical size="22px" color="white" /></button>
                                <div className={`managesec ${manageOpen ? "open" : "hide"}`}>
                                    <ul className="manageMenu">
                                        <li className="">
                                            <Link href="/account">
                                                <a>
                                                    <span className="icon">
                                                        <FaUserCircle size="25px" ></FaUserCircle>
                                                    </span>
                                                    <span className="text">
                                                        My Account
                                                    </span>
                                                </a>    
                                            </Link>
                                        </li>
                                        <li className="">
                                            <Link href="needhelp/tracking">
                                                <a>
                                                    <span className="icon">
                                                        <FaMapMarkerAlt size="25px" />
                                                    </span>
                                                    <span className="text">
                                                        Track Order
                                                    </span>
                                                </a>    
                                            </Link>
                                        </li>
                                        <li className="">
                                            <Link href="/nopage">
                                                <a>
                                                    <span className="icon">
                                                        <BiDownload size="25px" />
                                                    </span>
                                                    <span className="text">
                                                        Download App
                                                    </span>
                                                </a>    
                                            </Link>
                                        </li>
                                        <li className="">
                                            <Link href="">
                                                <a>
                                                    <span className="icon">
                                                        <FaGift size="25px" ></FaGift>
                                                    </span>
                                                    <span className="text">
                                                        Corporate Gifts
                                                    </span>
                                                </a>    
                                            </Link>
                                        </li>
                                        <li className="">
                                            <Link href="/nopage">
                                                <a>
                                                    <span className="icon">
                                                        <FiFramer size="25px" ></FiFramer>
                                                    </span>
                                                    <span className="text">
                                                        Franchise Enquiry
                                                    </span>
                                                </a>    
                                            </Link>
                                        </li>
                                        <li className="">
                                            <Link href="/nopage">
                                                <a>
                                                    <span className="icon">
                                                        <span className="cake male"><FaMale style={{ width: "12px", height: "25px" }} /></span>
                                                        <span className="cake female"><FaFemale style={{ width: "12px", height: "25px" }} /></span>
                                                    </span>
                                                    <span className="text">
                                                        Wedding Enguiry
                                                    </span>
                                                </a>    
                                            </Link>
                                        </li>
                                        <li className="">
                                            <Link href="/nopage">
                                                <a>
                                                    <span className="icon">
                                                        <HiUsers size="25px" ></HiUsers>
                                                    </span>
                                                    <span className="text">
                                                        Become A Partner
                                                    </span>
                                                </a>    
                                            </Link>
                                        </li>
                                        <li className="">
                                            <Link href="/needhelp/contact">
                                                <a>
                                                    <span className="icon">
                                                        <FaPhoneAlt size="25px" ></FaPhoneAlt>
                                                    </span>
                                                    <span className="text">
                                                        Contact Us
                                                    </span>
                                                </a>    
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className={`manageShade ${manageOpen ? "open" : "hide"}`} onClick={() => setManageOpen(false)}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
