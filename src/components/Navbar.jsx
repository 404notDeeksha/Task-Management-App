import { useState } from "react";
import { setSearchText } from "../redux/slices/searchSlice";
import { useSelector, useDispatch } from "react-redux";
import { GoSearch } from "react-icons/go";
import { image } from "../assets";
import { Link } from "react-router-dom";
import { logoutUser } from "./../api/auth";

export default function Navbar() {
  const search = useSelector((state) => state.search.text);
  const userName = useSelector((state) => state.auth.user.name);
  const dispatch = useDispatch();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const userInitial = userName ? userName.charAt(0).toUpperCase() : "U";

  return (
    <nav className="bg-green-900 text-white p-4 flex items-center justify-between shadow-lg">
      <Link to="/app/dashboard" className="flex flex-row items-center gap-3">
        <img src={image.logo} alt="Logo" className="w-10 h-10 cursor-pointer" />
        <h1 className="text-xl font-bold">To Do</h1>
      </Link>

      <div className="relative w-1/3">
        <input
          type="text"
          placeholder="Search your text"
          value={search}
          onChange={(e) => dispatch(setSearchText(e.target.value))}
          className="w-full p-2 pl-10 rounded-lg bg-white text-gray-900 outline-none"
        />
        <GoSearch className="absolute left-3 top-2.5 text-gray-400" size={20} />
      </div>

      <div className="relative">
        <div
          className="w-10 h-10 flex items-center justify-center rounded-full bg-white  text-green-900 cursor-pointer text-lg font-bold"
          onClick={() => setDropdownOpen(!dropdownOpen)}
        >
          {userInitial}
        </div>
        {dropdownOpen && (
          <div className="absolute right-0 mt-2 w-36 bg-green-900 text-white shadow-lg rounded-lg overflow-hidden">
            <button className="block w-full px-4 py-2 hover:bg-white hover:text-green-950">
              Profile
            </button>
            <button
              className="block w-full px-4 py-2 hover:bg-white hover:text-green-950"
              type="button"
              onClick={() => logoutUser()}
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
