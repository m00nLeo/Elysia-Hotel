import { useQuery } from "@tanstack/react-query";
import React from "react";
import { BiBed } from "react-icons/bi";
import {
  FaArrowsAlt,
  FaBuilding,
  FaBath,
  FaPeopleArrows,
  FaSmokingBan,
  FaHamburger,
  FaCalendarAlt,
} from "react-icons/fa";
import { HiOutlineCheck } from "react-icons/hi";
import { useParams } from "react-router-dom";
import { getProductsById } from "../../../services/productService";

import Container from "../../components/common/Container";
import GroupsOfButton from "../../components/common/GroupsOfButton";
import ReservationForm from "../../components/common/ReservationForm";
import GlobalSpinner from "../../components/common/GlobalSpinner";
import { useState } from "react";
import { addItemToCart } from "../../../services/cartService";

const AmenityServices = () => {
  const Clothing = [
    "Wash Clothes",
    "Shoeshine kit",
    "Ironing facilities",
    "Sewing kit",
    "Closet",
  ];
  const Safety = [
    "24hour Security",
    "Smoke Detector",
    "Locker",
    "First aid kit",
    "Fire extinguisher",
  ];
  const Comforts = [
    "Daily Housekeeping",
    "Air Purifier",
    "Umbrella",
    "Slippers",
    "Wake-up service",
    "Mosquito net",
    "Humidifier",
    "Fan",
    "Linens",
    "Alarm clock",
    "Air conditioning",
  ];
  const Layout = [
    "City view",
    "Windows",
    "Luggage Storage",
    "Balcony View",
    "Wooden/parqueted flooring",
    "High floor",
    "Desk",
    "Carpeting",
  ];
  const Bathroom = [
    "Shower",
    "Slippers For Kids",
    "Cosmetics",
    "Shower and bathtub",
    "Toiletries",
    "Towels",
    "Mirror",
    "Hair dryer",
  ];
  const Entertainment = [
    "Free Wi-Fi in all rooms!",
    "Satellite/cable channels",
    "Telephone",
  ];
  const Dining = [
    "Electric Hot Water Pot",
    "Microwave",
    "Kitchenette",
    "Free instant coffeeew",
    "Free welcome drink",
    "Refrigerator",
    "Coffee/tea maker",
    "Free bottled water",
    "Mini bar",
  ];

  const ItemList = ({ title, amenityItem }) => {
    return (
      <div className="pb-4">
        <h2 className="font-h2 text-[18px] pt-4 pb-2 text-primary dark:text-gray-300 ">
          {title}{" "}
        </h2>
        {/* List */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
          {amenityItem.map((item) => (
            <div className="gap-2 items-center" key={item}>
              <HiOutlineCheck className=" inline-block mr-3 text-light " />
              <span className="font-subHeading text-primary dark:text-gray-400 font-extralight leading-3">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="">
      {/* Amenity Services */}
      <ItemList title="Clothing and laundry" amenityItem={Clothing} />
      <ItemList title="Safety and security features" amenityItem={Safety} />
      <ItemList title="Comforts" amenityItem={Comforts} />
      <ItemList title="Layout and furnishings" amenityItem={Layout} />
      <ItemList title="Bathroom and toiletries" amenityItem={Bathroom} />
      <ItemList title="Entertainment" amenityItem={Entertainment} />
      <ItemList title="Dining, drinking, and snacking" amenityItem={Dining} />
    </div>
  );
};

const RoomPolicies = () => {
  return (
    <div>
      {/* Room Policy */}
      <div className="py-6 ">
        <p className=" text-primary dark:text-gray-300  text-lg pb-3 ">
          Check-in/out Policy:
        </p>
        <ul className=" list-square px-7 font-extralight pb-3">
          <li>Check in: from 14:00;</li>
          <li>Check out: no later than 12:00;</li>
          <li>Early check-in or late check out will be upon availability.</li>
        </ul>

        <p className=" text-primary dark:text-gray-300 text-lg pb-3 ">
          Cancellation/Amendment Policy:
        </p>
        <ul className=" list-square px-7 font-extralight pb-3">
          <li>
            If cancellation/amendment is made before 7 days prior to your
            arrival date, no fee will be charged.
          </li>
          <li>
            If cancellation/amendment is made in 7 days of your arrival date or
            no show, 100% room rate of first night and tax will be charged
          </li>
        </ul>

        <p className=" text-primary dark:text-gray-300 text-lg pb-3 ">
          Payment method:
        </p>
        <ul className=" list-square px-7 font-extralight pb-3">
          <li>By cash</li>
          <li>
            By Visa Card, Master Card, American Express plus 3% bank fee is
            applied.
          </li>
        </ul>

        <p className=" text-primary dark:text-gray-300 text-lg pb-3 ">
          Children and Extra Adult Policy:
        </p>
        <ul className=" list-square px-7 font-extralight pb-3">
          <li>
            Child under 3 years old: Free of charge and share bed with parents.
          </li>
          <li>
            Child from 5 years old and over: surcharge US$37/person/night for
            additional child or an extra bed.
          </li>
          <li>
            Adult: surcharge US$37/person/night for an additional person or an
            extra bed.
          </li>
        </ul>
      </div>
    </div>
  );
};

const useProductDetail = (productId) => {
  const { data, isLoading } = useQuery({
    queryKey: ["products", productId],
    queryFn: () => getProductsById(productId),
  });
  return { data, isLoading };
};

const RoomInformation = () => {
  const { productId } = useParams();
  const { data, isLoading } = useProductDetail(productId);

  if (isLoading) return <GlobalSpinner />;
  const { data: room } = data;

  const addToCart = () => {
    addItemToCart(1, room);
  };

  const RoomInfo = ({ icon, para }) => {
    return (
      <div className="pb-2 text-lg flex gap-2 items-center font-subHeading text-primary dark:text-light  font-extralight tracking-wide">
        {icon}
        <p className="font-subHeading text-base text-primary dark:text-gray-400 font-extralight tracking-wide">
          {para}
        </p>
      </div>
    );
  };

  const Available = [
    "Welcome drink, fresh fruit & cold towels",
    "Daily complimentary tea, coffee, water",
    "Free wifi high speed",
    "Free late check out or early check in",
    "10% discount for tour service",
    "Breakfast between the trip",
  ];
  const OfferList = () => {
    return (
      <div className="lg:grid lg:grid-cols-2">
        {Available.map((item) => (
          <div className="flex items-center leading-8" key={item}>
            <HiOutlineCheck className=" inline-block mr-3 text-light " />
            <div className="font-subHeading text-primary dark:text-gray-400 font-extralight tracking-wide">
              {item}
            </div>
          </div>
        ))}
      </div>
    );
  };

  const listOfBtn = [
    { btnName: "Room Policies", details: <RoomPolicies /> },
    { btnName: "Amenity Services", details: <AmenityServices /> },
  ];

  return (
    <div>
      {/* Container */}
      <Container fluid={true}>
        {/* Layout */}
        <div className="pt-8">
          {/* Content */}
          <div className="lg:grid md:grid-cols-4 md:gap-6 md:mb-7">
            {/* Intro */}
            <div className="md:grid md:col-span-3">
              <div>
                <h3 className="text-light text-2xl font-bold font-h2 tracking-wide">
                  {room.title}
                </h3>
                <p className=" font-subHeading text-primary dark:text-gray-300 font-extralight tracking-wide text-justify py-6 ">
                  Enjoy maximum satisfaction and comfort with the most
                  personalised service and the most exclusive products in
                  privileged areas of the hotel.
                  <br />
                  <br />
                  Each room is designed to help you experience total wellbeing
                  from high thread-count organic cotton sheets to our vitamin
                  C-rich "Happy shower".
                </p>
              </div>

              <hr />

              {/* Room Info */}
              <div className="pb-4">
                <h2 className="font-h2 text-2xl py-6 text-primary dark:text-gray-300 ">
                  Room Information
                </h2>
                {/* List info */}
                <div className="md:grid md:grid-cols-2">
                  <RoomInfo icon={<BiBed />} para={room.bed} />
                  <RoomInfo
                    icon={<FaArrowsAlt />}
                    para={`Room size: ${room.size}`}
                  />
                  <RoomInfo icon={<FaBuilding />} para="With view street" />
                  <RoomInfo icon={<FaBath />} para="Shower and Bathtub" />
                  <RoomInfo
                    icon={<FaPeopleArrows />}
                    para="2 Adults - 1 Children"
                  />
                  <RoomInfo icon={<FaSmokingBan />} para="No Smoking" />
                  <RoomInfo icon={<FaHamburger />} para="Breakfast Included" />
                  <RoomInfo icon={<BiBed />} para="ExtraBed (US$10.00)" />
                </div>
              </div>
              <hr />
              {/* Offers */}
              <div className="pb-4">
                <h2 className="font-h2 text-2xl py-6 text-primary dark:text-gray-300 ">
                  Available Offers
                </h2>
                {/* Offer List */}
                <OfferList />
              </div>
            </div>

            {/* Room Booking Form */}
            <div className="bg-beige my-8 lg:my-0 p-8 justify-center">
              <img
                src={room.imageUrl}
                alt=""
                className="mb-4 w-full h-80 md:h-68 lg:h-44 object-cover "
              />
              <div className="">
                <h3 className="font-subHeading text-primary font-extralight tracking-wide">
                  Rates Start From
                </h3>
                <p>
                  <span className=" text-xl font-bold text-light tracking-wide">
                    ${room.price}
                  </span>
                  / Night
                </p>
              </div>

              <ReservationForm
                icon={<FaCalendarAlt />}
                buttonName="Book this room"
                productId={productId}
                addToCart={addToCart}
              />
            </div>
          </div>
          {/* Button - Policies & Amenity Services */}

          <GroupsOfButton listOfBtn={listOfBtn} />

          {/* Content Details - Policies & Amenity Services*/}
        </div>
      </Container>
    </div>
  );
};

export default RoomInformation;
