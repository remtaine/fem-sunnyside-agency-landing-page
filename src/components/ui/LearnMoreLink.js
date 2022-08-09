import React from "react";
import PropTypes from "prop-types";

function LearnMoreLink(props) {
  return (
    <div className="group relative w-fit ">
      <div
        className={
          "absolute top-full h-2 w-full -translate-y-[0.6rem] rounded-full opacity-40 duration-400 ease-in-out group-hover:opacity-80 " +
          props.color
        }
      ></div>
      <a href="#" className="z-50 py-2 font-fraunces uppercase">
        Learn More
      </a>
    </div>
  );
}

LearnMoreLink.propTypes = {
  color: PropTypes.string,
};

LearnMoreLink.defaultProps = {
  color: "bg-red-500",
};

export default LearnMoreLink;
