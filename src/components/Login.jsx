import { useContext, useState } from "react";
import { Link, Navigate } from 'react-router-dom';
import SummifyApi from "../../api";
import UserContext from "../context/UserContext";

const Login = () => {
  const { setToken, currentUser, isDarkMode } = useContext(UserContext);
  const GUEST_CREDENTIALS = {
    username: "guestuser",
    password: "guestpassword"
  };
  const INITIAL_FORM_DATA = {
    username: "",
    password: ""
  };
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((formData) => ({ ...formData, [name]: value }));
  };

  const submitForm = async (formData) => {
    try {
      const res = await SummifyApi.loginUser(formData);
      console.log("Logged in successfully");
      setToken(res);
    } catch (error) {
      console.log(error);
      setErrorMessage("Invalid username or password. Please try again.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await submitForm(formData);
    setFormData(INITIAL_FORM_DATA);
  };

  const handleContinueAsGuest = async () => {
    setFormData(GUEST_CREDENTIALS);
    await submitForm(GUEST_CREDENTIALS);
  };

  return (
    <section className={`bg-gray-50 min-h-screen flex items-center justify-center ${isDarkMode ? 'dark-mode' : ''}`}>
      {currentUser &&  <Navigate to='/' replace={true}/>}
      <div id={`${isDarkMode ? 'div-form-dark' : ''}`} className="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center w-full">
        <div className="w-full px-8 md:px-16">
          <h2 className="font-bold text-2xl text-[#d26e3f]">Login</h2>
          <p className="text-xs mt-4">If you are already a member, easily log in</p>
          <p className="text-xs text-red-500">*please wait a few seconds for guestuser login</p>

          {errorMessage && <p className="text-red-500 text-sm">{errorMessage}</p>}

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input className="p-2 mt-8 rounded-xl border" 
              type="text" 
              name="username" 
              placeholder="Username" 
              value={formData.username} 
              onChange={handleChange} 
            />
            <div className="relative">
              <input className="p-2 rounded-xl border w-full" 
                type="password" 
                name="password" 
                placeholder="Password" 
                value={formData.password} 
                onChange={handleChange} 
              />
            </div>
            <button 
              type="submit" 
              className="bg-[#d26e3f] rounded-xl text-white py-2 hover:scale-105 duration-300">
                Login
            </button>
          </form>

          <div className="mt-6 grid grid-cols-3 items-center text-gray-400">
            <hr className="border-gray-400"/>
            <p className="text-center text-sm">OR</p>
            <hr className="border-gray-400"/>
          </div>

          <button 
            onClick={handleContinueAsGuest} 
            className="bg-white border py-2 w-full rounded-xl mt-5 flex justify-center items-center text-sm hover:scale-105 duration-300"
          >
            Continue as Guest 
          </button>

          <div className="mt-3 text-xs flex justify-between items-center">
            <p>Don't have an account?</p>
            <Link to="/signup">
              <button className="py-2 px-5 bg-white border rounded-xl hover:scale-110 duration-300">Register</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
