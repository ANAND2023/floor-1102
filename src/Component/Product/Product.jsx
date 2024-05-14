import React from 'react'
import Heading from '../Heading/Heading'

const Product = () => {
  return (
   <>
 <Heading title="Product" />
 <p className='text-center'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et, accusamus asperiores id sunt alias ex dolore laboriosam aliquid facilis nulla.</p>
<div class="max-w-screen-2xl mx-auto px-4 pt-16 lg:py-24 relative bg-gray-50">
    <div class="flex flex-col md:flex-row gap-2">
        <div class="flex flex-1 flex-col gap-2">
            <div class="flex flex-1 flex-col">
                <img class="object-cover h-full" src="https://images.unsplash.com/photo-1665689285334-b0044b6d2dc7?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjY0NjAxMTY&ixlib=rb-4.0.3&q=80"/>
            </div>
            <div class="hidden md:flex flex-1 flex-row gap-2">
                <div class="flex flex-1 flex-col">
                  <img class="object-cover h-full" src="https://images.unsplash.com/photo-1666433723497-38d1d053185b?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjY2NDEwNDU&ixlib=rb-4.0.3&q=80"/>
                </div>
                <div class="hidden md:flex flex-1 flex-col">
                  <img class="object-cover h-full" src="https://images.unsplash.com/photo-1665048110211-91d0b74c421c?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjY0NjAxMTY&ixlib=rb-4.0.3&q=80"/>
                </div>
            </div>
        </div>
        <div class="flex flex-1 flex-col gap-2">
            <div class="hidden md:flex flex-1 flex-row gap-2">
                <div class="flex flex-1 flex-col">
                  <img class="object-cover h-full" src="https://images.unsplash.com/photo-1666297599033-09b318f2c8b5?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjY2NDExMjk&ixlib=rb-4.0.3&q=80"/>  
                </div>
                <div class="hidden md:flex flex-1 flex-col">
                  <img class="object-cover h-full" src="https://images.unsplash.com/photo-1664713815297-9ce06950c022?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjY2NDEzMDc&ixlib=rb-4.0.3&q=80"/>
                </div>
            </div>                        
            <div class="flex flex-1 flex-col">
              <img class="object-cover h-full" src="https://images.unsplash.com/photo-1666060519824-796d5638d809?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjY2NDExOTQ&ixlib=rb-4.0.3&q=80"/>
            </div>
        </div>
    </div>
</div>

<div class="max-w-screen-2xl mx-auto px-4 pb-16 lg:py-24 relative bg-white">
    <div class="flex flex-col md:flex-row gap-2">
        <div class="flex flex-1 flex-col">
            <div class="flex flex-1 flex-col">
             
                <img class="object-cover h-full" src='https://images.unsplash.com/photo-1664764119004-999a3f80a1b8?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjY2NDEzMDc&ixlib=rb-4.0.3&q=80' alt=''/>
            </div>
        </div>
        <div class="flex flex-1">
            <div class="grid grid-cols-2 gap-2">
              <div>
               
                <img class="object-cover h-full" src='https://images.unsplash.com/photo-1666147775717-65fa1fe0c47b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjY2NDMxNzc&ixlib=rb-4.0.3&q=80&w=400' alt=''/>
              </div>
              <div>
               
                <img class="object-cover h-full" src='https://images.unsplash.com/photo-1665561741359-7af2d2fdc395?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjY2NDMxNzc&ixlib=rb-4.0.3&q=80&w=400' alt=''/>
              </div>
              <div>
               
                <img class="object-cover h-full" src='https://images.unsplash.com/photo-1665391837905-74d250172dd3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjY2NDMxNzc&ixlib=rb-4.0.3&q=80&w=400' alt=''/>
              </div>
              <div>
                
                <img class="object-cover h-full" src='https://images.unsplash.com/photo-1666303349374-c4cf8bc9eaaf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjY2NDMxNzc&ixlib=rb-4.0.3&q=80&w=400' alt=''/>
              </div>
            </div>
        </div>
    </div>
</div>
   </>
  )
}

export default Product