// src/components/Header.js
import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import { Turn as Hamburger } from 'hamburger-react';

const Header = () => {
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 768) {
        setOpen(false);
      }
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className="bg-teal-500 text-white font-semibold">
      <div className="relative max-w-6xl mx-auto md:px-10 px-5 py-4 md:py-6 flex justify-between items-center">
        <h1 className="text-xl">
          <Link to="/" className="hover:text-teal-300">gatsby-starter-tailwind-css-netlify</Link>
        </h1>
        <div className="md:hidden">
          <Hamburger toggled={isOpen} toggle={setOpen} color="#fff" />
        </div>
        <nav className={`${isOpen ? 'block' : 'hidden'} md:block absolute md:relative top-full left-0 w-full md:w-auto bg-teal-500 md:bg-transparent transition-all ease-in-out duration-300 z-20`}>
          <ul className="flex flex-col md:flex-row md:space-x-8 items-center pb-5 md:pb-0">
            <li><Link to="/" className="block py-2 hover:text-teal-300">Home</Link></li>
            <li><Link to="/about" className="block py-2 hover:text-teal-300">About</Link></li>
            <li><Link to="/contact" className="block py-2 hover:text-teal-300">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
