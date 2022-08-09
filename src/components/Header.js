import React from "react";
import HeaderDesktop from "./desktop/HeaderDesktop";
import HeaderMobile from "./mobile/HeaderMobile";

function Header() {
  return (
    <header className="tracking-[0.3em]">
      <HeaderDesktop />
      <HeaderMobile />
    </header>
  );
}

export default Header;
