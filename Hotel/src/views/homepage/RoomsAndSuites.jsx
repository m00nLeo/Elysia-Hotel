import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import Container from "../../components/common/Container";
import { Link } from "react-router-dom";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Autoplay, Navigation, Scrollbar } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../../../services/productService";

const RoomsSlider = ({ products }) => {
  return (
    <>
      <Swiper
        className="text-base"
        breakpoints={{
          640: {
            width: 640,
            slidesPerView: 1,
          },
          1024: {
            width: 1024,
            slidesPerView: 2,
          },
          1280: {
            width: 1280,
            slidesPerView: 4,
          },
        }}
        spaceBetween={20}
        slidesPerView={1}
        navigation={true}
        scrollbar={{
          hide: true,
        }}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Navigation, Scrollbar]}
      >
        {products?.map((room) => (
          <SwiperSlide key={room.id}>
            <div className="relative group" key={room.id}>
              <img
                className="opacity-60 h-[600px] md:h-[600px] sm-[500px] lg:h-96 w-full object-center"
                src={room.imageUrl}
                alt=""
              />
              <div className="text-sm font-bold absolute top-5 left-5 font-sans">
                ${room.price} <span className="font-light">/ Night</span>
              </div>
              <div className="py-6 pl-6 pr-2 bottom-0 absolute w-full h-24 group-hover:h-56 lg:h-28 lg:group-hover:h-60 bg-black bg-opacity-30 group-hover:bg-opacity-60 duration-500 overflow-hidden">
                <h3 className="w-5/6 mb-5 text-lg">{room.title} </h3>
                <div className="hidden group-hover:block ">
                  <p className="mb-4 text-sm font-extralight">
                    Room size: {`${room.size}, ${room.bed}, ${room.description}`}
                  </p>
                  <Link to={`/roomdetail/${room.id}`}>
                    <div className="flex items-center w-fit gap-1 bg-[#b18c57] hover:bg-[#b18c57]/75 py-2 px-4 content-center ">
                      <p className="text-sm">Detail</p>
                      <span>
                        <AiOutlineArrowRight />
                      </span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}{" "}
      </Swiper>
    </>
  );
};

const RoomsAndSuites = ({ title = "Rooms & Suites" }) => {
  const { data, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: () => getProducts(),
    cacheTime: 10 * 1000,
  });
  return (
    <div className=" bg-[#222222] py-10">
      {/* container */}
      <Container fluid={true}>
        <div className="">
          {/* layout */}
          <div className="text-white items-center tracking-wide">
            <h1 className="text-center text-2xl lg:text-4xl mb-6 font-h2">
              {title}
            </h1>
            <p className="text-center text-base lg:text-xl mb-8 font-normal text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <div className="">
              <RoomsSlider products={data?.data?.products} />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default RoomsAndSuites;
