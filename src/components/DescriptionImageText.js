import React from "react";
import PropTypes from "prop-types";

function DescriptionImageText(props) {
  let textColor = "text-" + props.color;
  return (
    <div className="relative">
      <picture className="">
        <source media="(max-width: 1024px)" srcSet={props.bgImgMobile} />
        <img
          src={props.bgImageDesktop}
          alt=""
          className="h-full w-full object-cover"
        />
      </picture>
      {/* <picture className="">
        <source media="(max-width: 1024px)" srcset={props.bgImgMobile} />
        <img src={props.bgImgDesktop} className="" />
      </picture> */}

      <div className={"absolute top-[60%] flex flex-col gap-2 " + textColor}>
        <h2 className="text-center font-fraunces text-3xl">{props.title}</h2>
        <p className=" mx-6 flex items-center justify-center text-center align-middle text-xs font-extralight xs:text-sm sm:text-lg md:text-xs lg:mx-8 lg:text-base xl:text-xl xl:font-thin 2xl:text-2xl">
          {props.children}
        </p>
      </div>
    </div>
  );
}

DescriptionImageText.propTypes = {
  title: PropTypes.string,
  color: PropTypes.string,
  bgImageDesktop: PropTypes.string,
  bgImageMobile: PropTypes.string,
  children: PropTypes.string,
};

export default DescriptionImageText;
