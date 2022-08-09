import React from "react";
import PropTypes from "prop-types";

function DescriptionImageOnly(props) {
  return (
    <picture className="h-full w-full">
      <source media="(max-width: 1024px)" srcSet={props.imgMobile} />
      <img
        src={props.imgDesktop}
        alt="description image"
        className="h-full w-full object-cover"
      />
    </picture>
  );
}

DescriptionImageOnly.propTypes = {
  imgMobile: PropTypes.string,
  imgDesktop: PropTypes.string,
};

export default DescriptionImageOnly;
