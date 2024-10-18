import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({ isOpen, setIsOpen }) => {
  return (
    <div
      onClick={() => setIsOpen(!isOpen)}
      className={`z-10 items-end pr-6 lg:hidden fixed right-0 w-[170px] pt-24 text-xl space-y-12 bg-gray-200 opacity-90 min-h-screen ${
        isOpen ? 'flex flex-col' : 'hidden'
      } text-black`}
    >
      <Link
        className={`underline-animation w-fit delay-50 ${
          isOpen ? 'animate-slideDown' : ''
        }`}
        to="/"
        onClick={() => setIsOpen(false)}
      >
        Home
      </Link>
      <Link
        className={`underline-animation w-fit delay-50 ${
          isOpen ? 'animate-slideDown' : ''
        }`}
        to="/blogs"
        onClick={() => setIsOpen(false)}
      >
        Blogs
      </Link>
      <Link
        className={`underline-animation w-fit delay-150 ${
          isOpen ? 'animate-slideDown' : ''
        }`}
        to="/services"
        style={{ animationDelay: '0.25s' }}
        onClick={() => setIsOpen(false)}
      >
        Services
      </Link>
      <Link
        className={`underline-animation w-fit delay-100 ${
          isOpen ? 'animate-slideDown' : ''
        }`}
        to="/about"
        style={{ animationDelay: '0.35s' }}
        onClick={() => setIsOpen(false)}
      >
        About
      </Link>
      <Link
        className={`underline-animation w-fit delay-200 ${
          isOpen ? 'animate-slideDown' : ''
        }`}
        to="/contact"
        onClick={() => setIsOpen(false)}
      >
        Contact Us
      </Link>
    </div>
  );
};

export default Sidebar;
