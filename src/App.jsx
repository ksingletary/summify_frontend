import React, { useState, useEffect } from 'react';
import Demo from './components/Demo'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Signup from './components/Signup';
import { jwtDecode } from "jwt-decode";
import SummifyApi from "../api";
import UserContext from "./context/UserContext";
import DarkModeToggle from './components/DarkModeToggle';
import UserProfile from './components/UserProfile';
import About from './components/About';


const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [allArticles, setAllArticles] = useState([]);

  const LOCAL_STORAGE_KEY = 'token'
  const [currentUser, setCurrentUser] = useState("");

  const clearArticles = () => {
    setAllArticles([]);
  };

  const [token, setToken] = useState(() => {
    try {
      const value = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (value == null) return null;
      return JSON.parse(value);
    } catch (error) {
      console.log("error retrieving token:", error);
    }
  });

  useEffect(() => {
    async function updateUserUponToken(token) {
      setCurrentUser(() => {
        if (!token) return;
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(token));
        let decodedToken = jwtDecode(token);
        SummifyApi.token = token;
        return decodedToken;
      });
    }
    updateUserUponToken(token);
  }, [token]);

  const context = {
    currentUser: token ? jwtDecode(token) : null,
    setToken,
    isDarkMode,
    setIsDarkMode,
    LOCAL_STORAGE_KEY,
  };

  return (
    <UserContext.Provider value={context}>
      <Router>
        <Navbar handleClearArticles={clearArticles} />
        <DarkModeToggle />
        <Routes>
          <Route
            path="/"
            element={<Demo allArticles={allArticles} setAllArticles={setAllArticles} />}
          />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/about" element={<About />} />
          {currentUser && (
            <Route
              path={`/user/${currentUser.username}`}
              element={<UserProfile allArticles={allArticles} />}
            />
          )}
        </Routes>
      </Router>
    </UserContext.Provider>
  );
};

export default App;
