import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "../redux/slices/sidebarSlice";
import { Link } from "react-router-dom";
import { image } from "../assets";

const Sidebar = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.sidebar.isOpen);

  return (
    <>
      <div
        className={` top-0 left-0 h-full transition-transform transform bg-gray-100 text-black p-4 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } sm:translate-x-0 w-64`}
      >
        <div className="flex flex-row justify-between">
          <Link
            to="/app/dashboard"
            className="flex flex-row items-center gap-3"
          >
            <img
              src={image.logo}
              alt="Logo"
              className="w-10 h-10 cursor-pointer"
            />
            <h1 className="text-xl font-bold">To Do</h1>.
          </Link>

          <button
            onClick={() => dispatch(toggleSidebar())}
            className="text-black"
          >
            {isOpen ? "Close" : "Open"}
          </button>
        </div>

        <ul className="mt-8">
          <li className="px-4 py-2 hover:bg-green-300 cursor-pointer">Inbox</li>
          <li className="px-4 py-2 hover:bg-green-300 cursor-pointer">Today</li>
          <li className="px-4 py-2 hover:bg-green-300 cursor-pointer">
            Upcoming
          </li>
          <li className="px-4 py-2 hover:bg-green-300 cursor-pointer">
            Priority
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
