import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './pages/Home';
import Diary from './pages/Diary';
import Food from './pages/Food';
import Workout from './pages/Workout';
import Profile from './pages/Profile';
import LogStats from './pages/LogStats';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/log-stats" element={<LogStats />} />
        <Route path="/diary" element={<Diary />} />
        <Route path="/food" element={<Food />} />
        <Route path="/workout" element={<Workout />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;