import React from "react";
import { Link } from "react-router-dom";
import "react-photo-view/dist/react-photo-view.css";
import { PhotoProvider, PhotoView } from "react-photo-view";

const ServiceCard = ({ service }) => {
  const { _id, title, img, dec, price } = service;
  return (
    <div>
      <div className="max-w-xs min-h-full p-6 rounded-lg shadow-md bg-white text-gray-900 border border-gray-200">
        <PhotoProvider>
          <PhotoView src={img}>
            <img src={img} alt="" />
          </PhotoView>
        </PhotoProvider>

        <div className="mt-6 mb-2">
          <h2 className="text-xl font-semibold tracking-wide text-blue-900">
            {title}
          </h2>
        </div>
        <p className="text-gray-500">
          {dec.length > 100 ? dec.slice(0, 100) + "..." : dec}
        </p>
        <p className="text-gray-800 mt-2">
          <span className="font-bold">Price:</span> ${price}
        </p>
        <Link to={`/services/${_id}`}>
          <button className=" outline outline-gray-700 w-full py-2 mt-4 rounded-full hover:bg-gray-800 hover:text-white">
            View details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
