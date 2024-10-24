// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import NavLinks from "./NavLinks";

// const Navbar = () => {
//   const [open, setOpen] = useState(false);
//   // const [isLoggedIn, setIsLoggedIn] = useState(false); // State to manage login

//   return (
//     <nav className="bg-black text-white bg-opacity-50 backdrop-blur-md shadow-md  fixed w-full top-0 left-0 z-10 ">
//       <div className="flex items-center justify-center">
//         <div className="z-10 p-5 md:w-auto w-full flex justify-between items-center gap-2">
//           <div className="flex gap-2 items-center justify-center">
//             <img src='/N (2).png' alt="logo" className="md:cursor-pointer h-10 rounded-full" />
//             <span className="text-sm">Naunidh Astro</span>
//           </div>
//           <div className="text-3xl text-yellow-500 md:hidden" onClick={() => setOpen(!open)}>
//             <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
//           </div>
//         </div>
//         <ul className="md:flex ml-64 hidden uppercase items-center gap-2">
//           <li>
//             <Link to="/" className=" px-3 hover:text-yellow-500 duration-100 inline-block">
//               Home
//             </Link>
//           </li>
//           <NavLinks />
//           <li>
//             <Link to="/contact" className=" px-3 hover:text-yellow-500 duration-100 inline-block">
//               Contact
//             </Link>
//           </li>
//         </ul>
       
//         {/* Mobile nav */}
//         <ul
//           className={`
//             md:hidden bg-white text-black border-2 border-yellow-500 fixed w-full max-h-fit top-0 overflow-y-auto bottom-0 py-10 pl-4
//             duration-500 ${open ? "left-0" : "left-[-100%]"}
//           `}
//         >
//           <li>
//             <Link to="/" className="py-7 px-3 hover:text-yellow-500 duration-100 inline-block">
//               Home
//             </Link>
//           </li>
//           <NavLinks />
//           <li>
//             <Link to="/contact" className=" py-7 px-3 hover:text-yellow-500 duration-100 inline-block">
//               Contact
//             </Link>
//           </li>
          
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

// Navbar.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavLinks from "./NavLinks";
import { useAuth } from "../../context/AuthContext"; 

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { user, logout } = useAuth();

  return (
    <nav className="bg-black text-white bg-opacity-50 backdrop-blur-md shadow-md fixed w-full top-0 left-0 z-10">
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
            <Link to="/" className="px-3 hover:text-yellow-500 duration-100 inline-block">Home</Link>
          </li>
          <NavLinks />
          <li>
            <Link to="/contact" className="px-3 hover:text-yellow-500 duration-100 inline-block">Contact</Link>
          </li>
          {/* Profile Icon or Logout Button */}
          {user ? (
            <>
              <li className="flex items-center">
                <Link to="/profile" className="hover:text-yellow-500">
                  <img src="user.png" alt="Profile" className="h-8 w-8 rounded-full" />
                </Link>
                <button onClick={logout} className="text-red-500 font-semibold hover:text-yellow-500 ml-2">Logout</button>
              </li>
            </>
          ) : (
            <li>
              <Link to="/signin" className="px-3 hover:text-yellow-500 duration-100 inline-block">Sign In</Link>
            </li>
          )}
        </ul>
        
        {/* Mobile nav */}
        <ul className={`
            md:hidden bg-white text-black border-2 border-yellow-500 fixed w-full max-h-fit top-0 overflow-y-auto bottom-0 py-10 pl-4
            duration-500 ${open ? "left-0" : "left-[-100%]"}
          `}
        >
          <li>
            <Link to="/" className="py-7 px-3 hover:text-yellow-500 duration-100 inline-block">Home</Link>
          </li>
          <NavLinks />
          <li>
            <Link to="/contact" className="py-7 px-3 hover:text-yellow-500 duration-100 inline-block">Contact</Link>
          </li>
          {/* Mobile Profile Icon */}
          {user ? (
            <li className="flex items-center">
              <Link to="/profile" className="hover:text-yellow-500">
                <img src="/user.png" className="h-8 w-8 rounded-full" />
              </Link>
              <button onClick={logout} className="text-red-500 hover:text-yellow-500 ml-2">Logout</button>
            </li>
          ): (
            <li>
              <Link to="/signin" className="px-3 hover:text-yellow-500 duration-100 inline-block">Sign In</Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

