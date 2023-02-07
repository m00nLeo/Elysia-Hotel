import React from "react";
import { CiSearch } from "react-icons/ci";
import { BsTelephone } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import { AiOutlineMail } from "react-icons/ai";
import Container from "../../components/common/Container";
import ReservationForm from "../../components/common/ReservationForm";
import GroupsOfButton from "../../components/common/GroupsOfButton";
import ItemList from "../../components/common/ItemList";

const FacilitiesAmenities = () => {
  const Languages = ["English", "French", "Chinese"];
  const Internet = ["Wi-Fi in public areas", "Free Wi-Fi in all rooms"];
  const Accessibility = [
    "Wheelchair accessible",
    "Facilities for disabled guest ",
    "Elevator",
  ];
  const Relax = [
    "Ticket services",
    "Swimming pool [indoor]",
    "Mini golf course",
    "Steamroom",
    "Casino",
    "Spa",
    "Garden",
    " Sauna",
    "Tours",
    "Massage",
    "Hot tub",
    "Fitness center",
  ];
  const Fooddrink = [
    "Breakfast [free]",
    "Coffee shop",
    "Restaurants",
    "Kitchen",
    "Poolside bar",
    "BBQ facilities",
    "Bar",
    "Room service [24-hour]",
  ];
  const Services = [
    "Pets allowed",
    "Dry cleaning",
    "Luggage storage",
    "Daily housekeeping",
    "Smoking area",
    "Library",
    "Currency exchange",
    "Smoke-free property",
    "Security [24-hour]",
    "Laundry service",
    "Gift/souvenir shop",
    "Concierge",
    "Safety deposit boxes",
    "Front desk [24-hour]",
    "Check-in/out [private]",
    "Check-in/out [express]",
  ];
  const Available = [
    "Free instant coffee",
    "Slippers",
    "Telephone",
    "Free welcome drink",
    "Hair dryer",
    "Toiletries",
    "Coffee/tea maker",
    "In-room safe box",
    "Towels",
    "Complimentary tea",
    "Mini bar",
    "Umbrella",
    "Daily newspaper",
    "Refrigerator",
    "Wake-up service",
    "Desk",
    "Satellite/cable channels",
    "Wi-Fi [free]",
    "Free bottled water",
    "Shower",
    "Clothes rack",
    "Alarm clock",
    "Air conditioning",
  ];
  const Forkids = [
    "Swimming pool [kids]",
    "Family room",
    "Babysitting service",
  ];
  const Gettingaround = [
    "Rental car",
    "Car park [on-site]",
    "Car park [free of charge]",
  ];

  <ItemList />;

  return (
    <div className="">
      {/* Amenity Services */}
      <ItemList title="Languages spoken" ListItem={Languages} />
      <ItemList title="Internet access" ListItem={Internet} />
      <ItemList title="Accessibility" ListItem={Accessibility} />
      <ItemList title="Things to do, ways to relax" ListItem={Relax} />
      <ItemList title="Dining, drinking, and snacking" ListItem={Fooddrink} />
      <ItemList title="Services and Conveniences" ListItem={Services} />
      <ItemList title="Available in all rooms" ListItem={Available} />
      <ItemList title="For the kids" ListItem={Forkids} />
      <ItemList title="Getting around" ListItem={Gettingaround} />
    </div>
  );
};

const NearBy = () => {
  const popular = [
    "Musee d'Orsay Museum 2.5 km",
    "La Sainte-Chapelle 2.7 km",
    "Champs-Elysees 3.7 km",
    "Arc de Triomphe 4.4 km",
    "Montmartre 5.7 km",
    "Sacre-Coeur de Montmartre 5.8km",
  ];
  const nearby = [
    "Place de Séoul 160 m",
    "Amf Bowling de Montparnasse 170 m",
    "Jardin Atlantique Paris 180 m",
    "Eglise Notre Dame du Travail 250 m",
    "Hazar and Co. 260 m",
    "Bootlegger 310 m",
    "Espace Krajcberg 380 m",
    "Theatre Bobino 380 m",
    "Pernety Metro Station 410 m",
    "Montparnasse Station 430m",
  ];

  <ItemList />;

  return (
    <div className="">
      {/* What's Nearby */}
      <ItemList title="Popular landmarks" ListItem={popular} />
      <ItemList title="Nearby landmarks" ListItem={nearby} />
    </div>
  );
};

const GuestPolicies = () => {
  return (
    <div>
      {/* Sub Intro */}
      <p className="font-h2 text-[18px] pt-4 pb-2 text-primary dark:text-gray-300 font-semibold">
        Children and extra beds
      </p>
      <p className="font-subHeading text-primary dark:text-gray-400 font-extralight tracking-wide leading-6">
        Extra beds are dependent on the room you choose. Please check the
        individual room capacity for more details.
        <br />
        <br />
        All children are welcome.
      </p>

      {/* Table */}
      <div className="my-6">
        <div className="">
          <table className="table-auto w-full border-[1px] ">
            {/* <!-- head --> */}

            <thead className="border-b-2 border-slate-300 dark:border-[#FEF4E8] bg-slate-100 dark:bg-[#FEF4E8] dark:text-[#B18C57]">
              <tr className="grid grid-cols-2 ">
                <th className="border-r-[1px] p-4  ">Guest's age </th>
                <th className="p-4">Extra bed</th>
              </tr>
            </thead>

            <tbody>
              {/* <!-- row 1 --> */}
              <tr className="grid grid-cols-2  border-b-[1px]">
                <td className="border-r-[1px] p-4 font-medium text-primary dark:text-gray-300 pr-6">
                  Infant 0-2 year(s)
                </td>
                <td className="text-primary dark:text-gray-300 p-4 font-extralight">
                  Stay for free if using existing bedding. Baby cot/crib
                  available upon request
                </td>
              </tr>
              {/* <!-- row 2 --> */}
              <tr className="grid grid-cols-2 border-b-[1px]">
                <td className="border-r-[1px] p-4 font-medium text-primary dark:text-gray-300 pr-6">
                  Children 3-11 year(s)
                </td>
                <td className="text-primary dark:text-gray-300 p-4 font-extralight">
                  Must use an extra bed If you need an extra bed, it will incur
                  an additional charge.
                </td>
              </tr>
              {/* <!-- row 3 --> */}
              <tr className="grid grid-cols-2">
                <td className="border-r-[1px] p-4 font-medium text-primary dark:text-gray-300 pr-6">
                  Guests 12 years and older are considered as adults
                </td>
                <td className="text-primary dark:text-gray-300 p-4 font-extralight">
                  Must use an extra bed which will incur an additional charge.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Other */}
        <p className="font-h2 text-[18px] pt-4 pb-2 text-primary dark:text-gray-300"> Others</p>
        <p className="font-subHeading text-primary dark:text-gray-400 font-extralight tracking-wide leading-6">
          There is no window in room type Cozy Deluxe Double and Twin Room. When
          booking more than 5 rooms, different policies and additional
          supplements may apply.
        </p>
      </div>
    </div>
  );
};

const listOfBtn = [
  { btnName: "Facilities & Amenities", details: <FacilitiesAmenities /> },
  { btnName: "What's nearby", details: <NearBy /> },
  { btnName: "Guest policies", details: <GuestPolicies /> },
];

const AboutUs = () => {
  return (
    <div>
      {/* Container */}
      <Container fluid={true}>
        <div className="pt-8">
          {/* Layout */}
          <div className="lg:grid lg:grid-cols-4 gap-5">
            {/* Content */}

            <div className="lg:col-span-3">
              {/* Left-side Content */}
              <div className="mb-6">
                {/* INTRO */}
                <p className="text-primary dark:text-gray-300 font-subHeading text-base text-justify pt-6 tracking-wide font-light">
                  Welcome to 5-star luxury and dedicated service at Elysia
                  Saigon. Modern design with classic royal style will bring a
                  magnificent experience for those people who have a passion for
                  travel. Let’s awaken your spirit. Create a whole new lifestyle
                  with our service; from the most comfortable room to a
                  sumptuous feast.
                  <br />
                  <br />
                  Its extensive gastronomic offerings feature several
                  restaurants and bars; and super wellness facilities,
                  complemented by the magnificent view of Ho Chi Minh city.
                  Everything is accompanied by the urban and cosmopolitan
                  spirit.
                  <br />
                  <br />
                  At Elysia Hotel - the iconic hotel that offers 280 luxurious
                  rooms and suites that feature stylish interiors and high
                  class. Soothing hues in each room create a relaxing ambiance
                  that provides business and leisure travelers an indulgent
                  refuge after a day of exploring Ho Chi Minh City.
                </p>
                {/* VIDEO */}
                <iframe
                  className="pt-6 w-full"
                  height="500"
                  src="https://www.youtube.com/embed/uztV7G83sB0"
                  allowFullScreen
                ></iframe>
              </div>
              {/* ADVANCED OPTIONS */}
              <div className="">
                {/* Group of Buttons */}
                <GroupsOfButton listOfBtn={listOfBtn} />
              </div>
            </div>

            <div>
              {/* Right-side Content */}
              {/* CONTACT */}
              <div className="bg-beige mt-6  text-black max-auto max-h-screen-xl">
                <div>
                  {/* Logo */}
                  <div className="py-8">
                    <img
                      className="w-full h-16"
                      src="https://360.agencewebcom.com/web/uploads/api/site-413/42a9f5a2934936263e0ccf2d2799f5d2124cc206.svg"
                      alt=""
                    />
                  </div>

                  {/* Address */}
                  <div className=" flex flex-col items-center justify-center pb-3">
                    <GoLocation className="text-light text-3xl" />
                    <p className="font-subHeading text-primary font-medium text-xl pt-3">
                      Address
                    </p>

                    <p className="font-subHeading text-primary font-light w-3/5 text-center leading-6 pb-3 ">
                      202 Hoang Van Thu, Ward 9, District 1, Ho Chi Minh City.
                    </p>
                  </div>

                  <div className="md:grid md:grid-cols-2 lg:flex lg:flex-col">
                    {/* Contact */}
                    {/* Phone */}
                    <div className=" flex flex-col items-center justify-center pb-3">
                      <BsTelephone className="text-light text-2xl" />
                      <p className="font-subHeading text-primary font-medium text-xl pt-3">
                        Phone
                      </p>
                      <p className="font-subHeading text-primary font-light w-3/5 text-center leading-6 pb-3 ">
                        +84 (0) 968150014
                      </p>
                    </div>

                    {/* Email */}
                    <div className=" flex flex-col items-center justify-center pb-3 ">
                      <AiOutlineMail className="text-light text-2xl" />
                      <p className="font-subHeading text-primary font-medium text-xl pt-3">
                        Email
                      </p>
                      <p className="font-subHeading text-primary font-light w-3/5 text-center  leading-6 pb-3 ">
                        customer.helpdesk <br /> @elysia.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* RESERVATION FORM */}
              <div className=" bg-beige my-6 p-8 justify-center">
                <h2 className="font-subHeading text-primary font-normal text-3xl pt-3">
                  Reservation
                </h2>
                <ReservationForm icon={<CiSearch />} buttonName="Check Rooms" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AboutUs;
