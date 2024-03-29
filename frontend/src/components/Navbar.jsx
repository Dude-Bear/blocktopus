import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import AuthContext from "../context/AuthProvider";
import useAuth from "../hooks/useAuth";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const { setAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  const logout = async () => {
    // if used in more components, this should be in context
    // axios to /logout endpoint
    setAuth({});
    navigate("/");
  };

  const authData = useAuth();

  let loggedIn = false;

  if (Object.entries(authData.auth).length === 0) {
    loggedIn = false;
  } else {
    loggedIn = true;
  }

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="rounded-div flex items-center justify-between h-20 font-bold">
      <Link to="/">
        <h1 className="text-2xl">Blocktopus</h1>
      </Link>
      {/* Desktop Menu */}
      <div className="hidden md:block">
        <Link to="/bci" className="p-4 hover:text-accent">
          Index
        </Link>
        {/* <Link to="/learn" className="p-4 hover:text-accent">
          Learn
        </Link> */}
        <Link to="/history" className="p-4 hover:text-accent">
          History
        </Link>
      </div>
      <div className="hidden md:block">
        <ThemeToggle />
      </div>
      {loggedIn ? (
        <div className="hidden md:block">
          <button
            className="bg-button text-btnText px-5 py-2 ml-2 rounded-2xl shadow-lg hover:shadow-2xl"
            onClick={logout}
          >
            LogOut
          </button>
        </div>
      ) : (
        <div className="hidden md:block">
          <Link
            to="/signin"
            className="bg-button text-btnText px-5 py-2 ml-2 rounded-2xl shadow-lg hover:shadow-2xl"
          >
            Sign In
          </Link>
        </div>
      )}
      {/* Icon for the Menu */}
      <div onClick={handleNav} className="block md:hidden cursor-pointer z-10">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      {/* Mobile Menu */}
      <div
        onClick={handleNav}
        className={
          nav
            ? "rounded-div md:hidden fixed left-0 top-20 flex flex-col items-center justify-between w-full h-[90%] bg-primary ease-in duration-300 z-10"
            : "fixed left-[-100%] top-20 h-[90%] flex flex-col items-center justify-between ease-in duration-300"
        }
      >
        <ul className="w-full p-4">
          <li className="border-b py-6">
            <Link className="block" to="/">
              Home
            </Link>
          </li>
          <li className="border-b py-6">
            <Link className="block" to="/bci">
              Index
            </Link>
          </li>
          {/* <li className="border-b py-6">
            <Link className="block" to="/learn">
              Learn
            </Link>
          </li> */}
          <li className="border-b py-6">
            <Link className="block" to="/history">
              History
            </Link>
          </li>
          <li className="py-6 border-b">
            <ThemeToggle className="block" />
          </li>
        </ul>
        {loggedIn ? (
          <div className="flex flex-col w-full p-4">
            <button
              className="bg-button text-btnText px-5 py-2 ml-2 rounded-2xl shadow-lg hover:shadow-2xl"
              onClick={logout}
            >
              LogOut
            </button>
          </div>
        ) : (
          <div className="flex flex-col w-full p-4">
            <Link to="/signin">
              <button className="w-full my-2 p-3 bg-button text-btnText rounded-2xl shadow-xl">
                Sign In
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
