// Card.js
import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ title, imageUrl, content, link }) => {
  return (
    // <div className="max-w-sm rounded overflow-hidden shadow-lg">
    //   <img className="w-full" src={imageUrl} alt={title} />
    //   <div className="px-6 py-4">
    //     <div className="font-bold text-xl mb-2">{title}</div>
    //     <p className="text-gray-700 text-base">{content}</p>
    //   </div>
    //   <div className="px-6 py-4">
    //     <Link to={link} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
    //       Read More
    //     </Link>
    //   </div>
    // </div>
    <div class="h-72 md:h-96 w-full  mb-4 lg:mb-0">
    {/* <div class="h-72 md:h-96 w-full md:w-1/2 lg:w-1/4 mb-4 lg:mb-0"> */}
    <a href="#" class="h-72 md:h-96 block group relative mx-2 overflow-hidden shadow-lg">
      <img src={imageUrl} alt={title} class="absolute z-0 object-cover w-full h-72 md:h-96"/>
      <div class="absolute gradient transition duration-300 group-hover:bg-black group-hover:opacity-90 w-full h-72 md:h-96 z-100"></div>
      <div class="absolute left-0 right-0 bottom-0 p-6 z-30 transform translate-y-1/2 transition duration-300 h-full group-hover:translate-y-0 delay-100">
        <div class="h-1/2 relative">
          <div class="absolute bottom-0">
            <h2 class="font-bold text-white leading-tight transition duration-300 text-xl pb-6 group-hover:underline">{title}</h2>
          </div>
        </div>
        <div class="h-1/2">
          <p class="text-white pb-4 opacity-0 transition duration-300 group-hover:opacity-100">{content}</p>
          {/* <button class="bg-white text-black text-sm px-3 py-1 font-semibold opacity-0 transition duration-300 group-hover:opacity-100 border-2 border-white focus:border-black focus:bg-gray-300">Read More</button> */}
          <div>
        <Link to={link} className="bg-white text-black text-sm px-3 py-1 font-semibold opacity-0 transition duration-300 group-hover:opacity-100 border-2 border-white focus:border-black focus:bg-gray-300">
          Read More
        </Link>
      </div>
        </div>
      </div>
    </a>
  </div>
  );
};

export default Card;
