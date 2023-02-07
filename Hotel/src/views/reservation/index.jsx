import React from "react";
import Select from "./Select";
import SubHero from "../contact/SubHero";

const Reservation = () => {
  return (
    <div>
      {/* Container */}
      <div className="font-subHeading">
        {/* Layout */}
        <div className="">
          {/* Content */}
          <SubHero title="Reservation" path="Reservation"/>
          <Select />
        </div>
      </div>
    </div>
  );
};

export default Reservation;
