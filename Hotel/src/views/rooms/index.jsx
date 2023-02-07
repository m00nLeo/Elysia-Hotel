import React from "react";
import SubHero from "../contact/SubHero";
import Services from "../homepage/Services";
import RoomsList from "./RoomsList";
import TelephoneBooking from "./TelephoneBooking";

const Rooms = () => {
  return (
    <div>
      {/* Container */}
      <div className="font-subHeading">
        {/* Layout */}
        <div className="">
          {/* Content */}
          <SubHero title="Rooms & Suites" path="Rooms"/>
          <RoomsList />
          <Services />
          <TelephoneBooking />
        </div>
      </div>
    </div>
  );
};

export default Rooms;
