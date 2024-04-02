import { useContext, useState } from "react";
import SummifyApi from "../../api";
import UserContext from "../context/UserContext";
import { Navigate } from "react-router-dom";

const Signup = () => {
  const { setToken, currentUser, isDarkMode } = useContext(UserContext);
  
  const INITIAL_FORM_DATA = {
    firstName: "", 
    lastName: "", 
    username: "",
    password: "",
    email: "",
  };
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((formData) => ({ ...formData, [name]: value }));
  };

  // Submitting the form sets the userToken, which in turn tells us what we know about the user.
  const submitForm = async () => {
    try {
      const res = await SummifyApi.registerUser(formData);
      console.log("RES FROM FORM SUBMIT", res);
      setToken(res);
    } catch (error) {
      console.log(error);
      setErrorMessage(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await submitForm(formData);
    console.log("submit successful!");
    setFormData(INITIAL_FORM_DATA); 
  };

  return (
    <section className={`bg-gray-50 min-h-screen flex items-center justify-center ${isDarkMode ? 'dark-mode' : ''}`}>
      {/* Signup container */}
      {currentUser && <Navigate to='/' replace />}
      <div id={`${isDarkMode ? 'div-form-dark' : ''}`} className="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center w-full">
        {/* form */}
        <div className="w-full px-8 md:px-16">
          <h2 className="font-bold text-2xl text-[#d26e3f]">Signup</h2>
          <p className="text-xs mt-4">Create a new account</p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              className="p-2 mt-8 rounded-xl border"
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
            />
            <input
              className="p-2 rounded-xl border"
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
            />
            <input
              className="p-2 rounded-xl border"
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
            />
            <input
              className="p-2 rounded-xl border"
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
            />
            <input
              className="p-2 rounded-xl border"
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
            <button
              type="submit"
              className="bg-[#d26e3f] rounded-xl text-white py-2 hover:scale-105 duration-300"
            >
              Signup
            </button>
          </form>

          <div className="mt-6 grid grid-cols-3 items-center text-gray-400">
            <hr className="border-gray-400" />
            <p className="text-center text-sm">OR</p>
            <hr className="border-gray-400" />
          </div>

          <button className="bg-white border py-2 w-full rounded-xl mt-5 flex justify-center items-center text-sm hover:scale-105 duration-300">
            Continue as Guest
          </button>
        </div>
      </div>
    </section>
  );
};

export default Signup;
