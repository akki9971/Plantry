import Link from 'next/link'
import React from 'react'
import { FaUserAlt, FaGift, FaRegNewspaper } from 'react-icons/fa'
import { BsTagFill } from 'react-icons/bs'
import { GiRingingBell } from 'react-icons/gi'
import { RiFolderUserFill, RiScalesLine } from 'react-icons/ri'

export const Home = () => {
    return (
        <div className="bg-light">
            <div className="container my_account">
                <div className="row p-3 px-sm-5">
                    <h6 className="fw-500 py-2">MY PROFILE</h6>
                    <div className="col-sm-4 col-6 p-0 px-sm-2">
                        <div className="card p-3 my-sm-2 ">
                            <Link href="/account/manage?tab=my-profile">
                                <a className="td-none text-green-hover">
                                    <div className="card-content text-center">
                                        <div className="ico">
                                            <FaUserAlt color="blue" style={{transform:'scale(1.5)'}} />
                                        </div>
                                        <div className="action">
                                            <h6 className="fw-500 py-2">MY PROFILE</h6>
                                            <p className="fs-14">
                                                View / Edit profile
                                            </p>
                                        </div>

                                    </div>
                                </a>
                            </Link>
                        </div>
                    </div>
                    <div className="col-sm-4 col-6 p-0 px-sm-2">
                        <div className="card py-3 p-sm-3 my-sm-2">
                            <Link href="/account/manage?tab=my-orders">
                                <a className="td-none text-green-hover">
                                    <div className="card-content text-center">
                                        <div className="ico">
                                            <FaGift color="red" style={{transform:'scale(1.5)'}} />
                                        </div>
                                        <div className="action">
                                            <h6 className="fw-500 py-2">MY ORDERS</h6>
                                            <p className="fs-14">
                                                Track Order / Raise Query
                                            </p>
                                        </div>

                                    </div>
                                </a>
                            </Link>
                        </div>
                    </div>
                    <div className="col-sm-4 col-6 p-0 px-sm-2">
                        <div className="card py-3 p-sm-3 my-sm-2">
                            <Link href="/account/manage?tab=gift-vouchers">
                                <a className="td-none text-green-hover">
                                    <div className="card-content text-center">
                                        <div className="ico">
                                            <BsTagFill color="gold" style={{transform:'scale(1.5)'}} />
                                        </div>
                                        <div className="action">
                                            <h6 className="fw-500 py-2">GIFT Vouchers</h6>
                                            <p className="fs-14">
                                                Used / Unused Vouchers
                                            </p>
                                        </div>

                                    </div>
                                </a>
                            </Link>
                        </div>
                    </div>
                    <div className="col-sm-4 col-6 p-0 px-sm-2">
                        <div className="card p-3 my-sm-2">
                            <Link href="/account/manage?tab=tickets">
                                <a className="td-none text-green-hover">
                                    <div className="card-content text-center">
                                        <div className="ico">
                                            <FaRegNewspaper color="purple" style={{transform:'scale(1.5)'}} />
                                        </div>
                                        <div className="action">
                                            <h6 className="fw-500 py-2">TICKETS</h6>
                                            <p className="fs-14">
                                                See all Tickets 
                                            </p>
                                        </div>

                                    </div>
                                </a>
                            </Link>
                        </div>
                    </div>
                    <div className="col-sm-4 col-6 p-0 px-sm-2">
                        <div className="card py-3 p-sm-3 my-sm-2">
                            <Link href="/account/manage?tab=my-reaminders">
                                <a className="td-none text-green-hover">
                                    <div className="card-content text-center">
                                        <div className="ico">
                                            <GiRingingBell color="gold" style={{transform:'scale(1.5)'}} />
                                        </div>
                                        <div className="action">
                                            <h6 className="fw-500 py-2">MY REMAINDERS</h6>
                                            <p className="fs-14 d-none d-sm-block">
                                                Add / Edit / delete Remainders
                                            </p>
                                            <p className="fs-14 d-block d-sm-none">
                                                Add/Modify Remainders
                                            </p>
                                        </div>

                                    </div>
                                </a>
                            </Link>
                        </div>
                    </div>
                    <div className="col-sm-4 col-6 p-0 px-sm-2">
                        <div className="card p-3 my-sm-2">
                            <Link href="/account/manage?tab=saved-addresses">
                                <a className="td-none text-green-hover">
                                    <div className="card-content text-center">
                                        <div className="ico">
                                            <RiFolderUserFill color="#009740" style={{transform:'scale(1.5)'}} />
                                        </div>
                                        <div className="action">
                                            <h6 className="fw-500 py-2">SAVED ADDRESSES</h6>
                                            <p className="fs-14">
                                                View / Edit Addreses 
                                            </p>
                                        </div>

                                    </div>
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
