import React from "react";

const ServiceCard = ({ service }) => {
  const { title, img, dec, price } = service;
  return (
    <div>
      <div className="max-w-xs min-h-full p-6 rounded-md shadow-md bg-gray-50 text-gray-900 border border-gray-200">
        <img
          src={img}
          alt=""
          className="object-cover object-center w-full rounded-md h-72 bg-gray-500 border border-gray-300"
        />
        <div className="mt-6 mb-2">
          <h2 className="text-xl font-semibold tracking-wide text-blue-900">
            {title}
          </h2>
        </div>
        <p className="text-gray-500">
          {dec.length > 100 ? dec.slice(0, 100) : dec}
        </p>
        <p className="text-gray-800 mt-2">
          <span className="font-bold">Price:</span> ${price}
        </p>
        <button className=" outline outline-gray-700 w-full py-2 mt-4 rounded-full hover:bg-gray-800 hover:text-white">
          View details
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
