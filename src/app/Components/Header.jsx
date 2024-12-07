"use client"; 

import { useState } from "react";

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const navLinks = (
    <>
      <a href="/" className="hover:text-red-500 transition-all flex items-center space-x-2">
        <i className="fas fa-home "></i> {/* Home Icon */}
        <span>Home</span>
      </a>
      <a href="/about" className="hover:text-red-500 transition-all flex items-center space-x-2">
        <i className="fas fa-user"></i> {/* About Icon */}
        <span>About</span>
      </a>
      <a href="/projects" className="hover:text-red-500 transition-all flex items-center space-x-2">
        <i className="fas fa-briefcase"></i> {/* Projects Icon */}
        <span>Projects</span>
      </a>
    </>
  );

  return (
    <header className="w-full h-[14vh] shadow-lg flex items-center justify-between px-6 relative font-serif ">
      {/* Logo or Image */}
      <div className="flex items-center space-x-4">
        <img
          src="./3jpg.png" 
          alt="Logo"
          className="h-[10vh] w-auto"
        />
      </div>

      {/* Navigation Links (Desktop) */}
      <nav className="hidden md:flex absolute left-1/3 flex space-x-6 text-lg font-semibold">
        {navLinks}
      </nav>

      {/* Hamburger Menu Button (Mobile) */}
      <button
        className="md:hidden text-2xl"
        onClick={toggleMobileMenu}
      >
        <i className={`fas ${mobileMenuOpen ? "fa-times" : "fa-bars"}`}></i> 
      </button>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-[14vh] left-0 w-full flex flex-col items-center space-y-4 py-4 md:hidden">
          {navLinks}
        </div>
      )}

      <div className="w-[25vh] h-[5vh] bg-gray-100 mr:4 md:mr-[20vh]  p-2 rounded-lg shadow-lg">
        <span>Search....</span>
      </div>
    </header>
  );
}

export default Header;
