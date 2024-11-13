"use client";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faGithub,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import img1 from "../../public/images/logo.png";
import SearchIcon from "@mui/icons-material/Search";
import Image from "next/image";

import { Button } from "@mui/material";

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      {/* detail nav */}
      <section className="bg-[#385013] p-2">
        <div className="flex items-start justify-between font-serif text-white px-4">
          <div>
            <h2>Your E-mail</h2>
          </div>

          <div>
            <div className="flex items-start space-x-4">
              <Link href="#" className="text-white hover:text-gray-800">
                <FontAwesomeIcon icon={faFacebook} />
              </Link>
              <Link href="#" className="text-white hover:text-gray-800">
                <FontAwesomeIcon icon={faTwitter} />
              </Link>
              <Link href="#" className="text-white hover:text-gray-800">
                <FontAwesomeIcon icon={faGithub} />
              </Link>
              <Link href="#" className="text-white hover:text-gray-800">
                <FontAwesomeIcon icon={faYoutube} />
              </Link>

              <Link href="/Pages/Auth">
                <Button className="relative pt-0  z-30 px-4 text-white transition duration-300 rounded-md">
                  Login
                </Button>
              </Link>

            </div>
          </div>
        </div>
      </section>
      {/* nav */}
      <div className="z-50 ">
        <section
          className={`fixed left-0  z-50 flex items-center justify-between w-full h-28
    transition-all duration-800 ease-in-out
    ${
      scrolling
        ? "p-9 top-0 duration-500 bg-white shadow-lg transform transition-all hover:shadow-xl"
        : "href py-20 duration-1000   transform transition-all  text-white"
    }
 `}
        >
          <Image
            src={img1}
            alt="Description"
            className={`${scrolling ? "w-40" : "w-[200px]"}`}
          />{" "}
          <div className="relative flex items-center gap-5 justify-between">
            <SearchIcon className=" transform  text-gray-400" />
            <input
              type="text"
              placeholder="Search..."
              className="  text-black dark: shadow shadow-sm shadow-gray-500 sha   pl-10 pr-4 py-2 rounded-lg"
            />
          </div>
          <div className="flex items-center pr-4 space-x-4 md:pr-20 ">
            <div className="hidden  space-x-4 lg:flex">
              <Button className="px-2 py-1 font-bold md:px-4 md:py-2  focus:text-[#385013] active:text-[#385013]">
                <Link className={`${scrolling ? "text-[#385013]" : "text-gray-200"}`} href="/">
                  Home
                </Link>
              </Button>
              <Button className="px-2 py-1 font-bold md:px-4 md:py-2 focus:text-[#385013] active:text-[#385013]">
                <Link className={`${scrolling ? "text-[#385013]" : "text-gray-200"}`} href="/Pages/About">
                  About
                </Link>
              </Button>
              <Button className="px-2 py-1 font-bold md:px-4 md:py-2 focus:text-[#385013] active:text-[#385013]">
                <Link className={`${scrolling ? "text-[#385013]" : "text-gray-200"}`} href="/Pages/News">
                  News
                </Link>
              </Button>
              <Button className="px-2 py-1 font-bold md:px-4 md:py-2 focus:text-[#385013] active:text-[#385013]">
                <Link className={`${scrolling ? "text-[#385013]" : "text-gray-200"}`} href="/services">
                  Services
                </Link>
              </Button>
              <Button className="px-2 py-1 font-bold md:px-4 md:py-2 focus:text-[#385013] active:text-[#385013]">
                <Link className={`${scrolling ? "text-[#385013]" : "text-gray-200"}`} href="/Pages/Contact">
                  {" "}
                  Contact
                </Link>
              </Button>
            </div>
            <div className="flex items-center space-x-4 ">
              <Link href="/Pages/Auth">
                <button className="px-4 py-2 bg-[#385013] text-white rounded-md   hover:-translate-y-1 transition-all  duration-300 z-30 relative">
                  Signup
                </button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Navbar;
