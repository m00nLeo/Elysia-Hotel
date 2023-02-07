import React from "react";
import SubHero from "../../contact/SubHero";
import { FaMale } from "react-icons/fa";
import {
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
  AiOutlineCheck,
} from "react-icons/ai";
import { GoCalendar } from "react-icons/go";
import Container from "../../../components/common/Container";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getCart } from "../../../../services/cartService";
import GlobalSpinner from "../../../components/common/GlobalSpinner";

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

const today = new Date();
const nextdate = today.setDate(today.getDate() + 1);
const checkinDay = new Date(today.setDate(today.getDate() - 1)).toDateString();
const checkoutDay = new Date(nextdate).toDateString();

const Completed = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["cart"],
    queryFn: () => getCart(),
    cacheTime: 10 * 1000,
  });
  if (isLoading) return <GlobalSpinner />;

  // if (productId !== null) {
  const { data: room } = data;
  const carts = room.carts;

  let sum = 0;
  const x = carts.map((cart) => {
    sum = cart.price * cart.quantity + sum;
  });

  const customerinfo = JSON.parse(localStorage.getItem("customerinfo"));
  // console.log(customerinfo);

  return (
    <div className="font-subHeading">
      {/* Hero */}
      <SubHero title="Reservation" path="Reservation" />

      {/* Content */}
      <Container fluid={true}>
        <div className="py-20">
          <div className="flex flex-col items-center mb-20">
            <h1 className="text-2xl lg:text-5xl text-gray-600/80 dark:text-gray-200 font-normal font-h2 mb-8">
              Reservation
            </h1>
            <div className="flex justify-around w-full">
              <Process
                numb={<AiOutlineCheck />}
                para="SELECT ROOMS"
                className="bg-[#c3915f] border-[#b18c57] text-gray-200"
              />
              <Process
                numb={<AiOutlineCheck />}
                para="CUSTOMER INFORMATION"
                className="bg-[#c3915f] border-[#b18c57] text-gray-200"
              />
              <Process
                numb={3}
                para="COMPLETED"
                className="bg-[#FEF4E8] border-[#b18c57] text-[#b18c57]"
              />
            </div>
          </div>

          <div className=" lg:grid lg:grid-cols-12 md:grid-cols-12">
            <div className=" mx-auto w-full lg:col-span-8 lg:col-start-3 md:col-span-10">
              {/* thẻ customer infor */}
              <div className="  border-solid border border-gray-200  px-8 bg-[#f8f9fA]">
                <h3 className="py-5 text-2xl font-medium tracking-wide">
                  Rooms & Services
                </h3>
              </div>
              {/* input */}
              <div className="px-8 border-solid border border-gray-200 pt-5 ">
                <div className="border-b-2 mb-3 pb-3">
                  <div>
                    <div className="md:grid md:grid-cols-2 lg:grid-cols-3 gap-2 text-sm md:mb-2">
                      {/* check in */}
                      <div className="flex gap-1 mb-1 text-[#495057] dark:text-gray-400 ">
                        <GoCalendar className="w-5 h-5" />
                        <span className="font-thin ">Check-In Date:</span>
                        <strong className=" "> {checkinDay}</strong>
                      </div>
                      {/* check out */}
                      <div className="flex gap-1 mb-1 text-[#495057] dark:text-gray-400">
                        <GoCalendar className="w-5 h-5" />
                        Check-Out Date:
                        <strong className=" "> {checkoutDay}</strong>
                      </div>
                      <div>
                        <p className=" mb-1">
                          (Duration of stay:{" "}
                          <strong className="">1 Night</strong> )
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-1">
                    <div>{<FaMale className="w-5 h-5" />}</div>
                    <div className=" ">
                      <span>
                        Adults: <strong>2</strong>
                      </span>
                      <span> - </span>
                      <span>
                        Children: <strong>1</strong>
                      </span>
                    </div>
                  </div>
                </div>
                {/*  */}
                <div className="border-b-2  mb-3 pb-3">
                  {carts?.map((cart, index) => (
                    <div className="mb-2" key={index}>
                      <span className=" text-lg font-medium font-h2">
                        {cart.title}
                      </span>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-[#495057] dark:text-gray-200  font-light  ">
                          Quantity:{" "}
                          <strong className="font-semibold text-[#b18c57]">
                            {cart.quantity} Room(s)
                          </strong>
                        </span>
                        <span className="text-[#b18c57]">
                          <small>US$</small>{" "}
                          <span className="font-bold">{cart.price}.00</span>
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="border-b-2  mb-3 pb-3">
                  <div className=" flex text-lg font-medium  justify-between">
                    <span>Tax & Service Change</span>
                    <span className="text-[#b18c57] text-lg">
                      <small>US$</small> 14.00
                    </span>
                  </div>
                </div>

                <div className=" flex text-lg font-medium  justify-between pb-4">
                  <span>Total Amount:</span>
                  <span className="text-[#b18c57] text-xl">
                    <small>US$</small> {sum + 14}.00
                  </span>
                </div>
              </div>

              <div className="mt-5">
                <div className="border-solid border border-gray-200  px-8 bg-[#f8f9fA]">
                  <h3 className="py-5 text-2xl tracking-wide ">
                    Customer Information
                  </h3>
                </div>
                <div className="px-8 border-solid border border-gray-200 pt-5  mb-5 text-xs">
                  <p className="mb-2 text-base">
                    Full Name:{" "}
                    <strong>
                      {customerinfo.title} {customerinfo.name}
                    </strong>
                  </p>
                  <p className="mb-2 text-base">
                    Email: <strong>{customerinfo.email}</strong>
                  </p>
                  <p className="mb-2 text-base">
                    Phone: <strong>{customerinfo.phone}</strong>
                  </p>
                  <p className="mb-2 text-base">
                    Address: <strong>{customerinfo.address}</strong>
                  </p>
                  <p className="mb-2 text-base">
                    Country: <strong>{customerinfo.country}</strong>
                  </p>
                  <p className="mb-2 text-base">
                    Your Requests: <strong>{customerinfo.request}</strong>
                  </p>
                </div>
              </div>

              {/*  */}
              <div className="mt-5">
                <div className="  border-solid border border-gray-200  px-8 bg-[#f8f9fA]">
                  <h3 className="py-5 text-xl font-light tracking-wide">
                    Payment Method
                  </h3>
                </div>
                <div className="px-8 border-solid border border-gray-200 pt-5  mb-8">
                  <div className="flex items-center mb-4">
                    <p> Pay With Cash</p>
                  </div>
                </div>
                <div className="flex justify-between">
                  <div>
                    <Link
                      className="flex gap-2 items-center justify-center bg-[#aab0bc] text-white w-40 h-10 text-base"
                      to="/reservation/information"
                    >
                      <AiOutlineArrowLeft />
                      Back Step
                    </Link>
                  </div>
                  <div>
                    <Link
                      className="flex gap-2 items-center justify-center bg-[#b18c57] text-white w-40 h-10 text-base "
                      to="/reservation/finish"
                    >
                      Confirm & Finish
                      <AiOutlineArrowRight />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Completed;
