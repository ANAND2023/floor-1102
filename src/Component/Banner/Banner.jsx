import React, { useEffect, useState } from "react";
import './Banner.css'
import { slides } from "../data"; 
import { motion } from "framer-motion"


const Banner = () => {
    const [active, setActive] = useState(0);
    const [autoplay, setAutoplay] =useState("autoplay");
    const max = slides.length;

    const intervalBetweenSlides = () => autoplay && setActive(active === max - 1 ? 0 : active + 1)

   useEffect(() => {
        const interval = setInterval( () => intervalBetweenSlides(), 3000);
        return () => clearInterval(interval);
    });
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

    const toggleAutoPlay = () => setAutoplay(!autoplay)

    const nextOne = () => active < max - 1 && setActive(active + 1)

    const prevOne = () => active > 0 && setActive(active - 1)

    const isActive = value => active === value && 'active'

    const setSliderStyles = () => {
        const transition = active * - 100;
        
        return {
          width: ( slides.length * 100 ) + 'vw',
          transform: 'translateX(' + transition + 'vw)'
        }
    }

    const renderSlides = () => slides.map((item, index) => (
        <div 
            className='each-slide relative' 
            key={ index } 
          
             style={{ backgroundImage: item.eachSlide }}> 
               <motion.div
       
          variants={containerVariants}
          initial="hidden"
          animate="visible"
                
                className="absolute font-roboto bottom-10 md:top-[300px] md:left-[200px] w-[400px] bg-[#0000006e] p-4">
                {/* <p className="text-xl text-gray-200 ">{item.para}</p> */}
                {/* <motion.h1 className="page-title" variants={childrenVariants}>
            Shakespeare's Sonnet II
          </motion.h1> */}
          <motion.p className="text-xl text-gray-200" variants={childrenVariants}>
          {item.para}
          </motion.p>
                </motion.div>
        </div> 
    ));

    const renderDots = () => slides.map((silde, index) => (
        <li 
            className={ isActive(index) + ' dots' }   
            key={ index }>
                <button onClick={ () => setActive(index) }>
                    <span>&#9679;</span>
                </button>
        </li> 
    ));

    const renderPlayStop = () => autoplay
        ? (
            <svg fill='#FFFFFF' height='24' viewBox='0 0 24 24' width='24'>
                <path d='M0 0h24v24H0z' fill='none'/>
                <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z'/>
            </svg> 
        )
        : (
            <svg fill='#FFFFFF' height='24' viewBox='0 0 24 24' width='24'>
                    <path d='M0 0h24v24H0z' fill='none'/>
                    <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z'/>
            </svg>
        )

    const renderArrows = () => (
        <>
            <button 
                type='button'
                className='arrows prev' 
                onClick={ () => prevOne() } >
                <svg fill='#FFFFFF' width='50' height='50' viewBox='0 0 24 24'>
                    <path d='M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z'/>
                    <path d='M0 0h24v24H0z' fill='none'/>
                </svg>
            </button>
            <button 
                type='button'
                className='arrows next' 
                onClick={ () => nextOne() } > 
                <svg fill='#FFFFFF' height='50' viewBox='0 0 24 24' width='50'>
                    <path d='M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z'/>
                    <path d='M0 0h24v24H0z' fill='none'/>
                </svg>
            </button>
        </>
    )

    return (
        <section className='slider z-[99]'>
            <div 
                className='wrapper' 
                style={ setSliderStyles() }>
                { renderSlides() }
            </div>
            { renderArrows() }
            <ul className='dots-container'>
                { renderDots() }
            </ul>
            <button 
                type='button'
                className='toggle-play' 
                onClick={ toggleAutoPlay }> 
                { renderPlayStop() }
            </button>
        </section>
    );
};
export default Banner
