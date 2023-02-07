import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import Container from "../../components/common/Container";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../../../services/productService";
import GlobalSpinner from "../../components/common/GlobalSpinner";

const RoomsDetail = ({ products }) => {
  return (
    <div>
      <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:mb-4">
        {products?.map((room) => (
          <div className="relative group mb-4" key={room.id}>
            <img
              className="h-[700px] md:h-[600px] lg:h-[500px] w-full object-center"
              src={room.imageUrl}
              alt=""
            />
            <div className="text-sm text-white font-bold absolute top-5 left-5 font-sans">
              ${room.price} <span className="font-light">/ Night</span>
            </div>
            <div className="py-6 px-4 bottom-0 absolute w-full h-20 group-hover:h-48 lg:h-28 lg:group-hover:h-50 bg-black bg-opacity-30 group-hover:bg-opacity-60 duration-500 overflow-hidden">
              <h3 className=" text-white w-5/6 mb-5 text-lg">{room.title} </h3>
              <div className="hidden group-hover:block ">
                <p className="mb-4 text-sm font-extralight text-white">
                  Room size: {`${room.size}, ${room.bed}, ${room.description}`}
                </p>
                <div className="flex justify-between">
                  <Link to={`/roomdetail/${room.id}`}>
                    <div className="flex items-center w-fit gap-1 text-[#b18c57] hover:text-gray-500 py-2 px-4 content-center ">
                      <p className="text-sm">Detail</p>
                      <span>
                        <AiOutlineArrowRight />
                      </span>
                    </div>
                  </Link>
                  <Link to={`/roomdetail/${room.id}`}>
                    <div className="flex items-center w-fit gap-1 bg-[#b18c57] hover:bg-[#b18c57]/75 py-2 px-4 content-center ">
                      <p className="text-sm">Book Now</p>
                      <span>
                        <AiOutlineArrowRight />
                      </span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const RoomsList = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: () => getProducts(),
    cacheTime: 10 * 1000,
  });
  if (isLoading) return <GlobalSpinner />;

  return (
    <div className="pt-20">
      <Container fluid={true}>
        <div className="">
          <p className="text-center mb-8 text-[#343a40] dark:text-gray-200 lg:px-56 font-light">
            Id vel nostrud maiorum, quo ad quidam perfecto. Mea justo dicta
            accusata no, te has aeque dolores repudiare, his etiam pericula id.
            Utinam quaestio philosophia eos in, eu eam offendit laboramus
            intellegebat, cu est quis officiis. Est dictas legendos scribentur
            an. Vis ei tation iisque suscipit, vim id tota dolores hendrerit. Eu
            molestie reprehendunt mea, ea legimus molestiae cum, partem
            iracundia delicatissimi cum te.
          </p>
          <RoomsDetail products={data?.data?.products} />
        </div>
      </Container>
    </div>
  );
};

export default RoomsList;
