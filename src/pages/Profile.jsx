import React from 'react'
import './styles/profile.css'
import { FaAngleRight, FaChartLine, FaWeight, FaRunning } from "react-icons/fa"
import { FaGear } from "react-icons/fa6"
import { GoGoal } from "react-icons/go"
import { TbLogout2 } from "react-icons/tb"
import { useNavigate } from 'react-router-dom'
import { useUser } from '../UserContext'

const Profile = () => {
    const { user, setUser } = useUser();
    const navigate = useNavigate();

    const handleLogout = () => {
        setUser(null); // Clear user in context
        navigate('/auth');
    };

    return (
        <div className='page'>
            <div className="header">
                <h2>Profile</h2>
            </div>

            <div className="row" id='name-container'>
                <span className='name'>{user ? user.firstName : 'N/A'}</span> 
                <span className='name'>{user ? user.lastName : 'N/A'}</span>
            </div>

            <div className="container" id='settings-container'>
                <h3>Settings</h3>

                <div className="row">
                    <div className="row">
                        <GoGoal className='icon'/>
                        <span>Goals</span>
                    </div>
                    <FaAngleRight className='icon'/>
                </div>
                <div className="row">
                    <div className="row">
                        <FaChartLine className='icon'/>
                        <span>Progress</span>
                    </div>
                    <FaAngleRight className='icon'/>
                </div>
                <div className="row">
                    <div className="row">
                        <FaWeight className='icon'/>
                        <span>Measurements</span>
                    </div>
                    <FaAngleRight className='icon'/>
                </div>
                <div className="row">
                    <div className="row">
                        <FaRunning className='icon'/>
                        <span>Exercises</span>
                    </div>
                    <FaAngleRight className='icon'/>
                </div>
                <div className="row">
                    <div className="row">
                        <FaGear className='icon'/>
                        <span>Settings</span>
                    </div>
                    <FaAngleRight className='icon'/>
                </div>
                <div className="row" onClick={handleLogout}>
                    <div className="row">
                        <TbLogout2 className='icon'/>
                        <span id='log-out-txt'>Log out</span>
                    </div>
                    <FaAngleRight className='icon'/>
                </div>
            </div>
        </div>
    )
}

export default Profile