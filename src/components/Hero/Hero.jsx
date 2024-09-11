import React from "react";
import { Link } from "react-router-dom";
import OurAstrologer from "../OurAstrologers/OurAstrologer";
import AstrologyVideo from "../AstrologyVideo/AstrologyVideo";
import Product from "../Products/Product";
import Blog from "../Blog/Blog";
import WhatAstrology from "../WhatAstrology/WhatAstrology";
import WhyAstrology from "../WhyAstrology/WhyAstrology";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";

// const data = [
//   {
//     image: "/hero1.png",
//     title: "Horoscope Today",
//   },
//   {
//     image: "/hero2.png",
//     title: "Exclusive Video of Daily Horoscope",
//   },
//   {
//     image: "/hero3.png",
//   },
// ];

const Hero = () => {
  // let settings = {
  //   dots: true,
  //   infinite: true,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   speed: 500,
  //   autoplaySpeed: 3000,
  //   cssEase: "linear"
  // };

  return (
    <div className="bg-white w-full">
      <section className="relative bg-[url(/a2.jpg)] bg-cover bg-center bg-no-repeat h-screen">
        <div className="absolute inset-0 bg-black md:bg-opacity-50 bg-opacity-40"></div>

        <div className="relative md:pt-44 mx-auto max-w-screen-xl md:flex md:justify-center md:items-center px-4 py-32 sm:px-6 lg:flex  lg:items-center lg:justify-center lg:gap-40 lg:px-8">
          <div>
            <img src="/spin.png" alt="" className="md:w-96 w-full animate-spin-slow "/>
          </div>
          <div className="max-w-xl lg:text-center text-center  md:text-left ltr:sm:text-left rtl:sm:text-right">
           
              <p className=" md:text-4xl text-3xl font-bold text-yellow-500 md:backdrop-blur-sm">
              Read Your Daily Horoscope Today
              </p>

            <p className="mt-2 max-w-lg text-white md:text-xl text-lg">
            Consectetur adipiscing elit, sed do eiusmod tempor incididuesdeentiut labore etesde dolore magna aliquapspendisse and the gravida.
            </p>

            <div className="mt-2 md:mt-10 flex flex-wrap gap-4 items-center justify-center">
              <Link
                to={'/signin'}
                className="block w-full rounded bg-yellow-500 px-12 py-3 text-sm font-medium text-white shadow border-2 border-yellow-500 hover:bg-transparent hover:text-yellow-500 focus:outline-none sm:w-auto"
              >
                Get Started
              </Link>

              <Link
                to={''}
                className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-yellow-500 shadow border-2 border-white hover:bg-transparent hover:text-white focus:outline-none sm:w-auto"
              >
                Learn More
              </Link>
            </div>
          </div>

        </div>
      </section>

      <OurAstrologer></OurAstrologer>
      <AstrologyVideo></AstrologyVideo>
      <Product></Product>
      <Blog></Blog>
      <WhatAstrology></WhatAstrology>
      <WhyAstrology/>
      

    </div>
  );
};

export default Hero;
