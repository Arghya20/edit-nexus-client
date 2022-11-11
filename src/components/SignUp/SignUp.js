import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import useTitle from "../hooks/useTitle";

const SignUp = () => {
  useTitle("SignUp");
  const { createUser } = useContext(AuthContext);
  const [error, setError] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const handelSignup = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user.email);
        setError("");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  return (
    <div>
      <div className="m-4 md:m-0">
        <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-gray-50 text-gray-800 mx-auto my-40 shadow-lg border border-gray-300">
          <p className="text-center text-red-800 bg-red-200 rounded-full">
            {error}
          </p>
          <h1 className="text-2xl font-bold text-center">Sign Up</h1>
          <form
            onSubmit={handelSignup}
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
                required
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
                required
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
                required
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                className="w-full px-4 py-3 rounded-md border-gray-300 border shadow text-gray-800 focus:border-violet-600"
              />
            </div>
            <input
              className="block w-full p-3 text-center rounded-full outline outline-gray-600 hover:bg-gray-700 hover:text-white"
              type="submit"
              value="Sign Up"
            />
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
