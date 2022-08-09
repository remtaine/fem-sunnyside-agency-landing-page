import React from "react";
import HeaderImgDesktop from "images/desktop/image-header.jpg";

function HeaderDesktop() {
  return (
    <section className="hidden sm:block">
      <img src={HeaderImgDesktop} alt="" className="" />
      <div className="lg: absolute top-24 flex w-full flex-col gap-6 text-center text-fem-50 lg:gap-12 xl:gap-24">
        <h1 className="font-fraunces text-4xl uppercase lg:text-6xl">
          We are creatives
        </h1>

        <i className="fa-solid fa-arrow-down-long scale-y-[1.4] text-7xl lg:scale-y-[1.6] lg:text-8xl xl:text-9xl"></i>
      </div>
    </section>
  );
}

export default HeaderDesktop;
