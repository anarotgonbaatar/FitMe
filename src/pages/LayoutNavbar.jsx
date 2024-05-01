import React from 'react'
import Navbar from '../Navbar'
import { Outlet } from 'react-router-dom' // Import Outlet to render child routes

const LayoutWithNavbar = () => {
    return (
        <div>
            <Navbar />
            <Outlet />  {/* This component will render the active child route */}
        </div>
    );
};

export default LayoutWithNavbar