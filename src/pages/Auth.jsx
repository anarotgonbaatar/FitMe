import React, { useState } from 'react'
import './auth.css'

const Auth = () => {
    // State to toggle between forms
    const [activeTab, setActiveTab] = useState('signin'); // 'signin' or 'signup'

    // Function to switch tabs
    const handleTabSwitch = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className='page' id='auth-page'>
            <div id='title-container'>
                <span id='title'>FitMe</span>
                <span id='subtitle'>Comprehensive Fitness Solution</span>
            </div>
            
            <div id='tab-container'>
                <div id="tab-buttons">
                    <button 
                        className={`tab-btn ${activeTab === 'signin' ? 'active' : ''}`}
                        onClick={() => handleTabSwitch('signin')}
                    >
                    Sign In
                    </button>
                    <button 
                        className={`tab-btn ${activeTab === 'signup' ? 'active' : ''}`} 
                        onClick={() => handleTabSwitch('signup')}
                    >
                    Sign Up
                    </button>
                </div>

                <div>
                    {activeTab === 'signin' ? (
                    <div className='tab-content'>
                        <h2>Sign In</h2>
                        {/* Sign In Form */}
                        <form className='auth-form'>
                            <input className='text-input' type="email" placeholder="Email" required />
                            <input className='text-input' type="password" placeholder="Password" required />
                            <button className='submit-btn' type="submit">Sign In</button>
                        </form>
                        <span>Don't have an account? Sign Up</span>
                    </div>
                    ) : (
                    <div className='tab-content'>
                        <h2>Sign Up</h2>
                        {/* Sign Up Form */}
                        <form className='auth-form'>
                            <input className='text-input' type="text" placeholder="First Name" required />
                            <input className='text-input' type="text" placeholder="Last Name" required />
                            <input className='text-input' type="email" placeholder="Email" required />
                            <input className='text-input' type="password" placeholder="Password" required />
                            <input className='text-input' type="password" placeholder="Confirm Password" required />
                            <button className='submit-btn' type="submit">Sign Up</button>
                        </form>
                        <span>Have an account? Sign In</span>
                    </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Auth