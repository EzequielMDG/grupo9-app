import React from 'react'
import logo from '../../img/logo.png';

function Logo() {
  return (
    <>
        <img className='img-fluid w-220 p-2 mb-5 rounded-pill bg-white border' src={logo} alt="Logo" /> 
        {/* <h1 className="display-5 my-5 fw-bold">Food App</h1> */}
    </>
  )
}

export default Logo