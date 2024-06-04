import React, { useState } from "react"
import { useParams } from "react-router-dom"
import { useEffect } from "react"
import { blog } from "../../../Component/data"

export const BlogDetails = () => {
  const { id } = useParams()
  const [blogs, setBlogs] = useState(null)

  useEffect(() => {
    let blogs = blog.find((blogs) => blogs.id === parseInt(id))
    if (blogs) {
      setBlogs(blogs)
    }
  }, [])

  return (
    <>
      {blogs ? (
            <div class="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16 relative">
            <div class="bg-cover h-64 text-center overflow-hidden"
            >
                  <img src={blogs.cover} alt='' />
                    </div>
          <div class="max-w-2xl mx-auto">
            <div class="mt-3 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
                <div class="">
                  <h3 class="text-2xl font-bold my-5">{blogs.title}</h3>
                  <p class="text-base leading-8 my-5">
                    {blogs.desc}
                        </p>
                      </div>
                    </div>
               </div>
          </div>
       
      ) : null}
    </>
  )
}
