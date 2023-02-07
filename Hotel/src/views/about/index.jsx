import React from "react";
import SubHero from "../contact/SubHero";
import RoomsAndSuites from "../homepage/RoomsAndSuites";
import AboutUs from "./AboutUs";
import TelephoneBooking from "../rooms/TelephoneBooking"

const AboutHotel = () => {
  return (
    <div>
      {/* Container */}
      <div className="font-subHeading">
        {/* Layout */}
        <div>
          {/* Content */}
          <SubHero title="About Us" path="About" />
          <AboutUs />
          <RoomsAndSuites />
          <TelephoneBooking />
        </div>
      </div>
    </div>
  );
};

export default AboutHotel;
