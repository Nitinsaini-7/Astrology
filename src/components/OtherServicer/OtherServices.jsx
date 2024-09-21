import React from "react";
import { Link } from "react-router-dom";

const OtherServices = () => {
  const data = [
    {
      image: "/om.png",
      title: "Today's Panchang",
      link: "/",
    },
    {
      image: "/ganesha.png",
      title: "Free Janam Kundali",
      link: "/janam-kundali",
    },
    {
      image: "/kundli.png",
      title: "Kundali Matching",
      link: "/kundali-matching",
    },
    {
      image: "/astrology.png",
      title: "Products",
      link: "/product-details",
    },
    {
      image: "/horoscope.png",
      title: "Free Daily Horoscope",
      link: "/",
    },
    {
      image: "/blog.png",
      title: "Astrology Blog",
      link: "/blog",
    },
  ];
  return (
    <div className="pt-10">
      <div className="flex items-center justify-center py-10">
        <span className=" px-1 py-4 bg-yellow-500 mr-1"></span>
        <h1 className="text-3xl font-bold text-center uppercase text-black">
          OTHER ASTROLOGy Services
        </h1>
        <span className=" px-1 py-4 bg-yellow-500 ml-1"></span>
      </div>

      <div className="flex md:justify-center p-2 w-full md:gap-20 gap-2 overflow-x-scroll no-scrollbar">
        {data.map((item, index) => (
          <div key={index} className="">
            <div>
              <div className="flex items-center justify-center">
                <div className="flex items-center justify-center group bg-white w-14 h-14 rounded-full shadow-md">
                  <Link
                    to={item.link}
                    onClick={() => {
                      window.scroll(0, 0);
                    }}
                  >
                    <img
                      src={item.image}
                      alt=""
                      className="w-10 group-hover:scale-110 cursor-pointer duration-200"
                    />
                  </Link>
                </div>
              </div>

              <div className="text-sm text-center flex items-center justify-center text-black hover:text-white duration-200">
                <Link
                  onClick={() => {
                    window.scroll(0, 0);
                  }}
                  to={item.link}
                  className="w-28"
                >
                  {item.title}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OtherServices;
