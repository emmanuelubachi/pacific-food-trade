import Link from "next/link";
import React from "react";

const ProjectNavbar = () => {
  return (
    <nav className=" bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="https://ubachi.com/" className="flex items-center">
          <span className="text-gray-600 self-center text-2xl lg:text-3xl font-semibold whitespace-nowrap">
            uba
          </span>
          <span
            className="self-center 
            text-2xl 
            lg:text-3xl
            font-semibold 
            whitespace-nowrap 
            text-transparent bg-clip-text 
            bg-gradient-to-tr from-primary-800 to-pink-500"
          >
            Chi
          </span>
        </a>
        <div className="flex md:order-2">
          <button
            type="button"
            className="text-white 
            bg-primary-900 
            rounded-lg 
            px-3 py-1 sm:px-5 sm:py-3
            mr-3
            font-medium 
            text-xs sm:text-sm text-center
            hover:bg-gradient-to-tr hover:from-primary-800 hover:to-pink-700
            transition-transform hover:scale-110 cursor-pointer
            focus:ring-4 focus:outline-none focus:ring-blue-300"
          >
            BOOK A CALL
          </button>
          <Link
            href="/"
            className="text-primary-900 hover:text-white
            bg-white
            rounded-lg 
            px-3 py-1 sm:px-5 sm:py-3
            mr-0
            font-medium 
            text-xs sm:text-sm text-center
            hover:bg-pink-500 
            cursor-pointer"
          >
            Back
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default ProjectNavbar;
