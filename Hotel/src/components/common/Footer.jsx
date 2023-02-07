import React from "react";
import { GoLocation } from "react-icons/go";
import { FaTiktok } from "react-icons/fa";
import {
  BsTwitter,
  BsInstagram,
  BsFacebook,
  BsTelephone,
} from "react-icons/bs";
import {
  AiOutlineYoutube,
  AiOutlineArrowRight,
  AiOutlineMail,
} from "react-icons/ai";
import { BiCopyright, BiWorld } from "react-icons/bi";
import { Link } from "react-router-dom";
import Container from "./Container";

const QuickLinkList = ({ title, id }) => {
  return (
    <li className="mb-3 w-40">
      <Link className="hover:text-gray-400" to={id}>
        {title}
      </Link>
    </li>
  );
};

const Footer = () => {
  return (
    <div className="bg-[#222222] pt-16 px-2 text-white">
      <Container fluid={true}>
        {/* Layout */}
        <div className=" grid md:grid-cols-2 lg:grid-cols-4 gap-8 justify-between mb-8 ">
          {/* Short about */}
          <div className="">
            <img
              className="w-full h-16 mb-4"
              src="https://360.agencewebcom.com/web/uploads/api/site-413/42a9f5a2934936263e0ccf2d2799f5d2124cc206.svg"
              alt=""
            />

            <p className="mb-4 text-base text-gray-500">
              Immerse yourself in the abstract art and romantic feelings of
              Paris right in the heart of Saigon
            </p>

            <div className="flex items-center  gap-3 ">
              <a
                href=""
                className="text-base hover:text-gray-400 flex items-center gap-2"
              >
                Read More
                <span>
                  <AiOutlineArrowRight />
                </span>
              </a>
            </div>
          </div>

          {/* Contact info */}
          <div className="pt-4">
            <h1 className=" text-3xl mb-7">Contact Info</h1>
            <ul>
              <li className="items-center mb-4 text-gray-500 flex gap-2">
                <span className="">
                  <GoLocation />
                </span>
                <p className="text-base">
                  202 Hoang Van Thu, Ward 9, District 1, Ho Chi Minh City.
                </p>
              </li>
              <li className="items-center mb-4 text-md text-gray-500 flex gap-2 ">
                <BsTelephone />
                +81(0) 968150014
              </li>
              <li className=" items-center gap-3  mb-4 flex">
                <AiOutlineMail />
                <a
                  className="hover:text-gray-400"
                  href="mailto:customer.helpdesk@elysia.com"
                >
                  customer.helpdesk@elysia.com
                </a>
              </li>
              <li className=" items-center gap-3  flex">
                <BiWorld />
                <a
                  className="hover:text-gray-400"
                  href="http://www.theelysiahotel.com"
                >
                  www.theelysiahotel.com
                </a>
              </li>
            </ul>
          </div>

          {/* Quick links */}
          <div className="pt-5">
            <h1 className="mb-4 text-3xl">Quick Links</h1>
            <div className="flex justify-between pt-2">
              <ul className="">
                <QuickLinkList title="Elysia's Story" />
                <QuickLinkList title="About" />
                <QuickLinkList title="Rooms & Suites" />
              </ul>
              <ul>
                <QuickLinkList title="Reservation" />
                <QuickLinkList title="Contact Us" />
              </ul>
            </div>
          </div>

          {/* Subscribe */}
          <div className="lg:flex gap-4 flex-col md:pt-4">
            <div className="mb-4">
              <h1 className="mb-4 text-3xl">Subscribe</h1>
              <div className="flex pt-4">
                <input
                  className="outline-none bg-white py-2 px-4 w-full text-black"
                  text="input"
                  placeholder="Your Email"
                />
                <button className="bg-[#B18C57]  py-2 px-4 " value="submit">
                  Submit
                </button>
              </div>
            </div>
            <div className="text-gray-500 ">
              <h1 className="mb-4 text-2xl ">Connect social</h1>
              <div className="flex items-center font-semibold gap-4 text-base">
                <a className="hover:text-gray-100" target="_blank" href="http://www.facebook.com">
                  <BsFacebook />
                </a>
                <a className="hover:text-gray-100" target="_blank" href="http://www.twitter.com">
                  <BsTwitter />
                </a>
                <a className="hover:text-gray-100" target="_blank" href="http://www.instagram.com">
                  <BsInstagram />
                </a>
                <a className="hover:text-gray-100" target="_blank" href="http://www.youtube.com">
                  <AiOutlineYoutube />
                </a>
                <a className="hover:text-gray-100" target="_blank" href="http://www.tiktok.com">
                  <FaTiktok />
                </a>
              </div>
            </div>
          </div>
        </div>

        <hr />

        {/* Copyright */}
        <div className="flex py-4 gap-8 flex-col md:flex-row justify-between text-gray-300">
          <p className="flex items-center gap-2 text-base text-gray-400">
            <span>
              <BiCopyright />
            </span>
            2023 Elysia Holtel. All right reserved.
          </p>
          <ul className="flex md:text-right">
            <QuickLinkList title="Privacy Policy" />
            <QuickLinkList title="Terms of Use" />
          </ul>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
