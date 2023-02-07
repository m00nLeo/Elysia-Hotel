import React from "react";
import { Link } from "react-router-dom";
import Container from "../../components/common/Container";

const TelephoneBooking = () => {
  const today = new Date();
  const arrday = today.toISOString().split("T")[0];
  const numberOfDaysToAdd = 1;
  const date = today.setDate(today.getDate() + numberOfDaysToAdd);
  const leaveday = new Date(date).toISOString().split("T")[0];

  return (
    <div className="bg-[url(./assets/imgs/bg1-modified.jpeg)] opacity-95 bg-cover bg-center h-full py-20">
      <Container fluid={true}>
        <div className="">
          <div className="grid md:grid-cols-2 gap-60">
            <div className="text-white px-3  mb-8">
              <h3 className="text-3xl w-full tracking-wide mb-3">
                Telephone Booking
              </h3>
              <p className="text-md tracking-widest opacity-70 font-light mb-5">
                Meis iriure id eos, an his wisi labitur. Decore expetenda sed
                at. Alienum inimicus torquatos mea ad principes.
              </p>
              <div>
                <div className="flex gap-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-7 h-7 text-[#b18c57]"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                    />
                  </svg>
                  <div className="mb-3">
                    <p
                      className="text-lg font-light pb-2
            "
                    >
                      Phone
                    </p>
                    <p className="text-xl font-light">+33 (0) 1 89 78 67 56</p>
                  </div>
                </div>
                <div className="flex gap-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-7 h-7 text-[#b18c57]"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>

                  <div>
                    <p className="text-lg font-light pb-2">Email</p>
                    <p className="text-xl font-light">Booking@example.com</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-black p-10 bg-[#f8f5f0]">
              <h3 className="text-2xl mb-3">Reservation</h3>
              <div className="mb-5 w-full">
                <div className="grid md:grid-cols-2 mb-8 w-full gap-4">
                  {/* calender start */}
                  <div className="">
                    <input
                      className=" inline-block box-border w-full  focus:border-[#b18c57] bg-white text-primary font-extralight border border-gray-200 rounded py-3 px-4 pb-2 leading-tight focus:outline-none focus:bg-gray-200"
                      id="checkInDate"
                      type="date"
                      name="checkInDate"
                      placeholder="Choose a day"
                      defaultValue={arrday}
                    />
                  </div>
                  {/* calender end */}
                  <div className="">
                    <input
                      className="appearance-none block w-full  focus:border-[#b18c57] bg-white text-primary font-extralight border border-gray-200 rounded py-3 px-4 pb-2 leading-tight focus:outline-none focus:bg-gray-200"
                      id="checkOutDate"
                      type="date"
                      name="checkOutDate"
                      placeholder="Choose a day"
                      defaultValue={leaveday}
                    />
                  </div>

                  <select
                    className="bg-gray-50 text-sm border focus:border-[#b18c57] p-2.5 font-light"
                    defaultValue="default"
                  >
                    <option value="default">Adults</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>

                  <select
                    className="bg-gray-50 text-sm border focus:border-[#b18c57] p-2.5 font-light"
                    defaultValue="default"
                  >
                    <option value="default">Childrens</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>

                {/* <div className=" text-center bg-[#b18c57] mb-3"> */}
                <Link
                  to="/reservation"
                  className="flex justify-center items-center py-2 font-light bg-[#b18c57] text-base lg:text-lg text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 pr-2 inline"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                    />
                  </svg>
                  <span>Check Rooms</span>
                </Link>
                {/* </div> */}
              </div>
              <div className="ml-3">
                <ul>
                  <li className="mb-3  text-[#b18c57] text-sm list-disc font-light">
                    <a href="">Special Offers</a>
                  </li>
                  <li className="mb-3  text-[#b18c57] text-sm list-disc font-light">
                    <a href=""></a>Best Rate Guarantee
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default TelephoneBooking;
