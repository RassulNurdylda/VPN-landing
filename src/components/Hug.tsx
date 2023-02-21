import React from "react";

const Hug = () => {
  return (
    <div className="flex justify-center items-center md:flex-row ">
      <div>
        <p className="text-5xl w-[20ch] font-medium">
          Want anything to be easy with LaslesVPN
        </p>
        <p className="text-lg w-[60ch] mt-10">
          Lorem ipsum dolor sit amet consectetur. Quis tortor gravida nibh arcu
          id purus ullamcorper. Vel vel erat semper augue.
        </p>
        <button
          type="button"
          className="h-[54px] w-[193px] text-white bg-red-500 hover:bg-red-600 font-medium rounded-2xl text-sm px-5 py-2.5 text-center mr-2 mb-2 mt-10"
        >
          Get started
        </button>
      </div>
      <div>
        <img src="/pic1.png" alt="" />
      </div>
    </div>
  );
};

export default Hug;
