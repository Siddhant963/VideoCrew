// "use client"

// import type React from "react"
// import { useState, useEffect } from "react"
// import { Link, useLocation } from "react-router-dom"

// const Navbar: React.FC = () => {
//   const [isOpen, setIsOpen] = useState(false)
//   const [scrolled, setScrolled] = useState(false)
//   const location = useLocation()

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50)
//     }
//     window.addEventListener("scroll", handleScroll)
//     return () => window.removeEventListener("scroll", handleScroll)
//   }, [])

//   const navItems = [
//     { name: "Home", href: "/" },
//     { name: "About", href: "/about" },
//     { name: "Process", href: "/process" },
//     { name: "Portfolio", href: "/portfolio" },
//     { name: "Differentiation", href: "/differentiation" },
//     { name: "Contact", href: "/contact" },
//   ]

//   return (
//     <nav
//       className={`fixed top-0 w-full z-50 transition-all duration-300 ${
//         scrolled ? "bg-black/90 backdrop-blur-md border-b border-gray-800" : "bg-transparent"
//       }`}
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16 lg:h-20">
//           {/* Logo */}
//           <Link to="/" className="flex items-center space-x-2 group">
//             <div className="bg-white p-2 rounded-lg group-hover:bg-gray-200 transition-colors">
//               <svg className="h-6 w-6 text-black" fill="currentColor" viewBox="0 0 24 24">
//                 <path d="M8 5v14l11-7z" />
//               </svg>
//             </div>
//             <span className="text-xl font-bold font-montserrat">VideoCrew</span>
//           </Link>

//           {/* Desktop Navigation */}
//           <div className="hidden lg:flex items-center space-x-8">
//             {navItems.map((item) => (
//               <Link
//                 key={item.name}
//                 to={item.href}
//                 className={`text-sm font-medium transition-colors hover:text-white ${
//                   location.pathname === item.href ? "text-white" : "text-gray-300"
//                 }`}
//               >
//                 {item.name}
//               </Link>
//             ))}
//           </div>

//           {/* CTA Button */}
//           <div className="hidden lg:block">
//             <Link
//               to="/contact"
//               className="bg-white text-black px-6 py-2 rounded-full font-medium hover:bg-gray-200 transition-colors"
//             >
//               Get Quote
//             </Link>
//           </div>

//           {/* Mobile menu button */}
//           <button
//             onClick={() => setIsOpen(!isOpen)}
//             className="lg:hidden p-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-800 transition-colors"
//           >
//             {isOpen ? (
//               <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//               </svg>
//             ) : (
//               <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//               </svg>
//             )}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Navigation */}
//       {isOpen && (
//         <div className="lg:hidden bg-black/95 backdrop-blur-md border-t border-gray-800">
//           <div className="px-4 py-6 space-y-4">
//             {navItems.map((item) => (
//               <Link
//                 key={item.name}
//                 to={item.href}
//                 onClick={() => setIsOpen(false)}
//                 className={`block text-base font-medium transition-colors hover:text-white ${
//                   location.pathname === item.href ? "text-white" : "text-gray-300"
//                 }`}
//               >
//                 {item.name}
//               </Link>
//             ))}
//             <Link
//               to="/contact"
//               onClick={() => setIsOpen(false)}
//               className="block w-full bg-white text-black text-center px-6 py-3 rounded-full font-medium hover:bg-gray-200 transition-colors mt-6"
//             >
//               Get Quote
//             </Link>
//           </div>
//         </div>
//       )}
//     </nav>
//   )
// }

// export default Navbar

// "use client"

// import type React from "react"
// import { useState, useEffect } from "react"
// import { Link, useLocation } from "react-router-dom"

// const Navbar: React.FC = () => {
//   const [isOpen, setIsOpen] = useState(false)
//   const [scrolled, setScrolled] = useState(false)
//   const location = useLocation()

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50)
//     }
//     window.addEventListener("scroll", handleScroll)
//     return () => window.removeEventListener("scroll", handleScroll)
//   }, [])

//   const navItems = [
//     { name: "Home", href: "/" },
//     { name: "About", href: "/about" },
//     { name: "Process", href: "/process" },
//     { name: "Portfolio", href: "/portfolio" },
//     { name: "Differentiation", href: "/differentiation" },
//     { name: "Contact", href: "/contact" },
//   ]

//   return (
//     <nav
//       className={`fixed top-0 w-full z-50 transition-all duration-300 ${
//         scrolled ? "bg-black/90 backdrop-blur-md border-b border-gray-800" : "bg-transparent"
//       }`}
//       style={{ height: "80px" }}
//     >
//       <div className="container mx-auto h-full">
//         <div className="flex justify-between items-center h-full">
//           {/* Logo */}
//           <Link to="/" className="flex items-center space-x-3">
//             <div className="bg-white p-2 rounded-lg hover:bg-gray-200 transition-colors">
//               <svg className="h-6 w-6 text-black" fill="currentColor" viewBox="0 0 24 24">
//                 <path d="M8 5v14l11-7z" />
//               </svg>
//             </div>
//             <span className="text-xl font-bold">VideoCrew</span>
//           </Link>

//           {/* Desktop Navigation */}
//           <div className="hidden lg:flex items-center space-x-8">
//             {navItems.map((item) => (
//               <Link
//                 key={item.name}
//                 to={item.href}
//                 className={`text-sm font-medium transition-colors hover:text-white relative ${
//                   location.pathname === item.href ? "text-white" : "text-gray-400"
//                 }`}
//               >
//                 {item.name}
//                 {location.pathname === item.href && (
//                   <div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-white rounded-full" />
//                 )}
//               </Link>
//             ))}
//           </div>

//           {/* CTA Button */}
//           <div className="hidden lg:block">
//             <Link to="/contact" className="btn btn-primary">
//               Get Quote
//             </Link>
//           </div>

//           {/* Mobile menu button */}
//           <button
//             onClick={() => setIsOpen(!isOpen)}
//             className="lg:hidden p-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-800 transition-colors"
//           >
//             {isOpen ? (
//               <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//               </svg>
//             ) : (
//               <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//               </svg>
//             )}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Navigation */}
//       {isOpen && (
//         <div className="lg:hidden bg-black/95 backdrop-blur-md border-t border-gray-800">
//           <div className="container mx-auto px-4 py-6 space-y-4">
//             {navItems.map((item) => (
//               <Link
//                 key={item.name}
//                 to={item.href}
//                 onClick={() => setIsOpen(false)}
//                 className={`block text-base font-medium transition-colors hover:text-white ${
//                   location.pathname === item.href ? "text-white" : "text-gray-300"
//                 }`}
//               >
//                 {item.name}
//               </Link>
//             ))}
//             <Link to="/contact" onClick={() => setIsOpen(false)} className="btn btn-primary w-full mt-6">
//               Get Quote
//             </Link>
//           </div>
//         </div>
//       )}
//     </nav>
//   )
// }

// export default Navbar

import React, { useState } from "react";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    "회사소개",
    "프로세스",
    "차별점",
    "포트폴리오",
    "문의하기"
  ];

  return (
    <nav 
      className="fixed w-full h-16 bg-[url('https://example.com/cinematic-bg.jpg')] bg-cover bg-center"
      style={{
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7))",
      }}
    >
      <div className="container mx-auto h-full px-4 flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center">
          <span className="text-white font-bold text-2xl mr-2">VIDEO</span>
          <div className="bg-black text-white border border-white px-2 py-1 text-xs uppercase font-bold">
            CREW
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {menuItems.map((item, index) => (
            <a
              key={index}
              href="#"
              className="text-white hover:opacity-70 transition-opacity duration-300"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-black bg-opacity-90 w-full py-4 px-4">
          {menuItems.map((item, index) => (
            <a
              key={index}
              href="#"
              className="block text-white py-2 hover:opacity-70 transition-opacity duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;