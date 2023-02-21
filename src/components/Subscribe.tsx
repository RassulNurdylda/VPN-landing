import React from "react";

const Subscribe = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="w-[1116px] h-[181px] bg-white rounded-xl shadow-xl mx-auto">
        <div className="grid grid-cols-2 gap-[571px] place-items-center px-10 py-9 w-full">
          <div>
            <p className="text-2xl font-medium w-[20ch]">
              Subscribe now for get special features!
            </p>
            <p className="mt-5">Lorem ipsum dolor sit amet </p>
          </div>
          <div>
            <button
              type="button"
              className="h-[57px] w-[244px] text-white bg-red-500 hover:bg-red-600 font-medium rounded-2xl text-sm px-5 py-2.5 text-center mr-2 mb-2 mt-10"
            >
              Subscribe now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
