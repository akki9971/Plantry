import React, { useState } from 'react'

export const SavedAddresses = () => {

  const [uData, setuData] = useState([])
  const clicker = () =>{
    setuData([...uData,{
      id:uData.length,
      value:Math.round(Math.random()*1000)
    }])
  }
  return (
    <>
      <div className="container savedAddress">
        <h5>Saved Addresses</h5>
        <div className="row">
          <h5 className="text-center text-primary fw-normal">No Saved Address(s)!</h5>
          </div>
          <button className="btn btn-otline-orange" onClick={clicker}>Clicker</button>
          {
            uData?.map((val, i)=>{
              return <li className="" key={i}>{val?.value}</li>
            })
          }
        </div>
    </>
  )
}
