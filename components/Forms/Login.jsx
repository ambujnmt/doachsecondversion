import React from "react";
import Link from "next/link";
import { FaArrowLeftLong } from "react-icons/fa6";

export default function Login() {
  return (
    <section className="loginForm">
      <div className="relative min-h-screen flex items-center justify-center bg-[#a77100] overflow-hidden">
        <div className="bg-white absolute top-15 shadow-xl rounded-2xl w-full max-w-4xl flex z-10">
          
          {/* Left Side Image */}
          <div className="w-1/2 p-10 flex items-center justify-center">
            <img
              src="https://nmtdevserver.com/doodli/about.svg"
              alt="Login Illustration"
              className="w-full h-auto"
            />
          </div>

          {/* Right Side Form */}
          <div className="w-1/2 p-10 bg-black">
            <div className="flex flex-col items-start justify-center">

              {/* Logo */}
              {/* <div className="flex-col z-20">
                <img
                  src="https://nmtdevserver.com/doach/logo.png"
                  className="w-[35%] h-auto mb-5"
                  alt="Logo"
                />
              </div> */}

              <Link href="/home" className="text-gray-400 mb-3 no-underline flex items-center hover:text-yellow-600 text-sm"><FaArrowLeftLong />&nbsp; Back </Link>

              <h2 className="text-xl font-semibold text-white mb-6 border-l-4 border-[#fff] pl-2">
                Login your account
              </h2>

              <form className="w-full">
                {/* Email */}
                <div className="w-full mb-4">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-100 mb-2"
                  >
                    Username or email address
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="user@demo.com"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm bg-transparent text-white"
                  />
                </div>

                {/* Password */}
                <div className="mb-10">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-100 mb-2"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    placeholder="Enter your password"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm bg-transparent text-white"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="button"
                  className="flex justify-center items-center gap-2 font-bold w-full text-[15px] md:text-[14px] lg:text-[16px] xl:text-[16px] my-2 text-center text-white rounded-[600px] bg-yellow-600 hover:bg-[#000] py-2 hover:border border-yellow-600 duration-300"
                >
                  Login
                </button>

                <div className="mt-3">
                  <p className="text-center text-white text-sm">
                    New to DOACH <Link href="/signUp" className="text-gray-300 hover:text-yellow-600">Create Account</Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
