import React from 'react'

export const Tickets = () => {
  return (
    <>
      <div className="container ticket">
        <div className="row ">
          <div className="col-sm-6">
            <h5>My Tickets</h5>
          </div>
          <div className="col-sm-6 text-end ">
            <select className="btn shadow p-2 px-5 text-primary fw-bold fs-14" value="SHOW" onChange={() => { }} >
              <option value="25">25</option>
              <option value="50">25</option>
              <option value="100">25</option>
            </select>
          </div>
        </div>
        <h5 className="text-center fs-14  mt-5 fw-normal">No available tickets found!</h5>
      </div>
    </>
  )
}
