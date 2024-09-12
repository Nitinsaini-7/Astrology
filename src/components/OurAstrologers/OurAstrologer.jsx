import React from "react";
import { Link } from "react-router-dom";

const OurAstrologer = () => {
  const data = [
    {
      image: "/om.png",
      title: "Today's Panchang",
      link: "/",
    },
    {
      image: "/ganesha.png",
      title: "Free Janam Kundali",
      link: "/",
    },
    {
      image: "/kundli.png",
      title: "Kundali Matching",
      link: "/",
    },
    {
      image: "/astrology.png",
      title: "Products",
      link: "/",
    },
    {
      image: "/horoscope.png",
      title: "Free Daily Horoscope",
      link: "/",
    },
    {
      image: "/blog.png",
      title: "Astrology Blog",
      link: "/",
    },
  ];

  return (
    <div>
      <div className="flex items-center justify-center py-10">
        <span className=" px-1 py-4 bg-orange-400 mr-1"></span>
        <h1 className="text-3xl font-bold uppercase text-black">
          OUR ASTROLOGERS
        </h1>
        <span className=" px-1 py-4 bg-orange-400 ml-1"></span>
      </div>

      <div>
        <p className="text-center text-black">
          Get in touch with the best Online Astrologers, anytime & anywhere!
        </p>
      </div>

      <div className="flex md:items-center md:justify-center p-2 w-full md:gap-20 gap-2 overflow-x-scroll no-scrollbar">
        {data.map((item, index) => (
          <div
            key={index}
            className=""
          >
            <div>
              <div className="flex items-center justify-center">
                <div className="flex items-center justify-center bg-white w-14 h-14 rounded-full shadow-md">
                  <img src={item.image} alt="" className="w-10" />
                </div>
              </div>

              <div className="text-sm text-center flex items-center justify-center text-black">
                <Link to={item.link} className="w-28">{item.title}</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurAstrologer;
