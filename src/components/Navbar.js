import React, { useState } from "react";
import Logo from "./ui/Logo";
import UnderlineLink from "./ui/UnderlineLink";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const toggleMenuOpen = function () {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="absolute flex h-fit w-full items-center justify-between p-3 font-semibold">
      <a
        href="#placeholder"
        className="scale-125 pl-4 duration-400 hover:scale-[135%]"
      >
        <Logo />
      </a>
      <div className="relative flex h-fit w-fit items-center justify-center gap-4 text-fem-50">
        <button
          onClick={toggleMenuOpen}
          className={
            "block px-2 py-1 text-xl duration-400 hover:text-neutral-300 md:hidden " +
            (isMenuOpen ? "opacity-100" : "opacity-50")
          }
        >
          <i className="fa-solid fa-bars"></i>
        </button>
        {/* TODO collapsible menu buttons */}
        <div
          className={
            "absolute top-16 right-0 z-50 mr-[0.6rem] flex-col md:relative md:top-0 md:flex " +
            (isMenuOpen ? "hidden" : "flex")
          }
        >
          <div className=" ml-auto h-0 w-0 border-[0.9rem] border-solid border-fem-50 border-t-transparent border-l-transparent md:hidden"></div>
          <div className="flex  w-fit flex-col items-center justify-center gap-4 bg-fem-50 px-20 py-10 font-barlow font-normal text-fem-700 shadow md:relative  md:flex md:flex-row md:bg-transparent md:p-0 md:text-inherit md:shadow-none ">
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
              href="#placeholder"
              className="rounded-3xl bg-fem-200 py-2 px-3 text-fem-600 duration-400 hover:bg-[#6ECEFF] hover:text-fem-50 md:bg-fem-50"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
