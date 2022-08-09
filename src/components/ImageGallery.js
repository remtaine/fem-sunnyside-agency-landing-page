import React from "react";
import ImageGalleryDesktop from "./desktop/ImageGalleryDesktop";
import ImageGalleryMobile from "./mobile/ImageGalleryMobile";

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
