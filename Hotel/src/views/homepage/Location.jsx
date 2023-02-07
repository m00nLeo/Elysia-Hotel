import React from "react";
import { BiMap } from "react-icons/bi";
import { AiOutlineArrowRight } from "react-icons/ai";
import Container from "../../components/common/Container";
const Location = () => {
  return (
    <div className="bg-[#FEF4E8] text-black py-10 lg:py-16">
      <Container fluid={true}>
        <div className="bg-white items-center grid lg:grid-cols-3 ">
          <div className="p-9 font-subHeading">
            <h1 className="text-3xl mb-4 font-h2">Location & Maps</h1>
            <p className="flex items-center gap-3 mb-4 text-base text-gray-500">
              <span>
                <BiMap />
              </span>
              202 Hoang Van Thu, Ward 9, District 1, Ho Chi Minh City.
            </p>
            <p className="text-base mb-4 text-gray-500 text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
              perferendis fugit cumque eveniet et minus quasi neque molestiae
              iusto consequatur eos reiciendis, accusamus fuga quis nulla quae
              odit nobis
            </p>
            <div className="">
              <a
                className="bg-[#B18C57] text-white py-3 w-40 flex items-center justify-center gap-2  font-thin"
                href=""
              >
                View Location
                <span>
                  <AiOutlineArrowRight />
                </span>
              </a>
            </div>
          </div>
          <iframe
            className="col-span-2 w-full h-96"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.1378200353793!2d106.66671311376858!3d10.800754761700095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752930e65c14bf%3A0x6fb8f1972d050a64!2zMjAyIEhvw6BuZyBWxINuIFRo4bulLCBQaMaw4budbmcgOSwgVMOibiBCw6xuaCwgVGjDoG5oIHBo4buRIEjhu5MgQ2jDrSBNaW5oLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1673338226862!5m2!1svi!2s"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </Container>
    </div>
  );
};

export default Location;
