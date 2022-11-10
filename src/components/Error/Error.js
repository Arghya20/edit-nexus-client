import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div>
      <div className="max-w-lg p-6 rounded-md  mx-auto">
        <img
          src="https://aioseo.com/wp-content/uploads/2021/04/how-to-find-and-fix-404-errors-in-wordpress.png.webp"
          alt=""
          className="object-cover object-center w-full rounded-md h-72 bg-gray-500"
        />
        <div className="flex justify-center mt-10">
          <Link to="/">
            <button className="outline px-10 py-2 rounded-full hover:bg-gray-700 hover:text-white">Back to Home Page</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Error;
