import React, { useContext, useState } from "react";
import { FaBloggerB, FaEdit, FaHome, FaRegPlusSquare } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handelLogout = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error.massage));
  };

  return (
    <div className="bg-gray-50">
      <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 bg-gray-50">
        <div className="relative flex items-center justify-between ">
          <Link
            to="/"
            aria-label="Company"
            title="Company"
            className="inline-flex items-center"
          >
            <img
              src="https://i.ibb.co/qjc2hGM/logo.png"
              className="w-1/12 "
              alt=""
            />
            <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
              <span className="bg-gray-800 text-white p-1 rounded">Edit</span>{" "}
              nexus
            </span>
          </Link>
          <div className="absolute top-20">
            {" "}
            {user?.uid && (
              <>
                {" "}
                <p className="text-sm text-gray-400">Hello👋 {user?.email}</p>
              </>
            )}
          </div>
          <ul className="flex items-center hidden space-x-8 lg:flex">
            <li>
              <Link
                to="/"
                aria-label="Our product"
                title="Our product"
                className="font-medium tracking-wide text-gray-500 transition-colors duration-200 hover:text-deep-purple-accent-400 flex items-center gap-x-1 hover:text-gray-800"
              >
                <FaHome />
                <span className=" font-semibold text-gray-700 hover:text-gray-900">
                  Home
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="/blog"
                aria-label="Our product"
                title="Our product"
                className="font-medium tracking-wide text-gray-500 transition-colors duration-200 hover:text-deep-purple-accent-400 flex items-center gap-x-1 hover:text-gray-800"
              >
                <FaBloggerB />
                <span className=" font-semibold text-gray-700 hover:text-gray-900">
                  Blog
                </span>
              </Link>
            </li>

            {user?.uid ? (
              <>
                <li>
                  <Link
                    to="/myreviews"
                    aria-label="Product pricing"
                    title="Product pricing"
                    className="font-medium tracking-wide text-gray-500 transition-colors duration-200 hover:text-deep-purple-accent-400 hover:text-gray-800"
                  >
                    <span className=" font-semibold text-gray-700 hover:text-gray-900">
                      MY Reviews
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/addservices"
                    aria-label="About us"
                    title="About us"
                    className="font-medium tracking-wide text-gray-500 transition-colors duration-200 hover:text-deep-purple-accent-400    hover:text-gray-800"
                  >
                    <span className=" font-semibold text-gray-700 hover:text-gray-900">
                      Add Services
                    </span>
                  </Link>
                </li>
                <li>
                  <button
                    onClick={handelLogout}
                    className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide transition duration-200  border border-gray-500 rounded-full hover:bg-gray-800 hover:text-white "
                  >
                    Log Out
                  </button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link
                    to="/login"
                    className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide transition duration-200  border border-gray-500 rounded-full hover:bg-gray-800 hover:text-white "
                    aria-label="Sign up"
                    title="Sign up"
                  >
                    Log In
                  </Link>
                </li>
              </>
            )}
          </ul>
          <div className="lg:hidden">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
              onClick={() => setIsMenuOpen(true)}
            >
              <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                />
                <path
                  fill="currentColor"
                  d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                />
                <path
                  fill="currentColor"
                  d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                />
              </svg>
            </button>
            {isMenuOpen && (
              <div className="absolute top-0 left-0 w-full z-50">
                <div className="p-5 bg-gray-50 border rounded-lg shadow-2xl z-50 border-gray-300">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <Link
                        to="/"
                        aria-label="Company"
                        title="Company"
                        className="inline-flex items-center"
                      >
                        <img
                          src="https://i.ibb.co/qjc2hGM/logo.png"
                          className="w-1/12 "
                          alt=""
                        />
                        <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                          <span className="bg-gray-800 text-white p-1 rounded">
                            Edit
                          </span>{" "}
                          nexus
                        </span>
                      </Link>
                    </div>
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline "
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <nav>
                    <ul className="space-y-4">
                      <li>
                        <Link
                          to="/"
                          aria-label="Our product"
                          title="Our product"
                          className="font-medium tracking-wide text-gray-500 transition-colors duration-200 hover:text-deep-purple-accent-400 flex items-center gap-x-1 hover:text-gray-800"
                        >
                          <FaHome />
                          <span className=" font-semibold text-gray-700 hover:text-gray-900">
                            Home
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/blog"
                          aria-label="Our product"
                          title="Our product"
                          className="font-medium tracking-wide text-gray-500 transition-colors duration-200 hover:text-deep-purple-accent-400 flex items-center gap-x-1 hover:text-gray-800"
                        >
                          <FaBloggerB />
                          <span className=" font-semibold text-gray-700 hover:text-gray-900">
                            Blog
                          </span>
                        </Link>
                      </li>
                      {user?.uid ? (
                        <>
                          <li>
                            <Link
                              to="/myreviews"
                              aria-label="Product pricing"
                              title="Product pricing"
                              className="font-medium tracking-wide text-gray-500 transition-colors duration-200 hover:text-deep-purple-accent-400 flex items-center gap-x-1 hover:text-gray-800"
                            >
                              <FaEdit />
                              <span className=" font-semibold text-gray-700 hover:text-gray-900">
                                My Reviews
                              </span>
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/addservices"
                              aria-label="About us"
                              title="About us"
                              className="font-medium tracking-wide text-gray-500 transition-colors duration-200 hover:text-deep-purple-accent-400 flex items-center gap-x-1 hover:text-gray-800"
                            >
                              <FaRegPlusSquare />
                              <span className=" font-semibold text-gray-700 hover:text-gray-900">
                                Add Services
                              </span>
                            </Link>
                          </li>
                          <li>
                            <button
                              onClick={handelLogout}
                              className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide transition duration-200  border border-gray-500 rounded-full hover:bg-gray-800 hover:text-white "
                            >
                              Log Out
                            </button>
                          </li>
                        </>
                      ) : (
                        <>
                          <li>
                            <Link
                              to="/login"
                              className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide transition duration-200  border border-gray-500 rounded-full hover:bg-gray-800 hover:text-white "
                              aria-label="Sign up"
                              title="Sign up"
                            >
                              Log In
                            </Link>
                          </li>
                        </>
                      )}
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
