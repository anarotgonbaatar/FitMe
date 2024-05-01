import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LayoutWithNavbar from './pages/LayoutNavbar'
// Pages
import Home from './pages/Home'
import Diary from './pages/Diary'
import Foods from './pages/Foods'
import Exercises from './pages/Exercises'
import Profile from './pages/Profile'
import LogStats from './pages/LogStats'
import Auth from './pages/Auth'
// Contexts
import { UserProvider } from './contexts/UserContext'
import { FoodDiaryProvider } from './contexts/FoodDiaryContext'
import { ExerciseDiaryProvider } from './contexts/ExerciseDiaryContext'

function App() {
    return (
        <Router>
            <UserProvider>
                <FoodDiaryProvider>
                    <ExerciseDiaryProvider>
                        <Routes>
                            <Route path="/" element={<LayoutWithNavbar />}>
                                {/* Nested routes that require the Navbar */}
                                <Route index element={<Home />} />
                                <Route path="/log-stats" element={<LogStats />} />
                                <Route path="/diary" element={<Diary />} />
                                <Route path="/foods" element={<Foods />} />
                                <Route path="/exercises" element={<Exercises />} />
                                <Route path="/profile" element={<Profile />} />
                            </Route>
                            {/* Route for Auth does not include the Navbar */}
                            <Route path='/auth' element={<Auth />}/>
                        </Routes>
                    </ExerciseDiaryProvider>
                </FoodDiaryProvider>
            </UserProvider>
        </Router>
    );
}

export default App;