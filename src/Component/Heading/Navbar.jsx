import React, { useState, useEffect } from 'react';
import './Navbar.css'; 
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";

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
        <header className={`fixed w-full  z-[999999] ${prevScrollPos? "":""} left-0 border-gray-200 dark:border-gray-600 transition-transform duration-300 z-[99999] ${visible ? 'translate-y-6 duration-700' : '-translate-y-full'}`}>
            <nav className="z-[999999] max-w-[90vw] bg-[#26201759] text-white px-2 rounded-sm flex flex-wrap justify-between items-center relative mx-auto py-2">
                <Link className="logo" to="/">
                    <h3 className="font-bold text-2xl">LOGO</h3>
                </Link>
                <input type="checkbox" id="check" />

                <span className="menu font-roboto uppercase flex [&>li]:pl-8 [&>li>a]:text-center [&>li>a]:relative [&>li>a]:transition [&>li>a]:duration-200 [&>li>a]:ease-in-out [&>li>a]:font-medium [&>li>a]:text-lg">
                    <li className='list-none'><Link to="/">Home</Link></li>
                    <li className='list-none'><Link to="about">About</Link></li>
                    <li className='list-none'><Link to="contact">Contact</Link></li>
                    <li className='list-none'><Link to="products">Products</Link></li>
                    <li className='list-none'><Link to="blogs">Blogs</Link></li>

                    <label htmlFor="check" className="close-menu mr-10">X</label>
                </span>

                <label htmlFor="check" className="open-menu text-2xl">
                    <GiHamburgerMenu/>
                </label>
            </nav>
        </header>
    );
};

export default Navbar;


