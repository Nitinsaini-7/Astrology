import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const data = [
  {
    image: "/blog1.jpeg",
    title: "The Sacred Rituals of Pitru Paksha: Honoring Ancestors and Seeking Blessings",
    link: "/blog-1",
  },
  {
    image: "/blog2.jpeg",
    title: "Weekly Horoscope: Navigating the Stars from September 16th to 22nd, 2024",
    link: "/blog-2"
  },
  {
    image: "/blog3.jpeg",
    title: "Astrology and a Happy Marriage Life: The Key to Harmonious Relationships",
    link: "/blog-3",
  },
  {
    image: "/blog4.jpeg",
    title: "Your Knowledge is Your Power: How Astrology Illuminates Personal Strengths",
    link: "/blog-4"

  },
];

const Blog = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
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
    <div className="mt-14">
      <div className="flex items-center justify-center py-10 ">
        <span className=" px-1 py-4 bg-yellow-500 mr-1"></span>
        <h1 className="text-3xl font-bold uppercase text-black">Our Blog</h1>
        <span className=" px-1 py-4 bg-yellow-500 ml-1"></span>
      </div>

      <div className="w-10/12 m-auto slider-container">
        <Slider {...settings}>
          {data.map((item, index) => {
            return (
              <div key={index} className="flex gap-4 p-5 hover:scale-105 cursor-pointer duration-300">
                <div  className="bg-white shadow-lg">
                  <img src={item.image} alt="" className="h-52 w-full" />

                  <div className="text-center grid place-items-center py-4 px-2">
                    <div>
                      <p className="text-black text-xl font-bold">{item.title}</p>
                    </div>
                    <div>
                      <p className="text-black py-2">{item.text}</p>
                    </div>
                    <Link to={item.link} onClick={() => {
                      window.scroll(0, 0);
                    }} >
                    <button className="p-2 border-2 px-5 text-yellow-500 hover:bg-yellow-500 duration-300 hover:text-white border-yellow-500 rounded-full">Read More </button>
                  </Link>
                  </div>
                  
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default Blog;
