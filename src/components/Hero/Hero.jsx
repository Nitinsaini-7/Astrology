import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const data = [
  {
    image: "/hero1.png",
    title: "Horoscope Today",
  },
  {
    image: "/hero2.png",
    title: "Exclusive Video of Daily Horoscope",
  },
  {
    image: "/hero3.png",
  },
];

const Hero = () => {
  let settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 3000,
    cssEase: "linear"
  };

  return (
    <div className="bg-white">
      <div className="md:mt-40 mt-20 md:mb-10 -mb-5 md:mx-40 md:overflow-x-visible overflow-x-hidden">
        <div className="w-full m-auto">
          <Slider {...settings}>
            {data.map((item, index) => {
              return (
                <div key={index} className="p-5">
                  <img
                    src={item.image}
                    className="w-full h-96 rounded-xl shadow-lg shadow-black "
                  />
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Hero;
