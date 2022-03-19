import React from 'react'

export const UpperFooter = () => {
    return (
        <>
            <style jsx >{`
            h6,
            h6 > a {
                color: #3f3f3f;
            }
        `}</style>
            <div className="viewInDesktop">
                <div className="UpperFooter bg-lt-grey py-4">
                    <div className="w-large-90">
                        <div className="row">
                            <div className="col-sm-6 col-md-4 col-lg-3">
                                <div className="h2 text-center">
                                    <img src="Images/Icons/plane.png" alt="plane" width="40" height="40" />
                                </div>
                                <h6 className="fs-18 text-center">
                                    WorldWide Delivery
                                </h6>
                                <p className="fs-14 text-muted text-center">We deliver gifts to over 70 countries</p>
                            </div>
                            <div className="col-sm-6 col-md-4 col-lg-3">
                                <div className="h2 text-center">
                                    <img src="Images/Icons/shield.png" alt="plane" width="40" height="40" />
                                </div>
                                <h6 className="fs-18 text-center">
                                    100% safe and Secure payments
                                </h6>
                                <p className="fs-14 text-muted text-center">Pay using secure payment methods</p>
                            </div>
                            <div className="col-sm-6 col-md-4 col-lg-3">
                                <div className="h2 text-center">
                                    <img src="Images/Icons/call-center.png" alt="plane" width="40" height="40" />
                                </div>
                                <h6 className="fs-18 text-center">
                                    DEDICATED HELP CENTER
                                </h6>
                                <p className="fs-14 text-muted text-center">Call us <a href="+919212422000" className="td-none">+91 9212422000 </a> | 8:00AM-10:30PM</p>
                            </div>
                            <div className="col-sm-6 col-md-4 col-lg-3">
                                <div className="h2 text-center">
                                    <img src="Images/Icons/android.png" alt="plane" width="40" height="40" />
                                    <img src="Images/Icons/apple.png" alt="plane" width="40" height="40" className="ms-2" />
                                </div>
                                <h6 className="fs-18 text-center">
                                    SHOP ON THE GO
                                </h6>
                                <p className="fs-14 text-muted text-center">Download mobile app</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-large-90 py-4">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="row">
                                <div className="col">
                                    <ul className="list-unstyled">
                                        <li>
                                            <h6 className="fs-16">
                                                <a href="" className="td-none">POLICY INFO</a>
                                            </h6>
                                        </li>
                                        <li><a href="" className="td-none fs-12 text-grey">Terms & Conditions</a></li>
                                        <li><a href="" className="td-none fs-12 text-grey">Privacy Policy</a></li>
                                        <li><a href="" className="td-none fs-12 text-grey">Terms of Use</a></li>
                                        <li><a href="" className="td-none fs-12 text-grey">Disclaimer</a></li>
                                    </ul>
                                </div>
                                <div className="col">
                                    <ul className="list-unstyled">
                                        <li>
                                            <h6 className="fs-16">
                                                <a href="" className="td-none">ABOUT COMPANY</a>
                                            </h6>
                                        </li>
                                        <li><a href="" className="td-none fs-12 text-grey">About Us</a></li>
                                        <li><a href="" className="td-none fs-12 text-grey">FNP Team</a></li>
                                        <li><a href="" className="td-none fs-12 text-grey">Careers</a></li>
                                        <li><a href="" className="td-none fs-12 text-grey">Testimonials</a></li>
                                        <li><a href="" className="td-none fs-12 text-grey">News Room
                                        </a></li>
                                    </ul>
                                </div>
                                <div className="col">
                                    <ul className="list-unstyled">
                                        <li>
                                            <h6 className="fs-16">
                                                <a href="" className="td-none">FNP BUSINESS</a>
                                            </h6>
                                        </li>
                                        <li><a href="" className="td-none fs-12 text-grey">Decoration Services</a></li>
                                        <li><a href="" className="td-none fs-12 text-grey">Corporate Service</a></li>
                                        <li><a href="" className="td-none fs-12 text-grey">Affiliate Program</a></li>
                                        <li><a href="" className="td-none fs-12 text-grey">Retails Stores</a></li>
                                        <li><a href="" className="td-none fs-12 text-grey">Franchise</a></li>
                                    </ul>
                                </div>
                                <div className="col">
                                    <ul className="list-unstyled">
                                        <li>
                                            <h6 className="fs-16">
                                                <a href="" className="td-none">NEED HELP ?</a>
                                            </h6>
                                        </li>
                                        <li><a href="" className="td-none fs-12 text-grey">Help Center</a></li>
                                        <li><a href="" className="td-none fs-12 text-grey">Contact Us</a></li>
                                        <li><a href="" className="td-none fs-12 text-grey">FAQs</a></li>
                                    </ul>
                                </div>
                                <div className="col">
                                    <ul className="list-unstyled">
                                        <li>
                                            <h6 className="fs-16">
                                                <a href="" className="td-none">USEFUL LINKS</a>
                                            </h6>
                                        </li>
                                        <li><a href="" className="td-none fs-12 text-grey">Quotes N Wishes</a></li>
                                        <li><a href="" className="td-none fs-12 text-grey">Flower astrology</a></li>
                                        <li><a href="" className="td-none fs-12 text-grey">Article Hub</a></li>
                                        <li><a href="" className="td-none fs-12 text-grey">Care Guide</a></li>
                                        <li><a href="" className="td-none fs-12 text-grey">Blog</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="d-flex flex-row-reverse ">
                                <ul className="list-unstyled">
                                    <li>
                                        <h6>
                                            SUBSCRIBE
                                        </h6>
                                    </li>
                                    <li >
                                        <form className="d-flex navbar_form w-100">
                                            <input className="form-control" type="search" placeholder="EMAIL" aria-label="Search" />
                                            <button className="btn btn-warning text-white" type="submit">
                                                SUBMIT
                                            </button>
                                        </form>
                                    </li>
                                    <li><a href="" className="td-none fs-12 text-grey">Get updates on promotions and offers coupons.</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
