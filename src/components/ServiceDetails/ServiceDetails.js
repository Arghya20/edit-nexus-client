import React from "react";
import { useLoaderData } from "react-router-dom";

const ServiceDetails = () => {
  const { title, img, dec, price } = useLoaderData();
  return (
    <div>
      <div className="max-w-md md:max-w-2xl p-6 rounded-md shadow-md bg-gray-50 text-gray-900 mx-auto my-10 border">
        <img
          src={img}
          alt=""
          className="object-cover object-center w-full rounded-md h-72 bg-gray-500"
        />
        <div className="mt-6 mb-2">
          <h2 className="text-xl font-semibold tracking-wide text-blue-700">{title}</h2>
        </div>
        <p className="text-gray-500 mb-4">{dec}</p>
        <p><span className="text-xl font-semibold">Price:</span> ${price}</p>
      </div>
    </div>
  );
};

export default ServiceDetails;
