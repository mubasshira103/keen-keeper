import React from "react";

import { FaPlus } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="text-center p-4 max-w-[1100px] mx-auto space-y-5 mt-4 md:mt-14">
      <h1 className="font-bold text-3xl md:text-5xl">Friends to keep close in your life</h1>
      <p className="text-[#64748B]">
        Your personal shelf of meaningful connections. Browse, tend, and nurture
        the relationships that matter most.
      </p>
      <button className="btn bg-[#244D3F] text-white"><FaPlus></FaPlus> Add friend</button>
    </div>
  );
};

export default Banner;
