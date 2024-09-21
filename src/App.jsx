import React from "react";
import Hero from "./components/Hero/Hero";
import OurAstrologer from "./components/OurAstrologers/OurAstrologer";
import AstrologyVideo from "./components/AstrologyVideo/AstrologyVideo";
import Product from "./components/Products/Product";
import Blog from "./components/Blog/Blog";
import WhatAstrology from "./components/WhatAstrology/WhatAstrology";
import WhyAstrology from "./components/WhyAstrology/WhyAstrology";
import OtherServices from "./components/OtherServicer/OtherServices";

const App = () => {
  return (
    <div>
      <Hero/>
      <div className="relative bg-[url(/back.jpg)] bg-cover w-full bg-fixed">
        <div className="bg-yellow-500 bg-opacity-40">
          <OtherServices/>
          <OurAstrologer/>
          <AstrologyVideo/>
          <Product/>
          <Blog/>
          <WhatAstrology/>
          <WhyAstrology/>
        </div>
      </div>
    </div>
  );
};

export default App;
