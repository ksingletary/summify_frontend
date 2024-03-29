import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <section className="bg-gray-50 min-h-screen flex items-center justify-center">
      {/* <!-- login container --> */}
      <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center w-full">
        {/* <!-- form --> */}
        <div className="w-full px-8 md:px-16">
          <h2 className="font-bold text-2xl text-[#d26e3f]">Login</h2>
          <p className="text-xs mt-4 text-[#002D74]">If you are already a member, easily log in</p>

          <form action="" className="flex flex-col gap-4">
            <input className="p-2 mt-8 rounded-xl border" type="text" name="username" placeholder="Username"/>
            <div className="relative">
              <input className="p-2 rounded-xl border w-full" type="password" name="password" placeholder="Password"/>
            
            </div>
            <button className="bg-[#d26e3f] rounded-xl text-white py-2 hover:scale-105 duration-300">Login</button>
          </form>

          <div className="mt-6 grid grid-cols-3 items-center text-gray-400">
            <hr className="border-gray-400"/>
            <p className="text-center text-sm">OR</p>
            <hr className="border-gray-400"/>
          </div>

          <button className="bg-white border py-2 w-full rounded-xl mt-5 flex justify-center items-center text-sm hover:scale-105 duration-300 text-[#002D74]">
            Continue as Guest
          </button>

            <div className="mt-3 text-xs flex justify-between items-center text-[#002D74]">
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
