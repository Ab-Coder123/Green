"use client";
import React, { useEffect } from "react";
import { animaldata } from "../../app/Constant/index";
import PropTypes from "prop-types";
import Slider from "react-slick";
import Image from "next/image";
import Link from "next/link";
import AOS from "aos"; // استيراد AOS
import "aos/dist/aos.css"; // استيراد الـ CSS الخاص بـ AOS

export const Animaldatas = ({ animalproduct }) => {
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
      {animalproduct.map((animalprod) => (
        <div
          className=" relative overflow-hidden"
          data-aos="fade-up"
          key={animalprod.id}
        >
          <Link href={`/Pages/animal/${animalprod.id}`}>
            <div className="mx-auto overflow-hidden w-44 flex flex-col items-center justify-center cursor-pointer bg-[#7fcc2a] rounded-full p-5 px-8">
              <Image src={animalprod.img} alt="animal" className="h-30" />
              <h2 className="text-white font-bold text-xl">
                {animalprod.title}
              </h2>
            </div>
          </Link>
        </div>
      ))}
    </Slider>
  );
};

Animaldatas.propTypes = {
  animalproduct: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
    })
  ).isRequired,
};

const Page = () => {
  return (
    <>
      <section className="py-12 overflow-hidden">
        <Animaldatas animalproduct={animaldata} />
      </section>
    </>
  );
};

export default Page;
