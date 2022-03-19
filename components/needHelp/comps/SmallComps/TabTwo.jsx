import React from 'react'
import Link from 'next/link'

export const TabTwo = () => {
    return (
        <>
            <h5>How to place an order?</h5>
            <div class="accordion mt-3 tabTwo" id="accordionExample">
                <div class="accordion-item">
                    <h6 class="accordion-header" id="headingOne">
                        <button class="accordion-button collapsed fs-14 fw-500" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                            What are the modes of placing an order with FNP?
                        </button>
                    </h6>
                    <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <p className="fs-14">
                                Following are the ways in which you can place an order with us.
                            </p>
                            <p className="fs-14">
                                <ul className="list-styled-disc ms-3">
                                    <li className="">You can log on to <Link href="/"><a className="text-green">www.fnp.com</a></Link> from your mobile as well.</li>
                                    <li className="">Online - Log on to <Link href="/"><a className="text-green">www.fnp.com</a></Link> and have fun shopping!</li>
                                    <li className="">You can call us at <a className="text-green" href="+91 9212422000">+91-9212422000</a> / <a className="text-green" href="011 66766060">011 66766060</a> (08:00 AM-10:30 PM, Monday-Sunday) and we will be more than happy to assist you in placing your order.</li>
                                    <li className="">You can mail us all the details at <a className="text-green" href="help@fnp.com">help@fnp.com</a> and we place an order for you.</li>
                                    <li className="">'APP' You can download our APP <a className="text-green" href="https://www.fnp.com/info/download-app">https://www.fnp.com/info/download-app</a> and place an order on it.</li>
                                </ul>
                            </p>
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingTwo">
                        <button class="accordion-button collapsed fs-14 fw-500" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            What information is required from my end to submit the order?
                        </button>
                    </h2>
                    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <p className="fs-14">
                                We would require the following information from you -
                            </p>
                            <p className="fs-14">
                                <ul className="list-styled-disc ms-3">
                                    <li className="">Recipient's name</li>
                                    <li className="">Complete delivery address, along with the pin code</li>
                                    <li className="">Contact number of the recipient</li>
                                    <li className="">Date of delivery</li>
                                    <li className="">Time of delivery will be needed in case of products that are delivered by hand</li>
                                    <li className="">Sender's name</li>
                                    <li className="">Shipping option</li>
                                    <li className="">Billing information</li>
                                </ul>
                            </p>
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingThree">
                        <button class="accordion-button collapsed fs-14 fw-500" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            How do I find different types of products?
                        </button>
                    </h2>
                    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <p className="fs-14">
                                To make shopping easy and hassle-free for you, we have categorised our products in different categories. You have the option to choose products from categories like Flowers, Cakes and Gifts. You can also choose products based on an occasion. Happy shopping!
                            </p>

                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingFour">
                        <button class="accordion-button collapsed fs-14 fw-500" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                            Can I get a product customized?
                        </button>
                    </h2>
                    <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <p className="fs-14">
                                Sure you can! Call us at <a className="text-green" href="+91 9212422000">+91-9212422000</a> / <a className="text-green" href="011 66766060">011 66766060</a> (08: 00 AM-10: 30 PM, Monday-Sunday)  or write to us at help@fnp.com and let us know what you want.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
