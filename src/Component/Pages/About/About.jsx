import React, { useEffect } from 'react'
import './style.css'
import Aboutpage from '../../About/About'
import { motion } from "framer-motion"
import 'aos/dist/aos.css';
import AOS from 'aos';
const About = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000, // duration of the animation
    });
  }, []);
// variants
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.5,
    }
  }
};
const childrenVariants = {
  hidden: {
    scale: 0,
    opacity: 0,
    y: 100,
  },
  visible: {
    scale: 1,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      mass: 1.5,
      stiffness: 200,
    }
  }
};

const picsContainerVariants = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "tween",
      duration: 1,
      delay: 2.5,
    }
  }
};

const picsVariants = {
  hidden: {
    scaleX: 0,
    opacity: 0,
    transition: {
      type: "tween",
      duration: 0.5,
      delay: 4,
    }
  },
  visible: {
    scaleX: 1,
    opacity: 1,
    originX: "left",
  }
};

  return (
<>
<motion.article 
 variants={containerVariants}
 initial="hidden"
 animate="visible"
  style={{ backgroundImage: "url('https://images.unsplash.com/photo-1590898152298-f2e0ea9287f6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
  backgroundAttachment: 'fixed', backgroundRepeat: "no-repeat", backgroundSize: "cover" 
 }}
>
  <div className="row grd-overlay">
    <motion.div className="medium-8 column w-[80%] mx-auto text-gray-200" variants={childrenVariants}>
    <h3 className="text-3xl mb-2 font-semibold leading-normal text-center">
         ABOUT US
        </h3>
      <p className="text-3xl font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
          Don't let your uses guess by attaching tooltips and popoves to
          any element. Just make sure you enable them first via
          JavaScript.
        </p>
    </motion.div>
  </div>
</motion.article>

<Aboutpage/>
<section className=" bg-blueGray-200 -mt-24">
  <div className=" mx-auto px-4">
    <div className="flex flex-wrap">
      <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-1 shadow-lg rounded-lg">
          <div className="px-4 flex-auto">
          </div>
        </div>
      </div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 w-[96%] mx-auto gap-7 pt-20 pb-10">
    {/* <div className="flex flex-wrap items-center mt-16"> */}
     <div className='w-full flex justify-center items-center'>
     <div className="w-full  px-4 mr-auto ml-auto  py-10 rounded-xl" data-aos="fade-up"
     data-aos-duration="2000" >
        
        <h3 className="text-3xl mb-2 font-semibold leading-normal text-center">
          Working with us is a pleasure
        </h3>
        <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
          Don't let your uses guess by attaching tooltips and popoves to
          any element. Just make sure you enable them first via
          JavaScript.
        </p>
        <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-blueGray-600">
          The kit comes with three pre-built pages to help you get started
          faster. You can change the text and images and you're good to
          go. Just make sure you enable them first via JavaScript.
        </p>
        <a href="#" className="font-bold text-blueGray-700 mt-8">Check Notus JS!</a>
      </div>
     </div>
      <div className="w-full  px-4 mr-auto ml-auto">
        <div data-aos="fade-left"
     data-aos-duration="2000" className="relative box_shadow  flex flex-col min-w-0 break-words w-full mb-2 shadow-lg rounded-lg bg-pink-500">
          <img alt="..." 
        
           src="https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Zmxvb3J8ZW58MHx8MHx8fDA%3D" 
            className="w-full h-[400px] rounded-lg"/>
          {/* <blockquote className="relative p-8 mb-4">
          <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 583 95" className="absolute left-0 w-full block h-95-px -top-94-px">
                    <polygon points="-30,95 583,95 583,65" className="text-pink-500 fill-current"></polygon>
                  </svg>
         
            <h4 className="text-xl font-bold text-white">
              Top Notch Services
            </h4>
            <p className="text-md font-light mt-2 text-white">
              The Arctic Ocean freezes every winter and much of the
              sea-ice then thaws every summer, and that process will
              continue whatever happens.
            </p>
          </blockquote> */}
        </div>
      </div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 w-[96%] mx-auto gap-7 pt-20 pb-10">
    {/* <div className="flex flex-wrap items-center mt-16"> */}
     
      <div className="w-full  px-4 mr-auto ml-auto">
        <div data-aos="fade-right"
     data-aos-duration="2000" className="relative box_shadow flex flex-col min-w-0 break-words w-full mb-2 shadow-lg rounded-lg ">
          <img alt="..." 
           src="https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Zmxvb3J8ZW58MHx8MHx8fDA%3D"
            className="w-full h-[400px] align-middle rounded-lg"/>
          {/* <blockquote className="relative p-8 mb-4">
          <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 583 95" className="absolute left-0 w-full block h-95-px -top-94-px">
                    <polygon points="-30,95 583,95 583,65" className="text-pink-500 fill-current"></polygon>
                  </svg>
         
            <h4 className="text-xl font-bold text-white">
              Top Notch Services
            </h4>
            <p className="text-md font-light mt-2 text-white">
              The Arctic Ocean freezes every winter and much of the
              sea-ice then thaws every summer, and that process will
              continue whatever happens.
            </p>
          </blockquote> */}
        </div>
      </div>
      <div className='w-full flex justify-center items-center'>
     <div data-aos="fade-up"
     data-aos-duration="2000" className="w-full  px-4 mr-auto ml-auto  py-10 rounded-xl">
        
        <h3 className="text-3xl mb-2 font-semibold leading-normal text-center">
          Working with us is a pleasure
        </h3>
        <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
          Don't let your uses guess by attaching tooltips and popoves to
          any element. Just make sure you enable them first via
          JavaScript.
        </p>
        <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-blueGray-600">
          The kit comes with three pre-built pages to help you get started
          faster. You can change the text and images and you're good to
          go. Just make sure you enable them first via JavaScript.
        </p>
        <a href="#" className="font-bold text-blueGray-700 mt-8">Check Notus JS!</a>
      </div>
     </div>
    </div>
  
  </div>
 
</section>



{/* <div className='w-full '>
    <div className='w-[90%] mx-auto bg-pink-500 grid grid-cols-1 md:grid-cols-3 p-10'>
        <div>
        <h3 className="text-xl mb-2 font-semibold leading-normal ">
        CONTACT NOW
        </h3>
        <p className="text-sm font-light leading-relaxed  text-blueGray-600 text-white">freebootstrapui@gmail.com</p>
        <p className="text-sm font-light leading-relaxed  text-blueGray-600 text-white">+012 345 678 910</p>
        </div>
        <div>
        <h3 className="text-xl mb-2 font-semibold leading-normal ">
        ADDRESS
        </h3>
        <p className="text-sm font-light leading-relaxed  text-blueGray-600 text-white">145 heera nager, jaipur ,India</p>
        </div>
        <div>
        <h3 className="text-xl mb-2 font-semibold leading-normal ">
        SOCIAL MEDIA
        <p className="text-sm font-light leading-relaxed  text-blueGray-600 text-white">Also find us social media below</p>
        </h3>
        </div>
    </div>
</div> */}
</>
  )
}

export default About
