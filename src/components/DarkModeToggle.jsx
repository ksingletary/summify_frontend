import React, { useContext, useEffect } from 'react';
import UserContext from '../context/UserContext';

const DarkModeToggle = () => {
  // State to track the current mode (light or dark)
  const { isDarkMode, setIsDarkMode } = useContext(UserContext);

  // Function to toggle between light and dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  // Effect to set the body class based on the mode
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
    
  }, [isDarkMode]);

  return (
    <button
      className="dark-mode-toggle ml-3"
      onClick={toggleDarkMode}
    >
      {isDarkMode ? 'Light Mode' : 'Dark Mode'}
    </button>
  );
};

export default DarkModeToggle;
