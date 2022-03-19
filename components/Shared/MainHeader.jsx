import React, { useEffect, useState } from 'react'
import { FiSearch, FiHelpCircle } from 'react-icons/fi'
import { FaUserCircle, FaMapMarkerAlt, FaAngleRight, FaInfoCircle } from 'react-icons/fa'
import { BsClock } from 'react-icons/bs'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import Link from 'next/link'

const countries = [
    "USA",
    "UK",
    "UAE",
    "Australia",
    "Canada",
    "Singapore",
    "Philippines",
    "Germany",
    "New Zealand",
    "Argentina",
    "Austria",
    "Bahrain",
    "Bangladesh",
    "Belgium",
    "Brazil",
    "Bulgaria",
    "Chile",
    "China",
    "Colombia",
    "Croatia",
    "Denmark",
    "Egypt",
    "Finland",
    "France",
    "Greece",
    "Greenland",
    "Guam",
    "Guyana",
    "Haiti",
    "Hong Kong",
    "Hungary",
    "Indonesia",
    "Ireland",
    "Israel",
    "Italy",
    "Japan",
    "Jordan",
    "Kenya",
    "Korea",
    "Kuwait",
    "Lebanon",
    "Macau",
    "Malaysia",
    "Mauritius",
    "Mexico",
    "Morocco",
    "Nepal",
    "Netherlands",
    "Norway",
    "Oman",
    "Pakistan",
    "Poland",
    "Portugal",
    "Qatar",
    "Romania",
    "Russia",
    "Saudi Arabia",
    "South Africa",
    "Spain",
    "Sri Lanka",
    "Sweden",
    "Switzerland",
    "Taiwan",
    "Thailand",
    "Turkey",
    "Ukraine",
    "Vietnam",
    "Zambia",
    "Zimbabwe"
]

export const MainHeader = ({ IsLogin = true, isUser = true }) => {

    const [offset, setOffset] = useState(0);
    const [outindiaOpen, setOutindiaOpen] = useState(false)
    const [selectedCountry, setSelectedCountry] = useState("All Countries")

    useEffect(() => {
        // const onScroll = () => setOffset(window.pageYOffset);
        // // clean up code
        // window.removeEventListener('scroll', onScroll);
        // window.addEventListener('scroll', onScroll, { passive: true });
        // return () => window.removeEventListener('scroll', onScroll);
    }, []);

    // console.log(offset);
    return (
        <>
            <div className={`viewInDesktop stick-to-top shadow ${!IsLogin ? 'shademe' : ''}`}>

                <nav className="navbar navbar-expand-lg navbar-light bg-white ">
                    <div className="w-large-95 container-fluid">
                        <Link href="/">
                            <a className="navbar-brand" >
                                {/* <img src="" alt="companyLogo" /> */}
                                Ferns N Petals
                            </a>
                        </Link>

                        {
                            IsLogin && <form className="d-flex navbar_form">
                                <input className="form-control" type="search" placeholder="Search flowers, cakes, gifts, etc" aria-label="Search" />
                                <button className="btn btn-warning text-white" type="submit">
                                    <FiSearch style={{ width: '1.1em', height: '1.1em' }} />
                                </button>
                            </form>
                        }
                        {IsLogin && <div>
                            {/* <!-- Button trigger modal --> */}
                            <button type="button" className="ms-2 fs-12 btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                <FaMapMarkerAlt /> Select Delivery Location <FaAngleRight />
                            </button>

                            {/* <!-- Modal --> */}
                            <div className="location modal fade" id="exampleModal" tabIndex="1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className=" modal-dialog modal-dialog-centered">
                                    <div className="modal-content p-2">
                                        <div className="modal-header p-0 pb-1">
                                            <button type="button" className="fs-14 btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body ">
                                            <h6 className="fs-14 mb-1">Choose your Delivery Location</h6>
                                            <p className="fs-12 text-muted">Where would you like to get the product delivered?</p>
                                            <div className="loc-selection">
                                                <input type="radio" name="location" className="india" id="india" />
                                                <label htmlFor="india" className="fs-14 indialabel">Within India</label>
                                                <input type="radio" name="location" className="foriegn" id="foriegn" />
                                                <label htmlFor="foriegn" className="fs-14 foriegnlabel">Outside India</label>
                                                <div className="inindia">
                                                    <p className="fs-9 text-green"><FaInfoCircle /> Enter correct Pincode for hassle free timely delivery.</p>
                                                    <p className="pincode ">
                                                        <span className="pincode"><FaMapMarkerAlt color="#ff9212" /> </span>
                                                        <input type="text" className="pincode" placeholder="Pincode" />
                                                    </p>
                                                    <p className="text-start w-60 mx-auto fs-14 my-0">
                                                        <a href="" className="text-green">Dont Know Pincode?</a>
                                                    </p>
                                                </div>
                                                <div className="outindia">
                                                    <h6 className={`outindiaselect ${outindiaOpen ? 'open' : ''}`} onClick={() => setOutindiaOpen(!outindiaOpen)}>
                                                        {selectedCountry}
                                                    </h6>
                                                    <ul className={`outindiaselect ${outindiaOpen ? 'open' : ''}`} >
                                                        {
                                                            countries.map((e, i) => {
                                                                return <li key={i} onClick={(event) => {
                                                                    setSelectedCountry(event.target.innerText);
                                                                    setOutindiaOpen(false)
                                                                }} > {e} </li>
                                                            })
                                                        }
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn bg-orange w-60">CONTINUE</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>}
                        {
                            IsLogin && <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                        }
                        {
                            IsLogin && <div className="collapse navbar-collapse " id="navbarSupportedContent">
                                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <a className=" fs-12 nav-link p-0 mx-3" aria-current="page" href="#">
                                            <span className="fs-20 d-block text-center my-0">
                                                <BsClock />
                                            </span>
                                            Need Today?
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <h6 className="fw-400 text-dark selector account_selector m-0 lh-base">

                                            <a className="fs-12 nav-link p-0 mx-3" href="#">
                                                <span className="fs-20 d-block text-center my-0">
                                                    <AiOutlineShoppingCart />
                                                </span>
                                                Cart
                                            </a>
                                            <div className="account_choices choices hlimit cartView">
                                                <div className="cartViewHeader">
                                                    <h6 className="">My Cart</h6>
                                                </div>
                                                <div className="cartViewBody">
                                                    <div>
                                                        <img src="/Images/empty-cart-icon.png" alt="" className="empty-cart-icon" />
                                                        <h5>YOUR CART SEEMS EMPTY</h5>
                                                    </div>
                                                </div>
                                                <div className="cartViewFooter">
                                                    <Link href="/"><a className="btn btn-orange fw-600 w-100 py-3">CONTINUE SHOPPING</a></Link>
                                                </div>
                                            </div>
                                        </h6>
                                    </li>
                                    <li className="nav-item">
                                        <div className="selector account_selector">
                                            <h6 className="fw-400 text-dark selector account_selector m-0 lh-base">
                                                <a className="fs-12 nav-link p-0 mx-3" href="#">
                                                    <span className="fs-20 d-block text-center my-0">
                                                        <FaUserCircle />
                                                    </span>
                                                    Hi Guest
                                                </a>
                                                <ul className="account_choices choices hlimit">
                                                    <span className="triangle"></span>
                                                    <li className="fs-12 choice account_choice account_option" >
                                                        <a href="" className="choice account_choice  td-none">
                                                            <FaUserCircle /> Hi Guest
                                                        </a>
                                                        <Link href="/auth">
                                                            <a className="choice account_choice td-none">
                                                                Login
                                                            </a>
                                                        </Link>
                                                    </li>
                                                    <li className="fs-14 choice account_choice" >
                                                        <Link href="/account">
                                                            <a className="choice account_choice td-none">
                                                                My Profile
                                                            </a>
                                                        </Link>
                                                    </li>
                                                    <li className="fs-14 choice account_choice" >
                                                        <Link href="/needhelp/tracking">
                                                            <a className="choice account_choice td-none">
                                                                Track Order
                                                            </a>
                                                        </Link>
                                                    </li>
                                                    <li className="fs-14 choice account_choice" >
                                                        <Link href="/account/manage?tab=my-orders">
                                                            <a className="choice account_choice td-none">
                                                                My Orders
                                                            </a>
                                                        </Link>
                                                    </li>
                                                    <li className="fs-14 choice account_choice" >
                                                        <Link href="/track">
                                                            <a className="choice account_choice td-none">
                                                                Address Book
                                                            </a>
                                                        </Link>
                                                    </li>
                                                    <li className="fs-14 choice account_choice" >
                                                        <Link href="/account/manage?tab=gift-vouchers">
                                                            <a className="choice account_choice td-none">
                                                                Gift Vouchers
                                                            </a>
                                                        </Link>
                                                    </li>
                                                    <li className="fs-14 choice account_choice" >
                                                        <Link href="/account/manage?tab=tickets">
                                                            <a className="choice account_choice td-none">
                                                                Tickets
                                                            </a>
                                                        </Link>

                                                    </li>
                                                    {
                                                        isUser && <li className="fs-14 choice account_choice" >
                                                            <Link href="/account">
                                                                <a className="choice account_choice td-none">
                                                                    Change Password
                                                                </a>
                                                            </Link>
                                                        </li>
                                                    }
                                                    {
                                                        isUser && <li className="fs-14 choice account_choice" >
                                                            <Link href="/account">
                                                                <a className="choice account_choice td-none">
                                                                    Logout
                                                                </a>
                                                            </Link>
                                                        </li>
                                                    }
                                                </ul>
                                            </h6>
                                        </div>
                                    </li>
                                    <li className="nav-item">
                                        <Link href="/needhelp">
                                            <a className="fs-14 nav-link p-0 mx-2">
                                                <span className="fs-20 d-block text-center my-0">
                                                    <FiHelpCircle />
                                                </span>
                                                Help Center
                                            </a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        }

                    </div>
                </nav>
            </div>
        </>
    )
}
