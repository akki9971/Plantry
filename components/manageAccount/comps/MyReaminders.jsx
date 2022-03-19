import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { useRouter } from "next/router";
import { FaUserAlt, FaPhoneAlt, FaEnvelope, FaBirthdayCake } from 'react-icons/fa'
import { HiDotsVertical } from 'react-icons/hi'



export const MyReaminders = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(true);
  const [boxOpen, setBoxOpen] = useState(false);
  const [remainders, setRemainders] = useState([]);
  const [profileData, setProfileData] = useState({
    name: '',
    occasion: '',
    date: '',
    note: '',
  })
  useEffect(async () => {
    await axios.get(`http://localhost:3100/api/rems`)
    // .then(value => {
    //   setRemainders(value.data)
    // })
    // .catch(err => { alert(err); });
  }, [])

  // console.log(remainders,'rems');

  const addRemainder = () => {
    // await axios({
    //   method: 'POST',
    //   url: 'http://localhost:3100/api/rems',
    //   headers: {},
    //   data: {
    //     profileData
    //   }
    // })
    //   .then(res => alert(res));
    setRemainders([...remainders, {
      id: remainders.length,
      ...profileData
    }]);
    // console.log(remainders, profileData);
    setProfileData({
      name: '',
      occasion: '* Occasion',
      date: '',
      note: '',
    })
    setIsOpen(true)
    console.log(remainders);

  }
  const handleCancel = () => {
    setProfileData({
      name: '',
      occasion: '',
      date: '',
      note: '',
    })
    setIsOpen(true)
  }
  const monthTeller = (e) => {
    if (e == 1) {
      return 'jan'
    } else if (e == 2) {
      return 'feb'
    } else if (e == 3) {
      return 'mar'
    } else if (e == 4) {
      return 'apr'
    } else if (e == 5) {
      return 'may'
    } else if (e == 6) {
      return 'jun'
    } else if (e == 7) {
      return 'jul'
    } else if (e == 8) {
      return 'aug'
    } else if (e == 9) {
      return 'sep'
    } else if (e == 10) {
      return 'oct'
    } else if (e == 11) {
      return 'nov'
    } else if (e == 12) {
      return 'dec'
    }
  }
  const occasion = [
    "Birthday",
    "Anniversary",
    "Love N Romance",
    "Congratulations",
    "Miss You",
    "Thank You",
    "I Am Sorry",
    "Thinking Of You",
    "Get Well Soon",
    "House Warming",
    "Sympathy N Funeral"
  ]
  return (
    <>
      <div className="container my_remainders">
        {
          isOpen && <div className="row ">
            <div className="col-sm-6">
              <h5>My Reaminders</h5>
            </div>
            <div className="col-sm-6 text-end ">
              <button className="btn shadow-sm p-2 px-5 text-primary fw-bold fs-14" onClick={() => setIsOpen(false)} >+ ADD A NEW REMAINDER</button>
            </div>
          </div>
        }
        {
          !isOpen && <div className="remainderForm">
            <div className="row my_profile">
              <div className="col-sm-6">
                <div className="input-field-wrapper">
                  <div className="input-field">
                    <FaUserAlt />
                    <input
                      type="text"
                      className=""
                      name="name"
                      value={profileData.name}
                      onChange={(e) => setProfileData({ ...profileData, name: e.target.value })}
                    />
                    <label htmlFor='name' className={`ps-4 fs-12 mb-1 label ${profileData.name.length !== 0 ? 'valid' : ''}`}>
                      Name *
                    </label>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="input-field-wrapper">
                  <div className="input-field">
                    <FaPhoneAlt />
                    <select
                      className="w-80"
                      value={profileData.occasion} onChange={(e) => {
                        setProfileData({ ...profileData, occasion: e.target.value })
                      }}
                    >
                      {
                        occasion.map((val, i) => {
                          return <option className="text-start" key={i} value={val}>{val}</option>
                        })
                      }
                    </select>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="input-field-wrapper">
                  <div className="input-field">
                    <FaBirthdayCake />
                    <input
                      type="date"
                      className=""
                      name="date"
                      placeholder="*Date"
                      onChange={(e) => setProfileData({ ...profileData, date: e.target.value })}
                    />

                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="input-field-wrapper">
                  <div className="input-field">
                    <FaEnvelope />
                    <input
                      type="text"
                      className=""
                      name="email"
                      maxLength="50"
                      autoComplete='off'
                      value={profileData.note} onChange={(e) => {
                        setProfileData({ ...profileData, note: e.target.value })
                      }}
                    />
                    <label htmlFor='name' className={`ps-4 fs-12 mb-1 label ${profileData.note.length !== 0 ? 'valid' : ''}`}>
                      Note *
                    </label>
                    <span className="note-limit">
                      {profileData.note ? profileData.note.length : 0} / 50
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <button className="btn btn-outline-dark" onClick={handleCancel}>Cancel</button>
            <button className="btn btn-outline-orange mx-3" onClick={addRemainder}>Add Remainder</button>
          </div>
        }
        <div className="row my-2">
          {
            remainders && remainders.length == 0 ? <h5 className="text-center text-primary fw-normal">
              No remainders found!
            </h5> : remainders?.map((val, i) => {
              return <div className="col-sm-4">
                <div className="card shadow-sm py-2 px-3" key={i}>
                  <button className="custom-btn" onClick={()=>setBoxOpen(!boxOpen)}><HiDotsVertical /></button>
                  <div className={`custom-btn box ${boxOpen?'open':''}`}>
                    <button className="box-btn" onClick={()=>{
                      // delete remainders[val.id]
                      // setIsOpen(true)
                    }}>Edit</button>
                    <button className="box-btn" onClick={()=>{
                      remainders.splice(val.id,1)
                      setBoxOpen(false)
                      // console.log(remainders);
                    }}>Delete</button>

                  </div>
                  <h6 className="mb-1 text-uppercase">{val.name}</h6>
                  <h6 className="mb-1 fs-14 text-uppercase">{val.occasion} - {val.date.split('-')[2]}<span className="fs-10 text-lowercase">th</span> <span className="text-capitalize">{monthTeller(val.date.split('-')[1])}</span></h6>
                  <p className="fs-12">{val.note} </p>
                </div>
              </div>
            })
          }
        </div>
      </div>
    </>
  )
}
