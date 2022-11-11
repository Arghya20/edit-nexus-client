import React from "react";
import { FaRegCopyright } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="px-4 py-8 bg-green-100">
        <div className="container flex flex-wrap flex-col-reverse lg:flex-row  items-center justify-center mx-auto space-y-4 sm:justify-between sm:space-y-0">
          <div className="flex flex-row pr-3 space-x-4 sm:space-x-8 mt-4 md:mt-0">
            <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 rounded-full -mr-8 hidden md:block">
              <img src="https://i.ibb.co/qjc2hGM/logo.png" alt="" />
            </div>
            <ul className="flex flex-wrap items-center space-x-4 sm:space-x-8 ">
              <li className="hidden md:block">
                <Link to="/">
                  {" "}
                  <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                    <span className="bg-gray-800 text-white p-1 rounded">
                      Edit
                    </span>{" "}
                    nexus
                  </span>
                </Link>
              </li>
              <li className="flex items-center gap-x-2">
                <FaRegCopyright /> <p> 2023 Edit Nexus All rights reserved</p>
              </li>
            </ul>
          </div>
          <ul className="flex flex-wrap pl-3 space-x-4 sm:space-x-8">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/login">Log In</Link>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
