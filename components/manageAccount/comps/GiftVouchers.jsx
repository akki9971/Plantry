import React, { useState } from 'react'

export const GiftVouchers = () => {
  const [isOpen, setIsOpen] = useState(false)
  const unUsedGifts = 0;
  const usedGifts = 0

  const handleClick = (value) => {
    // value.preventDefault()
    setIsOpen(value)
  }
  return (
    <>
      <div className="container gift_vouchers">
        <div className="button-section text-center">
          <h6 className="buttons text-center">
            <button className={`gift-btn ${isOpen ? '' : 'open'}`} onClick={() => handleClick(false)} >USED ({usedGifts})</button>
            <button className={`gift-btn ${isOpen ? 'open' : ''}`} onClick={() => handleClick(true)} >UNUSED ({unUsedGifts})</button>
          </h6>
          {
            isOpen && <div className="unused">
              <h6 className="text-center ">You do not have any unused voucher currently</h6>
              </div>
          }
          {
            !isOpen && <div className="used">
              <h6 className="text-center ">You do not have any voucher currently</h6>
              </div>
          }
        </div>
      </div>
    </>
  )
}
