import React from 'react'
import { ZoomedImage } from '../../Shared'
import { AiFillStar } from 'react-icons/ai'

export const Reviews = () => {
  const reviews = [
    {
      name:'jordan',
      msg: 'Excellent and amazing service, superb product',
      ratings:4,
      location: 'Banglore',
      Occasion: 'Annniversery',
      date: '14/02/2022, 9:32 PM'
    },
    {
      name:'Emily',
      msg: 'I love this website and its services, excellent choice i have ever made',
      ratings:5,
      location: 'Hydrabad',
      Occasion: 'Birthday',
      date: '05/01/2022, 5:17 PM'
    },
    {
      name:'jordan',
      msg: 'Happy',
      ratings:3,
      location: 'Chennai',
      Occasion: 'Annniversery',
      date: '14/02/2022, 9:32 PM'
    },
    {
      name:'Elon Must',
      msg: 'Good n fresh Products',
      ratings:4,
      location: 'Pluto',
      Occasion: 'Launch',
      date: '14/02/2022, 9:32 PM'
    },
    {
      name:'jordan',
      msg: 'Excellent amazing service , super product',
      ratings:5,
      location: 'Banglore',
      Occasion: 'Annniversery',
      date: '14/02/2022, 9:32 PM'
    },
    {
      name:'jordan',
      msg: 'Excellent amazing service , super product',
      ratings:5,
      location: 'Banglore',
      Occasion: 'Annniversery',
      date: '14/02/2022, 9:32 PM'
    },
    {
      name:'jordan',
      msg: 'Excellent amazing service , super product',
      ratings:5,
      location: 'Banglore',
      Occasion: 'Annniversery',
      date: '14/02/2022, 9:32 PM'
    },
    {
      name:'jordan',
      msg: 'Excellent amazing service , super product',
      ratings:5,
      location: 'Banglore',
      Occasion: 'Annniversery',
      date: '14/02/2022, 9:32 PM'
    },
  ]
 
  return (
    <>
      <style jsx>{`
        /* width */
        ::-webkit-scrollbar {
        width: 5px;
        height: 3px;
        }

        /* Track */
        ::-webkit-scrollbar-track {
        box-shadow: inset 0 0 5px #009740; 
        border-radius: 10px;
        }
        
        /* Handle */
        ::-webkit-scrollbar-thumb {
        background: #009740; 
        border-radius: 10px;
        }

        /* Handle on hover */
        // ::-webkit-scrollbar-thumb:hover {
        // background: #b30000; 
        // }
    `}</style>
      <div className="title mt-3">
        <h2 className="ff-arial">What Customers are saying <a href="" className="fw-400 fw-none fs-16 d-block d-sm-inline ms-0 ms-sm-5 td-none">View All Reviews</a></h2>
      </div>
      <div className="w-90">
        <div className="row lg-scrollable ">
          {
            reviews?.map((e,i)=>{
              return <div className="col-sm-6 col-md-4 col-lg-3 mt-2 mx-sm-0 mb-4" key={i}>
                <div className="w-90">
                  <div className="row">
                    <div className="col-3 ">
                      <ZoomedImage src="Images/country/country.jpg" rounded={false} width="60px" height="60px" border={true} />
                    </div>
                    <div className="col-9 ps-3">
                      <h6 className="fs-16 text-gold">
                        <span className="me-2">{e.ratings}</span>
                        {
                          Array.apply(null, { length: e.ratings }).map((e, i) => (
                            <span className="busterCards" key={i}>
                              <AiFillStar />
                            </span>
                          ))
                        }
                        
                      </h6>
                      <h6 className="mt-4 review_msg" style={{fontStyle: "italic"}}>
                       '{e.msg} '
                      </h6>
                      <h6 className="my-0">
                        -{e.name}
                      </h6>
                      <p className=" fs-14 text-uppercase my-2">
                        {e.date}
                      </p>
                      <p className=" fs-14 text-muted  my-0">
                        Delivery at : {e.location}
                      </p>
                      <p className=" fs-14 text-muted  my-0">
                        Occasion :  {e.Occasion}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            })
          }
        </div>
      </div>
    </>
  )
}
