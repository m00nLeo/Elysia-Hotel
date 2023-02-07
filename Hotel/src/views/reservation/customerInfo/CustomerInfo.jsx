import React, { useState } from "react";
import {
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
  AiOutlineCheck,
} from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import Container from "../../../components/common/Container";
import SubHero from "../../contact/SubHero";
import { useForm } from "react-hook-form";
import { customerSchema } from "../../../../validation/customerSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import FormRow from "../../../components/common/FormRow";
import FormRowError from "../../../components/common/FormRowError";

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

const CustomerInfo = () => {
  const [req, setReq] = useState("");
  const navigate = useNavigate();

  const changeInput = (e) => {
    console.log(e.target.value);
  };
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(customerSchema) });

  const onSubmit = (data) => {
    console.log(data);
    localStorage.setItem("customerinfo", JSON.stringify(data));
    navigate(`/reservation/complete`);
  };
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
                numb={2}
                para="CUSTOMER INFORMATION"
                className="bg-[#FEF4E8] border-[#b18c57] text-[#b18c57]"
              />
              <Process numb={3} para="COMPLETED" />
            </div>
          </div>

          <form id="reservationForm" onSubmit={handleSubmit(onSubmit)}>
            <div className=" grid lg:grid-cols-12">
              <div className=" mx-auto w-full lg:col-span-8 lg:col-start-3 ">
                {/* thẻ customer infor */}
                <div className="  border-solid border border-gray-200  px-8 bg-[#f8f9fA] dark:bg-slate-500/75 dark:text-white">
                  <h3 className="py-5 text-xl font-light ">
                    Customer Information
                  </h3>
                </div>
                {/* input */}
                <div className="px-8 border-solid border border-gray-200 pt-5 font-sans">
                  <div>
                    <div className="md:grid md:gap-6 mb-6 md:grid-cols-2">
                      {/* title */}
                      <div className="mb-2">
                        <FormRow label="Title">
                          <select
                            defaultValue="option"
                            onChange={changeInput}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            {...register("title")}
                          >
                            <option disabled value="option">
                              Select
                            </option>
                            <option value="Mr">Mr</option>
                            <option value="Mss">Mss</option>
                            <option value="Mrs">Mrs</option>
                            <option value="Dr">Dr</option>
                          </select>
                          <FormRowError error={errors.title} />
                        </FormRow>
                      </div>
                      {/*  */}
                      <div className="mb-2">
                        <FormRow label="Name" className="col-span-full">
                          <input
                            type="text"
                            placeholder="Full Name"
                            className="input input-bordered w-full text-sm dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            {...register("name")}
                          />
                          <FormRowError error={errors.name} />
                        </FormRow>
                      </div>

                      {/*  */}
                      <div className="mb-2">
                        <FormRow label="Email" className="col-span-full">
                          <input
                            type="email"
                            placeholder="Email"
                            className="input input-bordered w-full text-sm dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            {...register("email")}
                          />
                          <FormRowError error={errors.email} />
                        </FormRow>
                      </div>
                      {/*  */}
                      <div className="mb-2">
                        <FormRow label="Phone" className="col-span-full">
                          <input
                            type="tel"
                            placeholder="Phone number"
                            className="input input-bordered w-full text-sm dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            {...register("phone")}
                          />
                          <FormRowError error={errors.phone} />
                        </FormRow>
                      </div>
                      {/*  */}
                      <div className="mb-2">
                        <FormRow label="Address" className="col-span-full">
                          <input
                            type="text"
                            placeholder="Address"
                            className="input input-bordered w-full text-sm dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            {...register("address")}
                          />
                          <FormRowError error={errors.address} />
                        </FormRow>
                      </div>
                      {/*  */}
                      <div className="mb-2">
                        <FormRow label="Country">
                          <select
                            defaultValue="option"
                            onChange={changeInput}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            {...register("country")}
                          >
                            <option disabled value="option">
                              Select
                            </option>
                            <option value="AG">Afganistan</option>
                            <option value="AU">Australia</option>
                            <option value="VN">Viet Nam</option>
                            <option value="CN">China</option>
                            <option value="IN">India</option>
                            <option value="AN">Angola</option>
                            <option value="US">United States</option>
                            <option value="CA">Canada</option>
                            <option value="FR">France</option>
                            <option value="DE">Germany</option>
                          </select>
                          <FormRowError error={errors.country} />
                        </FormRow>
                      </div>
                    </div>
                    <div className="mb-4">
                      <FormRow label="Request" className="col-span-full">
                        <textarea
                          type="text"
                          id="request"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full h-52 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          {...register("request")}
                        />
                        <FormRowError error={errors.request} />
                      </FormRow>
                    </div>
                  </div>
                </div>
                <div className="mt-5">
                  <div className="  border-solid border border-gray-200  px-8 bg-[#f8f9fA]  dark:bg-slate-500/75 dark:text-white">
                    <h3 className="py-5 text-xl font-light ">Payment Method</h3>
                  </div>
                  <div className="px-8 border-solid border border-gray-200 pt-5 font-serif mb-5">
                    <div className="flex items-center mb-4">
                      <input
                        id="default-radio-1"
                        type="radio"
                        value="cash"
                        name="default-radio"
                        className="w-4 h-4 text-[#b18c57]  bg-[#b18c57] "
                        checked
                      />
                      <label
                        htmlFor="default-radio-1"
                        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Pay With Cash
                      </label>
                    </div>
                    <div className="flex items-center mb-5">
                      <input
                        id="default-radio-2"
                        type="radio"
                        value="online"
                        name="default-radio"
                        className="w-4 h-4 bg-[#b18c57]  "
                      />
                      <label
                        htmlFor="default-radio-2"
                        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Pay Online With Visa Card, Master Card
                      </label>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <div>
                      <Link
                        className="flex gap-2 items-center justify-center bg-[#aab0bc] text-white w-40 h-10 text-base"
                        to="/reservation"
                      >
                        <AiOutlineArrowLeft />
                        Back Step
                      </Link>
                    </div>
                    <div>
                      <button
                        value="next"
                        type="submit"
                        className="flex gap-2 items-center justify-center bg-[#b18c57] text-white w-40 h-10 text-base"
                      >
                        Next Step <AiOutlineArrowRight />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default CustomerInfo;
