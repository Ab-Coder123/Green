'use client'
import React, { useEffect } from "react";
import Image from "next/image";
import img from "../../public/images/imgdetails.jpg";
import AOS from "aos"; // استيراد AOS
import "aos/dist/aos.css"; // استيراد الـ CSS الخاص بـ AOS

const Page = () => {
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
    <section>
      <div className=" px-5 lg:px-16 grid grid-cols-1 w-full lg:grid-cols-12 gap-28">
        <div className="md:col-span-6 lg:col-span-4 col-span-9 flex flex-col items-start justify-start gap-5">
          {/* one div */}
          <div className="flex flex-col items-start justify-start gap-y-6">
            <h2 className="text-2xl">
              COMMITMENT
              <span className="text-[#385013] font-bold p-1">TO QUALITY</span>
            </h2>
            <div className="w-20 hover:w-40 transition-all duration-500 h-0.5 bg-gray-100"></div>
          </div>
          {/* one div */}
          <div className="flex flex-col items-start justify-start gap-y-7">
            <Image data-aos="fade-up" src={img} className="h-72 w-96 rounded-top" alt="img" />
            <p className="text-gray-400 w-96">
              The entire NAFOSA team is committed with the health and welfare
              of the animals our products are intended for. Thanks to a
              VERTICALLY integrated production.
            </p>
            <button className="text-[#385013] uppercase">Read More</button>
          </div>
          {/* one div */}
          <div></div>
        </div>

        <div className="md:col-span-6 lg:col-span-4 col-span-12 flex flex-col items-start justify-start gap-y-5">
          {/* one div */}
          <div className="flex flex-col items-start justify-start gap-y-6">
            <h2 className="text-2xl">
              STRONG
              <span className="text-[#385013] font-bold p-1">POINTS</span>
            </h2>
            <div className="w-20 hover:w-40 transition-all duration-500 h-0.5 bg-gray-100"></div>
          </div>
          {/* one div */}
          <div className="border border-gray-300 border-2 rounded-md p-4">
            <div className="flex flex-col items-start gap-y-4">
              <h2 className="text-l text-[#385013] w-96">
                Product available all year round
              </h2>
              <p className="text-gray-500 font-bold w-96">
                Nafosa produces in Spain as well as Argentina and manages
                40,000 hectares with a production potential exceeding 400,000
                tons that are dehydrated at our facilities. This ensures the
                company is capable of supplying product all year round.
              </p>
            </div>
          </div>
          {/* one div */}
          <div className="w-full">
            <ul className="flex flex-col items-start gap-y-4">
              <li className="nav-item border w-80 border-gray-300 border-2 rounded-md p-4">
                <a className="nav-link active" href="#" aria-current="page">
                  Uniformity of the product
                </a>
              </li>
              <li className="nav-item border border-gray-300 w-80 rounded-md border-2 p-4">
                <a className="nav-link" href="#">
                  Traceability of the products
                </a>
              </li>
              <li className="nav-item border border-gray-300 w-80 rounded-md border-2 p-4">
                <a className="nav-link disabled" href="#">
                  Advice and personalised service
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="col-span-12 md:col-span-6 lg:col-span-4 space-y-4">
          {/* one div */}
          <div className="flex flex-col items-start justify-start gap-y-6">
            <h2 className="text-2xl">
              OUR
              <span className="text-[#385013] font-bold px-1">CATALOGUE</span>
            </h2>
            <div className="w-20 hover:w-40 transition-all duration-500 h-0.5 bg-gray-100"></div>
          </div>
          {/* one div */}
          <div>
            <video
              className=" w-80 md:w-80 lg:w-full"
              controls={false}
              autoPlay
              loop
              muted
              data-aos="fade-up"
            >
              <source src="/images/Untitled design.mp4" type="video/mp4" />
            </video>
          </div>
          {/* one div */}
          <div>
            <button className="uppercase bg-[#385013] text-gray-200 rounded-md p-3 text-center font-bold">
              Download
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
