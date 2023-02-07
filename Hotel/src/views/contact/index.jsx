import React from "react";
import Email from "./Email";
import SubHero from "./SubHero";

const Contact = () => {
  return (
    <div>
      {/* Container */}
      <div className="font-subHeading">
        {/* Layout */}
        <div className="">
          {/* Content */}
          <SubHero title="Contact Us" path="Contact"/>
          <Email />
        </div>
      </div>
    </div>
  );
};

export default Contact;
