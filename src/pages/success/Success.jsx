import React from 'react'
import "./success.scss"
import {Link} from "react-router-dom"
const Success = () => {
  return (
    <div className='success-container'>
        <h1>YOUR ORDER SUCCESS !!!</h1>
        <span>You will receive an email comfirm order in a few minute !</span>
        <button>
            <Link to="/">Go To Home</Link>
        </button>
    </div>
  )
}

export default Success