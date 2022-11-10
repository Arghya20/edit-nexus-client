import React from "react";

const Stats = () => {
  return (
    <div className="">
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <h2 className="text-4xl text-center mb-10 -mt-10 font-bold bg-green  text-blue-800">
          How Does Edit Nexus Work?
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 bg-white m-4 p-8 rounded-xl border shadow-lg">
          <div className="text-center">
            <div className="flex items-center justify-center w-10 h-10 mx-auto mb-3 rounded-full bg-indigo-50 sm:w-12 sm:h-12">
              <h2 className="text-2xl font-bold">1</h2>
            </div>
            <p className="mb-2 font-bold text-md">Step 1</p>
            <p className="text-gray-700">
              You give the brief & upload the file via FTP
            </p>
          </div>

          <div className="text-center">
            <div className="flex items-center justify-center w-10 h-10 mx-auto mb-3 rounded-full bg-indigo-50 sm:w-12 sm:h-12">
              <h2 className="text-2xl font-bold">2</h2>
            </div>

            <p className="mb-2 font-bold text-md">Step 2</p>
            <p className="text-gray-700">
              We edit the video according to the brief
            </p>
          </div>

          <div className="text-center">
            <div className="flex items-center justify-center w-10 h-10 mx-auto mb-3 rounded-full bg-indigo-50 sm:w-12 sm:h-12">
              <h2 className="text-2xl font-bold">3</h2>
            </div>

            <p className="mb-2 font-bold text-md">Step 3</p>
            <p className="text-gray-700">
              You review the final output for approval
            </p>
          </div>

          <div className="text-center">
            <div className="flex items-center justify-center w-10 h-10 mx-auto mb-3 rounded-full bg-indigo-50 sm:w-12 sm:h-12">
              <h2 className="text-2xl font-bold">4</h2>
            </div>

            <p className="mb-2 font-bold text-md">Step 4</p>
            <p className="text-gray-700">
              Edited file ready to download via FTP
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
