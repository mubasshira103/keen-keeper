import React from "react";

const Count = () => {


  return (
    <div className="grid  mt-5 p-4 md:mt-10 gap-4 sm:grid-cols-2  md:grid-cols-4">
      <div className="bg-white rounded-xl shadow flex flex-col items-center justify-center py-8 ">
        <span className="text-[40px] font-bold text-[#284f42] leading-none mb-3">
          12
        </span>
        <span className="text-[#64748b] text-base font-medium">
          Total Friends
        </span>
      </div>
      <div className="bg-white rounded-xl shadow flex flex-col items-center justify-center py-8 ">
        <span className="text-[40px] font-bold text-[#284f42] leading-none mb-3">
          3
        </span>
        <span className="text-[#64748b] text-base font-medium">
          On Track
        </span>
      </div>
      <div className="bg-white rounded-xl shadow flex flex-col items-center justify-center py-8 px-4">
        <span className="text-[40px] font-bold text-[#284f42] leading-none mb-3">
          3
        </span>
        <span className="text-[#64748b] text-base font-medium">
          Need Attention

        </span>
      </div>
      <div className="bg-white rounded-xl shadow flex flex-col items-center justify-center py-8 ">
        <span className="text-[40px] font-bold text-[#284f42] leading-none mb-3">
        8
        </span>
        <span className="text-[#64748b] text-base font-medium">
          Interactions This Month
        </span>
      </div>
    </div>
  );
};

export default Count;
