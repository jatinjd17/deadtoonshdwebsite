import React, { useState } from "react";
// import { Link } from "react-router-dom";
import Logo from "../../../public/Logo.png";
import Button from "../Button";
import NavLinks from "./NavLinks";
import Link from "next/link";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="">
      <nav className="w-full flex justify-center fixed z-50">
        <div className="flex items-center font-medium justify-around bg-slate-500 w-11/12 md:w-auto rounded-xl mt-2">
          <div className="z-50 p-5 md:w-auto w-full flex justify-between">
            <img src={Logo} alt="logo" className="md:cursor-pointer h-9" />
            <div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
              <button className="text-white">ssssss</button>
              {/* <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon> */}
            </div>
          </div>
          <ul className="md:flex hidden uppercase items-center gap-8 font-[Poppins]">
            <li>
              <Link href="/" className="py-7 px-3 inline-block">
                Home
              </Link>
            </li>
            <NavLinks />
          </ul>
          <div className="md:block hidden">
            <Button />
          </div>
          {/* Mobile nav */}
          <ul
            className={`
        md:hidden bg-slate-500 fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4
        duration-500 ${open ? "left-0" : "left-[-100%]"}
        `}
          >
            <li>
              <Link href="/" className="py-7 px-3 inline-block">
                Home
              </Link>
            </li>
            <NavLinks />
            <div className="py-5">
              <Button />
            </div>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
