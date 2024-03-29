import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import Container from "../../components/common/Container";

const About = () => {
  return (
    <div className="" id="about">
      <Container fluid={true}>
        {/* container */}
        <div className="grid lg:grid-cols-2 gap-8 pt-20 px-2 mb-16">
          {/* layout */}
          <div className="grid grid-cols-2 gap-2">
            {/* 2 column */}
            <img
              className="-translate-y-5"
              src="https://plus.unsplash.com/premium_photo-1675745329954-9639d3b74bbf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
              alt=""
            />
            <img
              src="https://plus.unsplash.com/premium_photo-1682285212027-6af0d0f70e07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
              alt=""
            />
          </div>
          <div className="text-[#343a40] tracking-wide flex flex-col justify-center">
            <h3 className="mb-4 font-light text-lg dark:text-gray-300/75">
              Welcome to
            </h3>
            <h1 className="mb-6 font-semibold text-2xl lg:text-4xl font-h2 dark:text-[#b18c57]">
              ELYSIA HOTEL
            </h1>
            <p className="text-base lg:text-lg mb-6 font-light dark:text-gray-400">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid
              ipsum nobis facilis officiis, sit id! Corporis eum doloribus a
              ipsum, similique aperiam natus assumenda. Nam, iste! Unde quos
              voluptates nemo incidunt mollitia tenetur, numquam vitae et
              repellendus sint accusantium id magni, eveniet sapiente
              voluptatibus, rem quis deserunt modi eaque corporis.
            </p>
            <div className="">
              <Link
                to="/about"
                className="flex items-center gap-1 font-thin bg-[#b18c57] text-white py-3 px-5 w-fit"
              >
                Read More
                <span>
                  <AiOutlineArrowRight />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default About;
