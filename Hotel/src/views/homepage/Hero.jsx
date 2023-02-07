import React from "react";
import Container from "../../components/common/Container";
import { RxDoubleArrowRight } from "react-icons/rx";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
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
      "https://images.unsplash.com/photo-1531973819741-e27a5ae2cc7b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    id: 2,
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
    id: 3,
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    id: 4,
  },
];

const Hero = () => {
  return (
    <div className="relative">
      {/* Cotainer */}
      {/* Layout */}
      <Swiper
        scrollbar={{
          hide: false,
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Scrollbar]}
      >
        {BackgroundImg.map((img) => (
          <SwiperSlide key={img.id}>
            <div className="relative h-screen">
              <div className="absolute inset-0 opacity-95 dark:opacity-60">
                <img src={img.imageUrl} className="object-center md:object-fill w-full h-full" />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Content */}
      <Container>
        <section className="absolute -translate-y-full z-10 h-screen flex flex-col justify-center px-6 ">
          <div className="max-w-3xl mb-8">
            <h2 className="text-5xl mb-8 text-white dark:text-slate-200">
              The ELYSIA Hotel
            </h2>
            <p className="text-base text-justify text-stone-100 dark:text-gray-300 font-normal">
              In the heart of Saigonian "cultural bustle", indulge yourself in
              the Romantic’s Art of Living in the enchanted setting of the
              Elysia boutique hotel. Luxury, beauty and culture are the
              watchwords of this dwelling, which will be your muse just a
              stone’s throw from the Arc de Triomphe. In this allegory of the
              famous 19th century artistic movement, every detail has been
              designed to ensure you enjoy an extraordinary experience.
            </p>
          </div>
          <div className="border border-white text-white font-semibold hover:bg-white hover:text-black w-fit">
            <Link to="/about" className="flex gap-4 items-center px-4 py-2">
              Read more
              <span>
                <RxDoubleArrowRight />
              </span>
            </Link>
          </div>
        </section>
      </Container>
    </div>
  );
};

export default Hero;
