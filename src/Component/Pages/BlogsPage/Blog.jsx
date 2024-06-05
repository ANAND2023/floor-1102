import React, { useEffect } from "react";
import "./blog.css";
import { blog } from "../../../Component/data";
import { Link } from "react-router-dom";
import 'aos/dist/aos.css';
import AOS from 'aos';
export const Blog = ({ limit = blog.length }) => {

  useEffect(() => {
    AOS.init({
      duration: 1000, // duration of the animation
    });
  }, []);

  return (
    <>
     
      <div className="w-[90%] mx-auto mt-10">
        <div class="md:grid md:gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
          {blog.slice(0, limit).map((item,index) => (
            <Link to={`/blogs/${item.id}`} className="link">
              <article
               data-aos="fade-up"
     data-aos-duration="2000"
     data-aos-delay={`${index * 300}`}
      class="p-6 mb-6 border border-gray-300  group transform hover:-translate-y-2   cursor-pointer hover:border-yellow-600 rounded-lg hover:shadow-xl transition duration-300 ease-in-out ">
                <a
                  href="#1"
                  class="absolute opacity-0 top-0 right-0 left-0 bottom-0"
                ></a>
                <div class="relative mb-4 rounded-xl">
                  <img
                    class="max-h-52 rounded-xl w-full object-cover transition-transform duration-300 transform group-hover:scale-105"
                    src={item.cover}
                    alt=""
                  />
                  <a
                    class="flex justify-center items-center bg-[#7fffd43b] bg-opacity-80 z-10 absolute top-0 left-0 w-full h-full text-white rounded-2xl opacity-0 transition-all duration-300 transform group-hover:scale-105 text-xl group-hover:opacity-100"
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Read article{" "}
                    <svg
                      class="ml-2 w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M13 5l7 7-7 7M5 5l7 7-7 7"
                      ></path>
                    </svg>
                  </a>
                </div>
                <div class="p-3">
                  <div class="text-slate-600 text-sm font-normal pt-2">
                    Oct, 2021
                  </div>
                  <h2 class="text-sky-800 text-lg font-semibold line-clamp-2 pt-2.5 h-[66px]">
                    {item.title}
                  </h2>

                  <p class="text-slate-700 font-normal line-clamp-2 leading-6 pt-1 h-[52px]">
                    {item.desc.slice(0, 180)}...
                  </p>
                  <div class="text-right pt-1">
                    <button class="text-yellow-600 text-sm font-semibold content-end">
                      Read More{" "}
                      <i class="fa fa-arrow-right fa-beat text-[ #d29d2c]"></i>
                    </button>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

// import React from "react";
// import "./blog.css";
// import { blog } from "../../../Component/data";
// import { Link } from "react-router-dom";
// export const BlogPage = () => {
//   console.log("bolg", blog.cover);
//   return (
//     <>
//       <div className="w-[90%] mx-auto">
//         <div class="md:grid md:gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
//           {blog.map((item) => (
//             <Link to={`/blogs/${item.id}`} className="link">
//               <article class="p-6 mb-6 border border-gray-300  group transform hover:-translate-y-2   cursor-pointer hover:border-yellow-600 rounded-lg hover:shadow-xl transition duration-300 ease-in-out ">
//                 <a
//                   href="#1"
//                   class="absolute opacity-0 top-0 right-0 left-0 bottom-0"
//                 ></a>
//                 <div class="relative mb-4 rounded-xl">
//                   <img
//                     class="max-h-52 rounded-xl w-full object-cover transition-transform duration-300 transform group-hover:scale-105"
//                     src={item.cover}
//                     alt=""
//                   />
//                   <a
//                     class="flex justify-center items-center bg-[#7fffd43b] bg-opacity-80 z-10 absolute top-0 left-0 w-full h-full text-white rounded-2xl opacity-0 transition-all duration-300 transform group-hover:scale-105 text-xl group-hover:opacity-100"
//                     href="#"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     Read article{" "}
//                     <svg
//                       class="ml-2 w-6 h-6"
//                       fill="none"
//                       stroke="currentColor"
//                       viewBox="0 0 24 24"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path
//                         stroke-linecap="round"
//                         stroke-linejoin="round"
//                         stroke-width="2"
//                         d="M13 5l7 7-7 7M5 5l7 7-7 7"
//                       ></path>
//                     </svg>
//                   </a>
//                 </div>
//                 <div class="p-3">
//                   <div class="text-slate-600 text-sm font-normal pt-2">
//                     Oct, 2021
//                   </div>
//                   <h2 class="text-sky-800 text-lg font-semibold line-clamp-2 pt-2.5 h-[66px]">
//                   {item.title}
//                   </h2>

//                   <p class="text-slate-700 font-normal line-clamp-2 leading-6 pt-1 h-[52px]">
//                    {item.desc.slice(0, 180)}...
//                   </p>
//                   <div class="text-right pt-1">
//                     <button class="text-yellow-600 text-sm font-semibold content-end">
//                       Read More{" "}
//                       <i class="fa fa-arrow-right fa-beat text-[ #d29d2c]"></i>
//                     </button>
//                   </div>
//                 </div>
//               </article>
//             </Link>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };
