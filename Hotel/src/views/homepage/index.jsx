import React from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import About from "./About";
import Hero from "./Hero";
import Location from "./Location";
import Reviews from "./Reviews";
import RoomsAndSuites from "./RoomsAndSuites";
import Services from "./Services";

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      document
        .querySelector(location.hash)
        .scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  return (
    <div>
      {/* Container */}
      <div className="font-subHeading">
        {/* Layout */}
        <div className="">
          {/* Content */}
          <Hero />
          <About />
          <RoomsAndSuites />
          <Services />
          <Reviews />
          <Location />
        </div>
      </div>
    </div>
  );
};

export default Home;
