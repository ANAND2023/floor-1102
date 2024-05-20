


// import React, { useEffect, useRef } from 'react';
// import gsap from 'gsap';
// import ScrollTrigger from 'gsap/ScrollTrigger';
// import video from '../../../src/vd.mp4'

// const CoolVideoComponent = () => {
//   const videoRef = useRef(null);

//   useEffect(() => {
//     gsap.registerPlugin(ScrollTrigger);

//     const video = videoRef.current;

//     const videoScrub = (vars) => {
//       const tween = gsap.fromTo(
//         video,
//         { currentTime: 0 },
//         {
//           paused: true,
//           immediateRender: false,
//           currentTime: video.duration || 1,
//           ease: "none",
//           ...vars
//         }
//       );

//       const resetTime = () => {
//         tween.vars.currentTime = video.duration || 1;
//         // tween.vars.currentTime = video.duration || 1;
//         tween.invalidate();
//       };

//       video.readyState ? resetTime() : video.addEventListener("loadedmetadata", resetTime);
//       return tween;
//     };

//     const scrub = videoScrub({
//       scrollTrigger: {
//         trigger: video,
//         start: "center center",
//         end: "+=400",
//         // markers: true,
//         scrub: 0.1, // Adjust the value for slower or faster scroll effect
//         // scrub: 0.5, // Adjust the value for slower or faster scroll effect
//         pin: true,
//       }
//     });

//     return () => {
//       scrub.kill();
//     };
//   }, []);

//   return (
//     // <div className="relative w-full h-screen">
//     //   <div className="absolute inset-0 flex items-center justify-center w-full">
//        <div className='w-full bg-black'>
//          <video
//           ref={videoRef}
//           src={video}
//         //   src="https://cdn.shopify.com/videos/c/o/v/fae886f3855441b699f1f50830bc11dc.mp4"
//           className="w-full rounded-lg "
//           preload="auto"
//           muted
//           playsInline
//           loop
//         />
//         </div>
//     //   </div>
//     // </div>
//   );
// };

// export default CoolVideoComponent;




// // import React, { useEffect, useRef } from 'react';
// // import gsap from 'gsap';
// // import ScrollTrigger from 'gsap/ScrollTrigger';

// // const CoolVideoComponent = () => {
// //   const videoRef = useRef(null);

// //   useEffect(() => {
// //     gsap.registerPlugin(ScrollTrigger);

// //     const video = videoRef.current;

// //     const videoScrub = (vars) => {
// //       const tween = gsap.fromTo(
// //         video,
// //         { currentTime: 0 },
// //         {
// //           paused: true,
// //           immediateRender: false,
// //           currentTime: video.duration || 1,
// //           ease: "none",
// //           ...vars
// //         }
// //       );

// //       const resetTime = () => {
// //         tween.vars.currentTime = video.duration || 1;
// //         tween.invalidate();
// //       };

// //       video.readyState ? resetTime() : video.addEventListener("loadedmetadata", resetTime);
// //       return tween;
// //     };

// //     const scrub = videoScrub({
// //       scrollTrigger: {
// //         trigger: video,
// //         start: "center center",
// //         // end: "+=600",
// //         end: "+=400",
// //         markers: true,
// //         scrub: true,
// //         pin: true,
// //       }
// //     });

// //     return () => {
// //       scrub.kill();
// //     };
// //   }, []);

// //   return (
// //     <div className="relative w-full h-screen ">
// //       <div className="absolute inset-0 flex items-center justify-center w-full">
// //         {/* <div className="relative w-full max-w-lg"> */}
// //           <video
// //             ref={videoRef}
// //             src="https://cdn.shopify.com/videos/c/o/v/fae886f3855441b699f1f50830bc11dc.mp4"
// //             className="w-full rounded-lg shadow-lg"

// //             preload="auto"
// //             muted
// //             playsInline
// //             loop
// //           />
// //         {/* </div> */}
// //       </div>
// //     </div>
// //   );
// // };

// // export default CoolVideoComponent


// // import React, { useEffect, useRef } from 'react';
// // import gsap from 'gsap';
// // import ScrollTrigger from 'gsap/ScrollTrigger';

// // const CoolVideoComponent = () => {
// //   const immersiveScrollRef = useRef([]);
// //   const scrollThroughRef = useRef([]);

// //   useEffect(() => {
// //     // Ensure ScrollTrigger is enabled
// //     gsap.registerPlugin(ScrollTrigger);

// //     // Function to initialize immersive scroll
// //     const initialiseImmersiveScroll = (container) => {
// //       const immersiveVideo = container.querySelector(".immersive-pin .video-container .video-background");
      
// //       gsap.utils.toArray(immersiveVideo).forEach((video) =>
// //         videoScrub(video, {
// //           scrollTrigger: {
// //             trigger: video,
// //             start: "top",
// //             end: "100%",
// //             markers: true,
// //             scrub: true,
// //             pin: true,
// //           }
// //         })
// //       );
// //     };

// //     // Function to initialize scroll through
// //     const initialisescrollThrough = (container) => {
// //       const scrollThroughVideo = container.querySelector(".scroll-through-hero-pin .video-container .video-background");
      
// //       gsap.utils.toArray(scrollThroughVideo).forEach((video) =>
// //         videoScrub1(video, {
// //           scrollTrigger: {
// //             trigger: video,
// //             start: "center center",
// //             end: "+=600",
// //             markers: true,
// //             scrub: true,
// //             pin: true,
// //           }
// //         })
// //       );
// //     };

// //     // Function for video scrubbing
// //     const videoScrub = (video, vars) => {
// //       video = gsap.utils.toArray(video)[0];
// //       const once = (el, event, fn) => {
// //         const onceFn = function () {
// //           el.removeEventListener(event, onceFn);
// //           fn.apply(this, arguments);
// //         };
// //         el.addEventListener(event, onceFn);
// //         return onceFn;
// //       };

// //       const prepFunc = () => {
// //         video.play();
// //         video.pause();
// //       };

// //       const prep = () => once(document.documentElement, "touchstart", prepFunc);

// //       const src = video.currentSrc || video.src;

// //       const tween = gsap.fromTo(
// //         video,
// //         { currentTime: 0 },
// //         {
// //           paused: true,
// //           immediateRender: false,
// //           currentTime: video.duration || 1,
// //           ease: "none",
// //           ...vars
// //         }
// //       );

// //       const resetTime = () => {
// //         tween.vars.currentTime = video.duration || 1;
// //         tween.invalidate();
// //       };

// //       prep();
// //       video.readyState ? resetTime() : once(video, "loadedmetadata", resetTime);
// //       return tween;
// //     };

// //     const videoScrub1 = (video, vars) => {
// //       video = gsap.utils.toArray(video)[0];
// //       const once = (el, event, fn) => {
// //         const onceFn = function () {
// //           el.removeEventListener(event, onceFn);
// //           fn.apply(this, arguments);
// //         };
// //         el.addEventListener(event, onceFn);
// //         return onceFn;
// //       };

// //       const prepFunc = () => {
// //         video.play();
// //         video.pause();
// //       };

// //       const prep = () => once(document.documentElement, "touchstart", prepFunc);

// //       const src = video.currentSrc || video.src;

// //       const tween = gsap.fromTo(
// //         video,
// //         { currentTime: 0 },
// //         {
// //           paused: true,
// //           immediateRender: false,
// //           currentTime: video.duration || 1,
// //           ease: "none",
// //           ...vars
// //         }
// //       );

// //       const resetTime = () => {
// //         tween.vars.currentTime = video.duration || 1;
// //         tween.invalidate();
// //       };

// //       prep();
// //       video.readyState ? resetTime() : once(video, "loadedmetadata", resetTime);
// //       return tween;
// //     };

// //     // Iterate through immersiveScroll elements and initialize
// //     immersiveScrollRef.current.forEach((container) => {
// //       initialiseImmersiveScroll(container);
// //     });

// //     // Iterate through scrollThrough elements and initialize
// //     scrollThroughRef.current.forEach((container) => {
// //       initialisescrollThrough(container);
// //     });

// //     // Sort the ScrollTriggers
// //     ScrollTrigger.sort();
// //   }, []);

// //   return (
// //     <>
// //       <div ref={(el) => immersiveScrollRef.current.push(el)} className="immersive-scroll-video" style={{ backgroundColor: 'inherit' }}>
// //         <div style={{ fontSize: '50px' }}>Component Two</div>
// //         <div className="immersive-pin">
// //           <div className="video-container">
// //             <video
// //               src="https://assets.codepen.io/39255/output_960.mp4"
// //               playsinline="true"
// //               webkit-playsinline="true"
// //               preload="auto"
// //               muted="muted"
// //               poster="https://placehold.co/600x400/green/white?text=Image+Two"
// //               className="video-background"
// //             ></video>
// //           </div>
// //         </div>
// //       </div>

// //       <div ref={(el) => immersiveScrollRef.current.push(el)} className="immersive-scroll-video" style={{ backgroundColor: 'inherit' }}>
// //         <div style={{ fontSize: '50px' }}>Component Three</div>
// //         <div className="immersive-pin">
// //           <div className="video-container">
// //             <video
// //               src="https://assets.codepen.io/39255/output_960.mp4"
// //               playsinline="true"
// //               webkit-playsinline="true"
// //               preload="auto"
// //               muted="muted"
// //               poster="https://placehold.co/600x400/red/white?text=Image+Three"
// //               className="video-background"
// //             ></video>
// //           </div>
// //         </div>
// //       </div>

// //       <div ref={(el) => scrollThroughRef.current.push(el)} className="scroll-through-hero st-hero-animate sth-fadein-off" style={{ backgroundColor: 'inherit' }}>
// //         <div style={{ fontSize: '50px' }}>Component Four</div>
// //         <div className="scroll-through-hero-pin">
// //           <div className="video-container">
// //             <video
// //               src="https://cdn.shopify.com/videos/c/o/v/fae886f3855441b699f1f50830bc11dc.mp4"
// //               playsinline="true"
// //               webkit-playsinline="true"
// //               preload="auto"
// //               muted="muted"
// //               poster="https://placehold.co/600x400/yellow/white?text=Image+Four"
// //               className="video-background"
// //             ></video>
// //           </div>
// //         </div>
// //       </div>
// //     </>
// //   );
// // };

// // export default CoolVideoComponent;


// // import React, { useEffect, useRef } from 'react';
// // import gsap from 'gsap';
// // import ScrollTrigger from 'gsap/ScrollTrigger';
// // import './style.css'
// // function CoolVideoComponent() {
// //   const coolVideoRef = useRef(null);

// //   useEffect(() => {
// //     gsap.registerPlugin(ScrollTrigger);

// //     const coolVideo = coolVideoRef.current;

// //     let tl = gsap.timeline({
// //       scrollTrigger: {
// //         trigger: coolVideo,
// //         start: "top top",
// //         end: "bottom+=200% bottom",
// //         scrub: true,
// //         markers: true
// //       }
// //     });

// //     coolVideo.onloadedmetadata = function () {
// //       tl.to(coolVideo, { currentTime: coolVideo.duration });
// //     };

// //     function isTouchDevice() {
// //       return (
// //         "ontouchstart" in window ||
// //         navigator.maxTouchPoints > 0 ||
// //         navigator.msMaxTouchPoints > 0
// //       );
// //     }

// //     if (isTouchDevice()) {
// //       coolVideo.play();
// //       coolVideo.pause();
// //     }

// //     return () => {
// //       // Clean up code here if needed
// //     };
// //   }, []); // Empty dependency array ensures this useEffect only runs once after initial render

// //   return (
// //     <video
// //       ref={coolVideoRef}
// //       className="video"
// //       playsInline={true}
// //       webkitPlaysinline={true}
// //       preload="auto"
// //       muted="muted"
// //     >
// //       <source src="https://www.dropbox.com/scl/fi/qejf5dgqiv6m77d71r2ec/abstract-background-ink-water-20072.mp4?rlkey=zwgwzw4bfhx7oy034t7un6mod&raw=1" type="video/mp4" />
// //     </video>
// //   );
// // }

// // export default CoolVideoComponent;
