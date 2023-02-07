import { HiSearch } from "react-icons/hi";
import { BsTrash } from "react-icons/bs";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { RiFolderUserLine } from "react-icons/ri";

import { useEffect, useState } from "react";
import Container from "../../../components/common/Container";
import { Link } from "react-router-dom";

const orderData = [
  {
    id: 1,
    guestName: "Cy Ganderton",
    email: "gander.cy@gmail.com",
    phone: "0726445762",
    room: "Executive Deluxed",
    checkinDay: "22 Jan 2023",
  },
  {
    id: 2,
    guestName: "Hart Hagerty",
    email: "hagertyhart@icloud.com",
    phone: "0918776342",
    room: "Balcony City View",
    checkinDay: "20 Jan 2023",
  },
  {
    id: 3,
    guestName: "Brice Swyre",
    email: "briceswyre@splash.com",
    phone: "0726448862",
    room: "Executive Deluxed",
    checkinDay: "23 Jan 2023",
  },
  {
    id: 4,
    guestName: "Marjy Ferencz",
    email: "marjyf@hypermail.com.us",
    phone: "0918776248",
    room: "Balcony City View",
    checkinDay: "23 Jan 2023",
  },
  {
    id: 5,
    guestName: "Yancy Tear",
    email: "yayatear@flomail.net",
    phone: "0973245723",
    room: "Deluxed Riverside",
    checkinDay: "20 Jan 2023",
  },
  {
    id: 6,
    guestName: "Irma Vasilik",
    email: "vanderrir@gmail.com",
    phone: "0251666783",
    room: "Queen Deluxed Room",
    checkinDay: "23 Jan 2023",
  },
  {
    id: 7,
    guestName: "Meghann Durtnal",
    email: "meghannisme@icloud.com",
    phone: "0842665781",
    room: "Deluxed Riversided",
    checkinDay: "25 Jan 2023",
  },

  {
    id: 8,
    guestName: "Sammy Seston",
    email: "samsamseston@splash.net",
    phone: "0642665784",
    room: "Executive Deluxed",
    checkinDay: "25 Jan 2023",
  },
  {
    id: 9,
    guestName: "Lesya Tinham",
    email: "tlesya@gmail.com",
    phone: "0918776342",
    room: "Balcony City View",
    checkinDay: "20 Jan 2023",
  },
  {
    id: 10,
    guestName: "Zaneta Tewkesbury",
    email: "anett@hormail.com",
    phone: "0726448352",
    room: "Executive Deluxed",
    checkinDay: "23 Jan 2023",
  },
  {
    id: 11,
    guestName: "Clyn Ganderton",
    email: "gander.cy@gmail.com",
    phone: "0726448762",
    room: "Executive Deluxed",
    checkinDay: "22 Jan 2023",
  },
  {
    id: 12,
    guestName: "Hart Hagerty",
    email: "hagertyhart@icloud.com",
    phone: "0918776542",
    room: "Balcony City View",
    checkinDay: "20 Jan 2023",
  },
  {
    id: 13,
    guestName: "Bride Swyre",
    email: "briceswyde@splash.com",
    phone: "0726458862",
    room: "Executive Deluxed",
    checkinDay: "23 Jan 2023",
  },
  {
    id: 14,
    guestName: "Marjyn Ferencz",
    email: "marjyfn@hypermail.com.us",
    phone: "0918776238",
    room: "Balcony City View",
    checkinDay: "23 Jan 2023",
  },
  {
    id: 15,
    guestName: "Yancy Tearn",
    email: "yayatearn@flomail.net",
    phone: "0973245733",
    room: "Deluxed Riverside",
    checkinDay: "20 Jan 2023",
  },
];

const Orders = () => {
  const [orders, setOrders] = useState([...orderData]);
  const totalOrders = orders.length;

  const [currentPage, setCurrentPage] = useState(1);
  const ordersPerPage = 10;

  const totalPage = Math.ceil(totalOrders / ordersPerPage);

  const handleClick = (isBack) => {
    if (isBack) {
      if (currentPage >= 2) {
        setCurrentPage(currentPage - 1);
      }
    } else {
      {
        if (currentPage < totalPage) {
          setCurrentPage(currentPage + 1);
        }
      }
    }
  };

  useEffect(() => {
    const crrPageIndex = currentPage - 1;
    const startIndex = crrPageIndex * ordersPerPage;
    console.log(startIndex);
    console.log(
      orders.slice(
        (currentPage - 1) * ordersPerPage,
        (currentPage - 1) * ordersPerPage + ordersPerPage
      )
    );

    // setOrders(orders.slice(startIndex, startIndex + ordersPerPage));
  }, [currentPage]);

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
    <div>
      {/* Container */}
      <Container>
        <div className=" mx-auto px-4 py-6">
          {/* Layout */}
          <div>
            {/* Content */}
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
            <div className="flex items-center justify-end">
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

            {/* SEARCH AREA */}
            <div className="mb-4">
              <form class="flex items-center">
                <label for="search-area" class="sr-only">
                  Search
                </label>
                <div class="relative max-w-screen-sm">
                  <div class="absolute inset-y-0 left-0 flex items-center pl-3 ">
                    <HiSearch className="text-xl" />
                  </div>
                  <input
                    type="text"
                    id="search-area"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full pl-10 p-2.5 "
                    placeholder="Search"
                    required
                  />
                </div>
                <button
                  onClick={onSearch}
                  class="p-2.5 ml-2 text-sm font-medium text-white bg-teal-600 rounded-lg hover:cursor-pointer hover:bg-teal-500/50 focus:ring-4 focus:outline-none focus:ring-teal-300"
                >
                  <HiSearch className="text-xl" />
                  <span class="sr-only">Search</span>
                </button>
              </form>
            </div>

            {/* TABLE */}
            <div>
              <div className="overflow-x-auto">
                <table className="table table-compact w-full border-2">
                  <thead>
                    <tr>
                      <th className=" py-6 pl-4">No</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Phone</th>
                      <th>Room</th>
                      <th>Check-in</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {orders
                      .slice(
                        (currentPage - 1) * ordersPerPage,
                        (currentPage - 1) * ordersPerPage + ordersPerPage
                      )
                      .map((order) => {
                        return (
                          <tr key={order.id}>
                            <th className="py-4 pl-4">{order.id}</th>
                            <td>{order.guestName}</td>
                            <td>{order.email}</td>
                            <td>{order.phone}</td>
                            <td>{order.room}</td>
                            <td>{order.checkinDay}</td>
                            <td className="">
                              <div className="flex gap-2 items-center">
                                <div className="group">
                                  <div
                                    className="hidden tooltip tooltip-open tooltip-success group-hover:block"
                                    data-tip="Order Detail"
                                  ></div>
                                  <Link to="/orders/:roomid">
                                    <RiFolderUserLine className="cursor-pointer text-2xl text-teal-500 " />
                                  </Link>
                                </div>
                                <div className="group">
                                  <div
                                    className="hidden tooltip tooltip-open tooltip-error group-hover:block"
                                    data-tip="Delete"
                                  ></div>
                                  <label htmlFor="my-modal">
                                    <BsTrash className="cursor-pointer text-xl text-red-500" />
                                  </label>
                                </div>
                              </div>
                            </td>
                          </tr>
                        );
                      })}
                  </tbody>
                  <tfoot></tfoot>
                </table>
              </div>
            </div>
            {/* PAGINATION */}
            <div className="flex justify-end gap-8 p-4 ">
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
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Orders;
