import React from "react";
import "./Addreview.css";

const Addreview = () => {
  return (
    <div className="my-40 md:my-36 ">
      <h2 className="text-center text-4xl mb-10 font-semibold text-blue-800">
        Add Your Review
      </h2>

      <form className="w-5/6 md:w-3/4 mx-auto border px-4 py-10 md:px-20 md:py-20 bg-gray-50 shadow-xl rounded-xl md:max-w-4xl">
        <div className="relative mb-4">
          <input
            required
            type="text"
            name="title"
            placeholder="Enter Your Service Title"
            className="w-full py-4 pl-6 text-sm rounded-md sm:w-full focus:outline-none  border text-gray-800 focus:border-violet-600 shadow"
          />
        </div>
        <div className="relative mb-4">
          <input
            required
            type="text"
            name="img"
            placeholder="Enter Your Service Image Url"
            className="w-full py-4 pl-6 text-sm rounded-md sm:w-full focus:outline-none  border text-gray-800 focus:border-violet-600 shadow"
          />
        </div>
        <div className="relative mb-4">
          <input
            required
            type="number"
            name="price"
            placeholder="Enter Your Service Price (In Number)"
            className="w-full py-4 pl-6 text-sm rounded-md sm:w-full focus:outline-none  border text-gray-800 focus:border-violet-600 shadow"
          />
        </div>

        <div className="relative mb-6">
          <textarea
            required
            name="dec"
            placeholder="Description"
            cols="30"
            rows="10"
            className="w-full py-2 pl-6 text-sm rounded-md sm:w-full focus:outline-none  border text-gray-800 focus:border-violet-600  shadow"
          ></textarea>
        </div>
        <div className="flex justify-center">
          <input
            className="bg-green-600 hover:bg-green-700 text-white font-bold shadow-lg rounded-full cursor-pointer  py-3 w-1/2"
            type="submit"
            value="Add Service"
          />
        </div>
      </form>
    </div>
  );
};

export default Addreview;
