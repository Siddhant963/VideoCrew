

//navbar
import React, { useState } from "react";
import { Menu, X } from "lucide-react"; 
import videologo from "../../assets/VIDEO.png";
import Vectorcerw from "../../assets/Vector.png"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = ["회사소개", "프로세스", "차별점", "포트폴리오", "문의하기"];

  return (
    <nav className="bg-black text-white px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
    
        {/* Logo */}
       <div className="flex items-center gap-1">
  <img
    src={videologo}
    alt="VIDEO"
    className="h-8 w-auto object-contain"
  />
  <img
    src={Vectorcerw}
    alt="CREW"
    className="h-5 mb-2 w-auto object-contain px-1"
  />
</div>


        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-sm font-medium">
          {menuItems.map((item, idx) => (
            <li
              key={idx}
              className="hover:text-gray-300 cursor-pointer transition-colors"
            >
              {item}
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <ul className="md:hidden flex flex-col gap-4 mt-4 text-sm font-medium bg-black border-t border-gray-800 pt-4">
          {menuItems.map((item, idx) => (
            <li
              key={idx}
              className="px-2 hover:text-gray-300 cursor-pointer transition-colors"
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
