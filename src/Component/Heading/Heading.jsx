import React from 'react'
import './Heading.css'
const Heading = ({title,para,pb,pt}) => {
  return (
    <>
   <div className={`font-roboto w-[80%] mx-auto  pb-${pb} pt-${pt} `}>
  <p className='text-center font-roboto'>{para}</p>
   </div>
</>
  )
}

export default Heading