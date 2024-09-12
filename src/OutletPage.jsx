import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import AstrologyVideo from './components/AstrologyVideo/AstrologyVideo'
import OurAstrologer from './components/OurAstrologers/OurAstrologer'
import Product from './components/Products/Product'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'
// import { Component } from './components/Hero/Hero'


const OutletPage = () => {
  return (
    <div className="">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  )
}

export default OutletPage