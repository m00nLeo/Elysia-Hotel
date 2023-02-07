import React from "react";
import { TfiPencil } from "react-icons/tfi";
import { FiTrash } from "react-icons/fi";
import {
  HiOutlineChevronLeft,
  HiOutlineChevronRight,
  HiSearch,
} from "react-icons/hi";
import Container from "../../../components/common/Container";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import GlobalSpinner from "../../../components/common/GlobalSpinner";
import { getProducts } from "../../../../services/productService";
import { useQuery } from "@tanstack/react-query";

const RoomsList = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: () => getProducts(),
    cacheTime: 10 * 1000,
  });
  if (isLoading) return <GlobalSpinner />;

  const { data: rooms } = data;
  const room = rooms?.products;
  console.log(room);
  // const [orders, setOrders] = useState([...room]);

  // const totalOrders = orders.length;
  // const [currentPage, setCurrentPage] = useState(1);

  // const ordersPerPage = 10;

  // const totalPage = Math.ceil(totalOrders / ordersPerPage);

  // const handleClick = (isBack) => {
  //   if (isBack) {
  //     if (currentPage >= 2) {
  //       setCurrentPage(currentPage - 1);
  //     }
  //   } else {
  //     {
  //       if (currentPage < totalPage) {
  //         setCurrentPage(currentPage + 1);
  //       }
  //     }
  //   }
  // };

  // useEffect(() => {
  //   const crrPageIndex = currentPage - 1;
  //   const startIndex = crrPageIndex * ordersPerPage;
  //   console.log(startIndex);
  //   console.log(
  //     orders.slice(
  //       (currentPage - 1) * ordersPerPage,
  //       (currentPage - 1) * ordersPerPage + ordersPerPage
  //     )
  //   );
  // }, [currentPage]);

  const onSearch = (e) => {
    e.preventDefault();
    let keyword = document.getElementById("search-area").value;
    if (!keyword || keyword.length === 0) {
      setOrders(orderData);
      return;
    }
    keyword = keyword.toLowerCase();

    let filters = Object.keys(orderData[0]);

    //--------Search
    var filtered_data = orderData.filter(function (item) {
      for (let i = 0; i < filters.length; i++) {
        switch (typeof item[filters[i]]) {
          case "string":
            if (item[filters[i]].toLowerCase().includes(keyword)) {
              return true;
            }
            break;
          default:
            if (item[filters[i]] == keyword) {
              return true;
            }
        }
      }
      return false;
    });
    setOrders(filtered_data);
    setCurrentPage(1);
  };
  return (
    <div className=" pl-2 py-6">
      <Container>
        {/* Modal*/}
        <input type="checkbox" id="my-modal" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box text-center bg-orange-200 text-black">
            <h3 className="font-bold text-lg ">
              Are you sure you want to delete this item?{" "}
            </h3>
            <p className="py-4">
              You are about to delete this file from all of your backups!
              Deleting this item form this directory cannot be undone.
            </p>
            <div className="modal-action">
              <label
                htmlFor="my-modal"
                className="bg-red-400 p-2 rounded-lg hover:bg-red-300 cursor-pointer w-28"
              >
                Yes, I'm sure
              </label>
              <label
                htmlFor="my-modal"
                className="bg-gray-400 p-2 rounded-lg hover:bg-gray-300 cursor-pointer w-28"
              >
                Nope
              </label>
            </div>
          </div>
        </div>
        {/* ACCOUNT INFO */}
        <div className="flex items-center justify-end -translate-x-6">
          <span className=" text-sm font-bold text-teal-600 border-l-gray-200 border-l-2 px-4">
            Rosie P
          </span>
          <div>
            <img
              src="https://i.pinimg.com/280x280_RS/e9/1d/06/e91d062f1c0708a9b1f0f1880a3d8f19.jpg"
              alt="profilepic"
              className=" aspect-square w-10 rounded-full border-spacing-2 p-[2px] border-slate-200 border-2"
            />
          </div>
        </div>
        <div className="flex justify-between items-center mb-6">
          <div className="mb-4">
            <form className="flex items-center pl-6">
              <label htmlFor="search-area" className="sr-only">
                Search
              </label>
              <div className="relative max-w-screen-sm">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 ">
                  <HiSearch className="text-xl" />
                </div>
                <input
                  type="text"
                  id="search-area"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full pl-10 p-2.5 "
                  placeholder="Search"
                  required
                />
              </div>
              <button
                onClick={onSearch}
                className="p-2.5 ml-2 text-sm font-medium text-white bg-teal-600 rounded-lg hover:cursor-pointer hover:bg-teal-500/50 focus:ring-4 focus:outline-none focus:ring-teal-300"
              >
                <HiSearch className="text-xl" />
                <span className="sr-only">Search</span>
              </button>
            </form>
          </div>

          <Link
            to="/roomslist/addnew"
            className="text-white text-center p-1.5 bg-teal-600 rounded-lg cursor-pointer hover:bg-teal-500/50 border w-32 h-10 mr-6"
          >
            Add New
          </Link>
        </div>

        <div className=" px-6 ">
          <table className="w-full text-sm table table-compact">
            <thead className="text-base bg- text-gray-600 dark:text-zinc-200 uppercase">
              <tr className="px-6 py-3 border">
                <th className="px-6 py-3">Name</th>
                <th className="px-6 py-3">Room infomation</th>
                <th className="px-6 py-3">Price</th>
                <th className="px-6 py-3">Status</th>
                <th className="px-6 py-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {room?.map((item) => (
                <tr className="bg-white border" key={item.id}>
                  <td className="px-6 py-4 font-semibold">
                    <div>{item.title}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div>{item.bed}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div>${item.price}</div>
                  </td>
                  <td className="px-6 py-4 ">
                    <select name="" id="" className="p-1">
                      <option disabled value="">
                        State
                      </option>
                      <option
                        selected
                        value=""
                        className="border text-center text-white bg-pink-300"
                      >
                        Pending
                      </option>
                      <option
                        value=""
                        className="border text-center text-white bg-red-500"
                      >
                        Booked
                      </option>
                      <option
                        value=""
                        className="border text-center text-white bg-green-400"
                      >
                        In-use
                      </option>
                      <option
                        value=""
                        className="border text-center text-white bg-yellow-400"
                      >
                        Reparing
                      </option>
                    </select>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex gap-4 items-center">
                      <div className="group">
                        <div
                          className="hidden tooltip tooltip-open tooltip-success group-hover:block"
                          data-tip="Room Detail"
                        ></div>
                        <Link to="/roomslist/update/:roomid">
                          <TfiPencil className="cursor-pointer text-xl text-teal-500 " />
                        </Link>
                      </div>
                      <div className="group">
                        <div
                          className="hidden tooltip tooltip-open tooltip-error group-hover:block"
                          data-tip="Delete"
                        ></div>
                        <label htmlFor="my-modal">
                          <FiTrash className="cursor-pointer text-xl text-red-500" />
                        </label>
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {/* PAGINATION */}
          <div className="bg-white border w- flex justify-end gap-8 pr-14">
            <div className="px-6 py-4">
              <div className="">
                1-{room?.length} of {room?.length}
              </div>
            </div>
            <td className="px-6 py-4 flex gap-2">
              <div className="flex text-xl text-gray-500 gap-4 hover:text-black cursor-pointer">
                <HiOutlineChevronLeft />
              </div>
              <div className="flex text-xl text-gray-500 gap-4 hover:text-black cursor-pointer">
                <HiOutlineChevronRight />
              </div>
            </td>
          </div>
          {/* PAGINATION */}
          {/* <div className="flex justify-end gap-8 p-4 ">
            <span className="text-sm text-zinc-500 pr-4">
              {(currentPage - 1) * ordersPerPage + 1} -{" "}
              {(currentPage - 1) * ordersPerPage + ordersPerPage} of{" "}
              {totalOrders}
            </span>
            <div className="flex gap-4 group">
              <IoIosArrowBack
                onClick={() => {
                  handleClick(true);
                }}
                className={`text-xl group-hover:cursor-pointer ${
                  currentPage === 1
                    ? "text-gray-400 dark:text-gray-500/70 group-hover:cursor-not-allowed"
                    : ""
                } `}
              />
              <IoIosArrowForward
                onClick={() => {
                  handleClick(false);
                }}
                className={`text-xl group-hover:cursor-pointer ${
                  currentPage === totalPage
                    ? "text-gray-400 dark:text-gray-500/70 group-hover:cursor-not-allowed"
                    : ""
                } `}
              />
            </div>
          </div> */}
        </div>
      </Container>
    </div>
  );
};

export default RoomsList;
