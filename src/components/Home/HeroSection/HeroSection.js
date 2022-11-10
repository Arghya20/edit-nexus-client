import React from "react";
import { FaArrowCircleRight, FaRegArrowAltCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="flex flex-col items-center justify-between w-full mb-10 lg:flex-row">
          <div className="mb-16 lg:mb-0 lg:max-w-lg lg:pr-5">
            <div className="max-w-xl mb-6">
              <div>
                <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider uppercase bg-green-400 text-teal-900 rounded-full">
                  EDIT NEXUS
                </p>
              </div>
              <h2 className="font-sans text-3xl font-bold tracking-tight text-blue-900 sm:text-4xl sm:leading-none max-w-lg mb-6">
                Professional Editing
                <br className="hidden md:block" />& Post-Production
                <br className="hidden md:block" />
                <span className="inline-block text-deep-purple-accent-400">
                  Services
                </span>
              </h2>
              <p className="text-gray-700 text-base md:text-lg">
                EDIT NEXUS is a editing and post-production outsourcing partner
                to video content creators across the globe.
              </p>
            </div>
            <div className="flex items-center space-x-3">
              <Link
                to="/Services"
                outline-4
                className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide transition duration-200 rounded-full shadow-xl  bg-gray-700 hover:bg-gray-800 text-white gap-x-2"
              >
                <span>Get started</span>
                <FaArrowCircleRight />
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center lg:w-1/2">
            <div className="w-full">
              <img
                className="object-cover rounded-lg shadow-2xl shadow-gray-300 outline outline-4 outline-gray-400"
                src="https://www.learnupon.com/wp-content/uploads/Video-editing-basics-for-eLearning1200x628.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
        <Link
          to="/"
          aria-label="Scroll down"
          className="flex items-center justify-center w-10 h-10 mx-auto text-gray-600 hover:text-deep-purple-accent-400 hover:border-deep-purple-accent-400 duration-300 transform border border-gray-400 rounded-full hover:shadow hover:scale-110 mt-20 lg:mt-32"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="currentColor"
          >
            <path d="M10.293,3.293,6,7.586,1.707,3.293A1,1,0,0,0,.293,4.707l5,5a1,1,0,0,0,1.414,0l5-5a1,1,0,1,0-1.414-1.414Z" />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
