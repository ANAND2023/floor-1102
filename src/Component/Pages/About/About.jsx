import React from 'react'
import './style.css'
import Aboutpage from '../../About/About'
const About = () => {
  return (
<>
<article 
  style={{ backgroundImage: "url('https://images.unsplash.com/photo-1590898152298-f2e0ea9287f6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
  backgroundAttachment: 'fixed', backgroundRepeat: "no-repeat", backgroundSize: "cover" 
 }}
>
  <div class="row grd-overlay">
    <div class="medium-8 column w-[80%] mx-auto text-gray-200">
    <h3 class="text-3xl mb-2 font-semibold leading-normal text-center">
         ABOUT US
        </h3>
      <p class="text-3xl font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
          Don't let your uses guess by attaching tooltips and popoves to
          any element. Just make sure you enable them first via
          JavaScript.
        </p>
    </div>
  </div>
</article>

<Aboutpage/>
<section class=" bg-blueGray-200 -mt-24">
  <div class=" mx-auto px-4">
    <div class="flex flex-wrap">
      <div class="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
        <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-1 shadow-lg rounded-lg">
          <div class="px-4 flex-auto">
          </div>
        </div>
      </div>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 w-[96%] mx-auto gap-7 pt-20 pb-10">
    {/* <div class="flex flex-wrap items-center mt-16"> */}
     <div className='w-full flex justify-center items-center'>
     <div class="w-full  px-4 mr-auto ml-auto box_shadow py-10 rounded-xl">
        
        <h3 class="text-3xl mb-2 font-semibold leading-normal text-center">
          Working with us is a pleasure
        </h3>
        <p class="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
          Don't let your uses guess by attaching tooltips and popoves to
          any element. Just make sure you enable them first via
          JavaScript.
        </p>
        <p class="text-lg font-light leading-relaxed mt-0 mb-4 text-blueGray-600">
          The kit comes with three pre-built pages to help you get started
          faster. You can change the text and images and you're good to
          go. Just make sure you enable them first via JavaScript.
        </p>
        <a href="#" class="font-bold text-blueGray-700 mt-8">Check Notus JS!</a>
      </div>
     </div>
      <div class="w-full  px-4 mr-auto ml-auto">
        <div class="relative flex flex-col min-w-0 break-words w-full mb-2 shadow-lg rounded-lg bg-pink-500">
          <img alt="..." className='w-full h-[400px]' src="https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Zmxvb3J8ZW58MHx8MHx8fDA%3D" class="w-full align-middle rounded-t-lg"/>
          {/* <blockquote class="relative p-8 mb-4">
          <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 583 95" class="absolute left-0 w-full block h-95-px -top-94-px">
                    <polygon points="-30,95 583,95 583,65" class="text-pink-500 fill-current"></polygon>
                  </svg>
         
            <h4 class="text-xl font-bold text-white">
              Top Notch Services
            </h4>
            <p class="text-md font-light mt-2 text-white">
              The Arctic Ocean freezes every winter and much of the
              sea-ice then thaws every summer, and that process will
              continue whatever happens.
            </p>
          </blockquote> */}
        </div>
      </div>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 w-[96%] mx-auto gap-7 pt-20 pb-10">
    {/* <div class="flex flex-wrap items-center mt-16"> */}
     
      <div class="w-full  px-4 mr-auto ml-auto">
        <div class="relative flex flex-col min-w-0 break-words w-full mb-2 shadow-lg rounded-lg bg-pink-500">
          <img alt="..." className='w-full h-[400px]' src="https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Zmxvb3J8ZW58MHx8MHx8fDA%3D" class="w-full align-middle rounded-t-lg"/>
          {/* <blockquote class="relative p-8 mb-4">
          <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 583 95" class="absolute left-0 w-full block h-95-px -top-94-px">
                    <polygon points="-30,95 583,95 583,65" class="text-pink-500 fill-current"></polygon>
                  </svg>
         
            <h4 class="text-xl font-bold text-white">
              Top Notch Services
            </h4>
            <p class="text-md font-light mt-2 text-white">
              The Arctic Ocean freezes every winter and much of the
              sea-ice then thaws every summer, and that process will
              continue whatever happens.
            </p>
          </blockquote> */}
        </div>
      </div>
      <div className='w-full flex justify-center items-center'>
     <div class="w-full  px-4 mr-auto ml-auto box_shadow py-10 rounded-xl">
        
        <h3 class="text-3xl mb-2 font-semibold leading-normal text-center">
          Working with us is a pleasure
        </h3>
        <p class="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
          Don't let your uses guess by attaching tooltips and popoves to
          any element. Just make sure you enable them first via
          JavaScript.
        </p>
        <p class="text-lg font-light leading-relaxed mt-0 mb-4 text-blueGray-600">
          The kit comes with three pre-built pages to help you get started
          faster. You can change the text and images and you're good to
          go. Just make sure you enable them first via JavaScript.
        </p>
        <a href="#" class="font-bold text-blueGray-700 mt-8">Check Notus JS!</a>
      </div>
     </div>
    </div>
  
  </div>
 
</section>



<div className='w-full '>
    <div className='w-[90%] mx-auto bg-pink-500 grid grid-cols-1 md:grid-cols-3 p-10'>
        <div>
        <h3 class="text-xl mb-2 font-semibold leading-normal ">
        CONTACT NOW
        </h3>
        <p class="text-sm font-light leading-relaxed  text-blueGray-600 text-white">freebootstrapui@gmail.com</p>
        <p class="text-sm font-light leading-relaxed  text-blueGray-600 text-white">+012 345 678 910</p>
        </div>
        <div>
        <h3 class="text-xl mb-2 font-semibold leading-normal ">
        ADDRESS
        </h3>
        <p class="text-sm font-light leading-relaxed  text-blueGray-600 text-white">145 heera nager, jaipur ,India</p>
        </div>
        <div>
        <h3 class="text-xl mb-2 font-semibold leading-normal ">
        SOCIAL MEDIA
        <p class="text-sm font-light leading-relaxed  text-blueGray-600 text-white">Also find us social media below</p>
        </h3>
        </div>
    </div>
</div>
</>
  )
}

export default About
// import React from 'react'
// import './style.css'
// import Aboutpage from '../../About/About'
// const About = () => {
//   return (
// <>
// <article 
//   style={{ backgroundImage: "url('https://images.unsplash.com/photo-1590898152298-f2e0ea9287f6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
//   backgroundAttachment: 'fixed', backgroundRepeat: "no-repeat", backgroundSize: "cover" 
//  }}
// >
//   <div class="row grd-overlay">
//     <div class="medium-8 column w-[80%] mx-auto text-gray-200">
//     <h3 class="text-3xl mb-2 font-semibold leading-normal text-center">
//          ABOUT US
//         </h3>
//       <p class="text-3xl font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
//           Don't let your uses guess by attaching tooltips and popoves to
//           any element. Just make sure you enable them first via
//           JavaScript.
//         </p>
//     </div>
//   </div>
// </article>

// <Aboutpage/>
// <section class=" bg-blueGray-200 -mt-24">
//   <div class=" mx-auto px-4">
//     <div class="flex flex-wrap">
//       <div class="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
//         <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-1 shadow-lg rounded-lg">
//           <div class="px-4 flex-auto">
//           </div>
//         </div>
//       </div>
//     </div>
//     <div class="flex flex-wrap items-center mt-16">
//       <div class="w-full md:w-5/12 px-4 mr-auto ml-auto">
//         <div class="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
//           <i class="fas fa-user-friends text-xl"></i>
//         </div>
//         <h3 class="text-3xl mb-2 font-semibold leading-normal">
//           Working with us is a pleasure
//         </h3>
//         <p class="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
//           Don't let your uses guess by attaching tooltips and popoves to
//           any element. Just make sure you enable them first via
//           JavaScript.
//         </p>
//         <p class="text-lg font-light leading-relaxed mt-0 mb-4 text-blueGray-600">
//           The kit comes with three pre-built pages to help you get started
//           faster. You can change the text and images and you're good to
//           go. Just make sure you enable them first via JavaScript.
//         </p>
//         <a href="#" class="font-bold text-blueGray-700 mt-8">Check Notus JS!</a>
//       </div>
//       <div class="w-full md:w-4/12 px-4 mr-auto ml-auto">
//         <div class="relative flex flex-col min-w-0 break-words w-full mb-2 shadow-lg rounded-lg bg-pink-500">
//           <img alt="..." src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1051&amp;q=80" class="w-full align-middle rounded-t-lg"/>
//           <blockquote class="relative p-8 mb-4">
//           <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 583 95" class="absolute left-0 w-full block h-95-px -top-94-px">
//                     <polygon points="-30,95 583,95 583,65" class="text-pink-500 fill-current"></polygon>
//                   </svg>
         
//             <h4 class="text-xl font-bold text-white">
//               Top Notch Services
//             </h4>
//             <p class="text-md font-light mt-2 text-white">
//               The Arctic Ocean freezes every winter and much of the
//               sea-ice then thaws every summer, and that process will
//               continue whatever happens.
//             </p>
//           </blockquote>
//         </div>
//       </div>
//     </div>
//   </div>
 
// </section>

// <section class="relative pt-16 bg-blueGray-50">
// <div class=" mx-auto">
//   <div class="flex flex-wrap items-center">
//     <div class="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto -mt-78">
//       <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-pink-500">
//         <img alt="..." src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1051&amp;q=80" class="w-full align-middle rounded-t-lg"/>
//         <blockquote class="relative p-8 mb-4">
//           <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 583 95" class="absolute left-0 w-full block h-95-px -top-94-px">
//             <polygon points="-30,95 583,95 583,65" class="text-pink-500 fill-current"></polygon>
//           </svg>
//           <h4 class="text-xl font-bold text-white">
//             Great for your awesome project
//           </h4>
//           <p class="text-md font-light mt-2 text-white">
//             Putting together a page has never been easier than matching
//             together pre-made components. From landing pages presentation
//             to login areas, you can easily customise and built your pages.
//           </p>
//         </blockquote>
//       </div>
//     </div>

//     <div class="w-full md:w-6/12 px-4">
//       <div class="flex flex-wrap">
//         <div class="w-full md:w-6/12 px-4">
//           <div class="relative flex flex-col mt-4">
//             <div class="px-4 py-2 flex-auto">
//               <div class="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
//                 <i class="fas fa-sitemap"></i>
//               </div>
//               <h3 class="text-xl mb-2 font-semibold leading-normal ">
//          Lorem, ipsum dolor.
//         </h3>
//               <p class="text-sm font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
//           Don't let your uses guess by attaching tooltips and popoves to
//           any element. Just make sure you enable them first via
//           JavaScript.
//         </p>
//             </div>
//           </div>
//           <div class="relative flex flex-col min-w-0">
//             <div class="px-4 py-2 flex-auto">
//               <div class="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
//                 <i class="fas fa-drafting-compass"></i>
//               </div>
//               <h3 class="text-xl mb-2 font-semibold leading-normal ">
//               Lorem, ipsum dolor.
//         </h3>
//               <p class="text-sm font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
//           Don't let your uses guess by attaching tooltips and popoves to
//           any element. Just make sure you enable them first via
//           JavaScript.
//         </p>
//             </div>
//           </div>
//         </div>
//         <div class="w-full md:w-6/12 px-4">
//           <div class="relative flex flex-col min-w-0 mt-4">
//             <div class="px-4 py-2 flex-auto">
//               <div class="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
//                 <i class="fas fa-newspaper"></i>
//               </div>
//               <h3 class="text-xl mb-2 font-semibold leading-normal ">
//               Lorem, ipsum dolor.
//         </h3>
//               <p class="text-sm font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
//           Don't let your uses guess by attaching tooltips and popoves to
//           any element. Just make sure you enable them first via
//           JavaScript.
//         </p>
//             </div>
//           </div>
//           <div class="relative flex flex-col min-w-0">
//             <div class="px-4 py-2 flex-auto">
//               <div class="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
//                 <i class="fas fa-file-alt"></i>
//               </div>
//               <h3 class="text-xl mb-2 font-semibold leading-normal ">
//               Lorem, ipsum dolor.
//         </h3>
//               <p class="text-sm font-light leading-relaxed  text-blueGray-600">
//           Don't let your uses guess by attaching tooltips and popoves to
//           any element. Just make sure you enable them first via
//           JavaScript.
//         </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>

// </section>

// <div className='w-full '>
//     <div className='w-[90%] mx-auto bg-pink-500 grid grid-cols-1 md:grid-cols-3 p-10'>
//         <div>
//         <h3 class="text-xl mb-2 font-semibold leading-normal ">
//         CONTACT NOW
//         </h3>
//         <p class="text-sm font-light leading-relaxed  text-blueGray-600 text-white">freebootstrapui@gmail.com</p>
//         <p class="text-sm font-light leading-relaxed  text-blueGray-600 text-white">+012 345 678 910</p>
//         </div>
//         <div>
//         <h3 class="text-xl mb-2 font-semibold leading-normal ">
//         ADDRESS
//         </h3>
//         <p class="text-sm font-light leading-relaxed  text-blueGray-600 text-white">145 heera nager, jaipur ,India</p>
//         </div>
//         <div>
//         <h3 class="text-xl mb-2 font-semibold leading-normal ">
//         SOCIAL MEDIA
//         <p class="text-sm font-light leading-relaxed  text-blueGray-600 text-white">Also find us social media below</p>
//         </h3>
//         </div>
//     </div>
// </div>
// </>
//   )
// }

// export default About