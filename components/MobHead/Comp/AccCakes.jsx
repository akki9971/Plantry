import React from 'react'
import Link from 'next/link'

export const AccCakes = () => {
    return (
        <>
            <div class="accordion " id="cakesaccordion">
                <div class="accordion-item">
                    <h6 class="accordion-header" id="cakeseadOne">
                        <button class="accordion-button sbmenu collapsed fs-14 fw-500" type="button" data-bs-toggle="collapse" data-bs-target="#cakescolOne" aria-expanded="false" aria-controls="cakescolOne">
                            Gifts By Choice
                        </button>
                    </h6>
                    <div id="cakescolOne" class="accordion-collapse collapse" aria-labelledby="cakeseadOne" data-bs-parent="#cakesaccordion">
                        <div class="accordion-body child">
                            <ul className="sbsbmenu">
                                <li><Link href=""><a>All cakesday Gifts</a></Link></li>
                                <li><Link href=""><a>Best Seller cakesday Gifts</a></Link></li>
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
                    <h2 class="accordion-header" id="cakeseadTwo">
                        <button class="accordion-button sbmenu collapsed fs-14 fw-500" type="button" data-bs-toggle="collapse" data-bs-target="#cakescolTwo" aria-expanded="false" aria-controls="cakescolTwo">
                            Cakes
                        </button>
                    </h2>
                    <div id="cakescolTwo" class="accordion-collapse collapse" aria-labelledby="cakeseadTwo" data-bs-parent="#cakesaccordion">
                        <div class="accordion-body child">
                            <ul className="sbsbmenu">
                                <li><Link href=""><a>All cakesday Cakes</a></Link></li>
                                <li><Link href=""><a>cakesday Cakes for Kids</a></Link></li>
                                <li><Link href=""><a>Designer Cakes</a></Link></li>
                                <li><Link href=""><a>Photo Cakes</a></Link></li>
                                <li><Link href=""><a>Chocolate Cakes</a></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="cakeseadThree">
                        <button class="accordion-button sbmenu collapsed fs-14 fw-500" type="button" data-bs-toggle="collapse" data-bs-target="#cakescolThree" aria-expanded="false" aria-controls="cakescolThree">
                            Chocolates
                        </button>
                    </h2>
                    <div id="cakescolThree" class="accordion-collapse collapse" aria-labelledby="cakeseadThree" data-bs-parent="#cakesaccordion">
                        <div class="accordion-body child">
                            <ul className="sbsbmenu">
                                <li><Link href=""><a>All cakesday Chocolates</a></Link></li>
                                <li><Link href=""><a>Chocolate Bouquets</a></Link></li>
                                <li><Link href=""><a>Imported Chocolates</a></Link></li>
                                <li><Link href=""><a>Handmade Chocolates</a></Link></li>
                                <li><Link href=""><a>Personalised Chocolates</a></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="cakeseadFour">
                        <button class="accordion-button sbmenu collapsed fs-14 fw-500" type="button" data-bs-toggle="collapse" data-bs-target="#cakescolFour" aria-expanded="false" aria-controls="cakescolFour">
                            Flowers
                        </button>
                    </h2>
                    <div id="cakescolFour" class="accordion-collapse collapse" aria-labelledby="cakeseadFour" data-bs-parent="#cakesaccordion">
                        <div class="accordion-body child">
                            <ul className="sbsbmenu">
                                <li><Link href=""><a>All cakesday Flowers</a></Link></li>
                                <li><Link href=""><a>Roses</a></Link></li>
                                <li><Link href=""><a>Lilies</a></Link></li>
                                <li><Link href=""><a>Exotic Flowers</a></Link></li>
                                <li><Link href=""><a>Mixed Flowers</a></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="cakeseadFive">
                        <button class="accordion-button sbmenu collapsed fs-14 fw-500" type="button" data-bs-toggle="collapse" data-bs-target="#cakescolFive" aria-expanded="false" aria-controls="cakescolFive">
                            Plants
                        </button>
                    </h2>
                    <div id="cakescolFive" class="accordion-collapse collapse" aria-labelledby="cakeseadFive" data-bs-parent="#cakesaccordion">
                        <div class="accordion-body child">
                            <ul className="sbsbmenu">
                                <li><Link href=""><a>All cakesday Plants</a></Link></li>
                                <li><Link href=""><a>Money Plants</a></Link></li>
                                <li><Link href=""><a>Lucky Bamboo</a></Link></li>
                                <li><Link href=""><a>Air Purifying Plants</a></Link></li>
                                <li><Link href=""><a>Bonsai Plants</a></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="cakeseadSix">
                        <button class="accordion-button sbmenu collapsed fs-14 fw-500" type="button" data-bs-toggle="collapse" data-bs-target="#cakescolSix" aria-expanded="false" aria-controls="cakescolSix">
                            Personalised Gifts
                        </button>
                    </h2>
                    <div id="cakescolSix" class="accordion-collapse collapse" aria-labelledby="cakeseadSix" data-bs-parent="#cakesaccordion">
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
