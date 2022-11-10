import React from "react";
import ReactCompareImage from "react-compare-image";
import { FaDownload } from "react-icons/fa";
import "./Ourproducts.css";

const OurProducts = () => {
  return (
    <div>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
          <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            <div>
              <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-green-400">
                EDIT NEXUS Present
              </p>
            </div>
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
              <span className="relative inline-block">
                <svg
                  viewBox="0 0 52 24"
                  fill="currentColor"
                  className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                >
                  <defs>
                    <pattern
                      id="70326c9b-4a0f-429b-9c76-792941e326d5"
                      x="0"
                      y="0"
                      width=".135"
                      height=".30"
                    >
                      <circle cx="1" cy="1" r=".7" />
                    </pattern>
                  </defs>
                  <rect
                    fill="url(#70326c9b-4a0f-429b-9c76-792941e326d5)"
                    width="52"
                    height="24"
                  />
                </svg>
              </span>{" "}
              Dark LIGHTROOM PRESET
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
              If you use these presets then tag us on Social Media, I would love
              to see what you guys create.
            </p>
            <div className="mt-6 text-sm italic">
              <p className="text-gray-500">
                <span className="text-gray-800 font-semibold">
                  Works with ?
                </span>{" "}
                - Lightroom Mobile(Android & IOS),
              </p>
              <p className="text-gray-500">
                <span className="text-gray-800 font-semibold">
                  Type of Presets ?
                </span>{" "}
                - .dng files for Android/IOS
              </p>
            </div>
            <div className="w-full md:w-8/12   mx-auto mt-10">
              <ReactCompareImage
                leftImage="https://ag-dark-preset.netlify.app/static/media/img-1.c929285abc96a5737c7f.jpg"
                leftImageLabel="OUR PRESET"
                rightImageLabel="BEFORE"
                leftImageCss={{ height: "600px" }}
                rightImageCss={{ height: "600px" }}
                rightImage="https://i.ibb.co/g7GXrYk/before.jpg"
              />
            </div>
            <div className="flex justify-center">
                <a href="https://www.dropbox.com/s/cw60o4y3y2g1fi3/AG%20Dark%20Preset%20%20%281%29.dng?dl=1">
              <button className="my-btn mt-10 flex items-center gap-x-2">
                Download Now
                <FaDownload />
              </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurProducts;
