import React from "react";
import ImageGalleryDesktop from "./ImageGalleryDesktop";
import ImageGalleryMobile from "./ImageGalleryMobile";

function ImageGallery() {
  return (
    <div className="max-w-screen">
      <ImageGalleryDesktop />
      <ImageGalleryMobile />
    </div>
  );
  // if (window.innerWidth > 1200)
}

export default ImageGallery;
