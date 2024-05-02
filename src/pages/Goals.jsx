import React, { useState } from 'react'
import { FaArrowLeft } from "react-icons/fa"
import { useNavigate } from 'react-router-dom'

function Goals() {
    const navigate = useNavigate();
    // State variables for each input field
    const [calories, setCalories] = useState('');
    const [carbsPercent, setCarbs] = useState('');
    const [proteinPercent, setproteinPercent] = useState('');
    const [fatPercent, setFatPercent] = useState('');
    const [goalWeight, setGoalWeight] = useState('');
    const [date, setDate] = useState('');

    // Handler for submitting the form
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent the default form submit behavior
        const userData = {
            calories,
            carbsPercent,
            fatPercent,
            proteinPercent,
            goalWeight,
            date
        };
        
        // Example calculations (You need to replace these with your actual formulas)
        const proteinAmount = macroAmount(calories, proteinPercent, 4) 
        const carbsAmount = macroAmount(calories, carbsPercent, 4)
        const fatAmount = macroAmount(calories, fatPercent, 9)

        // Save calculated data to local storage
        localStorage.setItem('userStats', JSON.stringify({
            ...userData,
            proteinAmount: parseFloat(proteinAmount),
            carbsAmount: parseFloat(carbsAmount),
            fatAmount: parseFloat(fatAmount),
            totalCalories: calories
        }));

        navigate('/');
    };

    // Function to calculate metrics
    function macroAmount(totalCalories, percentage, macroCalories) {
        const totalMacroCalories = (percentage / 100) * totalCalories;
        return (totalMacroCalories / macroCalories).toFixed(0);
    }

    return (
        <div className="page">
            <div className="header">
                <button type="button" className='header-back-btn'> <FaArrowLeft className='icon'/> </button>
                <h2>Update Goals</h2>
            </div>

            <form onSubmit={handleSubmit} className='column'>
                <input
                    className="text-input"
                    type="number"
                    placeholder="Calories"
                    value={calories}
                    onChange={(e) => setCalories(e.target.value)}
                />
                {/* Input Macros */}
                <div className="row">
                    <input
                        className="text-input"
                        type="number"
                        placeholder="Carbs"
                        value={carbsPercent}
                        onChange={(e) => setCarbs(e.target.value)}
                    />
                    <input
                        className="text-input"
                        type="number"
                        placeholder="Protein"
                        value={proteinPercent}
                        onChange={(e) => setproteinPercent(e.target.value)}
                    />
                    <input
                        className="text-input"
                        type="number"
                        placeholder="Fat"
                        value={fatPercent}
                        onChange={(e) => setFatPercent(e.target.value)}
                    >
                    </input>
                </div>
                <input
                    className="text-input"
                    type="number"
                    placeholder="Goal Weight"
                    value={goalWeight}
                    onChange={(e) => setGoalWeight(e.target.value)}
                />
                <input
                    className="text-input"
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                />
                <button type="submit" className='submit-btn'>Update Goals</button>
            </form>
        </div>
    );
}

export default Goals;