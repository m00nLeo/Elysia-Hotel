import React from "react";
import { HiSearch } from "react-icons/hi";
import { BiCalendar } from "react-icons/bi";
import { BsFillPeopleFill, BsTrash } from "react-icons/bs";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import Container from "../../../components/common/Container";

const GuessOderDetail = () => {
  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/orders`;
    navigate(path);
  };
  return (
    <div>
      {/* Container */}
      <div className="ml-96 ">
        <Container fluid={false}>
          {/* Layout */}
          <div>
            {/* Content */}
            {/* ACCOUNT SIDE */}
            <div className="flex items-center justify-end pt-4 translate-x-20 lg:translate-x-40 mb-6">
              <HiSearch className="text-xl mr-6 text-gray-300" />
              <span className=" text-sm font-bold text-teal-600 border-l-gray-200 border-l-2 pl-6 pr-3">
                Rosie P
              </span>
              <img
                src="https://i.pinimg.com/280x280_RS/e9/1d/06/e91d062f1c0708a9b1f0f1880a3d8f19.jpg"
                alt="profilepic"
                className=" aspect-square w-10 rounded-full p-[2px] border-spacing-4 border-2 border-gray-200"
              />
            </div>

            <div className=" ">
              {/* BOOKING INFO */}
              <h2 className=" text-center text-3xl font-bold tracking-wide text-primary mb-6">
                BOOKING ROOM DETAIL
              </h2>

              {/* ------------------> Section 1 <------------------ */}

              <div className="max-w-screen-lg mx-auto px-6 py-6 border-2 border-slate-200 ">
                <div className="mb-6">
                  {/* Sub-info */}
                  <div className=" lg:grid lg:grid-cols-3 lg:mb-2">
                    <div className="flex ">
                      <BiCalendar className="text-xl text-slate-500/50 mr-2" />
                      <p className=" font-subHeading font-light tracking-wide text-slate-500/50">
                        Check-in Date:{" "}
                        <span className=" font-subHeading tracking-wide font-medium text-primary ">
                          23 Jul 2023
                        </span>
                      </p>
                    </div>

                    <div className="flex lg:justify-center">
                      <BiCalendar className="text-xl text-slate-500/50 mr-2" />
                      <p className="font-subHeading font-light tracking-wide text-slate-500/50">
                        Check-out Date:{" "}
                        <span className=" font-subHeading tracking-wide font-medium text-primary ">
                          25 Jul 2023
                        </span>
                      </p>
                    </div>

                    <div className="flex lg:justify-end">
                      <p className="font-subHeading font-light tracking-wide text-slate-500/50">
                        Duration of stay:{" "}
                        <span className=" font-subHeading tracking-wide font-medium text-primary ">
                          2 Nights
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="flex">
                    <BsFillPeopleFill className="text-xl text-slate-500/50 mr-2" />
                    <p className=" font-subHeading font-light tracking-wide text-slate-500/50 pr-4">
                      Adult:{" "}
                      <span className=" font-subHeading tracking-wide font-medium text-primary ">
                        1
                      </span>
                    </p>

                    <p className=" font-subHeading font-light tracking-wide text-slate-500/50">
                      Children:{" "}
                      <span className=" font-subHeading tracking-wide font-medium text-primary ">
                        2
                      </span>
                    </p>
                  </div>
                </div>
                <hr />
                {/* Purchase order */}
                <div className="mt-6 mb-4">
                  {/* Room price */}
                  <div className="mb-3">
                    <p className=" font-subHeading text-gray-600/70 text-xl mb-1">
                      Executive Deluxe Double Room
                    </p>
                    <div className="flex items-center justify-between ">
                      <p className=" font-subHeading font-light tracking-wide text-slate-500/50 pr-4">
                        Quantity:{" "}
                        <span className=" font-subHeading tracking-wide font-medium text-gray-600/70 ">
                          1 Room
                        </span>
                      </p>
                      <p className=" text-base font-light tracking-wide text-yellow-700/70 pr-4">
                        ${" "}
                        <span className="font-bold text-lg  tracking-wide text-yellow-600 pr-4">
                          69.00
                        </span>
                      </p>
                    </div>

                    <div className="flex items-center justify-between ">
                      <p className=" font-subHeading font-light tracking-wide text-slate-500/50 pr-4">
                        Extra Beds:{" "}
                        <span className=" font-subHeading tracking-wide font-medium text-gray-600/70 ">
                          1 Bed
                        </span>
                      </p>

                      <p className=" text-base font-light tracking-wide text-yellow-700/70 pr-4">
                        ${" "}
                        <span className="font-bold text-lg  tracking-wide text-yellow-600 pr-4">
                          10.00
                        </span>
                      </p>
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className=" font-subHeading text-gray-600/70 text-xl mb-1">
                      Imperial Suite with Balcony View
                    </p>
                    <div className="flex items-center justify-between">
                      <p className=" font-subHeading font-light tracking-wide text-slate-500/50 pr-4">
                        Quantity:{" "}
                        <span className=" font-subHeading tracking-wide font-medium text-gray-600/70 ">
                          1 Room
                        </span>
                      </p>
                      <p className=" text-base font-light tracking-wide text-yellow-700/70 pr-4">
                        ${" "}
                        <span className="font-bold text-lg  tracking-wide text-yellow-600 pr-4">
                          69.00
                        </span>
                      </p>
                    </div>
                  </div>

                  <hr />
                  <div className="flex justify-between items-center mt-3 mb-3">
                    {/* Airport Transfer Price */}
                    <p className=" font-subHeading text-gray-600/70 text-xl mb-1">
                      Airport Transfer Service
                    </p>

                    <p className=" text-base font-light tracking-wide text-yellow-700/70 pr-4">
                      ${" "}
                      <span className="font-bold text-lg  tracking-wide text-yellow-600 pr-4">
                        15.00
                      </span>
                    </p>
                  </div>
                  <hr />

                  <div className="flex justify-between items-center mt-3 mb-3">
                    {/* Tax*/}
                    <p className=" font-subHeading text-gray-600/70 text-xl mb-1">
                      Tax & Service Charge
                    </p>

                    <p className=" text-base font-light tracking-wide text-yellow-700/70 pr-4">
                      ${" "}
                      <span className="font-bold text-lg  tracking-wide text-yellow-600 pr-4">
                        16.90
                      </span>
                    </p>
                  </div>
                  <hr />
                  <div className="flex justify-between items-center mt-3 mb-6">
                    {/* TOTAL*/}
                    <p className=" font-subHeading tracking-wider text-yellow-600 font-semibold hover:text-gray-600/70 text-2xl ">
                      TOTAL AMOUNT
                    </p>

                    <p className=" text-xl font-light tracking-wide text-yellow-700/70 pr-4">
                      ${" "}
                      <span className="font-bold text-2xl  tracking-wide text-yellow-600 pr-4">
                        165.99
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              {/* ------------------> Section 2 <------------------ */}

              <div className="mt-4">
                <div className="max-w-screen-lg mx-auto border-2 border-slate-200 ">
                  {/* Customer info */}
                  <div className=" bg-slate-200/50 px-6 py-4">
                    <p className=" font-subHeading text-gray-600/70 font-medium text-xl mb-1">
                      Customer Information
                    </p>
                  </div>
                  <div className="p-6">
                    {/* Details */}
                    <p className=" font-subHeading font-light tracking-wide text-slate-500/50 mb-2">
                      Fullname:{" "}
                      <span className="pl-2 font-subHeading tracking-wide font-medium text-gray-600/70 ">
                        Mr. Adam Levine
                      </span>
                    </p>
                    <p className=" font-subHeading font-light tracking-wide text-slate-500/50 mb-2">
                      Email:{" "}
                      <span className=" pl-2 font-subHeading tracking-wide font-medium text-gray-600/70 ">
                        adamlvn@splash.com
                      </span>
                    </p>
                    <p className=" font-subHeading font-light tracking-wide text-slate-500/50 mb-2">
                      Phone:{" "}
                      <span className="pl-2 font-subHeading tracking-wide font-medium text-gray-600/70 ">
                        0267555143
                      </span>
                    </p>
                    <p className=" font-subHeading font-light tracking-wide text-slate-500/50 mb-2">
                      Address:{" "}
                      <span className="pl-2 font-subHeading tracking-wide font-medium text-gray-600/70 ">
                        No 402, Halway St., Millenium Q., L.A
                      </span>
                    </p>
                    <p className=" font-subHeading font-light tracking-wide text-slate-500/50 mb-2">
                      Country:{" "}
                      <span className="pl-2 font-subHeading tracking-wide font-medium text-gray-600/70 ">
                        U.S
                      </span>
                    </p>
                    <p className=" font-subHeading font-light tracking-wide text-slate-500/50 mb-2">
                      Request:{" "}
                      <span className="pl-2 font-subHeading tracking-wide font-medium text-gray-600/70 ">
                        I am in need of an ADA accessible room. I may need
                        special assistance from the hotel in the event of an
                        emergency.
                      </span>
                    </p>
                  </div>
                </div>

                <div className="max-w-screen-lg mx-auto border-2 border-slate-200 my-6">
                  {/* Payment Method */}
                  <div className=" bg-slate-200/50 px-6 py-4">
                    <p className=" font-subHeading text-gray-600/70 font-medium text-xl mb-1">
                      Payment Method
                    </p>
                  </div>
                  <p className=" px-6 py-6 font-subHeading font-light tracking-wide text-slate-500 mb-2">
                    Pay with Cash
                  </p>
                </div>
              </div>

              <div className="max-w-screen-lg mx-auto flex justify-between mb-6 ">
                {/* Footer Btn */}
                <div
                  className="flex gap-2 items-center hover:cursor-pointer group"
                  onClick={routeChange}
                >
                  <AiOutlineArrowLeft className="text-xl text-slate-500/50 group-hover:text-amber-600/90" />
                  <p className="text-slate-500 group-hover:text-amber-600/90">
                    Back to front
                  </p>
                </div>
                <BsTrash className="text-2xl text-slate-500/50" />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default GuessOderDetail;
