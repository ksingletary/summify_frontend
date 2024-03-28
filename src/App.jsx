import React, { useState } from 'react';
import Hero from './components/Hero'
import Demo from './components/Demo'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './components/Login';


const App = () => {
  const [isHeroVisible, setIsHeroVisible] = useState(true);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero setIsHeroVisible={setIsHeroVisible} />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      {isHeroVisible && <Demo />}
    </Router>
  );
}

export default App;