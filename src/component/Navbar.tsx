import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from "react-router-dom";
import React from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`py-0 flex justify-between items-center h-[80px]  ${
        isScrolled ? "fixed top-0 left-0 bg-white shadow-md z-50 w-full px-6" : "w-4/5 mx-auto"
      }`}
    >
      <div className="text-2xl font-extrabold"> <img src="/Logo.svg" alt="Logo"  className="md:w-[219px] w-auto h-[65px] mt-4 md:mt-0 md:h-[90px] absolute md:top-[-2px] top-[-4px]" /></div>
      <div className="hidden md:flex gap-6 text-md font-semibold ">
        {['Home', 'What we work','About',  'Contact'].map((item) => (
          <NavLink 
          key={item} 
          to={item === 'What we work' ? '/portfolio' : `/${item.toLowerCase()}`}
          className={({ isActive }: { isActive: boolean }) => 
            `relative hover:text-[#043a53] after:content-[''] mx-2 after:absolute font-semibold after:left-0 after:bottom-[-2px] after:w-full after:h-[2px] after:bg-[#043a53] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 ${isActive ? 'after:scale-x-100 text-[#043a53]' : ''}`
          }
        >
          {item}
        </NavLink>
        ))}
      </div>
      <button
        className="md:hidden"
        onClick={() => {
          setIsOpen(!isOpen);
          //           if (!isOpen) {
          //   window.scrollTo({ top: 0, behavior: "smooth" });
          // }

        }}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>
      {isOpen && (
        <div className="fixed top-[80px] left-0 w-full bg-white flex flex-col items-center gap-4 py-4 shadow-md z-50 md:hidden transition-all duration-300">
          {['Home',  'What we work','About',  'Contact'].map((item) => (
            <Link 
              key={item} 
              to={item === 'What we work' ? '/portfolio' : `/${item.toLowerCase()}`}
              className="relative hover:text-[#043a53] after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:w-full after:h-[2px] after:bg-[#043a53] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
              onClick={() => setIsOpen(false)}
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