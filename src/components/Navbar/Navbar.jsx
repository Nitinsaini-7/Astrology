import React, { useState } from "react";
import { Link } from "react-router-dom";

// import Button from "../Button";
import NavLinks from "./NavLinks";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="bg-black text-white bg-opacity-50 backdrop-blur-md shadow-md  fixed w-full top-0 left-0 z-10 ">
      <div className="flex items-center justify-center">
        <div className="z-10 p-5 md:w-auto w-full flex justify-between items-center gap-2">
          <div className="flex gap-2 items-center justify-center">
          <img src='/N (2).png' alt="logo" className="md:cursor-pointer h-10 rounded-full" />
          <span className="text-sm">Naunidh Astro</span>
          </div>
          <div className="text-3xl text-yellow-500 md:hidden" onClick={() => setOpen(!open)}>
            <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
          </div>
        </div>
        <ul className="md:flex ml-64 hidden uppercase items-center gap-2">
          <li>
            <Link to="/" className=" px-3 hover:text-yellow-500 duration-100 inline-block">
              Home
            </Link>
          </li>
          <NavLinks />
          <li>
            <Link to="/contact" className=" px-3 hover:text-yellow-500 duration-100 inline-block">
              Contact
            </Link>
          </li>
        </ul>
        <div className="md:block hidden">
        <Link>
              <button className="p-2 border-2 border-yellow-500 text-yellow-500 duration-300 hover:text-white rounded-full hover:bg-yellow-500">Chat With Astrologer</button>
            </Link>
        </div>
        {/* Mobile nav */}
        <ul
          className={`
        md:hidden bg-white text-black border-2 border-yellow-500 fixed w-full max-h-fit top-0 overflow-y-auto bottom-0 py-10 pl-4
        duration-500 ${open ? "left-0" : "left-[-100%]"}
        `}
        >
          <li>
            <Link to="/" className="py-7 px-3 inline-block">
              Home
            </Link>
          </li>
          <NavLinks />
          <li>
            <Link to="/contact" className=" px-3 hover:text-yellow-500 duration-100 inline-block">
              Contact
            </Link>
          </li>
          <div className="py-5">
            <Link>
              <button className="p-2 border-2 border-yellow-500 text-yellow-500 duration-300 hover:text-white rounded-full hover:bg-yellow-500">Chat With Astrologer</button>
            </Link>

          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;