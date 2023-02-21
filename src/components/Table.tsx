import React from "react";

const Table = () => {
  return (
    <div className="flex justify-center items-center mt-20">
      <div className="w-[820px] h-[114px] bg-white rounded-xl shadow-xl ">
        <div className="grid grid-cols-3 gap-4 h-[114px]  place-items-center">
          <div className="flex w-[100px] h-[46px] gap-4">
            <img src="/pic2.png" alt="" className="w-[37px] h-[37px]" />
            <div className="text-sm">
              <p className="font-bold">90+</p>
              <p className="text-gray-500">Users</p>
            </div>
          </div>
          <div className="flex w-[100px] h-[46px] gap-4">
            <img src="/pic3.png" alt="" className="w-[37px] h-[37px]" />
            <div className="text-sm">
              <p className="font-bold">30+</p>
              <p className="text-gray-500">Locations</p>
            </div>
          </div>
          <div className="flex w-[100px] h-[46px] gap-4">
            <img src="/pic4.png" alt="" className="w-[37px] h-[37px]" />
            <div className="text-sm">
              <p className="font-bold">50+</p>
              <p className="text-gray-500">Servers</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
