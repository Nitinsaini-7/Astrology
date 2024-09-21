import React from "react";
import { Link } from "react-router-dom";

const data = [
  {
    image: "/chat.png",
    title: "Chat with Astrologer",
    color: "sky-600"
  },
  {
    image: "telephone.png",
    title: "Talk to Astrologer",
    color: "lime-500"
  },
  {
    image: "/cart.png",
    title: "Astromall Shop",
    color: "blue-300"
  },
  {
    image: "/kumbh-kalash.png",
    title: "Book a Pooja",
    color: "orange-400"
  },
];

const Hero = () => {
  return (
    <div className=" w-full pb-2 -mb-2">
      <section className="relative bg-[url(/a2.jpg)] bg-cover bg-center bg-no-repeat h-screen">
        <div className="absolute inset-0 bg-black md:bg-opacity-50 bg-opacity-40"></div>
        <div className="flex items-center justify-center">

        <div className="relative pt-32  mx-auto max-w-screen-xl md:flex md:justify-center md:items-center px-4  sm:px-6 lg:flex  lg:items-center lg:justify-center lg:gap-40 lg:px-8">
          <div className="flex items-center justify-center">
            <img
              src="/spin.png"
              alt=""
              className="md:w-96 w-72 animate-spin-slow "
            />
          </div>
          <div className="max-w-xl lg:text-center text-center  md:text-left ltr:sm:text-left rtl:sm:text-right">
            <p className=" md:text-4xl text-3xl font-bold text-yellow-500">
              Read Your Daily Horoscope Today
            </p>

            <p className="mt-2 max-w-lg text-white md:text-xl text-lg">
              Explore your astrological chart and gain wisdom from the cosmos to
              enhance your life's journey.
            </p>

           
        <div className="relative w-full mt-10 flex flex-wrap items-center justify-center gap-4 ">
          {data.map((item) => (
            <div className={`bg-yellow-500 bg-opacity-5 border border-yellow-500 w-32 h-24 group p-3 grid place-items-center hover:backdrop-blur-md cursor-pointer duration-300 rounded-lg`}>
              <div className="flex items-center justify-center shadow-lg bg-white w-10 h-10 p-2 rounded-full">

              <img src={item.image} alt="" className="md:w-14 w-10 "/>
              </div>

              <p className={`group-hover:text-white text-center text-yellow-500 text-sm`}>{item.title}</p>
            </div>
          ))}
        </div>
          </div>
        </div>
        </div>


      </section>
    </div>
  );
};

export default Hero;
