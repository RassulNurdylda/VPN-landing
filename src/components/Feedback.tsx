import React from "react";

const Feedback = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
            Trusted by thousands of happy customer
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur. Quis tortor gravida nibh
            arcu id purus ullamcorper. Vel vel erat semper augue.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          <div className="p-4 md:w-1/3">
            <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">
                    Brooklyn Simmons
                  </h2>
                  <p className="text-gray-400 text-sm title-font font-mono">
                    Warsaw,pland
                  </p>
                </div>
              </div>
              <div className="flex-grow">
                <p className="leading-relaxed text-base">
                  “wow...iam very happy to use this vpn,it turned out to be more
                  than my expectations and so far there have been no problems.
                  laslesvpn always the best”.
                </p>
              </div>
            </div>
          </div>
          <div className="p-4 md:w-1/3">
            <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                  <img src="/pic9.png" alt="" className="" />
                </div>
                <div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">
                    Darlene Robertson
                  </h2>
                  <p className="text-gray-400 text-sm title-font font-mono">
                    Warsaw,pland
                  </p>
                </div>
              </div>
              <div className="flex-grow">
                <p className="leading-relaxed text-base">
                  “wow...iam very happy to use this vpn,it turned out to be more
                  than my expectations and so far there have been no problems.
                  laslesvpn always the best”.
                </p>
              </div>
            </div>
          </div>
          <div className="p-4 md:w-1/3">
            <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <circle cx={6} cy={6} r={3} />
                    <circle cx={6} cy={18} r={3} />
                    <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">
                    Darrell Steward
                  </h2>
                  <p className="text-gray-400 text-sm title-font font-mono">
                    Warsaw,pland
                  </p>
                </div>
              </div>
              <div className="flex-grow">
                <p className="leading-relaxed text-base">
                  “wow...iam very happy to use this vpn,it turned out to be more
                  than my expectations and so far there have been no problems.
                  laslesvpn always the best”.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feedback;
