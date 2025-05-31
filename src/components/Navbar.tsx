import { MoonIcon, Square3Stack3DIcon, SunIcon } from "@heroicons/react/16/solid";
import { Link } from "react-router";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <a>Explore</a>
              <ul className="p-2">
                <li>
                  <Link to={"/technologies"}>Technologies</Link>
                </li>
                <li>
                  <a>Stacks</a>
                </li>
                <li>
                  <a>Projects</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <Link to={"/"} className="btn btn-ghost text-xl">
          <Square3Stack3DIcon className="h-6 w-6 mr-2" />
          StackPedia
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 w-md justify-evenly">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <details className="z-10">
              <summary>Explore</summary>
              <ul className="p-2">
                <li>
                  <Link to={"/technologies"}>Technologies</Link>
                </li>
                <li>
                  <a>Stacks</a>
                </li>
                <li>
                  <a>Projects</a>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <ThemeToggle tip={"toggle theme"} icon1={<SunIcon color="#F59E0B" />} icon2={<MoonIcon color="#6366F1"/>} />
        <div className="dropdown dropdown-end ml-4">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Profile picture icon"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-md dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link to={"profile"} className="justify-between">
                Profile
                <span className="badge">New</span>
              </Link>
            </li>
            <li>
              <Link to={"settings"}>Settings</Link>
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

export default Navbar;
