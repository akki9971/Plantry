import React, { useEffect } from 'react'
import { RiArrowDropDownLine } from 'react-icons/ri'

const currency = {
  short: [
    "USD",
    "THB",
    "SGD",
    "QAR",
    "NZD",
    "MYR",
    "INR",
    "GBP",
    "EUR",
    "CAD",
    "AUD",
    "AED"
  ],
  full: [
    "USD - United States Doller",
    "THB - Thailand Baht",
    "SGD - Singapore Dollar",
    "QAR - Qatar Riyal",
    "NZD - New Zealand Doller",
    "MYR - Malaysian Ringget",
    "INR - Indian Rupees",
    "GBP - Great British Pound",
    "EUR - Euro",
    "CAD - Canadian Doller",
    "AUD - Austrian Doller",
    "AED - Arab Emirates Dirham"
  ]
}
export const TopHeader = () => {
  const { short, full } = currency
  useEffect(() => {
    // console.log(__dirname);
  }, [])
  return (
    <>
      <style jsx>{`
        /* width */
        ::-webkit-scrollbar {
        width: 6px;
        }

        /* Track */
        ::-webkit-scrollbar-track {
        box-shadow: inset 0 0 5px grey; 
        border-radius: 10px;
        background: rgb(215, 215, 215);
        }
        
        /* Handle */
        ::-webkit-scrollbar-thumb {
        background: rgb(125, 125, 125); 
        border-radius: 6px;
        }

        /* Handle on hover */
        // ::-webkit-scrollbar-thumb:hover {
        // background: #b30000; 
        // }
    `}</style>
      <div className="viewInDesktop bg-light">
        <div className="container me-0 ">
          <div className="d-md-flex justify-content-end ms-auto d-none top_header">
            <div className="selector currency_selector px-2 ">
              <h6 className="fs-14 text-dark selector currency_selector my-0 px-2 bo-end">
                <span className="text-grey">Currency</span>
                <span className="mx-1">USD </span>
                <RiArrowDropDownLine style={{ width: "1.5rem", height: "1.5rem" }} />
                <ul className="choices currency_choices">
                  {
                    full.map((elem) => {
                      return <li className="fs-14 choice currency_choice" key={elem}>
                        <a href="" className="choice currency_choice td-none">
                          {elem}
                        </a>
                      </li>
                    })
                  }
                </ul>
              </h6>
            </div>
            <div className="calling  px-1">
              <h6 className="fs-14 my-0 py-1 px-2 bo-end">
                <a href="+91987987987" className="text-dark td-none">
                  +91 999 123 1234
                </a>
              </h6>
            </div>
            <div className="Corporate_gift px-2">
              <h6 className="fs-14 my-0 py-1 px-2  bo-end">
                <a className="text-dark td-none">
                  Corporate Gifts
                </a>
              </h6>
            </div>
            <div className="selector currency_selector px-2 ">
              <h6 className="fs-14 text-dark selector currency_selector my-0 py-1 px-2 ">
                <span className="mx-1">More </span>
                <RiArrowDropDownLine style={{ width: "1.5rem", height: "1.5rem" }} />
                <ul className="currency_choices choices hlimit">
                   <li className="fs-14 choice currency_choice" >
                      <a href="" className="choice currency_choice td-none">
                        Franchize Enquiry
                      </a>
                    </li>
                   <li className="fs-14 choice currency_choice" >
                      <a href="" className="choice currency_choice td-none">
                        Wedding Enquiry
                      </a>
                    </li>
                   <li className="fs-14 choice currency_choice" >
                      <a href="" className="choice currency_choice td-none">
                        Become a Partner
                      </a>
                    </li>
                </ul>
              </h6>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
