import React from "react";

const Info = () => {
  return (
    <div className="flex justify-center items-center mt-20  ">
      <div className=" w-[1100px] h-[416px] grid grid-cols-2 gap-[182px]">
        <img src="/pic5.png" alt="" className="w-[510px] h-[416px]" />
        <div className="w-[408px] h-[334px]">
          <p className="text-4xl font-medium">
            We provide many features you can use
          </p>
          <p className="text-base mt-5">
            Lorem ipsum dolor sit amet consectetur. Quis tortor gravida nibh
            arcu id purus ullamcorper. Vel vel erat semper augue.
          </p>
          <div className="flex font-bold mt-5">
            <img src="/pic6.png" alt="" />
            <p>Powerfull online protection.</p>
          </div>
          <div className="flex font-bold mt-5">
            <img src="/pic6.png" alt="" />
            <p>Internet with borders</p>
          </div>
          <div className="flex font-bold mt-5">
            <img src="/pic6.png" alt="" />
            <p>Supercharged VPN</p>
          </div>
          <div className="flex font-bold mt-5">
            <img src="/pic6.png" alt="" />
            <p>No specific time limits</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
