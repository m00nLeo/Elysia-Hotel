import React from "react";
import { GoLocation, GoMail } from "react-icons/go";
import { BsTelephone } from "react-icons/bs";
import { BiWorld } from "react-icons/bi";
import Container from "../../components/common/Container";

const ContactList = ({ icon, title, para }) => {
  return (
    <div className="flex items-center gap-6 text-[#987648] mb-4 lg:mb-8 text-lg lg:text-2xl">
      <div className="w-4">{icon}</div>
      <div className="">
        <h3 className="text-lg lg:text-xl text-gray-700/90 mb-1 font-h2">
          {title}
        </h3>
        <p className="text-gray-500 text-sm lg:text-base">{para}</p>
      </div>
    </div>
  );
};

const ContactInput = ({ title, type, className, id }) => {
  return (
    <>
      <input
        className={`px-2 py-3 bg-white border mb-4 outline-none text-black ${className}`}
        type={type}
        placeholder={`${title} *`}
        id={id}
      />
    </>
  );
};

const handleSubmit = (e) => {
  e.preventDefault();
  const form = document.getElementById("contactForm");
  const formElements = Array.from(form.elements);
  formElements.forEach((element) => {
    let val = element.value.trim();
    if (val == "") {
      element.classList.add("border-red-500");
    } else element.classList.remove("border-red-500");
  });
};

const Email = () => {
  return (
    <div className="mb-10">
      {/* Term & Policy Modal */}
      <div className="">
        <input type="checkbox" id="terms" className="modal-toggle" />
        <label htmlFor="terms" className="modal cursor-pointer">
          <label className="modal-box relative text-justify" htmlFor="">
            <h3 className="text-xl font-bold text-[#b18c57] uppercase">
              Terms, conditions and privacy policy
            </h3>
            <p className="py-4 dark:text-[#fff9f1]">
              The official hotel check in time is 03.00 pm, check out time is
              12.00 pm (noon).
              <br />
              <br />
              Extra beds are dependent on the room you choose. Please check the
              individual room capacity for more details. <br />
              All children are welcome: Infant 0-1 year(s): Stay for free if
              using existing bedding. Baby cot/crib available upon request.
              Children 2-5 year(s): Stay for free if using existing bedding. If
              you need an extra bed, it will incur an additional charge. Guests
              6 years and older are considered as adults: Must use an extra bed
              which will incur an additional charge. <br />
              <br />A damage deposit of VND 2000000 is required on arrival.
              That's about 85.06USD. This will be collected by credit card. You
              should be reimbursed on check-out. Your deposit will be refunded
              in full via credit card, subject to an inspection of the property.
              <br />
              <br />
              Property’s cancellation policy
              <br />
              <br />
              Deluxe Double Room City View - Standard Rate
              <br />
              <br />
              All reservations must be guaranteed by credit card and will be
              verify 2 days before the check-in date. Any cancellation received
              within 2 days prior to arrival date will incur the first night
              charge. Failure to arrive at your hotel or property will be
              treated as a No-Show and will incur the first night charge
              <br />
              <br />
              (Property policy).
            </p>
          </label>
        </label>
      </div>

      <div className=" bg-[#FEF4E8] mb-10">
        <Container fluid={true}>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 py-12 px-2 lg:px-0">
            <div className="w-3/4 mb-4">
              <ContactList
                icon={<GoLocation />}
                title="Address"
                para="202 Hoang Van Thu, Ward 9, District 1, Ho Chi Minh City."
              />

              <ContactList
                icon={<BsTelephone />}
                title="Phone"
                para="+84 (0) 968 151 617"
              />
              <ContactList
                icon={<GoMail />}
                title="Email"
                para="customer.helpdesk@elysia.com"
              />
              <ContactList
                icon={<BiWorld />}
                title="Website"
                para="www.theealysiahotel.com"
              />
            </div>

            <div className="font-thin text-sm lg:col-span-2">
              <form id="contactForm" className="mb-4" onSubmit={handleSubmit}>
                <p className="mb-4">The fields marked with * are required.</p>
                <div className="grid md:grid-cols-2 gap-3">
                  <ContactInput title="First Name" type="text" id="firstName" />
                  <ContactInput title="Last Name" type="text" id="lastName" />
                  <ContactInput title="Email" type="text" id="email" />
                  <ContactInput title="Phone" type="number" id="phone" />
                  <ContactInput
                    title="Subject"
                    type="text"
                    className="col-span-2"
                    id="subject"
                  />
                  {/* <ContactInput
                  title="Message"
                  type="text"
                  className="col-span-2 h-20 md:h-32 lg:h-48"
                /> */}
                  <textarea
                    className="px-2 py-3 bg-white border mb-4  col-span-2 h-20 md:h-32 lg:h-48 outline-none"
                    placeholder="Message *"
                  ></textarea>
                </div>

                <div className="lg:flex mb-4 justify-between items-center">
                  <div className="flex gap-3 items-center mb-4">
                    <input type="checkbox" id="termsandpolicy" />
                    <label htmlFor="termsandpolicy" className="flex gap-1">
                      I agree to
                      <label
                        htmlFor="terms"
                        className="text-[#b18c57] font-semibold cursor-pointer"
                      >
                        terms and policy
                      </label>
                    </label>
                  </div>
                  <button
                    type="submit"
                    className="bg-[#b18c57] hover:bg-[#997a4e] text-lg px-4 py-2 text-white "
                  >
                    Send message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </Container>
      </div>
      <Container fluid={true}>
        <iframe
          className=" w-full h-96"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.1378200353793!2d106.66671311376858!3d10.800754761700095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752930e65c14bf%3A0x6fb8f1972d050a64!2zMjAyIEhvw6BuZyBWxINuIFRo4bulLCBQaMaw4budbmcgOSwgVMOibiBCw6xuaCwgVGjDoG5oIHBo4buRIEjhu5MgQ2jDrSBNaW5oLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1673338226862!5m2!1svi!2s"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </Container>
    </div>
  );
};

export default Email;
