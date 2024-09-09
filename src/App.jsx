import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import AstrologyVideo from './components/AstrologyVideo/AstrologyVideo'
import OurAstrologer from './components/OurAstrologers/OurAstrologer'
import Product from './components/Products/Product'
// import { Component } from './components/Hero/Hero'


const App = () => {
  return (
    <div className="">
      <Navbar></Navbar>
      {/* <Component></Component>/ */}

      <Hero></Hero>
      <OurAstrologer></OurAstrologer>
      <AstrologyVideo></AstrologyVideo>
      <Product></Product>
    </div>
  )
}

export default App