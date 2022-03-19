import React from 'react'

export const TabEight = () => {
  return (
    <>
      <h5>Subscriptions</h5>
      <div class="accordion mt-3 tabTwo" id="accordionExample">
        <div class="accordion-item">
          <h6 class="accordion-header" id="headingOne">
            <button class="accordion-button collapsed fs-14 fw-500" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                What are Newsletters?
            </button>
          </h6>
          <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              <p className="fs-14">
                A newsletter is a timely notification of the website updates, featured products, special offers, promotions etc.
              </p>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingTwo">
            <button class="accordion-button collapsed fs-14 fw-500" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Why should I subscribe to Newsletters?
            </button>
          </h2>
          <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              <p className="fs-14">
                <ul className="list-styled-disc ms-3">
                  <li className="">To receive special offers and promotions from FNP.com</li>
                  <li className="">See latest products and gifts</li>
                </ul>
              </p>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingThree">
            <button class="accordion-button collapsed fs-14 fw-500" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                How can I subscribe to Newsletters?
            </button>
          </h2>
          <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              <p className="fs-14">
                All you need to do is to enter your email id in the Newsletter box on our website. Upon entering your email id, a verification email will be sent to your email. Click on that link and activate your subscription.
              </p>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingFour">
            <button class="accordion-button collapsed fs-14 fw-500" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                How can I unsubscribe to newsletters?
            </button>
          </h2>
          <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              <p className="fs-14">
                To stop receiving promotional email from us, click directly on the "Unsubscribe" link within the email to cancel your subscription.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
