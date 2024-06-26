import React from "react";
import "./blog.css";
import { blog } from "../../../Component/data";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"
import { Blog } from "./Blog";
export const BlogPage = ({ limit = blog.length }) => {

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
        delay: 0.5,
      }
    }
  };

  return (
    <>
      <motion.section
        variants={containerVariants}
        initial="hidden"
        animate="visible"

        className="w-full relative">
        <motion.img
          variants={childrenVariants}
          src="https://images.unsplash.com/photo-1508920052992-6f5a921eba78?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZsb29yfGVufDB8fDB8fHww"

          className="object-cover w-full h-[300px]"
          alt="colorful leafs"
        />
        <motion.div
          variants={picsContainerVariants}
          initial="hidden"
          animate="visible"
          className='absolute inset-0 flex items-center justify-center ' >
          <h1 className='text-center text-4xl font-bold font-roboto pb-5'>OUR BLOGS</h1>

        </motion.div>
      </motion.section>
      <Blog/>
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
