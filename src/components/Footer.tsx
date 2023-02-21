import React from "react";

const Footer = () => {
  return (
    <footer className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
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
          <p className="mt-2 text-sm text-gray-500">
            Lorem ipsum dolor sit amet consectetur. Quis tortor gravida nibh
            arcu id purus ullamcorper. Vel vel erat semper augue.
          </p>
        </div>
        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          <div className="lg:w-1/3 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              Product
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-gray-600 hover:text-gray-800">Download</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Pricing</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Locations</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Server</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Countries</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Blog </a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/3 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              Engage
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-gray-600 hover:text-gray-800">LaslesVPN?</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">FAQ</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Tutorials</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">About us</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">
                  Privacy policy
                </a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">
                  Terms of service
                </a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/3 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              Earn money
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-gray-600 hover:text-gray-800">
                  Become partner
                </a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Affilite</a>
              </li>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
