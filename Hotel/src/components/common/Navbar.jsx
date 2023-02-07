import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineMenuFold } from "react-icons/ai";
import { SiAerlingus } from "react-icons/si";
import { Link } from "react-router-dom";
import Container from "./Container";

const NavMenu = ({ className }) => {
  return (
    <>
      <li>
        <Link to="/" className={className}>
          Home
        </Link>
      </li>
      <li>
        <Link to="/about" className={className}>
          About
        </Link>
      </li>
      <li>
        <Link to="/rooms" className={className}>
          Rooms & Suites
        </Link>
      </li>
      <li>
        <Link to="/#services" className={className}>
          Services
        </Link>
      </li>
      <li>
        <Link to="/contact" className={className}>
          Contact
        </Link>
      </li>
      <li className="lg:bg-[#b18c57] rounded lg:hover:bg-inherit group lg:border border-[#b18c57]">
        <Link
          to="/reservation"
          className={`${className} flex gap-2 lg:px-3 lg:py-2  items-center text-white lg:group-hover:text-[#b18c57]`}
        >
          <span className="hidden lg:flex">
            <SiAerlingus />
          </span>{" "}
          Reservation
        </Link>
      </li>
    </>
  );
};

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const handleChange = () => {
    setMenu(!menu);
  };

  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);

  return (
    <div
      className={`mx-auto sm:px-4 py-2 lg:px-28 fixed text-white z-20 w-full font-subHeading ${
        colorChange ? "bg-white bg-opacity-80 lg:text-black" : ""
      }`}
    >
      <Container>
        <div className=" flex justify-between items-center py-4 gap-x-4">
          {/* Logo */}
          <div className="">
            <Link to="/">
              <img
                src="https://360.agencewebcom.com/web/uploads/api/site-413/42a9f5a2934936263e0ccf2d2799f5d2124cc206.svg"
                alt=""
                className="w-32"
              />
            </Link>
          </div>

          {/* Menu Drawer*/}
          <div className="fixed w-11/12 lg:hidden">
            <input
              id="drawer"
              type="checkbox"
              className={` drawer-toggle  ${menu ? "left-0" : "left-[-100%]"}`}
            />
            <div className="drawer-content flex flex-col items-end justify-center">
              <label
                htmlFor="drawer"
                className="bg-[#b18c57] p-4 rounded-xl cursor-pointer hover:bg-[#b18c57]/75"
                onClick={handleChange}
              >
                <div className="" hidden={!menu}>
                  <AiOutlineMenuFold />
                </div>
                <div className="" hidden={menu}>
                  <AiOutlineMenu />
                </div>
              </label>
            </div>
            <div
              className={`drawer-side pt-7 -translate-x-10 absolute w-screen h-screen opacity-90 transition duration-200 ${
                menu ? "left-0" : "left-[-100%]"
              }`}
            >
              <label htmlFor="drawer" className="drawer-overlay"></label>
              <ul className="menu py-4 px-10 w-screen bg-black/75 text-2xl ">
                <NavMenu className="hover:bg-slate-400/75 dark:hover:bg-gray-800 hover:bg-opacity-75 w-56 mb-8 cursor-pointer" />
              </ul>
            </div>
          </div>

          {/* Menu lg-screen */}
          <div className="hidden list-none gap-10 text-xl lg:flex lg:items-center">
            <NavMenu className="text-base xl:text-xl hover:text-[#b18c57] cursor-pointer" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
