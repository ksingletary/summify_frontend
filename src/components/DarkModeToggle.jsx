import { useContext, useEffect } from 'react';
import UserContext from '../context/UserContext';
import { FiSun,FiMoon } from "react-icons/fi";

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
      className="dark-mode-toggle ml-3 sun-moon-toggle text-4xl fixed top-0 right-0 m-4 p-2 mt-32 hover:text-orange-500 "
      onClick={toggleDarkMode}
    >
      {isDarkMode ? <FiMoon color="#ffffff" /> : <FiSun color="#1a202c" />}
    </button>
  );
};

export default DarkModeToggle;
