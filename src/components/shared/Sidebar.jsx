import React from "react";
import {
  RiHomeHeartLine,
  RiLogoutCircleRLine,
} from "react-icons/ri";

const Sidebar = (props) => {
  const { showMenu } = props;

  return (
    <div
      className={`bg-[#4E342E] fixed lg:left-0 top-0 w-28 h-full flex flex-col justify-between py-6 rounded-tr-xl rounded-br-xl z-50 transition-all ${
        showMenu ? "left-0" : "-left-full"
      }`}
    >
      <div>
        <ul className="pl-4">
          <li>
            <h4 className="text-2l text-gray-100 uppercase font-bold text-center my-5">
              Rafael {"\n"} Tarrifa
            </h4>
          </li>
          <li className="bg-[#33221E] p-4 rounded-tl-xl rounded-bl-xl">
            <a
              href="/"
              className="bg-[#F44336] p-4 flex justify-center rounded-xl text-white"
            >
              <RiHomeHeartLine className="text-2xl" />
            </a>
          </li>
        </ul>
      </div>
      <div>
        <ul className="pl-4">
          <li className="hover:bg-[#F44336] p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
            <a
              href="#"
              className="group-hover:bg-[#ec7c6a] p-4 flex justify-center rounded-xl text-[#F44336] group-hover:text-white transition-colors"
            >
              <RiLogoutCircleRLine className="text-2xl" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
