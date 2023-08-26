import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div className=" h-screen after:bg-black bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/00103100-5b45-4d4f-af32-342649f1bda5/64774cd8-5c3a-4823-a0bb-1610d6971bd4/IN-en-20230821-popsignuptwoweeks-perspective_alpha_website_large.jpg')]">
      <div className="bg-black bg-opacity-50 h-screen">
        <Header />
        <form className="text-white w-[440px] m-auto rounded-lg p-16 gap-y-6 bg-black bg-opacity-70 flex shrink-0 flex-col">
          <h1 className="text-3xl font-bold">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignInForm && (
            <input
              placeholder="Full Name"
              className="px-5 py-3 bg-zinc-700 focus:outline-none rounded-md placeholder:text-gray-400"
              type="text"
            />
          )}
          <input
            placeholder="Email or phone number"
            className="px-5 py-3 bg-zinc-700  focus:outline-none rounded-md placeholder:text-gray-400"
            type="text"
          />
          <input
            className="px-5 py-3 bg-zinc-700 rounded-md focus:outline-none"
            type="password"
            placeholder="Password"
          />
          <button className="mt-6 font-semibold rounded-md text-center px-5 py-3 bg-red-600">
            Sign In
          </button>

          <p>
            <span className="text-zinc-500">
              {isSignInForm ? "New to Netflix ? " : "Already have account ? "}
            </span>
            <span className="cursor-pointer" onClick={toggleSignInForm}>
              {isSignInForm ? "Sign up now" : "Sign in"}
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
