"use client";
import React, { useEffect } from "react";
import { FaGithub, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import img1 from "../../public/images/Logo (1).png";
import Image from "next/image";
import AOS from "aos"; // استيراد AOS
import "aos/dist/aos.css"; // استيراد الـ CSS الخاص بـ AOS


const Footer = () => {
// تهيئة AOS بعد تحميل الصفحة
useEffect(() => {
  AOS.init({
    duration: 1000, // مدة الأنيميشن بالـ millisecond
    easing: "ease-in-out", // تأثير الحركة
    once: false, // تعيين أن الأنيميشن يحدث أكثر من مرة عند التمرير لأعلى ولأسفل
  });

  // تحديث AOS عند التمرير
  window.addEventListener("scroll", () => {
    AOS.refresh(); // إعادة تحميل الأنيميشن عند التمرير
  });

  // تنظيف الإيفنت عند مغادرة الصفحة
  return () => {
    window.removeEventListener("scroll", () => AOS.refresh());
  };
}, []);

  return (
    <footer className="relative bg-[#385013] text-white overflow-hidden">
      {/* SVG Background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-[150px]" // Ensure the height is set here
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,
                        250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,
                        3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="block fill-[#385013]"
          ></path>
        </svg>
      </div>

      {/* Footer Content */}
      <div className="relative z-10 grid lg:grid-cols-11 gap-20 sm:grid-cols-1 p-20">
        <div className=" col-span-3">
          <Image src={img1} alt="Footer logo" className="w-[400px]"   data-aos="fade-up" />
        </div>

        <div className="flex flex-col gap-5  col-span-2">
          <h2 className="text-3xl font-bold text-[#7fcc2a]">Footer</h2>
          <p>
            A brief description about the site and the services it provides.
          </p>
        </div>

        <div className="col-span-2">
          <li className="text-[22px] list-none font-bold text-[#7fcc2a] py-2 uppercase">
            Creativity
          </li>
          <li className="my-4 list-none">Guidelines and Ideas for Websites</li>
          <li className="my-4 list-none">Tips and Tricks</li>
          <li className="my-4 list-none">Photography</li>
        </div>

        <div className="col-span-2">
          <li className="text-[22px] list-none font-bold text-[#7fcc2a] py-2 uppercase">
            Creativity
          </li>
          <li className="my-4 list-none">Guidelines and Ideas</li>
          <li className="my-4 list-none">Tips and Tricks</li>
          <li className="my-4 list-none">Photography</li>
        </div>

        <div className="mb-4 col-span-2 md:mb-0">
          <h2 className="text-[22px] font-bold text-[#7fcc2a] py-2 uppercase">
            Contact Us
          </h2>
          <p className="text-[16px] my-4">Email: example@gmail.com</p>
          <p className="text-[16px] my-4">Phone: +1 113-456-7890 </p>
          <div className="flex space-x-4">
            <a
              className="text-white hover:text-[#7fcc2a] transform hover:scale-150 transition-all duration-150 ease-in-out"
              href=""
            >
              <FaGithub />
            </a>
            <a
              className="text-white hover:text-[#7fcc2a] transform hover:scale-150 transition-all duration-150 ease-in-out"
              href=""
            >
              <FaLinkedinIn />
            </a>
            <a
              className="text-white hover:text-[#7fcc2a] transform hover:scale-150 transition-all duration-150 ease-in-out"
              href=""
            >
              <FaTwitter />
            </a>
            <a
              className="text-white hover:text-[#7fcc2a] transform hover:scale-150 transition-all duration-150 ease-in-out"
              href=""
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Form */}
      <div className="mt-0">
        <div className="h-full flex items-center justify-center mb-5">
          <form className="w-96 relative">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-4 h-10 rounded-full focus:outline-none focus:border"
            />
            <button
              type="Submit"
              className="bg-green-900 px-8 py-2 rounded-full text-white absolute top-0 right-0"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      <h6 className="text-center">&copy; Copyright Coderfilx 2025</h6>
    </footer>
  );
};

export default Footer;
