import React, { useState, useEffect } from 'react';
import './Navbar.css'; 
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            const isVisible = prevScrollPos > currentScrollPos;

            setPrevScrollPos(currentScrollPos);
            setVisible(isVisible);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [prevScrollPos]);

    return (
        <header className={`fixed w-full z-20 ${prevScrollPos? "":""} left-0 border-gray-200 dark:border-gray-600 transition-transform duration-300 z-[99999] ${visible ? 'translate-y-6 duration-700' : '-translate-y-full'}`}>
            <nav className="max-w-[90vw] bg-[#ac9066] text-white px-2 rounded-sm flex flex-wrap justify-between items-center relative mx-auto py-2">
                <a className="logo" href="#">
                    <h3 className="font-bold text-2xl">LOGO</h3>
                </a>
                <input type="checkbox" id="check" />

                <span className="menu flex [&>li]:pl-8 [&>li>a]:text-center [&>li>a]:relative [&>li>a]:transition [&>li>a]:duration-200 [&>li>a]:ease-in-out [&>li>a]:font-medium [&>li>a]:text-lg">
                    <li className='list-none'><Link to="/">Home</Link></li>
                    <li className='list-none'><Link to="about">About</Link></li>
                    <li className='list-none'><Link to="contact">Contact</Link></li>
                    <li className='list-none'><Link to="#">Resources</Link></li>
                    <li className='list-none'><Link to="Project">Contact</Link></li>

                    <label htmlFor="check" className="close-menu">X</label>
                </span>

                <label htmlFor="check" className="open-menu">Menu</label>
            </nav>
        </header>
    );
};

export default Navbar;




// import React, { useState } from 'react';
// import './Navbar.css'; 

// const Navbar = () => {
   

//     return (
//         <header>
//         <nav class=" fixed w-full z-20 top-6 left-0  border-gray-200 dark:border-gray-600">
//           <ul class="navigation max-w-[90vw] bg-white px-2 rounded-sm flex flex-wrap justify-between items-center relative mx-auto py-2">
//             <a class="logo" href="#">
//               <h3 class="font-bold text-2xl">LOGO</h3>
//             </a>
//             <input type="checkbox" id="check" />
      
            // <span class="menu flex [&>li]:pl-8 [&>li>a]:text-center [&>li>a]:relative [&>li>a]:transition [&>li>a]:duration-200 [&>li>a]:ease-in-out [&>li>a]:font-medium [&>li>a]:text-lg">
            //   <li><a href="#">Home</a></li>
            //   <li><a href="#">About</a></li>
            //   <li><a href="#">Projects</a></li>
            //   <li><a href="#">Resources</a></li>
            //   <li><a href="#">Contact</a></li>
      
            //   <label for="check" class="close-menu">X</label>
            // </span>
      
//             <label for="check" class="open-menu">Menu</label>
//           </ul>
//         </nav>
//       </header>
//     );
// };

// export default Navbar;
