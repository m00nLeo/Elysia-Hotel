import React from "react";
import Container from "../../components/common/Container";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

// import required modules
import { Autoplay, Scrollbar } from "swiper";
import { Link } from "react-router-dom";

const BackgroundImg = [
  {
    imageUrl:
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    id: 1,
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    id: 2,
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    id: 3,
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    id: 4,
  },
];

const SubHero = ({ title, path }) => {
  return (
    <div className="relative">
      {/* Cotainer */}
      {/* Layout */}
      <Swiper
        scrollbar={{
          hide: true,
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Scrollbar]}
      >
        {BackgroundImg.map((img) => (
          <SwiperSlide key={img.id}>
            <div className="relative h-[500px]">
              <div className="absolute inset-0 bg-black opacity-950 dark:opacity-60">
                <img src={img.imageUrl} className="w-full h-full object-cover" />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Content */}
      <Container>
        <section className="absolute -translate-y-3/4 z-10 h-screen flex flex-col justify-center px-6 ">
          <div className="max-w-3xl mb-8">
            <h2 className="text-5xl mb-8 text-white dark:text-slate-200">
              {title}
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-justify text-stone-100/90 dark:text-gray-300 font-normal">
              <Link to="/" className="text-white">
                Home
              </Link>{" "}
              / {path}
            </p>
          </div>
        </section>
      </Container>
    </div>
  );
};

export default SubHero;
