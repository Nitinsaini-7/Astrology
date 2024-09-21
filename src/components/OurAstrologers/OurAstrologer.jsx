import React from "react";
import { Link } from "react-router-dom";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const astrologerData = [
  {
    image: "/astro1.jfif",
    name: "Neeraj",
    experience: "4+",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque itaque nulla sunt. Asperiores, ut vel!",
  },
  {
    image: "/astro2.jfif",
    name: "Mahesh Chaurasiya",
    experience: "4+",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque itaque nulla sunt. Asperiores, ut vel!",
  },
];

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

  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <div className="flex pt-10 md:justify-center p-2 w-full md:gap-20 gap-2 overflow-x-scroll no-scrollbar">
        {data.map((item, index) => (
          <div key={index} className="">
            <div>
              <div className="flex items-center justify-center">
                <div className="flex items-center justify-center group bg-white w-14 h-14 rounded-full shadow-md">
                <Link to={item.link}  onClick={() => {
                    window.scroll(0, 0);
                  }}>
                <img src={item.image} alt="" className="w-10 group-hover:scale-110 cursor-pointer duration-200" />

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
      <div className="flex items-center justify-center py-10">
        <span className=" px-1 py-4 bg-yellow-500 mr-1"></span>
        <h1 className="text-3xl font-bold uppercase text-black">
          OUR ASTROLOGERS
        </h1>
        <span className=" px-1 py-4 bg-yellow-500 ml-1"></span>
      </div>

      <div>
        <p className="text-center text-black">
          Get in touch with the best Online Astrologers, anytime & anywhere!
        </p>
      </div>

      <div className="">
        <div className="w-4/5 m-auto slider-container">
          <Slider {...settings}>
            {astrologerData.map((item, index) => {
              return (
                <div key={index} className="p-4">
                  <div className="bg-white md:rounded-full rounded-3xl p-10 gap-2 grid md:grid-cols-2 grid-cols-1  shadow-md hover:scale-105 cursor-pointer duration-300">
                    <div>
                      <div className="flex items-center justify-center">
                        <div className="bg-slate-300 w-28 h-28 flex overflow-hidden items-center justify-center rounded-full">
                          <img src={item.image} alt="" className="w-28 h-28" />
                        </div>
                      </div>

                      <div className="">
                        <p className="font-semibold text-yellow-500 text-center ">
                          {item.name}
                        </p>
                        <p className="text-center mt-1">
                          Experience: {item.experience} Years
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center justify-center">
                      <div>
                        <p className="text-yellow-500 text-xl font-semibold">About Astrologer -</p>
                        <div className="text-3xl text-yellow-500 text-left leading-tight h-3">
                          “
                        </div>
                        <p className="text-sm text-gray-600 text-center px-5">
                          {item.about}
                        </p>
                        <div className="text-3xl text-yellow-500 text-right leading-tight h-3 -mt-3">
                          ”
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default OurAstrologer;
