import React from "react";

export default function SignUp() {
  return (
    <section className="loginForm">
      <div className="relative min-h-screen flex items-center justify-center bg-[#a77100] overflow-hidden">
        <div className="bg-white absolute top-15 shadow-xl rounded-2xl w-full max-w-4xl flex z-10">
          
          {/* Left Side Image */}
          <div className="w-1/2 p-10 flex items-center justify-center">
            <img
              src="https://bizzlane.com/assests/home/images/registration.png"
              alt="Login Illustration"
              className="w-full h-auto"
            />
          </div>

          {/* Right Side Form */}
          <div className="w-1/2 p-10 bg-black">
            <div className="flex flex-col items-start justify-center"> 

              <h2 className="text-xl font-semibold text-white mb-2 border-l-4 border-[#fff] pl-2">
                Sign Up To DOACH
              </h2>
              <p class="mb-7 text-left text-white text-[14px]">Already Have An Account? <a class="underline text-gray-300 hover:text-yellow-600 duration-300 font-medium" href="/login"> Sign in?</a></p>

              <form className="w-full">
                {/* Full Name */}
                <div className="mb-3">
                  <label
                    htmlFor="Full Name"
                    className="block text-sm font-medium text-gray-100 mb-2"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="FullName"
                    placeholder="Full Name"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm bg-transparent text-white"
                  />
                </div>

                {/* Email */}
                <div className="mb-3">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-100 mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="user@demo.com"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm bg-transparent text-white"
                  />
                </div>

                {/* Password */}
                <div className="mb-3">
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

                {/* Phone Number */}
                <div className="mb-5">
                  <label
                    htmlFor="PhoneNumber"
                    className="block text-sm font-medium text-gray-100 mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    type="number"
                    id="PhoneNumber"
                    placeholder="Phone Number"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm bg-transparent text-white"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="button"
                  className="flex justify-center items-center gap-2 font-bold w-full text-[15px] md:text-[14px] lg:text-[16px] xl:text-[16px] my-2 text-center text-white rounded-[600px] bg-yellow-600 hover:bg-[#000] py-2 hover:border"
                >
                  Sign Up
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
