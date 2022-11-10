import React from "react";
import { Link } from "react-router-dom";
import useTitle from "../hooks/useTitle";

const SignUp = () => {
  useTitle("SignUp");
  return (
    <div>
      <div className="m-4 md:m-0">
        <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-gray-50 text-gray-800 mx-auto my-40 shadow-lg border border-gray-300">
          <h1 className="text-2xl font-bold text-center">Sign Up</h1>
          <form
            novalidate=""
            action=""
            className="space-y-6 ng-untouched ng-pristine ng-valid"
            data-bitwarden-watching="1"
          >
            <div className="space-y-1 text-sm">
              <label for="username" className="block text-gray-600">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="username"
                placeholder="Name"
                className="w-full px-4 py-3 rounded-md border-gray-300 border shadow text-gray-800 focus:border-violet-600"
              />
            </div>
            <div className="space-y-1 text-sm">
              <label for="useremail" className="block text-gray-600">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="useremail"
                placeholder="Email"
                className="w-full px-4 py-3 rounded-md border-gray-300 border shadow text-gray-800 focus:border-violet-600"
              />
            </div>
            <div className="space-y-1 text-sm">
              <label for="password" className="block text-gray-600">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                className="w-full px-4 py-3 rounded-md border-gray-300 border shadow text-gray-800 focus:border-violet-600"
              />
            </div>
            <button className="block w-full p-3 text-center rounded-full outline outline-gray-600 hover:bg-gray-700 hover:text-white">
              Sign Up
            </button>
          </form>

          <p className="text-xs text-center sm:px-6 text-gray-600 ">
            Already have an account?
            <Link
              rel="noopener noreferrer"
              to="/login"
              className="underline text-gray-800"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
