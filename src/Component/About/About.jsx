import React from 'react'
import './About.css'
import Heading from '../Heading/Heading'
// import Heading from '../Heading/Heading'
const About = () => {
    return (
        <>

           <div className='grid md:grid-cols-2 py-10'>
<Heading pb="0" pt="10" title="About" para="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et, accusamus asperiores id sunt alias ex dolore laboriosam aliquid facilis nulla." />

           <header class="about__header">
                <img class="logo  "  src="https://raw.githubusercontent.com/davidsonaguiar/frontendmentor/main/Base%20apparel%20coming%20soon/images/logo.svg" alt="logo" />
            </header>
            <div class="about__hero">
            {/* <img className='h-[70vh]' src="https://raw.githubusercontent.com/davidsonaguiar/frontendmentor/main/Base%20apparel%20coming%20soon/images/icon-error.svghttps://raw.githubusercontent.com/davidsonaguiar/frontendmentor/main/Base%20apparel%20coming%20soon/images/hero-mobile.jpg" alt="" class="error-icon" /> */}
            </div>
            <main class="main">
                <h1 class="title">
                    <span class="desaturate">We´re </span>
                    coming soon
                </h1>
                <p class="paragraph font">Hello fellow shoppers! We´re currently building our new fashion store. Add your email below to stay up-to-date with announcements and our launch deals.</p>
               
            </main>
           </div>
        </>
    )
}

export default About