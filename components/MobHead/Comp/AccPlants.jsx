import React from 'react'
import Link from 'next/link'

export const AccPlants = () => {
    return (
        <>
            <div class="accordion " id="plantsaccordion">
                <div class="accordion-item">
                    <h6 class="accordion-header" id="plantseadOne">
                        <button class="accordion-button sbmenu collapsed fs-14 fw-500" type="button" data-bs-toggle="collapse" data-bs-target="#plantscolOne" aria-expanded="false" aria-controls="plantscolOne">
                            Gifts By Choice
                        </button>
                    </h6>
                    <div id="plantscolOne" class="accordion-collapse collapse" aria-labelledby="plantseadOne" data-bs-parent="#plantsaccordion">
                        <div class="accordion-body child">
                            <ul className="sbsbmenu">
                                <li><Link href=""><a>All plantsday Gifts</a></Link></li>
                                <li><Link href=""><a>Best Seller plantsday Gifts</a></Link></li>
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
                    <h2 class="accordion-header" id="plantseadTwo">
                        <button class="accordion-button sbmenu collapsed fs-14 fw-500" type="button" data-bs-toggle="collapse" data-bs-target="#plantscolTwo" aria-expanded="false" aria-controls="plantscolTwo">
                            plants
                        </button>
                    </h2>
                    <div id="plantscolTwo" class="accordion-collapse collapse" aria-labelledby="plantseadTwo" data-bs-parent="#plantsaccordion">
                        <div class="accordion-body child">
                            <ul className="sbsbmenu">
                                <li><Link href=""><a>All plantsday plants</a></Link></li>
                                <li><Link href=""><a>plantsday plants for Kids</a></Link></li>
                                <li><Link href=""><a>Designer plants</a></Link></li>
                                <li><Link href=""><a>Photo plants</a></Link></li>
                                <li><Link href=""><a>Chocolate plants</a></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="plantseadThree">
                        <button class="accordion-button sbmenu collapsed fs-14 fw-500" type="button" data-bs-toggle="collapse" data-bs-target="#plantscolThree" aria-expanded="false" aria-controls="plantscolThree">
                            Chocolates
                        </button>
                    </h2>
                    <div id="plantscolThree" class="accordion-collapse collapse" aria-labelledby="plantseadThree" data-bs-parent="#plantsaccordion">
                        <div class="accordion-body child">
                            <ul className="sbsbmenu">
                                <li><Link href=""><a>All plantsday Chocolates</a></Link></li>
                                <li><Link href=""><a>Chocolate Bouquets</a></Link></li>
                                <li><Link href=""><a>Imported Chocolates</a></Link></li>
                                <li><Link href=""><a>Handmade Chocolates</a></Link></li>
                                <li><Link href=""><a>Personalised Chocolates</a></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="plantseadFour">
                        <button class="accordion-button sbmenu collapsed fs-14 fw-500" type="button" data-bs-toggle="collapse" data-bs-target="#plantscolFour" aria-expanded="false" aria-controls="plantscolFour">
                            Flowers
                        </button>
                    </h2>
                    <div id="plantscolFour" class="accordion-collapse collapse" aria-labelledby="plantseadFour" data-bs-parent="#plantsaccordion">
                        <div class="accordion-body child">
                            <ul className="sbsbmenu">
                                <li><Link href=""><a>All plantsday Flowers</a></Link></li>
                                <li><Link href=""><a>Roses</a></Link></li>
                                <li><Link href=""><a>Lilies</a></Link></li>
                                <li><Link href=""><a>Exotic Flowers</a></Link></li>
                                <li><Link href=""><a>Mixed Flowers</a></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="plantseadFive">
                        <button class="accordion-button sbmenu collapsed fs-14 fw-500" type="button" data-bs-toggle="collapse" data-bs-target="#plantscolFive" aria-expanded="false" aria-controls="plantscolFive">
                            Plants
                        </button>
                    </h2>
                    <div id="plantscolFive" class="accordion-collapse collapse" aria-labelledby="plantseadFive" data-bs-parent="#plantsaccordion">
                        <div class="accordion-body child">
                            <ul className="sbsbmenu">
                                <li><Link href=""><a>All plantsday Plants</a></Link></li>
                                <li><Link href=""><a>Money Plants</a></Link></li>
                                <li><Link href=""><a>Lucky Bamboo</a></Link></li>
                                <li><Link href=""><a>Air Purifying Plants</a></Link></li>
                                <li><Link href=""><a>Bonsai Plants</a></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="plantseadSix">
                        <button class="accordion-button sbmenu collapsed fs-14 fw-500" type="button" data-bs-toggle="collapse" data-bs-target="#plantscolSix" aria-expanded="false" aria-controls="plantscolSix">
                            Personalised Gifts
                        </button>
                    </h2>
                    <div id="plantscolSix" class="accordion-collapse collapse" aria-labelledby="plantseadSix" data-bs-parent="#plantsaccordion">
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
