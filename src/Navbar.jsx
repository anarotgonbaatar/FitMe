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
                    <span className='nav-icon-text'>Home</span>
                </div>
            </NavLink>
            <NavLink to="/diary" className='nav-btn' id='diary-btn'>
                <div className="column">
                    <FaBook className='icon'/>
                    <span className='nav-icon-text'>Diary</span>
                </div>
            </NavLink>
            <NavLink to="/foods" className='nav-btn' id='food-btn'>
                <div className="column">
                    <FaUtensils className='icon'/>
                    <span className='nav-icon-text'>Foods</span>
                </div>
            </NavLink>
            <NavLink to="/exercises" className='nav-btn' id='exercises-btn'>
                <div className="column">
                    <FaDumbbell className='icon'/>
                    <span className='nav-icon-text'>Exercises</span>
                </div>
            </NavLink>
            <NavLink to="/profile" className='nav-btn' id='profile-btn'>
                <div className="column">
                    <FaUser className='icon'/>
                    <span className='nav-icon-text'>Profile</span>
                </div>
            </NavLink>
        </div>
    </div>
  )
}

export default Navbar