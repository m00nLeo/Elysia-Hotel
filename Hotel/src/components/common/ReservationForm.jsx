import React from "react";
import { BiChevronDown } from "react-icons/bi";
import { Link } from "react-router-dom";

const ReservationForm = ({ icon, buttonName, productId, addToCart }) => {
  const today = new Date();
  const arrday = today.toISOString().split("T")[0];
  const numberOfDaysToAdd = 1;
  const date = today.setDate(today.getDate() + numberOfDaysToAdd);
  const leaveday = new Date(date).toISOString().split("T")[0]; // yyyy-mm-dd

  return (
    <div>
      <form className=" max-w-screen-xl  ">
        <div className="flex flex-wrap  ">
          {/* Checkin- Checkout */}
          <div className="w-full pt-4 pb-3 ">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-first-name"
            >
              Check-in Date
            </label>

            <input
              className=" inline-block box-border w-full bg-white text-primary font-extralight border border-gray-200 rounded py-3 px-4 pb-2 leading-tight focus:outline-none focus:bg-gray-200 focus:border-[#b18c57]"
              id="checkInDate"
              type="date"
              name="checkInDate"
              placeholder="Choose a day"
              defaultValue={arrday}
            />
          </div>

          <div className="w-full pt-4 pb-8 ">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-first-name"
            >
              Check-out Date
            </label>
            <input
              className="appearance-none block w-full bg-white text-primary font-extralight border border-gray-200 rounded py-3 px-4 pb-2 leading-tight focus:outline-none focus:bg-gray-200 focus:border-[#b18c57]"
              id="checkOutDate"
              type="date"
              name="checkOutDate"
              placeholder="Choose a day"
              defaultValue={leaveday}
            />
          </div>
        </div>

        {/* Options */}
        <div className="md:flex w-full justify-between gap-4">
          {/* Adult */}
          <div className="inline-block relative w-full pb-3">
            <select
              defaultValue="Adults"
              className=" block appearance-none w-full bg-white text-primary font-extralight border border-gray-200 py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-200 pr-8 rounded shadow focus:shadow-outline focus:border-[#b18c57]"
            >
              <option>Adults</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
            <div className="pointer-events-none absolute inset-y-3 right-0 flex items-start px-2 text-gray-700">
              <BiChevronDown className="text-2xl" />
            </div>
          </div>

          {/* Children */}
          <div className="inline-block relative w-full pb-5">
            <select
              defaultValue="Children"
              className=" block appearance-none w-full bg-white text-primary font-extralight border border-gray-200 py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-200 pr-8 rounded shadow focus:shadow-outline focus:border-[#b18c57]"
            >
              <option>Children</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
            <div className="pointer-events-none absolute inset-y-3 right-0 flex items-start px-2 text-gray-700">
              <BiChevronDown className="text-2xl" />
            </div>
          </div>
        </div>

        {/* Submit button */}
        <div className="">
          <Link
            to="/reservation"
            className=" w-full justify-center"
            state={productId}
            onClick={addToCart}
          >
            <div className="flex items-center bg-light  mx-auto py-3 mb-3  gap-2 font-extralight  border-t-orange-100 rounded-sm text-white justify-center">
              {icon}
              {buttonName}
            </div>
          </Link>

          <div className="px-4 py-2">
            <ul className=" text-light font-extralight list-disc tracking-wide">
              <li>Special Offers</li>
              <li>Best Rate Guarantee</li>
            </ul>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ReservationForm;
