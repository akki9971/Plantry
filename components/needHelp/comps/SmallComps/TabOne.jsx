import React from 'react'

export const TabOne = () => {
    return (
        <>
            <h5>My Account & My Cart</h5>
            <div class="accordion mt-3 " id="accordionExample">
                <div class="accordion-item">
                    <h6 class="accordion-header" id="headingOne">
                        <button class="accordion-button collapsed fs-14 fw-500" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                            What is My Account?
                        </button>
                    </h6>
                    <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <p className="fs-14">
                                Registering to the My Account service is free and allows you to recall your personal information when visiting us next time, making it faster to place future orders.
                            </p>
                            <p className="fs-14">
                                Once you have registered with us, you can sign in using your user name and password. We'll provide you with an address book and a reminder section, to store your recipients details, together with a log of orders previously placed.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingTwo">
                        <button class="accordion-button collapsed fs-14 fw-500" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            I forgot my password!
                        </button>
                    </h2>
                    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <p className="fs-14">
                                Don't worry. We've got you covered. Here's what you need to do.


                            </p>
                            <p className="fs-14">
                                Step 1: Click here to go to the login page <br />
                                Step 2: Enter your e-mail ID <br />
                                Step 3: Click on the Forgot Password link <br />
                            </p>
                            <p className="fs-14">
                                A new password will be sent to your registered email. You can use that password to login to your Account and then reset it in the My Account section.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingThree">
                        <button class="accordion-button collapsed fs-14 fw-500" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Oops! I do not remember my login ID and password.
                        </button>
                    </h2>
                    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <p className="fs-14">
                                No worries! Please share your order number to help@fnp.com with a request for your login ID & password. We will provide you with your login credentials.
                            </p>

                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingFour">
                        <button class="accordion-button collapsed fs-14 fw-500" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                            What is my Cart?
                        </button>
                    </h2>
                    <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <p className="fs-14">
                                Like shopping carts in a retail store, My Cart helps you keep the things you want at one place, while you continue browsing or leave the site to think about it.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingFive">
                        <button class="accordion-button collapsed fs-14 fw-500" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                            Can I remove products in my Cart?
                        </button>
                    </h2>
                    <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <p className="fs-14">
                                Yes, if you wish to remove a particular product from your Cart, click on 'Manage Your Cart'. You will be able to see all products in your cart. Click on the 'Remove' button next to the item you wish to remove from your Cart.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingSix">
                        <button class="accordion-button collapsed fs-14 fw-500" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                            Where to track my shipment of the orders?
                        </button>
                    </h2>
                    <div id="collapseSix" class="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <p className="fs-14">
                                You can track your order for the latest information on delivery. You will see a 'Track Order' option on the top right corner of the page. Enter your order number & click on 'Track Now' to see the current status of your order.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
