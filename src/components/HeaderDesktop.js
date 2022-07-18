import React from "react";
import HeaderImgDesktop from "images/desktop/image-header.jpg";

function HeaderDesktop() {
  return (
    <div className="">
      <img src={HeaderImgDesktop} alt="" className="" />
      <div className="absolute top-24 flex w-full flex-col gap-6 text-center text-fem-50">
        <h1 className="font-fraunces  text-[60px] uppercase">
          We are creatives
        </h1>
        <i class="fa-solid fa-arrow-down-long scale-y-[1.5] text-[80px]"></i>
      </div>
    </div>
  );
}

export default HeaderDesktop;
