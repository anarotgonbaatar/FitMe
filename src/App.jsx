import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LayoutWithNavbar from './pages/LayoutNavbar'
import Home from './pages/Home'
import Diary from './pages/Diary'
import Food from './pages/Food'
import Workout from './pages/Workout'
import Profile from './pages/Profile'
import LogStats from './pages/LogStats'
import Auth from './pages/Auth'
import { UserProvider } from './UserContext'

function App() {
    return (
        <Router>
            <UserProvider>
                <Routes>
                    <Route path="/" element={<LayoutWithNavbar />}>
                        {/* Nested routes that require the Navbar */}
                        <Route index element={<Home />} />
                        <Route path="/log-stats" element={<LogStats />} />
                        <Route path="/diary" element={<Diary />} />
                        <Route path="/food" element={<Food />} />
                        <Route path="/workout" element={<Workout />} />
                        <Route path="/profile" element={<Profile />} />
                    </Route>
                    {/* Route for Auth does not include the Navbar */}
                    <Route path='/auth' element={<Auth />}/>
                </Routes>
            </UserProvider>
        </Router>
    );
}

export default App;