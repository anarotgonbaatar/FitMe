import React, { useState, useEffect } from 'react'
import { FaPlusCircle } from "react-icons/fa"
import Papa from 'papaparse'
import './styles/food.css'

const Food = () => {
    const [foods, setFoods] = useState([]);

    useEffect(() => {
        Papa.parse(`${process.env.PUBLIC_URL}/foods.csv`, {
            download: true,
            header: true,
            complete: function(results) {
                console.log(results.data);
                setFoods(results.data);
            }
        });
    }, []);

    return (
        <div className='page'>
            <div className="header">
                <h2>Foods</h2>
            </div>

            <div id="food-list">
                {foods.map((food, index) => (
                    <div key={index} className="food-item container">
                        <img src={food.imageUrl} alt={food.name} className="food-icon" />
                        <div className="food-detilas">
                            <h4>{food.name}</h4>
                            <div className="food-macros">
                                <p>Cal: {food.calories},</p>
                                <p>Carb: {food.carbs}g,</p>
                                <p>Fat: {food.fat}g,</p>
                                <p>Pro: {food.protein}g</p>
                            </div>
                        </div>
                        <button className="add-food-btn">
                            <FaPlusCircle className='icon'/>
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Food