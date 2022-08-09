import React from "react";
import Logo from "./ui/Logo";
import UnderlineLink from "./ui/UnderlineLink";

function Navbar() {
  return (
    <nav className="absolute flex h-fit w-full items-center justify-between p-3 font-semibold">
      <a href="" className="scale-125 pl-4 duration-400 hover:scale-[135%]">
        <Logo />
      </a>
      <div className="flex h-fit w-fit items-center justify-center gap-4 text-fem-50">
        <button className="block px-2 py-1 text-xl duration-400 hover:text-neutral-300 md:hidden">
          <i className="fa-solid fa-bars"></i>
        </button>
        {/* TODO collapsible menu buttons */}
        <div className="flex flex-col items-center justify-center gap-4 md:flex-row">
          <UnderlineLink link="#" bgColor="bg-fem-100">
            About
          </UnderlineLink>
          <UnderlineLink link="#" bgColor="bg-fem-200">
            Services
          </UnderlineLink>
          <UnderlineLink link="#" bgColor="bg-fem-400">
            Project
          </UnderlineLink>
          <a
            href="#"
            className="rounded-3xl bg-fem-50 py-2 px-3 text-fem-600 duration-400 hover:bg-[#6ECEFF] hover:text-fem-50"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
