import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Autoplay, Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import Container from "../../components/common/Container";

const reviewData = [
  {
    id: 1,
    client: "Rosie P. ",
    imageUrl:
      "https://i.pinimg.com/736x/0a/91/b0/0a91b016bf143fd5695fb0ac6e5947ce.jpg",
    feedback:
      " An harum accommodare ullamcorper, laoreet repudiare consetetur percipitur mel disputationi cum ex. Aliquid adipiscing delicatissimi.",
  },
  {
    id: 4,
    client: "Karina Yu J.M",
    imageUrl:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgui_cy3Mf8JBF5gxS6262LSJosEBDN9ViYa6Qn5Fbxyr6Gv48wzdBV4UD7nhKDhtTg3JP4QyQORFL2uxUk1s-lenSEZpLaj7zld358I8LSOEQFItLzmOBtfngAssP5PzlD_d3gMag1YOqFQW6FuzLit-NxUOhOHn2867XCGh7Dn3PahE7tHqOL1n_elQ/s1800/048021f216e9235c76857f6b7adfcfb5.jpg",
    feedback:
      " They were extremely accommodating and allowed us to check in early. We got to hotel super early and I didn’t wanna wait. So this was a big plus. Would definitely recommend.",
  },
  {
    id: 5,
    client: "Winter Kim M. ",
    imageUrl:
      "https://i.pinimg.com/736x/39/bb/a3/39bba379d8e63be02b178b7a175d405b.jpg",
    feedback:
      " The best hotel I’ve ever been. Gorgeous building, and it only gets more breathtaking when you walk in. High quality rooms (there was even a tv by the shower). ",
  },
  {
    id: 2,
    client: "David L. J. ",
    imageUrl:
      "https://images.unsplash.com/photo-1552234994-66ba234fd567?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    feedback:
      "Hotel dapibus asue metus the nec feusiate eraten miss hendreri net ve ante the lemon sanleo nectan feugiat erat hendrerit necuis ve ante otel inilla duiman at finibus viverra.",
  },
  {
    id: 3,
    client: "David L. J. ",
    imageUrl:
      "https://www.kpoptown.com/52967-large_default/exo-x-mlb-new-crew-original-one-point-curve-control-cap-navy.jpg",
    feedback:
      " Excellent property and very convenient to USC activities. Front desk staff is extremely efficient, pleasant and helpful. Property is clean and has a fantastic old time charm.",
  },
];

const SliderComponent = () => {
  return (
    <>
      <Container fluid={true}>
        <Swiper
          breakpoints={{
            // when window width is >= 640px
            640: {
              width: 640,
              slidesPerView: 2,
            },
            // when window width is >= 768px
            1024: {
              width: 1024,
              slidesPerView: 3,
            },
          }}
          className="text-base"
          spaceBetween={50}
          slidesPerView={1}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 10000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination]}
        >
          {reviewData.map((review) => {
            return (
              <SwiperSlide key={review.id}>
                <div className="md:px-4 md:justify-between md:w-80 lg:w-96">
                  {/* Image */}
                  <div className="flex justify-center pb-6 ">
                    <img
                      src={review.imageUrl}
                      alt={review.client}
                      className="rounded-full w-20 h-20 object-cover"
                    />
                  </div>
                  {/* Detail */}
                  <div>
                    <p className="px-4 text-center text-base text-opacity-100 mb-4 font-light text-beige font-subHeading italic">
                      {review.feedback}
                    </p>
                    <p className="text-beige text-opacity-70 text-sm text-center font-light mb-20">
                      {review.client} - Client
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Container>
    </>
  );
};

const Reviews = () => {
  return (
    <div>
      {/* Container */}
      <div className="">
        {/* Layout */}
        <div className="relative overflow-hidden bg-[url('https://bilurygallery.bithemer.com/assets/img/background/bg2.jpg')] bg-blend-overlay bg-gray-800/90 bg-cover object-center">
          {/* Content */}
          <div className="px-2 py-16">
            {/* Reviews Section */}
            <div className="">
              {/* Intro */}
              <h2 className="font-h2 text-2xl lg:text-4xl text-zinc-100 text-center mb-2">
                What our clients say about us
              </h2>
              <p className="font-subHeading text-beige text-base lg:text-xl font-light text-center text-opacity-80 px-8 mb-16">
                Pro sonet consul maiorum ad. Delenit omittantur ne cum
                gloriatur.
              </p>
            </div>

            {/* Carousel */}
            <div>
              <SliderComponent />
              {/* Review */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
