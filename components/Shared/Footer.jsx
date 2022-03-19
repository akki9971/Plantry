import React from 'react'
import { BsPinterest , BsInstagram} from 'react-icons/bs'
import { SiFacebook, SiPaytm } from 'react-icons/si'
import { AiFillTwitterCircle} from 'react-icons/ai'
import { FaCcVisa, FaCcMastercard, FaCcPaypal} from 'react-icons/fa'

export const Footer = () => {
  return (
    <>
      <div className="viewInDesktop">
        <div className="bg-dark footer">
          <div className="w-95">
            <div className="row ">
              <div className="col">
                <h6 className="mt-1">
                  <a href="" className="text-white td-none">
                    © 1994-2022 fnp.com.All rights reserved.
                  </a>
                </h6>
              </div>
              <div className="col text-center">
                <h6 className=" text-white">
                  keep in touch with
                  <a href="" className="social-media">
                    <SiFacebook />
                  </a>
                  <a href="" className="social-media">
                    <AiFillTwitterCircle />
                  </a>
                  <a href="" className="social-media">
                    <BsPinterest />
                  </a>
                  <a href="" className="social-media">
                    <BsInstagram />
                  </a>
                </h6>
              </div>
              <div className="col text-end">
                <h6 className="">
                  <a href="" className="pay-option visa">
                    <FaCcVisa />
                  </a>
                  <a href="" className="pay-option paytm">
                    <SiPaytm />
                  </a>
                  <a href="" className="pay-option visa">
                    <FaCcMastercard />
                  </a>
                  <a href="" className="pay-option visa">
                    <FaCcPaypal />
                  </a>
                  <a href="" className="pay-option visa">
                    <FaCcVisa />
                  </a>
                  <a href="" className="pay-option visa">
                    <FaCcVisa />
                  </a>
                  <a href="" className="pay-option visa">
                    <FaCcVisa />
                  </a>

                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
        
    </>
  )
}
