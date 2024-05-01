import React from 'react';
import './navbar.css';
import { FaHome, FaBook, FaUtensils, FaDumbbell, FaUser } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div id='navbar'>
        <div id='navbar-buttons'>
            <NavLink to="/" className='nav-btn' id='home-btn'>
                <div className="column">
                    <FaHome className='icon'/>
                    <span>Home</span>
                </div>
            </NavLink>
            <NavLink to="/diary" className='nav-btn' id='diary-btn'>
                <div className="column">
                    <FaBook className='icon'/>
                    <span>Diary</span>
                </div>
            </NavLink>
            <NavLink to="/foods" className='nav-btn' id='food-btn'>
                <div className="column">
                    <FaUtensils className='icon'/>
                    <span>Foods</span>
                </div>
            </NavLink>
            <NavLink to="/workout" className='nav-btn' id='workout-btn'>
                <div className="column">
                    <FaDumbbell className='icon'/>
                    <span>Workout</span>
                </div>
            </NavLink>
            <NavLink to="/profile" className='nav-btn' id='profile-btn'>
                <div className="column">
                    <FaUser className='icon'/>
                    <span>Profile</span>
                </div>
            </NavLink>
        </div>
    </div>
  )
}

export default Navbar