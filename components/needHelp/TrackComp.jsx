import React,{ useState } from 'react'
import Link from 'next/link'
import styles from './style.module.css'
import {FaAngleRight} from 'react-icons/fa'

export const TrackComp = () => {
    const [state,setState] = useState({
        orderNo: '',
        email:''
    })
    const [emailValid, setEmailValid] = useState(true)

    const orderNoChange = (e) => {
        
            setState({...state, orderNo:value})
    }
    const mailChange = (e) =>{
        setState({ ...state, email: e.target.value })
        setEmailValid(false)

        // check mail validation 
        let regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{1,}))$/;
        if (regEmail.test(state.email)) {
            setEmailValid(true)
            // console.log('Invalid Email');
        } else {
            setEmailValid(false)
        }
    }

    return (
        <>
            <div className={styles.trackComp}>
                <div className="w-large-90">
                    <nav aria-label="breadcrumb ">
                        <ol class="breadcrumb mt-3 mb-0">
                            <li class="breadcrumb-item active" aria-current="page">
                                <Link href="/"><a >Home</a></Link>
                            </li>

                            <li class="breadcrumb-item " ><FaAngleRight /></li>
                            <li class="breadcrumb-item " aria-current="page">
                                <Link href="/needhelp/tracking"><a>Track Order</a></Link>
                            </li>
                        </ol>
                    </nav>
                    <div className={styles.wrapper}>
                        <div>
                            <input type="text" className="orderNum" placeholder="Order No." value={state.orderNo} onChange={orderNoChange}/>
                        </div>
                        <div>
                            <input type="email" className="orderEmail" placeholder="Enter Email" value={state.email} onChange={mailChange}/>
                            <p className={`${styles.errorMsg} ${!emailValid?styles.open:''}`}>Email Should be Valid</p>
                        </div>
                        <div>
                            <button className="btn btn-orange orderBtn" disabled={false}>TRACK ORDER</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
