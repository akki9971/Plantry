import React from 'react'
import Link from 'next/link'
import { TabSec } from './comps'
import { FaAngleRight } from 'react-icons/fa'


export const FaqComp = () => {
    return (
        <>
            <div className="w-large-90 faq">
                <div className="row pt-3">
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb mb-0">
                            <li class="breadcrumb-item active" aria-current="page">
                                <Link href="/"><a >Home</a></Link>
                            </li>
                            <li class="breadcrumb-item"><FaAngleRight /></li>
                            <li class="breadcrumb-item active" aria-current="page">
                                <Link href="/faq"><a >FAQ</a></Link>
                            </li>
                        </ol>
                    </nav>
                </div>
                <div className="d-flex justify-content-between pt-3">
                    <div className="">
                        <h5 className="">Frequently Asked Questions</h5>
                    </div>
                    <div className="">
                        <p className="">need more help?
                            <Link href="/needhelp/contact"><a className="mx-3 btn btn-outline-orange">CONTACT US</a></Link>
                            <Link href="/account/manage?tab=my-orders"><a className="btn btn-outline-orange">ORDER RELATED QUERY</a></Link>
                        </p>
                    </div>
                </div>
                <hr className="mt-3 mb-0" />
                <div className="">
                    <TabSec />
                </div>
            </div>
        </>
    )
}
