import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const data = [
  {
    image: "/product1.png",
    title: "Gold Art India Gold Art India",
    price: "₹750",
  },
  {
    image: "/product2.png",
    title: "Rudraksha Mala (108+1 Beads, Bead Size: 12 mm each)",
    price: "₹500",
  },
  {
    image: "/product3.png",
    title: "5 Mukhi Rudraksha White Crystal Bracelet",
    price: "₹1200",
  },
  {
    image: "/product4.png",
    title: "Green Cut Natural Emerald Beryl Gemstone",
    price: "₹4500",
  },
];
const Product = () => {
  let settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
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
    <div className="bg-yellow-200">
      <div className="flex items-center justify-center py-10">
        <span className=" px-1 py-4 bg-orange-400 mr-1"></span>
        <h1 className="text-3xl font-bold uppercase text-black">
          Astrology Videos
        </h1>
        <span className=" px-1 py-4 bg-orange-400 ml-1"></span>
      </div>

      <div className="w-10/12 m-auto slider-container">
        <Slider {...settings}>
          {data.map((item, index) => {
            return(
                <div key={index}>
              <img src={item.image} alt="" />

              <div>
                <p>{item.title}</p>
              </div>
              <div>
                <p>{item.price}</p>
              </div>
            </div>
            )
          })}
        </Slider>
      </div>
    </div>
  );
};

export default Product;
