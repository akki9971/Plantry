import React from 'react'

export const TabThree = () => {
    return (
        <>
            <h5>Delivery Information</h5>
            <div class="accordion mt-3 " id="accordionExample">
                <div class="accordion-item">
                    <h6 class="accordion-header" id="headingOne">
                        <button class="accordion-button collapsed fs-14 fw-500" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                            Where all do you deliver?
                        </button>
                    </h6>
                    <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <p className="fs-14">
                                We deliver in over 400 cities within India and to more than 150 countries. Click here to see our list of Serviceable Cities Express Cities, Courier Cities and Remote cities.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingTwo">
                        <button class="accordion-button collapsed fs-14 fw-500" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Is there any particular time of delivery?
                        </button>
                    </h2>
                    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <p className="fs-14">
                                All orders are delivered during business hours (8 AM - 10 PM), unless you have opted for a Midnight or a Fixed time delivery.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingThree">
                        <button class="accordion-button collapsed fs-14 fw-500" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Can I choose my time of delivery?
                        </button>
                    </h2>
                    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <p className="fs-14">
                                By paying additional delivery charge, you have the option to choose a Fixed Time slot for delivery.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingFour">
                        <button class="accordion-button collapsed fs-14 fw-500" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                            Can I get the order delivered midnight?
                        </button>
                    </h2>
                    <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <p className="fs-14">
                                We understand the emotions of celebrating an occasion on its eve. That's why we have an option of a Midnight delivery for our customers. With an additional delivery charge, you can get your order delivered between 23:00 to 00:00 hours on the date you choose.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingFive">
                        <button class="accordion-button collapsed fs-14 fw-500" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                            Are there any shipping charges?
                        </button>
                    </h2>
                    <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <p className="fs-14">
                                There are no Shipping Charges for Standard Delivery and all couriers delivered made within India. There is a minimal Shipping Charge on International couriers.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingSix">
                        <button class="accordion-button collapsed fs-14 fw-500" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                            What is the mode of delivery?
                        </button>
                    </h2>
                    <div id="collapseSix" class="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <p className="fs-14">
                                We have following 2 modes of delivery - hand delivery and courier.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingSeven">
                        <button class="accordion-button collapsed fs-14 fw-500" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                            I don?t want to disclose my personal information to the recipient, how do I place the order?
                        </button>
                    </h2>
                    <div id="collapseSeven" class="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <p className="fs-14">
                                We totally understand the surprise element. You can write to us at help@fnp.com or call us at +91-9212422000 / 011 66766060 (08:00 AM-10:30 PM, Monday-Sunday) and let us know.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingEight">
                        <button class="accordion-button collapsed fs-14 fw-500" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                            How do I know my order has been confirmed?
                        </button>
                    </h2>
                    <div id="collapseEight" class="accordion-collapse collapse" aria-labelledby="headingEight" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <p className="fs-14">
                                As soon as your order is confirmed, you will receive an email & SMS along with your order number.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingNine">
                        <button class="accordion-button collapsed fs-14 fw-500" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
                            What do the different order statuses mean?
                        </button>
                    </h2>
                    <div id="collapseNine" class="accordion-collapse collapse" aria-labelledby="headingNine" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <p className="fs-14">
                                <ul className="list-styled-disc ms-3">
                                    <li className="mt-1">Payment received: We have received the payment of your order and your order is ready to be executed.</li>
                                    <li className="mt-1">Payment declined: The payment for your order has failed.</li>
                                    <li className="mt-1">Order confirmed: Your order is confirmed. It will be delivered as per the date and time slot chosen by you.</li>
                                    <li className="mt-1">Out for delivery: Your order is out for delivery.</li>
                                    <li className="mt-1">Order delivered: Your order has been delivered.</li>
                                    <li className="mt-1">Delivery attempted: We tried to attempt to deliver your order but could not because the recipient was unable/recipient's number was not reachable/premises was locked/address was incomplete/incorrect.</li>
                                    <li className="mt-1">Returned to origin: Our courier partner tried to deliver your order thrice but could not because the recipient was unable/recipient's number was not reachable/premises was locked/address was incomplete/incorrect.</li>
                                </ul>
                            </p>
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingTen">
                        <button class="accordion-button collapsed fs-14 fw-500" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTen" aria-expanded="false" aria-controls="collapseTen">
                            What is Same Day delivery?
                        </button>
                    </h2>
                    <div id="collapseTen" class="accordion-collapse collapse" aria-labelledby="headingTen" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <p className="fs-14">
                                We're happy to take your last minute orders and guarantee same day delivery.

                            </p>
                            <p className="fs-14">
                                For same-day Standard Time Delivery, orders must be placed before 6:00 pm, Monday - Sunday, IST.<br />
                                For same-day Fixed Time Delivery, orders must be placed before 6:30 pm, Monday - Sunday, IST.<br />
                                For same-day Midnight Delivery, orders must be placed before 7:00 pm, Monday - Sunday, IST.<br />
                            </p>
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingEleven">
                        <button class="accordion-button collapsed fs-14 fw-500" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEleven" aria-expanded="false" aria-controls="collapseEleven">
                            What is a normal courier delivery?
                        </button>
                    </h2>
                    <div id="collapseEleven" class="accordion-collapse collapse" aria-labelledby="headingEleven" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <p className="fs-14">
                                Your order will be delivered through our courier partners like Bluedart, Truston and Speedpost. For products that are shipped using the services of our courier partners, the date of delivery chosen by you is an estimate. Your order may be delivered a day prior or a day after the chosen date of delivery.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingTwelve">
                        <button class="accordion-button collapsed fs-14 fw-500" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwelve" aria-expanded="false" aria-controls="collapseTwelve">
                            Are there any extra charges for same day delivery?
                        </button>
                    </h2>
                    <div id="collapseTwelve" class="accordion-collapse collapse" aria-labelledby="headingTwelve" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <p className="fs-14">
                                There are no extra charges for same day Standard Time Delivery. There is a minimal delivery charge for same day Fixed Time and Midnight delivery.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingThirteen">
                        <button class="accordion-button collapsed fs-14 fw-500" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThirteen" aria-expanded="false" aria-controls="collapseThirteen">
                            What is Delhi-NCR courier delivery?
                        </button>
                    </h2>
                    <div id="collapseThirteen" class="accordion-collapse collapse" aria-labelledby="headingThirteen" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <p className="fs-14">
                                These are deliveries applicable only to Delhi-NCR region. We deliver on the same day the order was placed.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
