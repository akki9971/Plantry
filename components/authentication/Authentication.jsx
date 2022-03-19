import React, { useState, useEffect, useRef } from 'react'
import { FaCheckCircle, FaRegEdit } from 'react-icons/fa'
import { MdError } from 'react-icons/md'
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai'
import { LogWithFG } from './LogWithFG'
import { Pros } from './pros'
import Link from 'next/link'

const myEmails = [
  "ali.akib@gmail.com",
  "aaquib@gmail.com",
  "admin@admin.com"
]
export const Authentication = () => {
  const passwordRef = useRef('')
  const mailRef = useRef('')
  const [profileData, setProfileData] = useState({
    nameTitle:"Mr",
    name: '',
    cCode: '+91',
    mobile: '',
    email: '',
    password: '',
  })
  const [togPassType, setTogPassType] = useState(false)
  const [emailValid, setEmailValid] = useState(false)
  const [gotoLogin, setGotoLogin] = useState(false)
  const [gotoRegister, setGotoRegister] = useState(false)

  // email id filled & checked for mail validation
  const emailChangeHandler = (e) => {
    setProfileData({ ...profileData, email: e.target.value })

    // check mail validation 
    let regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{1,}))$/;
    if (regEmail.test(profileData.email)) {
      setEmailValid(true)
      // console.log('Invalid Email');
    } else {
      setEmailValid(false)
    }
  }

  // when continue to login or register buttonclicked
  const continueClick = () => {
    // console.log('clicked');
    myEmails.map(email => {
      if (email === profileData.email) {
        // console.log("email verified");
        setGotoLogin(true)
        setGotoRegister(false)
        alert('email matched')
      } else {
        setGotoLogin(false)
        setGotoRegister(true)
      }
    })
  }
  // show or hide password
  const showPassword = () => {
    setTogPassType(true)
    passwordRef.current.type = "text"
  }
  const hidePassword = () => {
    setTogPassType(false)
    passwordRef.current.type = "password"
  }

  // when someone click on edit email in login or register page
  const mailEditHandler  = () => {
    setGotoLogin(false)
    setGotoRegister(false)
    setProfileData({
      nameTitle: "Mr",
      name: '',
      cCode: '+91',
      mobile: '',
      email: profileData.email,
      password: '',
    })
    mailRef.current.focus()
  }

  return (
    <>
      <div className="" >
        <div className="container authentication">
          <div className="row pt-3">
            <div className="col-md-9">
              <div className="card shadow-sm">
                <div className="row">
                  <div className="col-sm-7">
                    <div className="px-3 px-sm-5 py-3">
                      <h4 className="title">
                        {
                          !gotoLogin && !gotoRegister && "Login / Register"
                        }
                        {gotoLogin && "Login"}
                        {gotoRegister && "Register"}
                      </h4>
                      <h6 className="text-green fs-14">
                        {gotoLogin && "Glad to See You Again"}
                        {gotoRegister && "We Are Happy 😍 To See You Here"}
                      </h6>
                      {
                        gotoRegister && <div className="input-field-wrapper">
                          <div className="input-field splitted">
                            <select
                              className="text-start"
                              value={profileData.nameTitle} onChange={(e) => {
                                setProfileData({ ...profileData, nameTitle: e.target.value })
                              }}
                            >
                              <option value="Mr">Mr</option>
                              <option value="Mrs">Mrs</option>
                              <option value="Miss">Miss</option>
                              <option value="Dr">Dr</option>
                              <option value="Prof">Prof3</option>
                              <option value="Master">Master</option>
                            </select>
                            <input
                              type="text"
                              className="name"
                              name="name"
                              id="name"
                              value={profileData.name} onChange={(e) => {
                                setProfileData({ ...profileData, name: e.target.value })
                              }}
                            />
                            <label htmlFor='name' className={`fs-12 label ${profileData.name.length !== 0 ? 'valid' : ''}`}>
                              Name
                            </label>
                          </div>
                        </div>
                      }
                      {
                        gotoRegister && <div className="input-field-wrapper">
                          <div className="input-field splitted">
                            <select
                              className="text-start"
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
                              id="mobile"
                              value={profileData.mobile} onChange={(e) => {
                                setProfileData({ ...profileData, mobile: e.target.value })
                              }}
                            />
                            <label htmlFor='mobile' className={`fs-12 label ${profileData.mobile.length !== 0 ? 'valid' : ''}`}>
                              Mobile
                            </label>
                          </div>
                        </div>
                      }
                      <div className="input-field-wrapper">
                        <div className="input-field">
                          {/* <FaUserAlt /> */}
                          <input
                            type="text"
                            ref={mailRef}
                            className={`${(gotoLogin || gotoRegister) ? '' : emailValid ?'validEmail':''}`}
                            name="email"
                            id="email"
                            disabled={gotoRegister || gotoLogin}
                            autoComplete="off"
                            value={profileData.email}
                            onChange={emailChangeHandler}
                          />
                          <label htmlFor='email' className={`fs-12 label ${profileData.email.length !== 0 ? 'valid' : ''}`}>
                            Email Address
                          </label>
                          {profileData.email.length !== 0 && !emailValid && <span className="validation"><MdError color="red" size="20px" /></span>}
                          {emailValid && (!gotoLogin && !gotoRegister) && <span className="validation"><FaCheckCircle color="#009724" size="20px" /></span>}
                          {(gotoLogin || gotoRegister) && <span className="validation edit" onClick={mailEditHandler}><FaRegEdit size="20px" /></span>}
                        </div>
                      </div>
                      {
                        (gotoLogin || gotoRegister) && <>
                          <div className="input-field-wrapper mb-2">
                            <div className="input-field">
                              {/* <FaUserAlt /> */}
                              <input
                                type="password"
                                ref={passwordRef}
                                className={``}
                                name="password"
                                id="password"
                                autoComplete="off"
                                value={profileData.password}
                                onChange={(e) => { setProfileData({ ...profileData, password: e.target.value }); }}
                              />
                              <label htmlFor='password' className={`fs-12 label ${profileData.password.length !== 0 ? 'valid' : ''}`}>
                                {gotoLogin && "Password"}
                                {gotoRegister && "Create Password"}
                              </label>
                              {!togPassType && <span className="validation" onClick={showPassword} ><AiFillEye color="black" size="20px" /></span>}
                              {togPassType && <span className="validation" onClick={hidePassword} ><AiFillEyeInvisible color="#000" size="20px" /></span>}
                            </div>
                          </div>
                          {gotoRegister && <p className="mb-4 fs-12 w-md-80 text-muted"><MdError size="14px" /> Password must be between 6 to 20 alphanumeric and special characters.</p>}
                          {gotoLogin && <div className="mb-4 fs-12 w-md-80 d-flex justify-content-between">
                            <span htmlFor="remember"><input type="checkbox" className="me-1" id="remember" />Remember Me</span>
                            <span >
                              <Link href="/forgot"><a>Forget Password?</a></Link>
                            </span>
                            </div>}
                        </>
                      }
                      <div className="input-field-wrapper btn">
                        <button className="btn w-100 bg-orange text-white" disabled={!emailValid} onClick={continueClick}>CONTINUE</button>
                      </div>
                      {gotoLogin && <div className="input-field-wrapper btn">
                        <button className="btn w-100 bg-dark text-white" disabled={!emailValid} onClick={continueClick}>LOGIN WITH OTP</button>
                      </div>}
                    </div>
                  </div>
                  <div className="col-sm-5 bg-md-light">
                    <p className="divider">or</p>
                    <LogWithFG />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 ps-3 text-center text-md-left">
              <Pros />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
