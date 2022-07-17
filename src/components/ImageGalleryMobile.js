import React from "react";
import MobileCone from "../images/mobile/image-gallery-cone.jpg";
import MobileBottles from "../images/mobile/image-gallery-milkbottles.jpg";
import MobileOrange from "../images/mobile/image-gallery-orange.jpg";
import MobileSugar from "../images/mobile/image-gallery-sugar-cubes.jpg";

function ImageGalleryMobile() {
  return (
    <section className="max-w-screen block grid grid-cols-2 md:hidden">
      <img src={MobileBottles} alt="" className="w-full" />
      <img src={MobileOrange} alt="" className="w-full" />
      <img src={MobileCone} alt="" className="w-full" />
      <img src={MobileSugar} alt="" className="w-full" />
    </section>
  );
}

export default ImageGalleryMobile;
