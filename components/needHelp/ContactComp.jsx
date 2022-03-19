import React from 'react'
import Link from 'next/link'
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaAngleRight } from 'react-icons/fa'
import { RiShieldUserFill } from 'react-icons/ri'

export function ContactComp() {
    return (
        <>
            <div className="contact ">
                <div className="viewInDesktop">
                    <div className="bgImgWrapper">
                        <div className="w-large-90">
                            <div className="row pt-3">
                                <nav aria-label="breadcrumb">
                                    <ol class="breadcrumb mb-0 ">
                                        <li class="breadcrumb-item active" aria-current="page">
                                            <Link href="/"><a >Home</a></Link>
                                        </li>
                                        <li class="breadcrumb-item " ><FaAngleRight /></li>

                                        <li class="breadcrumb-item active" aria-current="page">
                                            <Link href="/needhelp/contact"><a>Contact</a></Link>
                                        </li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-white">
                    <div className="py-4 py-md-0">
                        <div className="container ">
                            <div className="contact-content">
                                <div className="column c2">
                                    <h4 className="">Have Questions?</h4>
                                    <h5 className="my-3">
                                        <Link href="/account"><a className="btn btn-orange py-2 px-3 fw-500 me-2">ORDER RELATED ISSUES?</a></Link>
                                        <Link href="/needhelp/faq"><a className="btn btn-primary py-2 px-3 fw-500 me-2">GENERAL QUERY</a></Link>
                                    </h5>
                                </div>
                                <div className="column c1">
                                    <h4 className="">Contact Details</h4>
                                    <h5 className="my-3">
                                        <Link href="/needhelp/tracking"><a className="btn btn-primary py-2 px-3 fw-500 me-2">TRACK ORDER</a></Link>
                                        <Link href="/needhelp/faq"><a className="btn btn-primary py-2 px-3 fw-500 me-2">FAQ</a></Link>
                                    </h5>
                                    <div className="contactContentWrapper">
                                        <h6 className="mainText">
                                            <span className="icon">
                                                <FaPhoneAlt />
                                            </span>
                                            +91 9212422000 / 9755-248-248
                                        </h6>
                                        <p className="helperText">Timings: 08:00 to 22:30 Hrs.</p>
                                    </div>
                                    <div className="contactContentWrapper">
                                        <h6 className="mainText">
                                            <span className="icon">
                                                <FaEnvelope />
                                            </span>
                                            <a mailto="help@fnp.com">help@fnp.com</a>
                                        </h6>
                                        <p className="helperText">Timings: 08:00 to 22:30 Hrs.</p>
                                    </div>
                                    <div className="contactContentWrapper">
                                        <p className="helperText text-danger">For Media Enquiries</p>
                                        <h6 className="mainText">
                                            <span className="icon">
                                                <RiShieldUserFill />
                                            </span>
                                            <a mailto="pr@fnp.com" className="text-primary">pr@fnp.com</a>
                                        </h6>
                                    </div>
                                    <div className="contactContentWrapper">
                                        <p className="helperText text-danger">For Corporate Bulk Orders</p>
                                        <h6 className="mainText">
                                            <span className="icon">
                                                <RiShieldUserFill />
                                            </span>
                                            <a mailto="sale@fnp.com" className="text-primary">sale@fnp.com</a>
                                        </h6>
                                    </div>


                                    <h6 className=""> Our Offices</h6>
                                    <div className="contactContentWrapper">
                                        <h6 className="mainText">
                                            <span className="icon">
                                                <FaMapMarkerAlt color="red"/>
                                            </span>
                                            Corporate Office
                                        </h6>
                                        <p className="helperText">
                                            FNP Estates, Ashram Marg, Sultanpur Mandi Road, Gadaipur,<br /> Chhatarpur Farms, DLF Farms, New Delhi, Delhi 110030
                                        </p>
                                        <p className="helperText mt-3 mb-2"><a className="text-primary" href="https://www.goolegle.maps.com">View On Map</a></p>
                                    </div>
                                    <div className="contactContentWrapper">
                                        <h6 className="mainText">
                                            <span className="icon">
                                                <FaMapMarkerAlt color="red"/>
                                            </span>
                                            Centre of Excellence in Technology
                                        </h6>
                                        <p className="helperText">
                                            Western Aqua Building, Level 5 & 12, Hitech City, Whitefields,<br /> Kondapur, Hyderabad, 500081
                                        </p>
                                        <p className="helperText mt-3 mb-2"><a className="text-primary" href="https://www.goolegle.maps.com">View On Map</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
