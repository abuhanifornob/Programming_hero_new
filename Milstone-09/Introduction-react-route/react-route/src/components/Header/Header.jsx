import React from "react";
import { Link } from "react-router-dom";
import ActiveLink from "../ActiveLink/ActiveLink";

const Header = () => {
  return (
    <div className="flex flex-row navbar bg-indigo-300">
      <div className="basis-1/4">
        <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
      </div>
      <div className="basis-1/2 mx-auto">
        <nav className="gap-4">
          <ActiveLink className="ml-5 text-red-600 manuItem" to="/">
            Home
          </ActiveLink>
          <ActiveLink className="ml-5" to="/user">
            Users
          </ActiveLink>
          <ActiveLink className="ml-5" to="/post">
            Post
          </ActiveLink>
          <ActiveLink className="ml-5" to="/about">
            {" "}
            About
          </ActiveLink>
        </nav>
      </div>
      <div className="basis-1/4">
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-24 md:w-auto"
          />
        </div>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
