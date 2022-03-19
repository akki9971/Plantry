import React from 'react'

export const TabFour = () => {
  return (
    <>
      <h5>Order Modification/Cancellation</h5>
      <div class="accordion mt-3 tabTwo" id="accordionExample">
        <div class="accordion-item">
          <h6 class="accordion-header" id="headingOne">
            <button class="accordion-button collapsed fs-14 fw-500" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
              How can I make a change in my order or cancel it?
            </button>
          </h6>
          <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              <p className="fs-14">
                If you need to make changes or cancel your order, please call us at +91 92124 22000 / +011-66766060 or email us at help@fnp.com
              </p>
              <p className="fs-14">
                Note: Order modification/cancellation in a domestic order, please give at least 24 hours notice before the requested delivery date. If your order has already been shipped or delivered, we won't be able to cancel it or make changes. Order modification/cancellation in an international order, please give at least 48 hours notice. If your order has already been shipped or delivered, we won't be able to cancel it or make changes. If your order has already been shipped or delivered, we won't be able to cancel it or make changes.
              </p>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingTwo">
            <button class="accordion-button collapsed fs-14 fw-500" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              How long will it take to process my cancellation request?
            </button>
          </h2>
          <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              <p className="fs-14">
                It takes up to 24 hours time to process a cancellation request.
              </p>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingThree">
            <button class="accordion-button collapsed fs-14 fw-500" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              What are the modes of refund available after cancellation?
            </button>
          </h2>
          <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              <p className="fs-14">
                Your refund amount shall be credited to the same Debit card/Credit card/Mobile wallet through which the payment was made.
              </p>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}
