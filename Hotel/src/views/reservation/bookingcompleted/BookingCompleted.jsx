import React from "react";
import { AiOutlineCheck } from "react-icons/ai";
import Container from "../../../components/common/Container";
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

const BookingCompleted = () => {
  return (
    <Container fluid={true}>
      <div className="pt-40 pb-20">
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
              numb={<AiOutlineCheck />}
              para="COMPLETED"
              className="bg-[#c3915f] border-[#b18c57] text-gray-200"
            />
          </div>
        </div>

        <div className="font-thin text-center text-gray-400">
          <h2 className="font-h2 text-xl font-bold text-black dark:text-white">Reservation Successful</h2>
          <p>
            Your booking was sent successfully. We will contact you very soon!
          </p>
          <p>Thank you for your reservation!</p>
        </div>
      </div>
    </Container>
  );
};

export default BookingCompleted;
