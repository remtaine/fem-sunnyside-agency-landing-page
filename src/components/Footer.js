import React from "react";
import Logo from "./ui/Logo";
// import LogoFB from "../images/icon-facebook.svg";
// import LogoIG from "../images/icon-instagram.svg";
// import LogoPinterest from "../images/icon-pinterest.svg";
// import LogoTwitter from "../images/icon-twitter.svg";

function Footer() {
  return (
    <div className="max-w-screen flex h-64 flex-col items-center justify-center gap-12 bg-fem-550 font-barlow font-semibold">
      <a href="#" className="scale-150 duration-400 hover:scale-[160%]">
        <Logo color="hsl(168, 34%, 41%)" />
      </a>
      <ul className="flex gap-8 ">
        <li className="">
          <a href="#" className="text-fem-500 duration-400 hover:text-fem-50">
            About
          </a>
        </li>
        <li className="">
          <a href="#" className="text-fem-500 duration-400 hover:text-fem-50">
            Services
          </a>
        </li>
        <li className="">
          <a href="#" className="text-fem-500 duration-400 hover:text-fem-50">
            Projects
          </a>
        </li>
      </ul>

      <ul className="flex gap-4 text-2xl text-fem-500">
        <li className="inline-block">
          <a href="#" className="p-2 duration-400 hover:text-fem-50">
            <i class="fa-brands fa-square-facebook inline-block"></i>
          </a>
        </li>
        <li className="inline-block">
          <a href="#" className="p-2 duration-400 hover:text-fem-50">
            <i class="fa-brands fa-instagram"></i>
          </a>
        </li>
        <li className="inline-block">
          <a href="#" className="p-2 duration-400 hover:text-fem-50">
            <i class="fa-brands fa-twitter"></i>
          </a>
        </li>
        <li className="inline-block">
          <a href="#" className="p-2 duration-400 hover:text-fem-50">
            <i class="fa-brands fa-pinterest"></i>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Footer;
