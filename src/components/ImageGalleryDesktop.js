import React from "react";
import DesktopCone from "../images/desktop/image-gallery-cone.jpg";
import DesktopBottles from "../images/desktop/image-gallery-milkbottles.jpg";
import DesktopOrange from "../images/desktop/image-gallery-orange.jpg";
import DesktopSugar from "../images/desktop/image-gallery-sugarcubes.jpg";

function ImageGalleryDesktop() {
  return (
    <section className="max-w-screen hidden grid-cols-4 md:grid">
      <img src={DesktopBottles} alt="" className="" />
      <img src={DesktopOrange} alt="" className="" />
      <img src={DesktopCone} alt="" className="" />
      <img src={DesktopSugar} alt="" className="" />
    </section>
  );
}

export default ImageGalleryDesktop;
