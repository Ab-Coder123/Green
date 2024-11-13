import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Product from "../../../Components/Product/page";
import MapComponent from "../../../Components/Map/page"; // تأكد من المسار

// import emailjs from '@emailjs/browser';
function page() {
  // const form = useRef();

  // const sendEmail = (e) => {
  //     e.preventDefault();

  //     emailjs.sendForm('service_5vdgbo6', 'template_urga7qm', form.current, '21LtOH1B6Mjl0MrRg')
  //         .then((result) => {
  //             console.log(result.text);
  //             alert("تم إرسال الرسالة بنجاح!");
  //         }, (error) => {
  //             console.log(error.text);
  //             alert("حدث خطأ أثناء إرسال الرسالة.");
  //         });
  // };

  return (
    <>
      <div className=" overflow-hidden font-cairo grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 py-40 my-12 gap-20 px-5 md:px-24 bg-white ">
        {/* قسم معلومات الاتصال */}
        <div className=" col-span-7 lg:col-span-5 space-y-10">
          <div className="flex items-start gap-5 space-x-2 border border-0.5 p-5 rounded-md">
            <FontAwesomeIcon
              icon={faPhoneAlt}
              className="text-[#385013] text-xl"
            />
            <div className="">
              <div className=" cursor-pointer flex flex-col items-start justify-start py-4 gap-y-6 ">
                <h2 className="text-2xl">
                GENERAL
                  <span className="text-[#7fcc2a] font-bold p-1">CONTACT</span>
                </h2>
                <div className="w-20 hover:w-40 transition-all duration-500 h-0.5 bg-gray-100"></div>
              </div>{" "}
              <p className="font-bold text-xl">We are available 24/7.</p>
              <p>Phone: +8806111122222</p>
            </div>
          </div>

          <div className="flex items-start gap-5 space-x-2 border border-0.5 p-5 rounded-md">
            <FontAwesomeIcon
              icon={faEnvelope}
              className="text-[#385013] text-xl"
            />
            <div>
              <div className="flex flex-col items-start justify-start py-4 gap-y-6 ">
                <h2 className="text-2xl">
                  CONTACT
                  <span className="text-[#7fcc2a] font-bold p-1">SALES</span>
                </h2>
                <div className="w-20 hover:w-40 transition-all duration-500 h-0.5 bg-gray-100"></div>
              </div>
              <p className="  font-bold text-xl w-[300px] lg:w-full ">
                Fill out our form and we will respond within 24 hours
              </p>
              <p className="text-l">Email: customer@coname.com</p>
              <p className="text-l ">MsG : support@coname.com</p>
            </div>
          </div>
        </div>

        {/* قسم النموذج */}
        <div className=" col-span-5  md:col-span-7  md:w-fill mb-6 md:mb-0">
          <form>
            <div className="flex flex-col md:flex-row col-span-7 gap-4">
              <input
                type="text"
                name="user_name"
                placeholder="Name*"
                className="border border-gray-300 p-2 rounded-md focus:outline-none"
              />
              <input
                type="email"
                name="user_email"
                placeholder="ُE_Mail"
                className="border border-gray-300 p-2 rounded-md focus:outline-none"
              />
              <input
                type="text"
                name="user_phone"
                placeholder="Your Phone*"
                className="border border-gray-300 p-2 rounded-md focus:outline-none"
              />
            </div>
            <textarea
              name="message"
              placeholder="Write your massage"
              className="border border-gray-300 p-2 rounded-md w-full h-48 col-span-7 mt-4 focus:outline-none"
            />
            <button
              type="submit"
              className="mt-4 bg-[#385013] text-white p-2 rounded-md px-10  md:w-auto"
            >
              Send
            </button>
          </form>
        </div>
      </div>
      {/* عرض الخريطة هنا */}
      <div className="my-12">
        <MapComponent />
      </div>

      {/* عرض مكون Product هنا */}
      <Product />
    </>
  );
}

export default page;
