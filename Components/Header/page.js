"use client";
import React, { useEffect, useState } from "react";
import alex from "../../public/images/20783.jpg";
import cairo from "../../public/images/459.jpg";
import dahab from "../../public/images/896.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "next/image";
import FormControl from "@mui/material/FormControl";
import CountryFlag from "react-country-flag";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

const Header = () => {
  const [location, setLocation] = useState({
    latitude: null,
    longitude: null,
    country: "Loading...",
    currency: "",
    countryCode: "",
    error: null,
  });
  // Country options
  const countryOptions = [
    { value: "US", label: "United States", currency: "USD" },
    { value: "EG", label: "Egypt", currency: "EGP" },
    // Add more countries as needed
  ];

  // Handle country change
  const handleCountryChange = (event) => {
    const selectedCountry = event.target.value;
    const countryData = countryOptions.find(
      (option) => option.value === selectedCountry
    );

    if (countryData) {
      setCurrency(countryData.currency); // تحديث العملة بناءً على البلد
      setLocation((prev) => ({
        ...prev,
        country: countryData.label,
        countryCode: countryData.value,
      }));
    }
  };

  // Auhrefmatically find location on component mount
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          try {
            // Fetching country data based on location
            const response = await fetch(`https://ipapi.co/json/`);
            const data = await response.json();
            if (data.country_name && data.currency_name && data.country) {
              setLocation((prev) => ({
                ...prev,
                country: data.country_name,
                currency: data.currency_name,
                countryCode: data.country, // Used to display flag
              }));
              // Set currency based on location
              const countryData = countryOptions.find(
                (option) => option.value === data.country
              );
            } else {
              setLocation((prev) => ({
                ...prev,
                country: "Country not found",
              }));
            }
          } catch (error) {
            console.error("Error fetching location data:", error);
            setLocation((prev) => ({
              ...prev,
              error: "Failed to get location",
            }));
          }
        },
        (error) => {
          console.error("Error getting location:", error);
          setLocation((prev) => ({ ...prev, error: "Failed to get location" }));
        }
      );
    } else {
      setLocation({
        latitude: null,
        longitude: null,
        country: "Geolocation is not supported by this browser",
        currency: "Unknown",
        countryCode: "",
        error: null,
      });
    }
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <header className="relative h-screen">
      {/* Static Text Over the Slider */}

      <div className="absolute inset-10 flex flex-col py-52 space-y-4 px-4 md:px-8">
        <h3 className="z-10 text-2xl font-semibold text-white md:text-4xl lg:text-6xl">
          Welcome
        </h3>
        <h2 className="z-10 text-2xl font-semibold text-[#7fcc2a] md:text-4xl lg:text-5xl">
          Timmerman!
        </h2>
        <h5 className="z-10 text-lg font-semibold text-white md:text-xl lg:text-2xl ">
          Shokra is a leading agricultural company specializing in the
          production of high-quality forage crops, <br /> particularly alfalfa.
          With a focus on sustainable farming practices, Shokra ensures its
          products meet the highest standards for both local and international
          markets. <br /> The company has a strong reputation for innovation and
          efficiency in crop production. <br />
        </h5>
      </div>

      <FormControl
        variant="outlined"
        className="fixed left-10 top-[88%] z-50 bg-[#7fcc2a] border rounded-md"
      >
        <Select
          labelId="country-select-label"
          id="country-select"
          value={location.countryCode}
          onChange={handleCountryChange}
          label="Country"
          className="text-sm w-28 h-8 select-none  text-gray-200 font-bold "
        >
          {countryOptions.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              <div className="flex items-center space-x-2 ">
                <CountryFlag countryCode={option.value} svg />
                <span className="">{option.label}</span>
              </div>
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {/* Slider with Images */}
      <Slider {...settings}>
        <div className="slider slider-item">
          <Image src={alex} alt="Alex" className="h-[700px]" />
        </div>
        <div className="slider slider-item">
          <Image src={cairo} alt="Cairo" className="h-[700px]" />
        </div>
        <div className="slider slider-item">
          <Image src={dahab} alt="Dahab" className="h-[700px]" />
        </div>
      </Slider>
    </header>
  );
};

export default Header;
