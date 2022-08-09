import React from "react";
import PropTypes from "prop-types";
import UnderlineLink from "./ui/UnderlineLink";
import LearnMoreLink from "./ui/LearnMoreLink";

function DescriptionTextOnly(props) {
  return (
    <div
      className={"flex flex-col justify-center gap-4 p-20 " + props.className}
    >
      <h2 className="font-fraunces text-3xl">{props.title}</h2>
      <p className="">{props.children}</p>
      {/* <a href="#" className="font-fraunces uppercase">
        Learn More
      </a> */}
      <LearnMoreLink color={props.color} />
    </div>
  );
}

DescriptionTextOnly.propTypes = {
  title: PropTypes.string,
  color: PropTypes.string,
  children: PropTypes.string,
  className: PropTypes.string,
};

export default DescriptionTextOnly;
