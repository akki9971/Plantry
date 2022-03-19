import React from 'react'
import Link from 'next/link'

export const AccBirth = () => {
  return (
    <>
          <div class="accordion " id="birthaccordion">
              <div class="accordion-item">
                  <h6 class="accordion-header" id="birtheadOne">
                      <button class="accordion-button sbmenu collapsed fs-14 fw-500" type="button" data-bs-toggle="collapse" data-bs-target="#birthcolOne" aria-expanded="false" aria-controls="birthcolOne">
                          Gifts By Choice
                      </button>
                  </h6>
                  <div id="birthcolOne" class="accordion-collapse collapse" aria-labelledby="birtheadOne" data-bs-parent="#birthaccordion">
                      <div class="accordion-body child">
                          <ul className="sbsbmenu">
                              <li><Link href=""><a>All Birthday Gifts</a></Link></li>
                              <li><Link href=""><a>Best Seller Birthday Gifts</a></Link></li>
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
                  <h2 class="accordion-header" id="birtheadTwo">
                      <button class="accordion-button sbmenu collapsed fs-14 fw-500" type="button" data-bs-toggle="collapse" data-bs-target="#birthcolTwo" aria-expanded="false" aria-controls="birthcolTwo">
                          Cakes
                      </button>
                  </h2>
                  <div id="birthcolTwo" class="accordion-collapse collapse" aria-labelledby="birtheadTwo" data-bs-parent="#birthaccordion">
                      <div class="accordion-body child">
                          <ul className="sbsbmenu">
                              <li><Link href=""><a>All Birthday Cakes</a></Link></li>
                              <li><Link href=""><a>Birthday Cakes for Kids</a></Link></li>
                              <li><Link href=""><a>Designer Cakes</a></Link></li>
                              <li><Link href=""><a>Photo Cakes</a></Link></li>
                              <li><Link href=""><a>Chocolate Cakes</a></Link></li>
                          </ul>
                      </div>
                  </div>
              </div>
              <div class="accordion-item">
                  <h2 class="accordion-header" id="birtheadThree">
                      <button class="accordion-button sbmenu collapsed fs-14 fw-500" type="button" data-bs-toggle="collapse" data-bs-target="#birthcolThree" aria-expanded="false" aria-controls="birthcolThree">
                          Chocolates
                      </button>
                  </h2>
                  <div id="birthcolThree" class="accordion-collapse collapse" aria-labelledby="birtheadThree" data-bs-parent="#birthaccordion">
                      <div class="accordion-body child">
                          <ul className="sbsbmenu">
                              <li><Link href=""><a>All Birthday Chocolates</a></Link></li>
                              <li><Link href=""><a>Chocolate Bouquets</a></Link></li>
                              <li><Link href=""><a>Imported Chocolates</a></Link></li>
                              <li><Link href=""><a>Handmade Chocolates</a></Link></li>
                              <li><Link href=""><a>Personalised Chocolates</a></Link></li>
                          </ul>
                      </div>
                  </div>
              </div>
              <div class="accordion-item">
                  <h2 class="accordion-header" id="birtheadFour">
                      <button class="accordion-button sbmenu collapsed fs-14 fw-500" type="button" data-bs-toggle="collapse" data-bs-target="#birthcolFour" aria-expanded="false" aria-controls="birthcolFour">
                          Flowers
                      </button>
                  </h2>
                  <div id="birthcolFour" class="accordion-collapse collapse" aria-labelledby="birtheadFour" data-bs-parent="#birthaccordion">
                      <div class="accordion-body child">
                          <ul className="sbsbmenu">
                              <li><Link href=""><a>All Birthday Flowers</a></Link></li>
                              <li><Link href=""><a>Roses</a></Link></li>
                              <li><Link href=""><a>Lilies</a></Link></li>
                              <li><Link href=""><a>Exotic Flowers</a></Link></li>
                              <li><Link href=""><a>Mixed Flowers</a></Link></li>
                          </ul>
                      </div>
                  </div>
              </div>
              <div class="accordion-item">
                  <h2 class="accordion-header" id="birtheadFive">
                      <button class="accordion-button sbmenu collapsed fs-14 fw-500" type="button" data-bs-toggle="collapse" data-bs-target="#birthcolFive" aria-expanded="false" aria-controls="birthcolFive">
                          Plants
                      </button>
                  </h2>
                  <div id="birthcolFive" class="accordion-collapse collapse" aria-labelledby="birtheadFive" data-bs-parent="#birthaccordion">
                      <div class="accordion-body child">
                          <ul className="sbsbmenu">
                              <li><Link href=""><a>All Birthday Plants</a></Link></li>
                              <li><Link href=""><a>Money Plants</a></Link></li>
                              <li><Link href=""><a>Lucky Bamboo</a></Link></li>
                              <li><Link href=""><a>Air Purifying Plants</a></Link></li>
                              <li><Link href=""><a>Bonsai Plants</a></Link></li>
                          </ul>
                      </div>
                  </div>
              </div>
              <div class="accordion-item">
                  <h2 class="accordion-header" id="birtheadSix">
                      <button class="accordion-button sbmenu collapsed fs-14 fw-500" type="button" data-bs-toggle="collapse" data-bs-target="#birthcolSix" aria-expanded="false" aria-controls="birthcolSix">
                          Personalised Gifts
                      </button>
                  </h2>
                  <div id="birthcolSix" class="accordion-collapse collapse" aria-labelledby="birtheadSix" data-bs-parent="#birthaccordion">
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
