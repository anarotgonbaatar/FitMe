import React from 'react'
import { FaArrowLeft } from "react-icons/fa"

const Food = () => {
  return (
    <div className='page'>
        <div className="header">
            <button type="button" className='header-back-btn'> <FaArrowLeft className='icon'/> </button>
            <h2>Foods</h2>
        </div>
    </div>
  )
}

export default Food