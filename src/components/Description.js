import React from "react";
import DescriptionImageText from "./DescriptionImageText";
import DescriptionTextOnly from "./DescriptionTextOnly";
import EggImgDesktop from "images/desktop/image-transform.jpg";
import EggImgMobile from "images/mobile/image-transform.jpg";
import GlassImgDesktop from "images/desktop/image-stand-out.jpg";
import GlassImgMobile from "images/mobile/image-stand-out.jpg";
import CherryImgDesktop from "images/desktop/image-graphic-design.jpg";
import CherryImgMobile from "images/mobile/image-graphic-design.jpg";
import OrangeImgDesktop from "images/desktop/image-photography.jpg";
import OrangeImgMobile from "images/mobile/image-photography.jpg";
import DescriptionImageOnly from "./DescriptionImageOnly";

function Description() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2">
      <DescriptionImageOnly
        imgMobile={EggImgMobile}
        imgDesktop={EggImgDesktop}
      />
      <DescriptionTextOnly
        className="order-none md:order-first"
        title="Transform your brand"
        color="bg-fem-200"
      >
        We are a full-service creative agency specializing in helping brands
        grow fast. Engage your clients through compelling visuals that do most
        of the marketing for you.
      </DescriptionTextOnly>
      <DescriptionImageOnly
        imgMobile={GlassImgMobile}
        imgDesktop={GlassImgDesktop}
      />
      <DescriptionTextOnly
        title="Stand out to the right audience"
        color="bg-fem-100"
      >
        Using a collaborative formula of designers, researchers, photographers,
        videographers, and copywriters, we’ll build and extend your brand in
        digital places.
      </DescriptionTextOnly>
      <DescriptionImageText
        bgImageDesktop={CherryImgDesktop}
        bgImageMobile={CherryImgMobile}
        title="Graphic Design"
        color="fem-300"
      >
        Great design makes you memorable. We deliver artwork that underscores
        your brand message and captures potential clients' attention.
      </DescriptionImageText>
      <DescriptionImageText
        bgImageDesktop={OrangeImgDesktop}
        bgImageMobile={OrangeImgMobile}
        title="Photography"
        color="fem-600"
      >
        Increase your credibility by getting the most stunning, high-quality
        photos that improve your business image.
      </DescriptionImageText>
    </section>
  );
}

export default Description;
