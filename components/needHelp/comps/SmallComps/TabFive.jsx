import React from 'react'

export const TabFive = () => {
  return (
    <>
      <h5>Return and Refund Policy</h5>
      <div class="accordion mt-3 tabTwo" id="accordionExample">
        <div class="accordion-item">
          <h6 class="accordion-header" id="headingOne">
            <button class="accordion-button collapsed fs-14 fw-500" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
              What is FNP's Return Policy?
            </button>
          </h6>
          <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              <p className="fs-14">
                No returns are allowed. However, in case if a wrong or a defective product has been sent, do let us know at the earliest. You can write to us at help@fnp.com or call us at +91-9212422000 / 011 66766060 (08:00 AM-10:30 PM, Monday-Sunday).
              </p>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingTwo">
            <button class="accordion-button collapsed fs-14 fw-500" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                How do I return a defective or damaged product for a new replacement?
            </button>
          </h2>
          <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              <p className="fs-14">
                We take stringent measures to ensure that the items delivered to you are in perfect condition. However, there is a remote possibility that the item may be damaged during transit or that a wrong item is delivered to you. Don't worry. You can write to us at help@fnp.com or call us at +91 9212422000 / 011 66766060 (08:00 AM-10:30 PM, Monday-Sunday) and we will take care of it.
              </p>
              
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingThree">
            <button class="accordion-button collapsed fs-14 fw-500" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Return and Refund Policy
            </button>
          </h2>
          <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              <p className="fs-14">
                What is FNP's Return Policy?How do I return a defective or damaged product for a new replacement?What are the cases where a refund will not be made?
                We do not guarantee refund for cases where:
              </p>
              <p className="fs-14">
                <ul className="list-styled-disc ms-3">
                  <li className="">Flowers, plants, fruits, sweets, gift products and preserved items are delivered to an incorrect address provided by the sender.</li>
                  <li className="">Unsuccessful deliveries arising from the recipient not being present at the time of delivery at the address provided by the sender or the recipient refusing to accept the delivery.</li>
                  <li className="">Product quality problems caused by improper handling of the product.</li>
                  <li className="">Cancellation/modification request in a Domestic order made less than 24 hours prior to the date of delivery and Cancellation/modification request in an International order made 48 hours prior to the date of delivery. In the event that we are unable to supply all or part of your order (the product or any substitute product to you at all), we shall notify you as soon as possible and reimburse your payment in full.</li>
                </ul>
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
