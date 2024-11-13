'use client'
import React, { useEffect } from "react";
import { Newsdata } from "../../Constant/index";
import PropTypes from "prop-types";
import Image from "next/image";
import AOS from "aos"; // استيراد AOS
import "aos/dist/aos.css"; // استيراد الـ CSS الخاص بـ AOS

const NewsComponent = ({ newsItems }) => {
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
    <div className="py-12 overflow-hidden">
      {newsItems.map((newsItem, index) => (
        <div
          key={newsItem.id}
          className={`flex items-start py-5 ${
            index % 2 === 0 ? "flex-row" : "flex-row-reverse"
          }`}
          data-aos="fade-up"
                  
        >
          {/* Image Section */}
          <div className="w-1/2">
            <Image
              src={newsItem.img1}
              alt="news-image"
              className="w-full h-auto"
            />
          </div>

          {/* Content Section */}
          <div className="w-1/2 flex flex-col gap-y-5 px-5">
            <h2 className="text-green-600 font-bold text-2xl"    data-aos="fade-up" >
              {newsItem.title}
            </h2>
            <p className="text-gray-500">{newsItem.prah}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

NewsComponent.propTypes = {
  newsItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      img1: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      prah: PropTypes.string.isRequired,
    })
  ).isRequired,
};

const Page = () => {
  return (
    <section className="py-20">
      <NewsComponent newsItems={Newsdata} />
    </section>
  );
};

export default Page;
