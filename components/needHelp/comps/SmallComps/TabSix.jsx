import React from 'react'

export const TabSix = () => {
  return (
    <>
      <h5>What if I am unhappy with my order?</h5>
      <div class="accordion mt-3 tabTwo" id="accordionExample">
        <div class="accordion-item">
          <h6 class="accordion-header" id="headingOne">
            <button class="accordion-button collapsed fs-14 fw-500" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                I am unhappy with my order!
            </button>
          </h6>
          <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              <p className="fs-14">
                We are sorry to hear that you are not happy. Your smile is our promise! No frowns. If any, we'll tilt the curve.
              </p>
              <p className="fs-14">
                Just let us know how we failed to meet your expectations and we will fix it at the earliest. You can write to us at help@fnp.com or call us at +91 9212422000 / 011 66766060 (08:00 AM-10:30 PM, Monday-Sunday).
              </p>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingTwo">
            <button class="accordion-button collapsed fs-14 fw-500" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                My order is delayed, what do I do?
            </button>
          </h2>
          <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              <p className="fs-14">
                Orders are generally processed within the timeframe mentioned during the order placement process. However, in some cases where the order is shipping through the ground shipping through logistics partners, it gets delayed beyond our control. Our team is proactively monitoring these orders and will send you regular updates. We request you to wait for the defined timeslot to get over. you can send an email to help@fnp.com if the delivery slot is over.
              </p>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingThree">
            <button class="accordion-button collapsed fs-14 fw-500" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Date of delivery has passed, when do I get my order or refund?
            </button>
          </h2>
          <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              <p className="fs-14">
                In some cases where the order is shipping through the ground shipping through logistics partners, it gets delayed beyond our control. Our team is proactively monitoring these orders and will send you regular updates. We request you to wait for the defined timeslot to get over.
              </p>
              <p className="fs-14">
                If delivery does not happen with delay, we request you to reach out to us at help@fnp.com. Refunds are processed immediately and generally reflect within one-two business days.
              </p>

            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingFour">
            <button class="accordion-button collapsed fs-14 fw-500" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                My order is partially delivered.
            </button>
          </h2>
          <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              <p className="fs-14">
                We recommend you to check your My Account section carefully and observe the order is split into multiple sub-orders. There is a possibility it is getting delivered by two delivery centres, which is being perceived as partial delivery. Most likely, another part of the order will also get delivered withing timeframe.
              </p>
              <p className="fs-14">
                If that is not the case, please report to our service team at help@fnp.com.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
