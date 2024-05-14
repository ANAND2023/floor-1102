import React from 'react'
import Navbar from './Component/Heading/Navbar'
import Banner from './Component/Banner/Banner'
import Product from './Component/Product/Product'
import Contact from './Component/Contact/Contact'
import Project from './Component/Project/Project'
import { Marqueeapp } from './Component/Marquee/Marquee'
import About from './Component/About/About'
// import Faq from './Component/Faq/FaqSection'
import FaqSection from './Component/Faq/Faq'
import Footer from './Component/Footer/Footer'
// import MySlider from './Component/Slider/MySlider'


const App = () => {
  return (
   <>
    
    <Marqueeapp/>
    <Navbar/>
<Banner/>
<Product/>
<Project/>
<About/>
<FaqSection/>
{/* <MySlider/> */}
<Contact/>
<Footer/>
   </>
  )
}

export default App