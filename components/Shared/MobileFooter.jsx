import React from 'react'
import Link from 'next/link'
import { RiShieldCheckFill } from 'react-icons/ri'
import { BsInstagram } from 'react-icons/bs'
import { FaFacebookF, FaTwitter, FaPinterestP } from 'react-icons/fa'

export const MobileFooter = () => {
    return (
        <>
            <div className="viewInMobile">
                <div className="mobile-footer bg-light">
                    <div className="container px-2 py-4">
                        <div className="d-flex justify-content-between">
                            <Link href="/needhelp" ><a >Need Help</a></Link>
                            <Link href="/nopage" ><a >Get Franchise</a></Link>
                            <Link href="/nopage" ><a >RETAIL OUTLETS</a></Link>
                        </div>
                        <div className="mt-3 text-center">
                            <p className=""><RiShieldCheckFill /></p>
                            <p className="fs-14 text-muted">100% Safe and secure payments.</p>
                        </div>
                        <div className="mt-3 text-center">
                            <p className="fs-14 text-muted">Follow us on</p>
                        </div>
                        <div className=" mt-2 mb-5 d-flex justify-content-evenly">
                            <div className="icon rounded-circle bg-white " style={{padding:'15px'}}>
                                <FaFacebookF  size="2em" color="blue"/>
                            </div>
                            <div className="icon rounded-circle bg-white " style={{padding:'15px'}}>
                                <FaTwitter size="2em"  color="blue" />
                            </div>
                            <div className="icon rounded-circle bg-white " style={{padding:'15px'}}>
                                <FaPinterestP size="2em"  color="purple" />
                            </div>
                            <div className="icon rounded-circle bg-white " style={{padding:'15px'}}>
                                <BsInstagram  size="2em" color="purple" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
