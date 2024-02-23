import React from "react";
import { IoMdSettings } from "react-icons/io";
import { FaChevronLeft } from "react-icons/fa";

const Setting = () => {
  return (
    <div className="h-full">
      <div className="relative">
        <div
          className="
        absolute top-1/2    "
        >
          <button>
            <IoMdSettings size={60} />
          </button>

          {/* <FaChevronLeft size={60} /> */}
        </div>
      </div>
    </div>
  );
};

export default Setting;
