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
            bg-gradient-to-tr from-pri-2 to-pri-1"
          >
            Chi
          </span>
        </a>
        <div className="flex md:order-2">
          <Link
            href="/"
            className="text-primary-900 hover:text-white
            bg-white
            rounded-lg 
            px-3 py-1 sm:px-5 sm:py-3
            mr-0
            font-medium 
            text-xs sm:text-sm text-center
            hover:bg-gradient-to-tr hover:from-pri-2 hover:to-pri-1
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
