import React from "react";

const Navbar: React.FC = () => {
  return (
    <div className="navbar bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle hover:bg-purple-400/50"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-purple-700 text-white rounded-box z-[1] mt-3 w-52 p-2 shadow-xl"
          >
            <li>
              <a className="hover:bg-pink-500/80">Homepage</a>
            </li>
            <li>
              <a className="hover:bg-pink-500/80">Portfolio</a>
            </li>
            <li>
              <a className="hover:bg-pink-500/80">About</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="navbar-center">
        <a className="btn btn-ghost text-2xl font-bold text-white hover:text-pink-300">
          MyBrand
        </a>
      </div>

      <div className="navbar-end space-x-2">
        <button className="btn btn-circle bg-white/20 text-white hover:bg-pink-400/70">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>

        <button className="btn btn-circle bg-white/20 text-white hover:bg-purple-500/70">
          <div className="indicator">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
            <span className="badge badge-xs badge-pink-400 indicator-item"></span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
