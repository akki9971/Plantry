import Link from 'next/link'
import React from 'react'
import { FaUserAlt, FaGift, FaRegNewspaper, FaAngleRight } from 'react-icons/fa'
import { BsBuilding } from 'react-icons/bs'
import { FiHelpCircle } from 'react-icons/fi'
import { RiFolderUserFill, RiScalesLine } from 'react-icons/ri'

export const Needhelp = () => {
    return (
        <>

            <div className="container my_account need_help">
                <div className="row pt-3 px-sm-5 viewInDesktop">
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb mb-0">
                            <li class="breadcrumb-item active" aria-current="page">
                                <Link href="/"><a >Home</a></Link>
                            </li>
                            <li class="breadcrumb-item"><FaAngleRight /></li>
                            <li class="breadcrumb-item active" aria-current="page">
                                <Link href="/needhelp"><a >Help Center</a></Link>
                            </li>
                        </ol>
                    </nav>
                </div>
                <div className="row p-3 px-sm-5">
                    <h5 className="fw-500 py-2">HELP CENTER</h5>
                    <p className="fs-14 mb-0 mt-3 fw-500">Do you need help with?</p>
                    <div className="col-md-4 my-3 my-md-0 p-0 px-sm-2">
                        <div className="card px-2 py-3 p-sm-3 my-sm-2">
                            <Link href="/account/manage?tab=my-orders">
                                <a className="td-none text-green-hover">
                                    <div className="card-content ">
                                        <div className="ico bg-light rounded-circle" style={{ padding: '15px' }}>
                                            <FaGift color="red" size="1.5em" />
                                        </div>
                                        <div className="action text-left">
                                            <h6 className="fw-500 mb-0">Manage your orders</h6>
                                            <p className="fs-14 mb-0">
                                                Order related queries/issues, Track order, Ticket History
                                            </p>
                                        </div>
                                        <div className="ico">
                                            <FaAngleRight color="blue" size="1.3em" />
                                        </div>
                                    </div>
                                </a>
                            </Link>
                        </div>
                    </div>
                    <div className="col-md-4 my-3 my-md-0 p-0 px-sm-2">
                        <div className="card px-2 py-3 p-sm-3 my-sm-2 ">
                            <Link href="/account">
                                <a className="td-none text-green-hover pb-1">
                                    <div className="card-content">
                                        <div className="ico bg-light rounded-circle" style={{ padding: '15px' }}>
                                            <FaUserAlt color="red" size="1.5em" />
                                        </div>
                                        <div className="action text-left">
                                            <h6 className="fw-500 mb-0">Account Settings</h6>
                                            <p className="fs-14 mb-0">
                                                Your profile, Password, Addresses
                                            </p>
                                        </div>
                                        <div className="ico">
                                            <FaAngleRight color="blue" size="1.3em" />
                                        </div>
                                    </div>
                                </a>
                            </Link>
                        </div>
                    </div>
                    <div className="col-md-4 my-3 my-md-0 p-0 px-sm-2">
                        <div className="card px-2 py-3 p-sm-3 my-sm-2">
                            <Link href="/needhelp/faq">
                                <a className="td-none text-green-hover">
                                    <div className="card-content ">
                                        <div className="ico bg-light rounded-circle" style={{ padding: '15px' }}>
                                            <FiHelpCircle color="red" size="1.5em" />
                                        </div>
                                        <div className="action text-left">
                                            <h6 className="fw-500 mb-0">Explore All Help Topics</h6>
                                            <p className="fs-14 mb-0">
                                                Answers to frequently asked questions
                                            </p>
                                        </div>
                                        <div className="ico">
                                            <FaAngleRight color="blue" size="1.3em" />
                                        </div>
                                    </div>
                                </a>
                            </Link>
                        </div>
                    </div>
                    <div className="col-md-4 my-3 my-md-0 p-0 px-sm-2">
                        <p className="fs-14 mb-0 mt-3 fw-500">Need More Help? </p>
                        <div className="card px-2 py-3 p-sm-3 my-sm-2">
                            <Link href="/needhelp/contact">
                                <a className="td-none text-green-hover">
                                    <div className="card-content ">
                                        <div className="ico bg-light rounded-circle" style={{ padding: '15px' }}>
                                            <BsBuilding color="red" size="1.5em" />
                                        </div>
                                        <div className="action text-left">
                                            <h6 className="fw-500 mb-0">Contact US</h6>
                                            <p className="fs-14 mb-0">
                                                Contact Details and General queries
                                            </p>
                                        </div>
                                        <div className="ico">
                                            <FaAngleRight color="blue" size="1.3em" />
                                        </div>
                                    </div>
                                </a>
                            </Link>
                        </div>
                    </div>
                    <div className="col-12 col-md-4 my-3 my-md-0 p-0 px-sm-2">
                        <p className="fs-14 mb-0 mt-3 fw-500">Other Enquiries</p>
                        <div className="card px-2 py-3 p-sm-3 my-sm-2">
                            <div className="d-flex justify-content-between">
                                <p className="fs-14 mb-2">
                                    <Link href="/nopage"><a >Corporate Gifts <FaAngleRight color="black" size="1em" /> </a></Link>
                                </p>
                                <p className="fs-14 mb-2">
                                    <Link href="/nopage"><a >Wedding Enquiry <FaAngleRight color="black" size="1em" /> </a></Link>
                                </p>
                            </div>
                            <div className="d-flex justify-content-between">
                                <p className="fs-14 mb-1">
                                    <Link href="/nopage"><a >Franchise Enquiry <FaAngleRight color="black" size="1em" /> </a></Link>
                                </p>
                                <p className="fs-14 mb-1">
                                    <Link href="/nopage"><a >Become A PArtner <FaAngleRight color="black" size="1em" /> </a></Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

