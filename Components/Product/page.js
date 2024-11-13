"use client";
import React, { useState } from "react";
import { Products } from "../../app/Constant/index";
import PropTypes from "prop-types";
import Slider from "react-slick";
import img1 from "../../public/images/logo.png";

import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faShareAlt,
  faStar,
  faEye,
  faArrowLeft,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

export const ProductCard = ({ popularproduct }) => {
  const [showIcons, setShowIcons] = useState(false);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1200, // قم بتغيير هذه القيمة إلى 1200 أو 1024
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ]
  } ;

  return (
    <div className="flex flex-col lg:flex-row">
      <Slider {...settings} className="w-[100%] lg:w-[94%]">
        {popularproduct.map((product) => (
          <div key={product.id} className="relative">
            <div className=" w-[100%] lg:w-[90%] cursor-pointer p-4 mx-auto overflow-hidden transition-all duration-300 transform bg-white rounded-lg shadow-lg hover:shadow-2xl hover:-translate-y-2 hover:scale-105 group">
              {" "}
              <div
                className={`absolute top-5 right-0 flex flex-col items-center gap-4 p-2 pb-4 bg-gray-50 rounded-r-lg transition-transform duration-300 ${
                  showIcons
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-10"
                }`}
              >
                <button
                  onClick={() => console.log("Share clicked")}
                  className="hover:text-gray-700"
                >
                  <FontAwesomeIcon icon={faFacebookF} />
                </button>
                <button
                  onClick={() => console.log("Like clicked")}
                  className="hover:text-gray-700"
                >
                  <FontAwesomeIcon icon={faHeart} />
                </button>
                <button
                  onClick={() => console.log("Share clicked")}
                  className="hover:text-gray-700"
                >
                  <FontAwesomeIcon icon={faShareAlt} />
                </button>
                <button
                  onClick={() => console.log("View clicked")}
                  className="hover:text-gray-700"
                >
                  <FontAwesomeIcon icon={faEye} />
                </button>
              </div>
              <button
                onClick={() => setShowIcons(!showIcons)}
                className="absolute right-0 bottom-40 transform -translate-y-1/2 bg-gray-100 p-2 rounded-l-lg hover:bg-gray-300 transition-colors duration-300"
              >
                {showIcons ? (
                  <FontAwesomeIcon icon={faArrowRight} />
                ) : (
                  <FontAwesomeIcon icon={faArrowLeft} />
                )}
              </button>
              <div className="bg-gray-100 rounded-md">
                <Image
                  src={product.imageproduct}
                  alt={product.title}
                  className="object-cover h-56 mx-auto"
                />
              </div>
              <div className="overflow-hidden py-3 flex flex-col justify-start">
                <h3 className="mb-4 px-2 text-xl font-bold text-gray-800">
                  {product.title}
                </h3>
                <div className="flex justify-start p-1 items-center gap-2">
                  <span className="bg-[#061432] text-base px-2 py-0.5 text-white rounded-md">
                    {product.span1}
                  </span>
                  <span className="bg-[#7fcc2a] text-white p-1 rounded-md font-semibold">
                    {product.span2}
                  </span>
                  <span className="bg-[#385013] text-white p-1 rounded-md font-semibold">
                    {product.span3}
                  </span>
                </div>
                <div className="py-3">
                  <span className="text-gray-500 p-1 font-semibold">
                    {product.details}
                  </span>
                </div>

                {/* زرار View Details مع تأثير الظهور */}
                <Link
                  href="/modules/ProductDetailsPage/ProductDetailsPage"
                  className="mx-auto"
                >
                  <button className="px-4 py-2 mt-5 text-white bg-[#7fcc2a] rounded animate-flash opacity-0 transition-opacity duration-1000 ease-in-out group-hover:opacity-100 transform group-hover:scale-105">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      <div className=" top-5 flex items-center justify-center py-10 z-50">
        <Link href="/modules/FilterProduct/Filterproduct">
          <button  className="bg-[#7fcc2a] hover:bg-green-900 hover:scale-105 animate-flash transition-all duration-300 p-3 rounded-md text-white font-bold">
            Products                  

          </button>
        </Link>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  popularproduct: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      imageproduct: PropTypes.string.isRequired,
      span1: PropTypes.string.isRequired,
      span2: PropTypes.string.isRequired,
      span3: PropTypes.string.isRequired,
      details: PropTypes.string.isRequired,
    })
  ).isRequired,
};


// CSS لأنيميشن الفلاش
<style jsx global>{`
  @keyframes flash {
    0%, 50%, 100% {
      opacity: 1;
    }
    25%, 75% {
      opacity: 0.5;
    }
  }

  .animate-flash {
    animation: flash 1.5s infinite;
  }
`}</style>

const page = () => {
  return (
    <section className="py-12 font-cairo">
      <div className="container px-6 mx-auto">
        <div className="flex flex-row items-center justify-start gap-4">
          <Image src={img1} alt="Logo" className="rounded-md w-[200px]" />
          <h2 className="text-4xl font-bold font-serif text-gray-800">
            Products
          </h2>
        </div>
        <div className="py-5">
          <ProductCard popularproduct={Products} />
        </div>
        <div className="my-12 w-[90%] mx-auto h-0.5 bg-gray-300"></div>
      </div>
    </section>
  );
};

export default page;
