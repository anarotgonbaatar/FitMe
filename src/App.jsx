import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LayoutWithNavbar from './pages/LayoutNavbar'
// Pages
import Home from './pages/Home'
import Diary from './pages/Diary'
import Foods from './pages/Foods'
import Workout from './pages/Workout'
import Profile from './pages/Profile'
import LogStats from './pages/LogStats'
import Auth from './pages/Auth'
// Contexts
import { UserProvider } from './contexts/UserContext'
import { FoodDiaryProvider } from './contexts/FoodDiaryContext'

function App() {
    return (
        <Router>
            <UserProvider>
                <FoodDiaryProvider>
                    <Routes>
                        <Route path="/" element={<LayoutWithNavbar />}>
                            {/* Nested routes that require the Navbar */}
                            <Route index element={<Home />} />
                            <Route path="/log-stats" element={<LogStats />} />
                            <Route path="/diary" element={<Diary />} />
                            <Route path="/foods" element={<Foods />} />
                            <Route path="/workout" element={<Workout />} />
                            <Route path="/profile" element={<Profile />} />
                        </Route>
                        {/* Route for Auth does not include the Navbar */}
                        <Route path='/auth' element={<Auth />}/>
                    </Routes>
                </FoodDiaryProvider>
            </UserProvider>
        </Router>
    );
}

export default App;