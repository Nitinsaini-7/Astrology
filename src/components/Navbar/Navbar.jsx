import React, { useState } from "react";
import { Link } from "react-router-dom";

// import Button from "../Button";
import NavLinks from "./NavLinks";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="bg-yellow-500 bg-opacity-60 backdrop-blur-md shadow-md text-white shadow-zinc-200 fixed w-full top-0 left-0 z-10 ">
      <div className="flex items-center font-medium justify-around">
        <div className="z-10 p-5 md:w-auto w-full flex justify-between">
          <img src='/N (2).png' alt="logo" className="md:cursor-pointer w-10 rounded-full" />
          <div className="text-3xl text-gray-600 md:hidden" onClick={() => setOpen(!open)}>
            <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
          </div>
        </div>
        <ul className="md:flex hidden uppercase items-center gap-8 font-[Poppins]">
          <li>
            <Link to="/" className="py-7 px-3 inline-block">
              Home
            </Link>
          </li>
          <NavLinks />
        </ul>
        <div className="md:block hidden">
        <Link>
              <button className="p-3 bg-yellow-500 border-yellow-500 border-2 hover:bg-transparent duration-200 text-white rounded-full">Chat Iith Astrologer</button>
            </Link>
        </div>
        {/* Mobile nav */}
        <ul
          className={`
        md:hidden bg-white text-black fixed w-full max-h-fit top-0 overflow-y-auto bottom-0 py-10 pl-4
        duration-500 ${open ? "left-0" : "left-[-100%]"}
        `}
        >
          <li>
            <Link to="/" className="py-7 px-3 inline-block">
              Home
            </Link>
          </li>
          <NavLinks />
          <div className="py-5">
            <Link>
              <button className="p-4 bg-yellow-400 text-white rounded-md">Login</button>
            </Link>

          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;