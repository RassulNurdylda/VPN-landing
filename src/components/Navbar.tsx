import React from "react";

const Navbar = () => {
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
          <span className="ml-3 text-xl">LaslesVPN</span>
        </a>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <a className="mr-5 hover:text-gray-900">features</a>
          <a className="mr-5 hover:text-gray-900">Pricing</a>
          <a className="mr-5 hover:text-gray-900">Testimonial</a>
          <a className="mr-5 hover:text-gray-900">Help</a>
        </nav>

        <button className="inline-flex items-center focus:outline-none  text-base mt-4 md:mt-0 mr-4">
          Sign In
        </button>
        <button className="inline-flex items-center text-red-500 border border-red-500 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded-3xl text-base mt-4 md:mt-0">
          Sign Up
        </button>
      </div>
    </header>
  );
};

export default Navbar;
