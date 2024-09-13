import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'
// import { Component } from './components/Hero/Hero'


const OutletPage = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  )
}

export default OutletPage