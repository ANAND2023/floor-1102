import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React from "react";
import './Photo.css'
import Heading from "../Heading/Heading";

// ---------- scrollTrigger plugin registration
gsap.registerPlugin(ScrollTrigger);

const Photo = () => {
	// ---------- gsap context
	React.useLayoutEffect(() => {
		const ctx = gsap.context(() => {
			// ---------- selecting all horizontal sections
			const horizontalSections = gsap.utils.toArray(".horizontal-section");

			// ---------- applying horizontal scroll animation
			gsap.to(horizontalSections, {
				xPercent: -100 * (horizontalSections.length - 1),
				ease: "none",
				scrollTrigger: {
					trigger: "#container",
					pin: true,
					scrub: 1,
					snap: 1 / (horizontalSections.length - 1),
					end: () => "+=" + document.querySelector("#container").offsetWidth
				}
			});
		});

		return () => ctx.revert();
	}, []);

	return (
   <>
   
   <Heading pb="20" pt="10" title="Product" para="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et, accusamus asperiores id sunt alias ex dolore laboriosam aliquid facilis nulla." />

<main id="container" className="my-20">
  {/* ---------- section 01 ---------- */}
  <section className="horizontal-section">
  <div class="max-w-screen-2xl mx-auto px-4 pt-16 lg:py-5 relative bg-gray-50">
<div class="flex flex-col md:flex-row gap-2">
    <div class="flex flex-1 flex-col gap-2">
        <div class="flex flex-1 flex-col">
            <img class="object-cover h-full" src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b2ZmaWNlJTIwZmxvb3J8ZW58MHx8MHx8fDA%3D"/>
        </div>
        <div class="hidden md:flex flex-1 flex-row gap-2">
            <div class="flex flex-1 flex-col">
              <img class="object-cover h-full" src="https://images.unsplash.com/photo-1587316205676-ea1bcdf9765f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8b2ZmaWNlJTIwZmxvb3J8ZW58MHx8MHx8fDA%3D"/>
            </div>
            <div class="hidden md:flex flex-1 flex-col">
              <img class="object-cover h-full" src="https://images.unsplash.com/photo-1531547977107-a5f0f32d6d87?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG9mZmljZSUyMGZsb29yfGVufDB8fDB8fHww"/>
            </div>
        </div>
    </div>
    <div class="flex flex-1 flex-col gap-2">
        <div class="hidden md:flex flex-1 flex-row gap-2">
            <div class="flex flex-1 flex-col">
              <img class="object-cover h-full" src="https://images.unsplash.com/photo-1572197661119-fe48e3b4734f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG9mZmljZSUyMGZsb29yfGVufDB8fDB8fHww"/>  
            </div>
            <div class="hidden md:flex flex-1 flex-col">
              <img class="object-cover h-full" src="https://images.unsplash.com/photo-1600508772927-723e3ba305c5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG9mZmljZSUyMGZsb29yfGVufDB8fDB8fHww"/>
            </div>
        </div>                        
        <div class="flex flex-1 flex-col">
          <img class="object-cover h-full" src="https://media.istockphoto.com/id/1205555348/photo/close-up-of-cleaners-moping-the-floor.webp?b=1&s=170667a&w=0&k=20&c=rGsLxGzTjoXT35eMP7Flefpx2TapQ_VGC6aS0aoWhsk="/>
        </div>
    </div>
</div>
</div>
  </section>

  {/* ---------- section 02 ---------- */}
  <section className="horizontal-section">
    <h1 className="heading">Lorem ipsum dolor sit amet.</h1>
  </section>

  {/* ---------- section 02 ---------- */}
  <section className="horizontal-section">
    <h1 className="heading">02</h1>
  </section>

  {/* ---------- section 03 ---------- */}
  <section className="horizontal-section">
  <div class="max-w-screen-2xl mx-auto px-4 pt-16 lg:py-5 relative bg-gray-50">
<div class="flex flex-col md:flex-row gap-2">
   
    <div class="flex flex-1 flex-col gap-2">
        <div class="hidden md:flex flex-1 flex-row gap-2">
            <div class="flex flex-1 flex-col">
              <img class="object-cover h-full" src="https://images.unsplash.com/photo-1599941973480-33ce6bbca25d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGtpdGNoZW4lMjBmbG9vcnxlbnwwfHwwfHx8MA%3D%3D"/>  
            </div>
            <div class="hidden md:flex flex-1 flex-col">
              <img class="object-cover h-full" src="https://plus.unsplash.com/premium_photo-1661962998864-40c0b2b42850?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGtpdGNoZW4lMjBmbG9vcnxlbnwwfHwwfHx8MA%3D%3D"/>
            </div>
        </div>                        
        <div class="flex flex-1 flex-col">
          <img class="object-cover h-full" src="https://images.unsplash.com/photo-1560185127-2d06c6d08d3d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGtpdGNoZW4lMjBmbG9vcnxlbnwwfHwwfHx8MA%3D%3D"/>
        </div>
    </div>
    <div class="flex flex-1 flex-col gap-2">
        <div class="flex flex-1 flex-col">
            <img class="object-cover h-full" src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW50ZXJpb3IlMjBkZXNpZ258ZW58MHx8MHx8fDA%3D"/>
        </div>
        <div class="hidden md:flex flex-1 flex-row gap-2">
            <div class="flex flex-1 flex-col">
              <img class="object-cover h-full" src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aW50ZXJpb3IlMjBkZXNpZ258ZW58MHx8MHx8fDA%3D"/>
            </div>
            <div class="hidden md:flex flex-1 flex-col">
              <img class="object-cover h-full" src="https://plus.unsplash.com/premium_photo-1680127401733-1e24100f51f6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGludGVyaW9yJTIwZGVzaWdufGVufDB8fDB8fHww"/>
            </div>
        </div>
    </div>
</div>
</div>
  </section>
</main>
   </>
	);
};
export default Photo
