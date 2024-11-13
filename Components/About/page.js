'use client'
import React , {useEffect} from 'react';
import img1 from "../../public/images/892.jpg";
import Image from "next/image";
import AOS from "aos"; // استيراد AOS
import "aos/dist/aos.css"; // استيراد الـ CSS الخاص بـ AOS

function page() {
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
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6  p-8 py-40 bg-gray-100">
      {/* Image Section */}
      <div className=" col-span-4 lg:col-span-3 w-full mx-0 lg:mx-14"    data-aos="fade-up" >
      <Image
            src={img1}
            alt="Description"
            className=" rounded-md w-[500px]"
          />
      </div>
      
      {/* Text Section */}
      <div className=" col-span-3  p-4 text-left  space-y-10">
        <h2 className="text-3xl font-bold mb-4 text-[#385013]">Feed and Agriculture</h2>
        <p className="text-gray-700 text-xl leading-relaxed">
          The field of feed and agriculture is one of the most essential sectors supporting the economy and meeting local and global demands.
          Through the application of advanced agricultural methods, we contribute to enhancing production quality and increasing crop yields. 
          Feed plays a crucial role in animal husbandry and improving livestock productivity.
        </p>
      </div>
    </section>
  );
}

export default page;
