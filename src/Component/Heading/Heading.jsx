import React from 'react'
import './Heading.css'
const Heading = ({title,para,pb,pt}) => {
  return (
    <>
    {/* <h1 class="second text-4xl text-center"><span>{title}</span></h1> */}
   <div className={`font w-[80%] mx-auto  pb-${pb} pt-${pt} `}>
   {/* <div class="five"> */}
  {/* <h1 className=' text-center'>{title}</h1> */}
  <p className='text-center'>{para}</p>
{/* </div> */}
   </div>
</>
  )
}

export default Heading