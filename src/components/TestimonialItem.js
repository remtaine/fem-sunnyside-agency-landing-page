import React from "react";
import PropTypes from "prop-types";

import TestimonialEmily from "../images/image-emily.jpg";
import TestimonialJennie from "../images/image-jennie.jpg";
import TestimonialThomas from "../images/image-thomas.jpg";

function TestimonialItem(props) {
  return (
    <article className="mx-10 flex flex-col items-center justify-center gap-2 md:mx-2">
      <img src={props.imagePath} alt="" className="w-16 rounded-full" />
      <p className="my-2 mx-4 text-center text-sm font-normal text-fem-700 md:text-base">
        {props.children}
      </p>
      <h3 className="font-fraunces font-bold">{props.name}</h3>
      <h4 className="text-xs text-fem-900">{props.title}</h4>
    </article>
  );
}

TestimonialItem.propTypes = {
  imagePath: PropTypes.string,
  children: PropTypes.string,
  name: PropTypes.string,
  title: PropTypes.string,
};

export default TestimonialItem;
