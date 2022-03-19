import React from 'react'
import Link from 'next/link'

export const AccPerGifts = () => {
    return (
        <>
            <div class="accordion " id="pgiftaccordion">
                <div class="accordion-item">
                    <h6 class="accordion-header" id="pgifteadOne">
                        <button class="accordion-button sbmenu collapsed fs-14 fw-500" type="button" data-bs-toggle="collapse" data-bs-target="#pgiftcolOne" aria-expanded="false" aria-controls="pgiftcolOne">
                            Gifts By Choice
                        </button>
                    </h6>
                    <div id="pgiftcolOne" class="accordion-collapse collapse" aria-labelledby="pgifteadOne" data-bs-parent="#pgiftaccordion">
                        <div class="accordion-body child">
                            <ul className="sbsbmenu">
                                <li><Link href=""><a>All pgiftday Gifts</a></Link></li>
                                <li><Link href=""><a>Best Seller pgiftday Gifts</a></Link></li>
                                <li><Link href=""><a>Premium Gifts</a></Link></li>
                                <li><Link href=""><a>Balloon Decorations</a></Link></li>
                                <li><Link href=""><a>Live Guitarists</a></Link></li>
                                <li><Link href=""><a>Celebrity Video Messages</a></Link></li>
                                <li><Link href=""><a>Same Day Delivery</a></Link></li>
                                <li><Link href=""><a>Midnight Delivery</a></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="pgifteadTwo">
                        <button class="accordion-button sbmenu collapsed fs-14 fw-500" type="button" data-bs-toggle="collapse" data-bs-target="#pgiftcolTwo" aria-expanded="false" aria-controls="pgiftcolTwo">
                            pgift
                        </button>
                    </h2>
                    <div id="pgiftcolTwo" class="accordion-collapse collapse" aria-labelledby="pgifteadTwo" data-bs-parent="#pgiftaccordion">
                        <div class="accordion-body child">
                            <ul className="sbsbmenu">
                                <li><Link href=""><a>All pgiftday pgift</a></Link></li>
                                <li><Link href=""><a>pgiftday pgift for Kids</a></Link></li>
                                <li><Link href=""><a>Designer pgift</a></Link></li>
                                <li><Link href=""><a>Photo pgift</a></Link></li>
                                <li><Link href=""><a>Chocolate pgift</a></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="pgifteadThree">
                        <button class="accordion-button sbmenu collapsed fs-14 fw-500" type="button" data-bs-toggle="collapse" data-bs-target="#pgiftcolThree" aria-expanded="false" aria-controls="pgiftcolThree">
                            Chocolates
                        </button>
                    </h2>
                    <div id="pgiftcolThree" class="accordion-collapse collapse" aria-labelledby="pgifteadThree" data-bs-parent="#pgiftaccordion">
                        <div class="accordion-body child">
                            <ul className="sbsbmenu">
                                <li><Link href=""><a>All pgiftday Chocolates</a></Link></li>
                                <li><Link href=""><a>Chocolate Bouquets</a></Link></li>
                                <li><Link href=""><a>Imported Chocolates</a></Link></li>
                                <li><Link href=""><a>Handmade Chocolates</a></Link></li>
                                <li><Link href=""><a>Personalised Chocolates</a></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="pgifteadFour">
                        <button class="accordion-button sbmenu collapsed fs-14 fw-500" type="button" data-bs-toggle="collapse" data-bs-target="#pgiftcolFour" aria-expanded="false" aria-controls="pgiftcolFour">
                            Flowers
                        </button>
                    </h2>
                    <div id="pgiftcolFour" class="accordion-collapse collapse" aria-labelledby="pgifteadFour" data-bs-parent="#pgiftaccordion">
                        <div class="accordion-body child">
                            <ul className="sbsbmenu">
                                <li><Link href=""><a>All pgiftday Flowers</a></Link></li>
                                <li><Link href=""><a>Roses</a></Link></li>
                                <li><Link href=""><a>Lilies</a></Link></li>
                                <li><Link href=""><a>Exotic Flowers</a></Link></li>
                                <li><Link href=""><a>Mixed Flowers</a></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="pgifteadFive">
                        <button class="accordion-button sbmenu collapsed fs-14 fw-500" type="button" data-bs-toggle="collapse" data-bs-target="#pgiftcolFive" aria-expanded="false" aria-controls="pgiftcolFive">
                            Plants
                        </button>
                    </h2>
                    <div id="pgiftcolFive" class="accordion-collapse collapse" aria-labelledby="pgifteadFive" data-bs-parent="#pgiftaccordion">
                        <div class="accordion-body child">
                            <ul className="sbsbmenu">
                                <li><Link href=""><a>All pgiftday Plants</a></Link></li>
                                <li><Link href=""><a>Money Plants</a></Link></li>
                                <li><Link href=""><a>Lucky Bamboo</a></Link></li>
                                <li><Link href=""><a>Air Purifying Plants</a></Link></li>
                                <li><Link href=""><a>Bonsai Plants</a></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="pgifteadSix">
                        <button class="accordion-button sbmenu collapsed fs-14 fw-500" type="button" data-bs-toggle="collapse" data-bs-target="#pgiftcolSix" aria-expanded="false" aria-controls="pgiftcolSix">
                            Personalised Gifts
                        </button>
                    </h2>
                    <div id="pgiftcolSix" class="accordion-collapse collapse" aria-labelledby="pgifteadSix" data-bs-parent="#pgiftaccordion">
                        <div class="accordion-body child">
                            <ul className="sbsbmenu">
                                <li><Link href=""><a>All Personalised Gifts</a></Link></li>
                                <li><Link href=""><a>Personalised Mugs</a></Link></li>
                                <li><Link href=""><a>Cushion N Pillow Covers</a></Link></li>
                                <li><Link href=""><a>Water Bottle N Flask</a></Link></li>
                                <li><Link href=""><a>Photo Frames N Table Top</a></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
