import React from 'react'
import Banner from './Banner/Banner'
import Photo from './Photo.jsx/Photo'
import About from './About/About'
import Blogs from './Blogs/Blogs'
import WhyChoose from './whyChoose/WhyChoose'
import Project from './Project/Project'
import Video from './Video/Video'
import Contact from './Contact/Contact'
import FaqSection from './Faq/Faq'
import { Framer } from './Framer'

const Landing = () => {
  return (
   <>
         
<Banner/>
{/* <Framer/> */}
<Photo/>
{/* <Product/> */}
<About/>
<Blogs/>

<WhyChoose/>
<Project/>
{/* <CoolVideoComponent/> */}
<Video/>
<FaqSection/>
{/* <MySlider/> */}
<Contact/>
   
   </>
  )
}

export default Landing