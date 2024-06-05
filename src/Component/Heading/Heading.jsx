import React from 'react'
import './Heading.css'
const Heading = ({title,para,pb,pt}) => {
  return (
    <>
   <div className={`font-roboto font w-[80%] mx-auto  pb-${pb} pt-${pt} `}>
    <h1 className='text-center md:w-[50%] mx-auto  font-roboto text-4xl  font-bold pb-7'>{title}</h1>
  <p className='text-center font-roboto text-gray-600'>{para}</p>
   </div>
</>
  )
}

export default Heading