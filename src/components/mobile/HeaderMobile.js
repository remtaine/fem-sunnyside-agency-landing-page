import React from "react";
import HeaderImgMobile from "images/mobile/image-header.jpg";

function HeaderMobile() {
  return (
    <section className="block sm:hidden">
      <img src={HeaderImgMobile} alt="" className="" />
      <div className="absolute top-24 flex w-full flex-col gap-8 text-center text-fem-50 xs:gap-16 sm:gap-16">
        <h1 className="font-fraunces text-4xl uppercase xs:text-6xl">
          We are creatives
        </h1>
        <i className="fa-solid fa-arrow-down-long scale-y-[1.6] text-7xl xs:text-8xl"></i>
      </div>
    </section>
  );
}

export default HeaderMobile;
