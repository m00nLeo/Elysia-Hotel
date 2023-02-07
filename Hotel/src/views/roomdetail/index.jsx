import React from "react";
import SubHero from "../contact/SubHero";
import RoomsAndSuites from "../homepage/RoomsAndSuites";
import Services from "../homepage/Services";
import RoomInformation from "./RoomInformation";

const RoomDetail = () => {
  return (
    <div>
      {/* Container */}
      <div className="font-subHeading">
        {/* Layout */}
        <div className="">
          {/* Content */}
          <SubHero title="Room Detail" path="Detail" />
          <RoomInformation />
          <RoomsAndSuites title="You Might Also Like" />
          <Services />
        </div>
      </div>
    </div>
  );
};

export default RoomDetail;
