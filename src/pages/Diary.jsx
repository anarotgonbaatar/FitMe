import React from 'react'
import { FaArrowLeft } from "react-icons/fa"

const Diary = () => {
  return (
    <div className='page'>
        <div className="header">
            <button type="button" className='header-back-btn'> <FaArrowLeft className='icon'/> </button>
            <h2>Diary</h2>
        </div>

        <div className="container">
            <div className="row">
                <span>Foods</span>
                {/* Total calories eaten today */}
            </div>
            <div className="row">
                {/* Total grams of carbs eaten today */}
                {/* Total grams of fats eaten today */}
                {/* Total grams of protein eaten today */}
            </div>

            <div className="column">
                {/* List of foods eaten today */}
            </div>

            <button type="button" className='update-btn'>Add Food</button>
        </div>
    </div>
  )
}

export default Diary