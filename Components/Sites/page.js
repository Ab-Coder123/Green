'use client'
import Image from "next/image";
import React from "react";
import img1 from "../../public/images/Nafosa-Argentina_planta.jpg";
import img2 from "../../public/images/nafosa-esplus-binefar.png";
import img3 from "../../public/images/nafosa-esplus-pinsoro.png";
import img4 from "../../public/images/nafosa-monzon.png";
import img5 from "../../public/images/nafosa-peralta.png";

const Page = () => {
  return (
    <section className="py-14">
      <div className="flex flex-col items-center justify-center mx-auto text-center ">
        {/* head  */}
        <div className="py-12">
          <div className="flex flex-col items-center justify-start gap-y-6 ">
            <h2 className="text-3xl uppercase">
              Our
              <span className="text-[#385013] font-bold p-1">Sites</span>
            </h2>
            <p className="text-gray-300 font-semibold ">
              Get to know a little bit more about our plants and what are the
              characteristics that make them unique.
            </p>
            <div className="w-60 transition-all duration-500 h-0.5 bg-gray-100"></div>
          </div>
        </div>
        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-9 gap-12">
            <div className="flex flex-col items-center justify-center gap-y-5 col-span-3">
              <div>
                <Image src={img1} className="h-40" alt="industry" />
              </div>
              <div>
                <h2 className="text-[#385013] font-bold p-1 text-2xl">
                  ESPLÚS
                </h2>
                <p className="text-gray-400 font-bold p-1 text-1xl">
                  NAFOSA SPAIN
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center gap-y-5 col-span-3">
              <div>
                <Image src={img2} className="h-40" alt="industry" />
              </div>
              <div>
                <h2 className="text-[#385013] font-bold p-1 text-2xl">
                  MONZÓN
                </h2>
                <p className="text-gray-400 font-bold p-1 text-1xl">
                  NAFOSA SPAIN
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center gap-y-5 col-span-3">
              <div>
                <Image src={img3} className="h-40" alt="industry" />
              </div>
              <div>
                <h2 className="text-[#385013] font-bold p-1 text-2xl">
                  PERALTA
                </h2>
                <p className="text-gray-400 font-bold p-1 text-1xl">
                  NAFOSA SPAIN
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center gap-y-5 col-span-3  lg:col-span-5">
              <div>
                <Image src={img4} className="h-40" alt="industry" />
              </div>
              <div>
                <h2 className="text-[#385013] font-bold p-1 text-2xl">
                  PINSORO
                </h2>
                <p className="text-gray-400 font-bold p-1 text-1xl">
                  NAFOSA SPAIN
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center gap-y-5 col-span-3">
              <div>
                <Image src={img5} className="h-40" alt="industry" />
              </div>
              <div>
                <h2 className="text-[#385013] font-bold p-1 text-2xl">
                  PATAGONIA
                </h2>
                <p className="text-gray-400 font-bold p-1 text-1xl">
                  NAFOSA ARGENTINA
                </p>
              </div>
            </div>


          </div>
        </div>
    </section>
  );
};

export default Page;
