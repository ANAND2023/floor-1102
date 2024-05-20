import React from 'react'
import Navbar from './Component/Heading/Navbar'
import Banner from './Component/Banner/Banner'
import Product from './Component/Product/Product'
import Contact from './Component/Pages/Contact/Contact'
import Project from './Component/Project/Project'
import { Marqueeapp } from './Component/Marquee/Marquee'
import About from './Component/About/About'
// import Faq from './Component/Faq/FaqSection'

import Footer from './Component/Footer/Footer'
import WhyChoose from './Component/whyChoose/WhyChoose'
import CoolVideoComponent from './Component/Video/CoolVideoComponent'
import Photo from './Component/Photo.jsx/Photo'
import Blogs from './Component/Blogs/Blogs'
import About2 from './Component/Pages/About/About'
// import MySlider from './Component/Slider/MySlider'

import LocomotiveScroll from 'locomotive-scroll';
import Video from './Component/Video/Video'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Landing from './Component/Landing'

const App = () => {
  const scroll = new LocomotiveScroll();
  
  return (
   < div className=' overflow-hidden'>
  <BrowserRouter>
  <Marqueeapp/>
    <Navbar/>
 

  <Routes>
    <Route path='/' element={<Landing/>}/>
    <Route path='/about' element={<About2/>}/>
    <Route path='/contact' element={<Contact/>}/>
  </Routes>
  <Footer/>
  </BrowserRouter>
    


   </div>
  )
}

export default App