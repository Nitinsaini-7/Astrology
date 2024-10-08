// import logo from './logo.svg';
// import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const data = [
  {
    link: "https://www.youtube.com/embed/UzPI-kM7Etg?si=Tw2knDwHqDW928DB",
    title: "Daily Horoscope",
  },
  {
    link: "https://www.youtube.com/embed/8XyM42m82Fk?si=WgSQTCxFWSB8Aivp",
    title: "Weekly Horoscope",
  },
  {
    link: "https://www.youtube.com/embed/CpqQFCIQURY?si=X5MvVxVyf6tBho7J",
    title: "Read Your Own Hand/Palm",
  },
];



function AstrologyVideo() {
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
    <div className=" pb-10">
      <div className="flex items-center justify-center py-10">
        <span className=" px-1 py-4 bg-yellow-500 mr-1"></span>
        <h1 className="text-3xl font-bold uppercase text-black">
          Astrology Videos
        </h1>
        <span className=" px-1 py-4 bg-yellow-500 ml-1"></span>
      </div>

      <div className="">
        <div className="w-4/5 m-auto slider-container">
          <Slider {...settings}>
            {data.map((item, index) => {
              return (
                <div key={index} className="p-4">
                  <div className="rounded-lg  shadow-md hover:scale-110 duration-300">
                    <div className="">
                      <iframe
                        src={item.link}
                        frameborder="0"
                        allowfullscreen
                        className="w-full aspect-video "
                      ></iframe>
                    </div>

                    <div className="bg-white h-20 flex items-center justify-center">
                      <p className="font-semibold text-blue-500 text-center">
                        {item.title}
                      </p>
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
}

export default AstrologyVideo;
