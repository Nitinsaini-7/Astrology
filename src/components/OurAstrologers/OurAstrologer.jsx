import React from "react";
import { Link } from "react-router-dom";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const astrologerData = [
  {
    image: "/astro1.jfif",
    name: "Neeraj",
    experience: "4+"
  },
  {
    image: "/astro2.jfif",
    name: "Mahesh Chaurasiya",
    experience: "4+"
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
      <div className="flex md:items-center md:justify-center p-2 w-full md:gap-20 gap-2 overflow-x-scroll no-scrollbar">
        {data.map((item, index) => (
          <div key={index} className="">
            <div>
              <div className="flex items-center justify-center">
                <div className="flex items-center justify-center bg-white w-14 h-14 rounded-full shadow-md">
                  <img src={item.image} alt="" className="w-10" />
                </div>
              </div>

              <div className="text-sm text-center flex items-center justify-center text-black">
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
                  <div className=" bg-white p-2  shadow-md hover:scale-110 duration-300">
                    <div className="flex items-center justify-center">
                      <div className="bg-slate-300 w-28 h-28 flex overflow-hidden items-center justify-center rounded-full">
                        <img src={item.image} alt="" className="w-28 h-28" />
                      </div>
                    </div>

                    <div className="bg-white h-20 grid">
                      <p className="font-semibold text-yellow-500 text-center ">
                        {item.name}
                      </p>
                      <p className="text-center">Experience: {item.experience} Years</p>
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
