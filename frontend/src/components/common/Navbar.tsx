

//navbar
import React, { useState } from "react";
import { Menu, X } from "lucide-react"; 
import videologo from "../../assets/VIDEO.png";
import Vectorcerw from "../../assets/Vector.png"
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: "회사소개", path: "/about" },
    { label: "프로세스", path: "/process" },
    { label: "차별점", path: "/differentiation" },
    { label: "포트폴리오", path: "/portfolio" },
    { label: "문의하기", path: "/contact" },
  ];

  return (
   <nav className="bg-transparent text-white px-6 py-4">

      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
    
        {/* Logo */}
       <div className="flex items-center gap-[]">
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
        <ul className="hidden md:flex gap-8 text-[20px] font-medium">
          {menuItems.map((item, idx) => (
             <li key={idx}>
              <Link
                to={item.path}
                className="hover:text-gray-300 transition-colors cursor-pointer"
              >
                {item.label}
              </Link>
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
            <li key={idx}>
              <Link
                to={item.path}
                className="hover:text-gray-300 transition-colors cursor-pointer px-2"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
