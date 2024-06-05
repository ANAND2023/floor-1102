import React, { useEffect } from 'react'
import './Blogs.css'
import Heading from '../Heading/Heading'
import { BlogPage } from '../Pages/BlogsPage/BlogPage'
import { Blog } from '../Pages/BlogsPage/Blog'
import 'aos/dist/aos.css';
import AOS from 'aos';
const Blogs = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // duration of the animation
    });
  }, []);
  return (
    <>
    <div className="pb-10" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="500">
<Heading pb="20" pt="10" title="Blogs" para=" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et, accusamus asperiores id sunt alias ex dolore laboriosam aliquid facilis nulla. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et, accusamus asperiores id sunt alias ex dolore laboriosam aliquid facilis nulla. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et, accusamus asperiores id sunt alias ex dolore laboriosam aliquid facilis nulla. " />

</div>
    {/* <Heading pb="0" pt="10" title="Blogs" para="Lorem ipsum, dolor sit amet consectetur dolore laboriosam aliquid facilis nulla." /> */}
    <Blog limit={3}/>
{/* <div className='w-[90%] mx-auto grid grid-cols-1 md:grid-cols-3 gap-5 '>
<figure class="snip1527">
  <div class="image"><img src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bGl2aW5nJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D" alt="pr-sample23" /></div>
  <figcaption>
    <div class="date"><span class="day">28</span><span class="month">Oct</span></div>
    <h3>The World Ended Yesterday</h3>
    <p>

      You know what we need, Hobbes? We need an attitude. Yeah, you can't be cool if you don't have an attitude.
    </p>
  </figcaption>
  <a href="#"></a>
</figure>

<figure class="snip1527">
  <div class="image"><img src="https://plus.unsplash.com/premium_photo-1678752717095-08cd0bd1d7e7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bGl2aW5nJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D" alt="pr-sample25" /></div>
  <figcaption>
    <div class="date"><span class="day">01</span><span class="month">Dec</span></div>
    <h3>Down with this sort of thing</h3>
    <p>

      I don't need to compromise my principles, because they don't have the slightest bearing on what happens to me anyway.
    </p>
  </figcaption>
  <a href="#"></a>
</figure>
<figure class="snip1527">
  <div class="image"><img src="https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxpdmluZyUyMHJvb218ZW58MHx8MHx8fDA%3D" alt="pr-sample25" /></div>
  <figcaption>
    <div class="date"><span class="day">01</span><span class="month">Dec</span></div>
    <h3>Down with this sort of thing</h3>
    <p>

      I don't need to compromise my principles, because they don't have the slightest bearing on what happens to me anyway.
    </p>
  </figcaption>
  <a href="#"></a>
</figure>
</div> */}
    </>
  )
}

export default Blogs