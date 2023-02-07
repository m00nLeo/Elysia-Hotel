import React, { useRef, useState } from "react";
import Container from "../../components/common/Container";
import { BsSearch, BsCalendarEvent, BsArrowRightShort } from "react-icons/bs";
import { BiBed } from "react-icons/bi";
import {
  FaArrowsAlt,
  FaPeopleArrows,
  FaSmokingBan,
  FaHamburger,
  FaCheck,
} from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import GlobalSpinner from "../../components/common/GlobalSpinner";
import {
  getCart,
  removeCartItem,
  updateCartItem,
} from "../../../services/cartService";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const today = new Date();
const arrday = today.toISOString().split("T")[0];
const nextdate = today.setDate(today.getDate() + 1);
const leaveday = new Date(nextdate).toISOString().split("T")[0];
const checkinDay = new Date(today.setDate(today.getDate() - 1)).toDateString();
const checkoutDay = new Date(nextdate).toDateString();

const Process = ({ numb, para, className }) => {
  return (
    <div className="flex flex-col items-center ">
      <div
        className={`border rounded-full font-subHeading font-semibold w-12 aspect-square leading-tight flex justify-center items-center mb-4 ${className}`}
      >
        {numb}
      </div>
      <p className="text-gray-500/50 dark:text-gray-300/75 text-sm font-semibold">
        {para}
      </p>
    </div>
  );
};

const Filter = () => {
  const [date, setDate] = useState("");
  const dateInputRef = useRef(null);

  return (
    <>
      <div className="lg:flex lg:gap-3 mb-8 text-sm">
        <div className="grid grid-cols-2 gap-3 mb-2 lg:w-1/2 lg:mb-0 ">
          <div className="flex flex-col w-full">
            <label
              htmlFor=""
              className="text-base lg:text-lg text-gray-500/90 font-semibold mb-1"
            >
              Check-in Date
            </label>
            <input
              type="date"
              onChange={(e) => {
                setDate(e.target.value);
              }}
              ref={dateInputRef}
              className="border border-[#b18c57] p-2 outline-none h-12 "
              defaultValue={arrday}
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor=""
              className="text-base lg:text-lg text-gray-500/90 font-semibold mb-1"
            >
              Check-out Date
            </label>
            <input
              type="date"
              onChange={(e) => {
                setDate(e.target.value);
              }}
              ref={dateInputRef}
              className="border border-[#b18c57] p-2 outline-none h-12"
              defaultValue={leaveday}
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3 lg:w-1/2 md:grid-cols-3 items-end">
          <div className="flex flex-col">
            <label
              htmlFor="adults"
              className="text-base lg:text-lg text-gray-500/90 font-semibold mb-1"
            >
              Adults
            </label>
            <select
              name=""
              id="adults"
              defaultValue="adults"
              className="border border-[#b18c57] p-2 outline-none h-12"
            >
              <option value="">Adults</option>
              <option value="adults">2 pers</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="childerns"
              className="text-base lg:text-lg text-gray-500/90 font-semibold mb-1"
            >
              Childerns
            </label>
            <select
              name=""
              id="childern"
              defaultValue="childern"
              className="border border-[#b18c57] p-2 outline-none h-12"
            >
              <option value="">Childerns</option>
              <option value="childern">1 per</option>
            </select>
          </div>

          <button className="flex items-center justify-center gap-3 bg-[#b18c57] text-white text-base py-2 px-4 h-12 col-span-2 md:col-span-1">
            <BsSearch /> Check room
          </button>
        </div>
      </div>
    </>
  );
};

const RoomInfo = ({ icon, para }) => {
  return (
    <div className="pb-2 text-lg flex gap-2 items-center md:text-sm lg:tetx-lg font-subHeading font-thin text-slate-700 dark:text-[#b18c57] tracking-wide">
      {icon}
      <p className="font-subHeading text-base md:text-sm lg:text-base font-thin text-slate-500">
        {para}
      </p>
    </div>
  );
};

const SelectRoom = ({
  title,
  imageUrl,
  price,
  size,
  bed,
  id,
  roomQuantity,
}) => {
  const [quantity, setQuantity] = useState(roomQuantity);

  const queryClient = useQueryClient();

  updateCartItem(id, quantity);

  const deleteItem = useMutation({
    mutationFn: (id) => removeCartItem(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
  });
  return (
    <div className="relative overflow-hidden mb-4 bg-[#FEF4E8]/75 border border-[#977547] dark:border-[#b18c57] text-slate-800">
      <div className="w-20 aspect-square -top-10 rounded bg-[#b18c57] absolute -right-10 rotate-45"></div>
      <div className="absolute right-2 top-3 text-gray-100/95 font-light">
        <FaCheck />
      </div>
      <div className=" p-4 ">
        <h2 className="font-h2 text-xl mb-4 font-semibold">{title}</h2>

        <div className="">
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            {/* Image */}
            <div className="flex flex-col items-center">
              <img
                className="w-full mb-2 h-80 md:h-40 lg:h-36 object-cover"
                src={imageUrl}
                alt=""
              />
            </div>

            {/* Information */}
            <div className="md:col-span-2">
              <div className="mb-4">
                <h4 className="font-h2 text-2xl mb-2 md:text-lg lg:text-2xl">
                  Price includes
                </h4>
                <ul className="md:grid md:grid-cols-2 text-base md:text-sm lg:text-base">
                  <li className="font-thin text-slate-500">
                    Welcome drink, fresh fruit
                  </li>
                  <li className="font-thin text-slate-500">
                    Free Wifi High-Speed
                  </li>
                  <li className="font-thin text-slate-500">
                    Free Cancellation
                  </li>
                  <li className="font-thin text-slate-500">
                    10% discount for tour service
                  </li>
                </ul>
              </div>
              <hr />
              <div className="pb-4">
                <h2 className="font-h2 text-2xl my-2 md:text-lg lg:text-2xl">
                  Featured Amenities
                </h2>
                <div className="md:grid md:grid-cols-2 ">
                  <RoomInfo icon={<BiBed />} para={bed} />
                  <RoomInfo icon={<FaArrowsAlt />} para={`Room size ${size}`} />
                  <RoomInfo
                    icon={<FaPeopleArrows />}
                    para="2 Adults - 1 Children"
                  />
                  <RoomInfo icon={<FaSmokingBan />} para="No Smoking" />
                  <RoomInfo icon={<FaHamburger />} para="Breakfast Included" />
                  <RoomInfo icon={<BiBed />} para="ExtraBed (US$10.00)" />
                </div>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-3 md:col-span-3 lg:col-span-1 lg:grid-cols-1 items-center">
              {/* Price */}
              <div className="flex flex-col items-center">
                <h3 className="text-[#b18c57] font-h2 text-3xl font-bold mb-2">
                  ${price}
                </h3>
                <p className="font-thin text-slate-700 dark:text-white">
                  1 room/night
                </p>
              </div>

              {/* Quantity & Remove */}
              <div className="grid grid-cols-2 lg:grid-cols-1 gap-8 lg:gap-2 md:col-span-2">
                {/* Quantity */}
                <select
                  name=""
                  id="quantity"
                  defaultValue={quantity}
                  className="border p-2 outline-none h-10 bg-white text-black"
                  onChange={(e) => {
                    console.log(e);
                    setQuantity(e.target.selectedIndex);
                  }}
                >
                  <option value="0">Quantity</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
                {/* Remove */}
                <button
                  className="bg-slate-400 h-10 px-4 hover:bg-slate-500/75"
                  onClick={() => deleteItem.mutate(id)}
                >
                  X Remove
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Layout = ({ selected, detailTitle, detailPrice, detailQuantity }) => {
  let sum = 0;
  for (let i = 0; i < detailPrice?.length; i++) {
    sum = detailQuantity[i] * detailPrice[i] + sum;
  }

  return (
    <Container fluid={true}>
      <div className="pt-20">
        {/* Layout */}
        <div className="">
          {/* Content */}
          <div className="flex flex-col items-center mb-20">
            <h1 className="text-2xl lg:text-5xl text-gray-600/80 dark:text-gray-200 font-normal font-h2 mb-8">
              Reservation
            </h1>
            <div className="flex justify-around w-full">
              <Process
                numb={1}
                para="SELECT ROOMS"
                className="bg-[#FEF4E8] border-[#b18c57] text-[#b18c57]"
              />
              <Process numb={2} para="CUSTOMER INFORMATION" />
              <Process numb={3} para="COMPLETED" />
            </div>
          </div>
          <div className="grid lg:grid-cols-4 gap-x-4">
            <div className="flex flex-col lg:col-span-3 mb-4">
              <Filter />
              {selected}
            </div>
            <div className=" border border-gray-300/95 h-fit lg:mt-8 mb-8">
              <div className="bg-gray-200 dark:bg-gray-400 p-4 border-b border-gray-300/95">
                <h3 className="text-lg lg:text-xl text-black font-normal">
                  Reservation detail
                </h3>
              </div>
              <div className="p-4 text-sm font-thin">
                {/* Filter Detail */}
                <div className="mb-4">
                  <p className="flex gap-2 mb-2 items-center">
                    <BsCalendarEvent /> Check-In Date:{" "}
                    <strong className=" dark:text-gray-200 ">
                      {" "}
                      {checkinDay}
                    </strong>
                  </p>
                  <p className="flex gap-2 mb-2 items-center">
                    <BsCalendarEvent /> Check-Out Date:
                    <strong className=" dark:text-gray-200 ">
                      {" "}
                      {checkoutDay}
                    </strong>
                  </p>
                  <p className=" mb-2">
                    (Duration of stay:{" "}
                    <strong className=" dark:text-gray-200 "> 1 Night</strong>)
                  </p>
                  <p className="flex gap-2 mb-2 items-center">
                    <FaPeopleArrows /> Adults:{" "}
                    <strong className=" dark:text-gray-200 "> 2 </strong> -
                    Children:
                    <strong className=" dark:text-gray-200 ">1</strong>
                  </p>
                </div>
                <hr />
                {/* Room Booking Detail */}
                {detailTitle?.map((title, index) => (
                  <div className="my-4" key={index}>
                    <h3 className="text-base lg:text-lg text-black dark:text-gray-300  font-normal">
                      {title}{" "}
                    </h3>
                    <div className="flex justify-between items-center">
                      <p className="text-gray-500/75  dark:text-gray-300/75">
                        Quantity:{" "}
                        <strong className="text-[#b18c57]/75 font-bold">
                          {detailQuantity[index]} Room
                        </strong>
                      </p>
                      <p className="text-[#b18c57] font-bold">
                        ${detailQuantity[index] * detailPrice[index]}.00
                      </p>
                    </div>
                  </div>
                ))}

                <hr />
                {/* Tax & Service Change */}
                <div className="my-4">
                  <div className="flex justify-between items-center">
                    <h3 className="text-base lg:text-lg text-black dark:text-gray-300  font-normal">
                      Tax & Service Change
                    </h3>
                    <p className="text-[#b18c57] font-bold">$14.00</p>
                  </div>
                </div>
                <hr />
                {/* Total Amount */}
                <div className="mt-4 mb-8">
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl lg:text-2xl text-black dark:text-gray-300 font-normal">
                      Total Amount:
                    </h3>
                    <p className="text-[#b18c57] font-bold">${sum + 14} .00</p>
                  </div>
                </div>

                {/* Next step */}
                <Link
                  to="/reservation/information"
                  className="flex gap-2 items-center justify-center bg-[#b18c57] text-white w-40 h-10 text-base"
                >
                  Next Step <BsArrowRightShort />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

const Select = () => {
  const location = useLocation();
  // const productId = location.state;

  const { data, isLoading } = useQuery({
    queryKey: ["cart"],
    queryFn: () => getCart(),
    cacheTime: 10 * 1000,
  });
  if (isLoading) return <GlobalSpinner />;

  // if (productId !== null) {
  const { data: room } = data;
  const carts = room.carts;
  return (
    <Layout
      selected={carts.map((room) => (
        <SelectRoom
          key={room?.id}
          title={room?.title}
          bed={room?.bed}
          imageUrl={room?.imageUrl}
          price={room?.price}
          size={room?.size}
          roomQuantity={room?.quantity}
          id={room?.id}
        />
      ))}
      detailTitle={carts.map((room) => room?.title)}
      detailQuantity={carts.map((room) => room?.quantity)}
      detailPrice={carts.map((room) => room?.price)}
    />
  );
  // } else {
  //   return <Layout selected={<></>} />;
  // }
};

export default Select;
