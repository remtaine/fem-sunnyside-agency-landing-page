import React from "react";
import PropTypes from "prop-types";

function UnderlineLink(props) {
  let bgColor = props.bgColor;
  console.log(bgColor);
  return (
    <div className="group relative w-fit ">
      <a href={props.link} className={"py-2 " + props.className}>
        {props.children}
      </a>
      <div
        className={
          "absolute h-[0.2rem] w-0 rounded-full duration-400 ease-in-out group-hover:w-full " +
          bgColor
        }
      ></div>
    </div>
  );
}

UnderlineLink.propTypes = {
  children: PropTypes.string,
  className: PropTypes.string,
  link: PropTypes.string,
  bgColor: PropTypes.string,
};

UnderlineLink.defaultProps = {
  bgColor: "bg-fem-50",
};

export default UnderlineLink;
