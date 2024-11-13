"use client";
import React, { useEffect } from "react";
import { certificate } from "../../app/Constant/index";
import PropTypes from "prop-types";
import Slider from "react-slick";
import Image from "next/image";
import img1 from "../../public/images/logo.png";

import AOS from "aos"; // استيراد AOS
import "aos/dist/aos.css"; // استيراد الـ CSS الخاص بـ AOS

export const Certifcate = ({ certifcateitem }) => {
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

  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {certifcateitem.map((certifcateitems) => (
        <div className=" relative overflow-hidden py-5" data-aos="fade-up" key={certifcateitems.id}>
          <div className="mx-auto overflow-hidden w-52 flex flex-col items-center justify-center bg-gray-300 rounded-full ">
            <Image src={certifcateitems.img} alt="Certifcate" className=""  />
          </div>
        </div>
      ))}
    </Slider>
  );
};

Certifcate.propTypes = {
  certifcateitem: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
    })
  ).isRequired,
};

const Page = () => {
  return (
    <>
      <section className="py-12 overflow-hidden">
      <div className="flex flex-row items-center justify-start gap-4">
          <Image src={img1} alt="Logo" className="rounded-md w-[200px]" />
          <h2 className="text-4xl font-bold font-serif text-gray-800">Certifcate</h2>
        </div>
        <Certifcate certifcateitem={certificate} />
      </section>
    </>
  );
};

export default Page;
