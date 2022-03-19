import React, { useState, useEffect } from 'react'
import { FaUserAlt, FaPhoneAlt, FaEnvelope, FaMale, FaFemale, FaFolderPlus, FaCity, FaBirthdayCake, FaMapMarkerAlt, FaFlag } from 'react-icons/fa'

export const MyProfile = () => {
    const [profileData, setProfileData] = useState({
        name: '',
        cCode: '+91',
        mobile: '',
        email: '',


    })
    useEffect(() => {
        // console.log(profileData);
    })
    return (
        <>
            <div className="container my_profile">
                <div className="row">
                    <div className="col-sm-6">
                        <div className="input-field-wrapper">
                            <div className="input-field">
                                <span className="icon"><FaUserAlt /></span>
                                <input
                                    type="text"
                                    className=""
                                    name="name"
                                    value={profileData.name}
                                    onChange={(e) => setProfileData({ ...profileData, name: e.target.value })}
                                />
                                <label htmlFor='name' className={`fs-14 label ${profileData.name.length !== 0 ? 'valid' : ''}`}>
                                    Name *
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="input-field-wrapper">
                            <div className="input-field splitted">
                                <span className="icon"><FaPhoneAlt /></span>
                                <select
                                    className=""
                                    value={profileData.cCode} onChange={(e) => {
                                        setProfileData({ ...profileData, cCode: e.target.value })
                                    }}
                                >
                                    <option value="+91">+91</option>
                                    <option value="+1">+1</option>
                                    <option value="+11">+11</option>
                                    <option value="+23">+23</option>
                                    <option value="+13">+13</option>
                                    <option value="+92">+92</option>
                                </select>
                                <input
                                    type="text"
                                    className="mobile"
                                    name="mobile"
                                    value={profileData.mobile} onChange={(e) => {
                                        setProfileData({ ...profileData, mobile: e.target.value })
                                    }}
                                />
                                <label htmlFor='mobile' className="mobile fs-14 label">
                                    Mobile
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="input-field-wrapper">
                            <div className="input-field">
                                <span className="icon"><FaEnvelope /></span>
                                <input
                                    type="email"
                                    className=""
                                    name="email"
                                    value={profileData.email} onChange={(e) => {
                                        setProfileData({ ...profileData, email: e.target.value })
                                    }}
                                />
                                <label htmlFor='email' className={`fs-14 label ${profileData.email.length !== 0 ? 'valid' : ''}`}>
                                    Email *
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="input-field-wrapper">
                            <div className="input-field">
                                <span className="icon"><FaBirthdayCake /></span>
                                <input type="text" className="" name="dob" />
                                <label htmlFor='dob' className="fs-14 label">
                                    Date OF Birth
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="input-field-wrapper">
                            <div className="input-field">
                                <span className="icon cake male"><FaMale style={{ width: "0.5em", height: "1em" }} /></span>
                                <span className="icon cake female"><FaFemale style={{ width: "0.5em", height: "1em" }} /></span>
                                <input type="" className="" name="anniversery"/>
                                <label htmlFor='anniversery' className="fs-14 label">
                                    Date of Anneversery
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="input-field-wrapper">
                            <p className="fs-14 gender"> gender</p>
                            <div className="input-field">
                                <span className="icon gender"><FaUserAlt /></span>
                                <input type="radio" className="gender" name="gender" />
                                <label htmlFor='gender' className="fs-12 gender">
                                    Male
                                </label>
                                <input type="radio" className="gender" name="gender" />
                                <label htmlFor='gender' className="fs-12 gender">
                                    Female
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="input-field-wrapper">
                            <div className="input-field">
                                <span className="icon"><FaFolderPlus /></span>
                                <input type="text" className="" name="address" />
                                <label htmlFor='address' className="fs-14 label">
                                    Address *
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="input-field-wrapper">
                            <div className="input-field">
                                <span className="icon"><FaMapMarkerAlt /></span>
                                <input type="number" className="" name="pincode" />
                                <label htmlFor='pincode' className="fs-12 label">
                                    Pincode
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="input-field-wrapper">
                            <div className="input-field">
                                <span className="icon"><FaCity /></span>
                                <input type="text" className="" name="city" />
                                <label htmlFor='city' className="fs-14 label">
                                    City *
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="input-field-wrapper">
                            <div className="input-field">
                                <span className="icon"><FaFlag /></span>
                                <input type="text" className="" name="country" maxLength="3" />
                                <label htmlFor='country' className="fs-14 label">
                                    Country
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="btn btn-dark py-1 px-5 mb-4 ms-4 ">EDIT PROFILE</button>
            </div>
        </>
    )
}
