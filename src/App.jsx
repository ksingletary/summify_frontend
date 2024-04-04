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


const App = () => {
  // const [isHeroVisible, setIsHeroVisible] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [allArticles, setAllArticles] = useState([]);

  const LOCAL_STORAGE_KEY = 'token'
  const [currentUser, setCurrentUser] = useState("")

   // Create and store current user state.
  // By default, will retrieve user from local storage. If user is null, then return an empty object.  Otherwise, parse the object and return it as currentUser.
  const [token, setToken] = useState(() => {
    try {
      const value = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (value == null) return null;
      //   console.log("retrieved from localStorage:", value);
      return JSON.parse(value);
    } catch (error) {
      console.log("error retrieving token:", error);
    }
  });

  useEffect( () => {
    async function updateUserUponToken(token){
      // console.log('running updateUserUponToken. TOKEN:', token)
      setCurrentUser(() => {

        if(!token) return // if there is no token, Return without trying to decode it.
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(token)); // persist the token in local storage

        let decodedToken = jwtDecode(token)

        SummifyApi.token = token
        return decodedToken
      })
    }
    updateUserUponToken(token)
  },[token])


  const context = {
    currentUser: token ? jwtDecode(token) : null,
    setToken,
    isDarkMode, 
    setIsDarkMode,
    LOCAL_STORAGE_KEY
  }

  return (
    <UserContext.Provider value={context}>
      <Router>
        <Navbar/>
        <DarkModeToggle />
        <Routes>
          <Route path="/" element={<Demo allArticles={allArticles} setAllArticles={setAllArticles} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          {currentUser &&
            <><Route path={`/user/${currentUser.username}`} element={<UserProfile allArticles={allArticles} />} />
            </>
          }
        </Routes>
      </Router>
    </UserContext.Provider>
  );
}

export default App;