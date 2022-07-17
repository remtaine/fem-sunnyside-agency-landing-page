import React from "react";
import Logo from "./svg/Logo";

function Navbar() {
  return (
    <nav className="absolute flex h-fit w-full items-center justify-between p-3 font-semibold">
      <div className="scale-125 pl-4">
        <Logo />
      </div>
      <div className="flex h-fit w-fit items-center justify-center gap-4 text-fem-50">
        <div className="">
          <a
            href=""
            className="decoration-2 underline-offset-2 hover:underline"
          >
            About
          </a>
          <div className=""></div>
        </div>
        <a href="" className="decoration-2 underline-offset-2 hover:underline">
          Services
        </a>
        <a href="" className="decoration-2 underline-offset-2 hover:underline">
          Project
        </a>
        <a
          href=""
          className="rounded-3xl bg-fem-50 py-2 px-3 text-fem-600 duration-400 hover:bg-[#6ECEFF] hover:text-fem-50"
        >
          Contact
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
