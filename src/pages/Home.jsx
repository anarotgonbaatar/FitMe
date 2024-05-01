import React, { useEffect, useState } from 'react'
import './styles/home.css'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
    const navigate = useNavigate();
    const [stats, setStats] = useState({
        age: 0,
        height: '0\' 0"',
        weight: 0,
        neck: 0,
        waist: 0,
        bodyFat: 0,
        idealWeight: 0,
        goalFat: 0,
        leanMass: 0,
        fatMass: 0
    });

    useEffect(() => {
        const loadedStats = localStorage.getItem('userStats');
        if (loadedStats) {
            const data = JSON.parse(loadedStats);
            setStats({
                age: data.age || 0,
                height: data.height || '0\' 0"',
                weight: data.weight || 0,
                neck: data.neckCircumference || 0, // Correct key
                waist: data.waistCircumference || 0, // Correct key
                bodyFat: data.bodyFat || 0,
                idealWeight: data.idealWeight || 0,
                goalFat: data.goalFat || 0,
                leanMass: data.leanMass || 0,
                fatMass: data.fatMass || 0
            });
        }
    }, []);

    const handleUpdateClick = () => {
        navigate('/log-stats');
    };

    return (
        <div className='page'>
            <div className="header">
                <h2>Home</h2>
            </div>

            {/* Macros Container */}
            <div class="container">
                <div class="row">
                    <label>Calories Remaining</label>
                    <div id='cal-progress-bar' class="progress-bar"><span>1000</span></div>
                </div>
                <div class="row">
                    <label>Carbohydrates</label>
                    <div id='carb-progress-bar' class="progress-bar"><span>1000</span></div>
                </div>
                <div class="row">
                    <label>Fat</label>
                    <div id='fat-progress-bar' class="progress-bar"><span>1000</span></div>
                </div>
                <div class="row">
                    <label>Protein</label>
                    <div id='protien-progress-bar' class="progress-bar"><span>1000</span></div>
                </div>
            </div>

            {/* Stats Container */}
            <div className="container">
                <div className="row">
                    <span className='section-title'>Your Stats</span>
                    <button type="button" className='update-btn' id='stat-update-btn' onClick={handleUpdateClick}>
                        Update
                    </button>
                </div>
                <div className="row stats-row">
                    <div className="column stats-col">
                        <div className="row">
                            <span>Age</span> <span className="var">{stats.age + ' years'}</span>
                        </div>
                        <div className="row">
                            <span>Height</span> <span className="var">{stats.height}</span>
                        </div>
                        <div className="row">
                            <span>Weight</span> <span className="var">{stats.weight + " lb"}</span>
                        </div>
                        <div className="row">
                            <span>Neck</span> <span className="var">{stats.neck + " in"}</span>
                        </div>
                        <div className="row">
                            <span>Waist</span> <span className="var">{stats.waist + " in"}</span>
                        </div>
                    </div>
                    <div className="column stats-col">
                        <div className="row">
                            <span>Body Fat</span> <span className="var">{stats.bodyFat.toFixed(1) + " %"}</span> 
                        </div>
                        <div className="row">
                            <span>Ideal Weight</span> <span className="var">{stats.idealWeight.toFixed(1) + " lb"}</span> 
                        </div>
                        <div className="row">
                            <span>Ideal Fat</span> <span className="var">{stats.goalFat.toFixed(1) + " %"}</span> 
                        </div>
                        <div className="row">
                            <span>Lean Mass</span> <span className="var">{stats.leanMass.toFixed(1) + " lb"}</span>
                        </div>
                        <div className="row">
                            <span>Fat Mass</span> <span className="var">{stats.fatMass.toFixed(1) + " lb"}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard