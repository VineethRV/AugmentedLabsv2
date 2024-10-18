import React from "react";
import HamburgerBtn from "./components/hamburgerBtn";
import { Link,Outlet } from 'react-router-dom';

const Navbar = ({ isOpen, setIsOpen, setPage}) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-20 flex justify-between lg:justify-start px-6 lg:pr-12 pt-3 pb-3 bg-gray-200 shadow-md">
      <div className="lg:w-1/4 text-2xl font-bold font-dancing hover:animate-float cursor-pointer text-black">
        Augmented Labs
      </div>
      <HamburgerBtn setIsOpen={setIsOpen} isOpen={isOpen} />
      <ul className="hidden lg:flex justify-between items-center w-3/4 font-medium text-black" style={{color:'black'}}>
        <li className="cursor-pointer underline-animation" ><Link to="/">Home</Link></li>
        <li className="cursor-pointer underline-animation" ><Link to="/blogs">Blogs</Link></li> 
        <li className="cursor-pointer underline-animation"><Link to="/services">Services</Link></li> 
        <li className="cursor-pointer underline-animation"><Link to="/contact">Contact Us</Link></li> 
        <li className="cursor-pointer underline-animation"><Link to="/about">About</Link></li> 
      </ul>
      <Outlet/>
    </nav>
  );
};

export default Navbar;
