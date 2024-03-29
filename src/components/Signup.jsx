import { useContext, useState } from "react";
import SummifyApi from "../../api";
import UserContext from "../context/UserContext";
import { Navigate } from "react-router-dom";

const Signup = () => {
  return (
    <section className="bg-gray-50 min-h-screen flex items-center justify-center">
      {/* Signup container */}
      <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center w-full">
        {/* form */}
        <div className="w-full px-8 md:px-16">
          <h2 className="font-bold text-2xl text-[#d26e3f]">Signup</h2>
          <p className="text-xs mt-4 text-[#002D74]">Create a new account</p>

          <form action="" className="flex flex-col gap-4">
            <input className="p-2 mt-8 rounded-xl border" type="text" name="firstName" placeholder="First Name"/>
            <input className="p-2 rounded-xl border" type="text" name="lastName" placeholder="Last Name"/>
            <input className="p-2 rounded-xl border" type="text" name="username" placeholder="Username"/>
            <input className="p-2 rounded-xl border" type="password" name="password" placeholder="Password"/>
            <input className="p-2 rounded-xl border" type="email" name="email" placeholder="Email"/>
            <button className="bg-[#d26e3f] rounded-xl text-white py-2 hover:scale-105 duration-300">Signup</button>
          </form>

          <div className="mt-6 grid grid-cols-3 items-center text-gray-400">
            <hr className="border-gray-400"/>
            <p className="text-center text-sm">OR</p>
            <hr className="border-gray-400"/>
          </div>

          <button className="bg-white border py-2 w-full rounded-xl mt-5 flex justify-center items-center text-sm hover:scale-105 duration-300 text-[#002D74]">
            Continue as Guest
          </button>

        </div>
      </div>
    </section>
  );
};

export default Signup;
