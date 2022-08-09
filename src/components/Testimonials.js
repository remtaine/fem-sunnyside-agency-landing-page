import React from "react";
import TestimonialItem from "./TestimonialItem";
import TestimonialEmily from "../images/image-emily.jpg";
import TestimonialJennie from "../images/image-jennie.jpg";
import TestimonialThomas from "../images/image-thomas.jpg";

function Testimonials() {
  return (
    <section className="max-w-screen my-6 p-4">
      <h2 className="text-center font-fraunces text-lg uppercase tracking-[0.15em] text-fem-900">
        Client Testimonials
      </h2>
      <div className="my-12 flex flex-col items-start justify-center gap-12 md:flex-row">
        <TestimonialItem
          imagePath={TestimonialEmily}
          name="Emily R."
          title="Marketing Director"
        >
          We put our trust in Sunnyside and they delivered, making sure our
          needs were met and deadlines were always hit.
        </TestimonialItem>
        <TestimonialItem
          imagePath={TestimonialThomas}
          name="Thomas S."
          title="Chief Operating Officer"
        >
          Sunnyside’s enthusiasm coupled with their keen interest in our brand’s
          success made it a satisfying and enjoyable experience.
        </TestimonialItem>
        <TestimonialItem
          imagePath={TestimonialJennie}
          name="Jennie F."
          title="Business Owner"
        >
          Incredible end result! Our sales increased over 400% when we worked
          with Sunnyside. Highly recommended!
        </TestimonialItem>
      </div>
    </section>
  );
}

export default Testimonials;
