import { useState } from "react";
import { Menu, X } from "lucide-react";
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from "react-router-dom";
import React from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-4/5 mx-auto py-0 flex justify-between items-center  h-[80px]">
      <div className="text-2xl font-extrabold"> <img src="/Logo.svg" alt="Logo"  className="w-[219px] h-[90px] absolute top-[-2px] " /></div>
      <div className="hidden md:flex gap-6 text-md font-semibold ">
        {["Home", "Services", "Portfolio", "About", "Contact"].map((item) => (
          <NavLink 
          key={item} 
          to={`/${item.toLowerCase()}`} 
          className={({ isActive }: { isActive: boolean }) => 
            `relative hover:text-blue-700 after:content-[''] mx-2 after:absolute font-semibold after:left-0 after:bottom-[-2px] after:w-full after:h-[2px] after:bg-blue-700 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 ${isActive ? 'after:scale-x-100 text-blue-700' : ''}`
          }
        >
          {item}
        </NavLink>
        ))}
      </div>
      <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white flex flex-col items-center gap-4 py-4 shadow-md md:hidden">
          {["Home", "Services", "Portfolio", "About", "Contact"].map((item) => (
            <Link key={item} to={`/${item.toLowerCase()}`}            className="relative hover:text-blue-900 after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:w-full after:h-[2px] after:bg-blue-700 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
>
              {item}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;