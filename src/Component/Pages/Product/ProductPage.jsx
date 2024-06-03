import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { RiArrowRightDoubleFill } from "react-icons/ri";
const ProductPage = () => {
  const { id } = useParams();
  const contentId = id || 'Item1';
{
    console.log("contentId",)
}
  return (
    <>
      {contentId === 'Item1' && (
        <section className="w-full">
          <img
            src="https://images.unsplash.com/photo-1459478309853-2c33a60058e7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            className="object-cover w-full h-[300px]"
            alt="colorful leafs"
          />
          <div className='w-[80%] mx-auto py-10'>
<h1 className='text-center text-2xl pb-5'>Lorem ipsum dolor sit amet11111.</h1>
          <p className='text-gray-600'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut, omnis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, odio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat totam vero esse voluptates quae accusamus repellendus. Eligendi ea voluptas vitae.</p>

          </div>
        </section>
      )}
      {contentId === 'Item2' && (
        <section className="w-full">
          <img
            src="https://plus.unsplash.com/premium_photo-1705479742873-f826fe23a01c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Zmxvb3J8ZW58MHx8MHx8fDA%3D"
            className="object-cover w-full h-[300px]"
            alt="colorful leafs"
          />
          <div className='w-[80%] mx-auto py-10'>
<h1 className='text-center text-2xl pb-5'>Lorem ipsum dolor sit amet2......</h1>
          <p className='text-gray-600'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut, omnis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, odio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat totam vero esse voluptates quae accusamus repellendus. Eligendi ea voluptas vitae.</p>

          </div>
        </section>
      )}
      {contentId === 'Item3' && (
        <section className="w-full ">
          <img
            src="https://images.unsplash.com/photo-1515895309288-a3815ab7cf81?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZsb29yfGVufDB8fDB8fHww"
            className="object-cover w-full h-[300px]"
            alt="colorful leafs"
          />
          <div className='w-[80%] mx-auto py-10'>
<h1 className='text-center text-2xl pb-5'>Lorem ipsum dolor sit amet3333.</h1>
          <p className='text-gray-600'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut, omnis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, odio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat totam vero esse voluptates quae accusamus repellendus. Eligendi ea voluptas vitae.</p>

          </div>
        </section>
      )}
      {contentId === 'Item4' && (
        <section className="w-full ">
          <img
            src="https://images.unsplash.com/photo-1508920052992-6f5a921eba78?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZsb29yfGVufDB8fDB8fHww"
            className="object-cover w-full h-[300px]"
            alt="colorful leafs"
          />
          <div className='w-[80%] mx-auto py-10'>
<h1 className='text-center text-2xl pb-5'>Lorem ipsum dolor sit amet444444.</h1>
          <p className='text-gray-600'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut, omnis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, odio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat totam vero esse voluptates quae accusamus repellendus. Eligendi ea voluptas vitae.</p>

          </div>
        </section>
      )}

      <div className="p-5  ">
        <div className="mb-8 p-2 w-full md:min-h-screen flex flex-wrap  relative">
          <div className="border-8 w-full md:w-1/2 lg:w-1/4  ">
            <ul>
              <li className="cursor-pointer ">
                <Link to="/products/Item1" className='flex border-b-2 py-2 pl-5 hover:bg-gray-400 hover:text-white duration-300'> <RiArrowRightDoubleFill/>Item 1</Link>
              </li>
              <li className="cursor-pointer ">
                <Link to="/products/Item2" className='flex border-b-2 py-2 pl-5  hover:bg-gray-400 hover:text-white duration-300'> <RiArrowRightDoubleFill/>Item 2</Link>
              </li>
              <li className="cursor-pointer">
                <Link to="/products/Item3" className='flex border-b-2 py-2 pl-5 hover:bg-gray-400 hover:text-white duration-300'> <RiArrowRightDoubleFill/>Item 3</Link>
              </li>
              <li className="cursor-pointer">
                <Link to="/products/Item4" className='flex border-b-2 py-2 pl-5 hover:bg-gray-400 hover:text-white duration-300'> <RiArrowRightDoubleFill/>Item 4</Link>
              </li>
            </ul>
          </div>
          <div className=" w-full md:w-3/4 lg:w-3/4  ">
            {contentId === 'Item1'  && <Product1 />}
            {contentId === 'Item2' && <Product2 />}
            {contentId === 'Item3' && <Product3 />}
            {contentId === 'Item4' && <Product4 />}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductPage;

const Product1=()=>{
    const products1=[
       
        {
            title:"lorem ,lorem lorem",
            des:" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta iste exercitationem quam voluptate tempora. Non praesentium ea nam rerum quos?",
            image:"https://images.unsplash.com/photo-1459478309853-2c33a60058e7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        },
        {
            title:"lorem ,lorem lorem",
            des:" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta iste exercitationem quam voluptate tempora. Non praesentium ea nam rerum quos?",
            image:"https://images.unsplash.com/photo-1508776781619-132e6a483b60?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        },
        {
            title:"lorem ,lorem lorem",
            des:" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta iste exercitationem quam voluptate tempora. Non praesentium ea nam rerum quos?",
            image:"https://images.unsplash.com/photo-1459478309853-2c33a60058e7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        },
]

    return(
        <div>
        {products1.map((item, index) => (
            <div className="grid grid-cols-1 md:grid-cols-2 p-2  h-full" key={index}>
                {index % 2 === 1 ? (
                    <>
                        <div className="order-2 md:order-1 ">
                            <h1 className='text-center text-gray-700 text-2xl py-2'>{item.title}</h1>
                            <p className=' px-5 text-gray-600'>{item.des}</p>
                        </div>
                        <div className="order-1 md:order-2 ">
                            <img src={item.image} alt="" />
                        </div>
                    </>
                ) : (
                    <>
                        <div className="order-1 ">
                            <img src={item.image} alt="" />
                        </div>
                        <div className="order-2 ">
                        <h1 className='text-center text-gray-700 text-2xl py-2'>{item.title}</h1>
                            <p className=' px-5'>{item.des}</p>
                        </div>
                    </>
                )}
            </div>
        ))}
    </div>
    )
}
const Product2=()=>{
    const products1=[
       
        {
            title:"lorem ,lorem lorem",
            des:" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta iste exercitationem quam voluptate tempora. Non praesentium ea nam rerum quos?",
            image:"https://images.unsplash.com/photo-1508776781619-132e6a483b60?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        },
        {
            title:"lorem ,lorem lorem",
            des:" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta iste exercitationem quam voluptate tempora. Non praesentium ea nam rerum quos?",
            image:"https://images.unsplash.com/photo-1508776781619-132e6a483b60?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        },
        {
            title:"lorem ,lorem lorem",
            des:" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta iste exercitationem quam voluptate tempora. Non praesentium ea nam rerum quos?",
            image:"https://images.unsplash.com/photo-1459478309853-2c33a60058e7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        },
]

    return(
        <div>
        {products1.map((item, index) => (
            <div className="grid grid-cols-1 md:grid-cols-2 p-2  h-full" key={index}>
                {index % 2 === 1 ? (
                    <>
                        <div className="order-2 md:order-1 ">
                        <h1 className='text-center text-gray-700 text-2xl py-2'>{item.title}</h1>
                            <p className=' px-5 text-gray-600'>{item.des}</p>
                        </div>
                        <div className="order-1 md:order-2 ">
                            <img src={item.image} alt="" />
                        </div>
                    </>
                ) : (
                    <>
                        <div className="order-1 ">
                            <img src={item.image} alt="" />
                        </div>
                        <div className="order-2 ">
                        <h1 className='text-center text-gray-700 text-2xl py-2'>{item.title}</h1>
                            <p className=' px-5 text-gray-600'>{item.des}</p>
                        </div>
                    </>
                )}
            </div>
        ))}
    </div>

    )
}
const Product3=()=>{
    const products1=[
       
        {
            title:"lorem ,lorem lorem",
            des:" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta iste exercitationem quam voluptate tempora. Non praesentium ea nam rerum quos?",
            image:"https://images.unsplash.com/photo-1573869908170-64b53a60d8da?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGZsb29yfGVufDB8fDB8fHww"
        },
        {
            title:"lorem ,lorem lorem",
            des:" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta iste exercitationem quam voluptate tempora. Non praesentium ea nam rerum quos?",
            image:"https://images.unsplash.com/photo-1573869908170-64b53a60d8da?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGZsb29yfGVufDB8fDB8fHww"
        },
        {
            title:"lorem ,lorem lorem",
            des:" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta iste exercitationem quam voluptate tempora. Non praesentium ea nam rerum quos?",
            image:"https://images.unsplash.com/photo-1573869908170-64b53a60d8da?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGZsb29yfGVufDB8fDB8fHww"
        },
]

    return(
        <div>
    {products1.map((item, index) => (
        <div className="grid grid-cols-1 md:grid-cols-2 p-2  h-full" key={index}>
            {index % 2 === 1 ? (
                <>
                    <div className="order-2 md:order-1 ">
                    <h1 className='text-center text-gray-700 text-2xl py-2'>{item.title}</h1>
                            <p className=' px-5 text-gray-600'>{item.des}</p>
                    </div>
                    <div className="order-1 md:order-2 ">
                        <img src={item.image} alt="" />
                    </div>
                </>
            ) : (
                <>
                    <div className="order-1 ">
                        <img src={item.image} alt="" />
                    </div>
                    <div className="order-2 ">
                    <h1 className='text-center text-gray-700 text-2xl py-2'>{item.title}</h1>
                            <p className=' px-5 text-gray-600'>{item.des}</p>
                    </div>
                </>
            )}
        </div>
    ))}
</div>

    //     <div>
    //     {products1.map((item, index) => (
            
    //         <div className="grid grid-cols-1 md:grid-cols-2 p-2  h-full" key={index}>
    //             {
    //                 console.log("index",index )
    //             }
    //             {index % 2 === 1 ? (
    //                 <>
    //                     <div className="">
    //                         <h1>{item.title}</h1>
    //                         <p>{item.des}</p>
    //                     </div>
    //                     <div className="">
    //                         <img src={item.image} alt="" />
    //                     </div>
    //                 </>
    //             ) : (
    //                 <>
    //                     <div className="">
    //                         <img src={item.image} alt="" />
    //                     </div>
    //                     <div className="">
    //                         <h1>{item.title}</h1>
    //                         <p>{item.des}</p>
    //                     </div>
    //                 </>
    //             )}
    //         </div>
    //     ))}
    // </div>
    )
}
const Product4=()=>{
    const products1=[
       
        {
            title:"lorem ,lorem lorem",
            des:" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta iste exercitationem quam voluptate tempora. Non praesentium ea nam rerum quos?",
            image:"https://images.unsplash.com/photo-1591899916532-fc91c9d7fc01?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGZsb29yfGVufDB8fDB8fHww"
        },
        {
            title:"lorem ,lorem lorem",
            des:" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta iste exercitationem quam voluptate tempora. Non praesentium ea nam rerum quos?",
            image:"https://images.unsplash.com/photo-1591899916532-fc91c9d7fc01?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGZsb29yfGVufDB8fDB8fHww"
        },
        {
            title:"lorem ,lorem lorem",
            des:" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta iste exercitationem quam voluptate tempora. Non praesentium ea nam rerum quos?",
            image:"https://images.unsplash.com/photo-1459478309853-2c33a60058e7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        },
]

    return(
        <div>
        {products1.map((item, index) => (
            <div className="grid grid-cols-1 md:grid-cols-2 p-2  h-full" key={index}>
                {index % 2 === 1 ? (
                    <>
                        <div className="order-2 md:order-1 ">
                        <h1 className='text-center text-gray-700 text-2xl py-2'>{item.title}</h1>
                            <p className=' px-5 text-gray-600'>{item.des}</p>
                        </div>
                        <div className="order-1 md:order-2 ">
                            <img src={item.image} alt="" />
                        </div>
                    </>
                ) : (
                    <>
                        <div className="order-1 ">
                            <img src={item.image} alt="" />
                        </div>
                        <div className="order-2 ">
                        <h1 className='text-center text-gray-700 text-2xl py-2'>{item.title}</h1>
                            <p className=' px-5 text-gray-600'>{item.des}</p>
                        </div>
                    </>
                )}
            </div>
        ))}
    </div>
    )
}
