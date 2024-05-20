import React from "react";
import Slider from "react-slick";
import "../Card/Card.css";
import './Project.css'
import Heading from "../Heading/Heading";
function Project() {
//   var settings = {
//     dots: true,
//     infinite: false,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     initialSlide: 0,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 1,
//           infinite: true,
//           dots: true,
//         },
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//           initialSlide: 2,
//         },
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//   };
const settings = {
 
        
      
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    speed: 300,
    infinite: true,
    autoplaySpeed: 5000,
    autoplay: true,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };
  return (
    <div className="py-10 overflow-hidden  w-full mx-auto slider-div">

<Heading pb="10" pt="0" title="OUR RECENT PROJECTS" para="" />
        <Slider {...settings} className=" w-full " >
          <div class="  ">
            <div class="card">
              <div class="img-box">
                <img src="https://images.unsplash.com/photo-1508920052992-6f5a921eba78?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZsb29yfGVufDB8fDB8fHww" />
              </div>
              <div class="content">
                <h2>Fruits</h2>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Architecto, hic? Magnam eum error saepe doloribus corrupti
                  repellat quisquam alias doloremque!
                </p>
               
              </div>
            </div>
          </div>
          <div class="   ">
            <div
              class="card"
              //  style="--clr: #009688"
            >
              <div class="img-box">
                <img src="https://images.unsplash.com/photo-1508920052992-6f5a921eba78?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZsb29yfGVufDB8fDB8fHww" />
              </div>
              <div class="content">
                <h2>Leafs</h2>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Architecto, hic? Magnam eum error saepe doloribus corrupti
                  repellat quisquam alias doloremque!
                </p>
               
              </div>
            </div>
          </div>
          <div class="   ">
          <div
            class="card"
           
          >
            <div class="img-box">
              <img src="https://media.istockphoto.com/id/1237634673/photo/marble-square-in-front-of-dense-woods-of-city-park-under-clear-sky.webp?b=1&s=170667a&w=0&k=20&c=Z5IhUJTJSaeLmlO_aSlFjDsgOEVuqiPG79MC6apyGNs=" />
            </div>
            <div class="content">
              <h2>Flowers</h2>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Architecto, hic? Magnam eum error saepe doloribus corrupti
                repellat quisquam alias doloremque!
              </p>
             
            </div>
          </div>
          </div>
          <div class="   ">
            <div class="card">
              <div class="img-box">
                <img src="https://media.istockphoto.com/id/1053192862/photo/black-leather-couch-sofa-with-green-potted-palm-tree-plant-in-pot-with-tiles-tiled-floor-in.webp?b=1&s=170667a&w=0&k=20&c=ZG3hPQrxB5loriuZinR4Yo-3IrUcnN4cjEdSq5JtAf0=" />
              </div>
              <div class="content">
                <h2>Fruits</h2>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Architecto, hic? Magnam eum error saepe doloribus corrupti
                  repellat quisquam alias doloremque!
                </p>
               
              </div>
            </div>
          </div>
          <div class="   ">
            <div
              class="card"
              //  style="--clr: #009688"
            >
              <div class="img-box">
                <img src="https://media.istockphoto.com/id/1053192862/photo/black-leather-couch-sofa-with-green-potted-palm-tree-plant-in-pot-with-tiles-tiled-floor-in.webp?b=1&s=170667a&w=0&k=20&c=ZG3hPQrxB5loriuZinR4Yo-3IrUcnN4cjEdSq5JtAf0=" />
              </div>
              <div class="content">
                <h2>Leafs</h2>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Architecto, hic? Magnam eum error saepe doloribus corrupti
                  repellat quisquam alias doloremque!
                </p>
               
              </div>
            </div>
          </div>
          <div class="   ">
          <div
            class="card"
           
          >
            <div class="img-box">
              <img src="https://media.istockphoto.com/id/1053192862/photo/black-leather-couch-sofa-with-green-potted-palm-tree-plant-in-pot-with-tiles-tiled-floor-in.webp?b=1&s=170667a&w=0&k=20&c=ZG3hPQrxB5loriuZinR4Yo-3IrUcnN4cjEdSq5JtAf0=" />
            </div>
            <div class="content">
              <h2>Flowers</h2>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Architecto, hic? Magnam eum error saepe doloribus corrupti
                repellat quisquam alias doloremque!
              </p>
             
            </div>
          </div>
          </div>
          
        </Slider>
 </div>
    // </div>
  );
}

export default Project;
