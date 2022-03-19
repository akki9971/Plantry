import React from 'react'
import Link from 'next/link'

export const MyOrders = () => {
  return (
    <>
      <div className="container my_orders">
        <div className="row">
          <div className="col-sm-6">
            <h5>My Orders</h5>
          </div>
          <div className="col-sm-6 text-sm-end ">
            <Link href="" ><a className="btn btn-outline-orange fs-14">GENERAL QUERY</a></Link>
            <Link href="" ><a className="btn btn-outline-orange fs-14 mx-1 mx-sm-3">ALL TICKETS</a></Link>
            <Link href="" ><a className="btn btn-outline-orange fs-14">FAQ</a></Link>
          </div>
        </div>

        <div className="row my-2">
            <h5 className="text-center fw-normal">No orders found!</h5>
          </div>
      </div>
    </>
  )
}
