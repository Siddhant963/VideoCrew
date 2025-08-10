// import type React from "react"
// import { Link } from "react-router-dom"

// const Footer: React.FC = () => {
//   const currentYear = new Date().getFullYear()

//   return (
//     <footer className="bg-gray-900 border-t border-gray-800">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {/* Company Info */}
//           <div className="space-y-4">
//             <Link to="/" className="flex items-center space-x-2">
//               <div className="bg-white p-2 rounded-lg">
//                 <svg className="h-6 w-6 text-black" fill="currentColor" viewBox="0 0 24 24">
//                   <path d="M8 5v14l11-7z" />
//                 </svg>
//               </div>
//               <span className="text-xl font-bold font-montserrat">VideoCrew</span>
//             </Link>
//             <p className="text-gray-400 text-sm leading-relaxed">
//               Professional video production company specializing in corporate videos, commercials, and creative content
//               that tells your story.
//             </p>
//             <div className="flex space-x-4">
//               <a href="#" className="text-gray-400 hover:text-white transition-colors">
//                 <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
//                   <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.347-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z" />
//                 </svg>
//               </a>
//               <a href="#" className="text-gray-400 hover:text-white transition-colors">
//                 <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
//                   <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
//                 </svg>
//               </a>
//               <a href="#" className="text-gray-400 hover:text-white transition-colors">
//                 <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
//                   <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
//                 </svg>
//               </a>
//               <a href="#" className="text-gray-400 hover:text-white transition-colors">
//                 <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
//                   <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
//                 </svg>
//               </a>
//             </div>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h3 className="text-white font-semibold mb-4">Quick Links</h3>
//             <ul className="space-y-2">
//               {["Home", "About", "Process", "Portfolio", "Contact"].map((item) => (
//                 <li key={item}>
//                   <Link
//                     to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
//                     className="text-gray-400 hover:text-white transition-colors text-sm"
//                   >
//                     {item}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Services */}
//           <div>
//             <h3 className="text-white font-semibold mb-4">Services</h3>
//             <ul className="space-y-2">
//               {[
//                 "Corporate Videos",
//                 "Commercial Production",
//                 "Event Coverage",
//                 "Documentary",
//                 "Animation",
//                 "Post-Production",
//               ].map((service) => (
//                 <li key={service}>
//                   <span className="text-gray-400 text-sm">{service}</span>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Contact Info */}
//           <div>
//             <h3 className="text-white font-semibold mb-4">Contact</h3>
//             <div className="space-y-3">
//               <div className="flex items-center space-x-3">
//                 <svg className="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
//                   />
//                 </svg>
//                 <span className="text-gray-400 text-sm">hello@videocrew.com</span>
//               </div>
//               <div className="flex items-center space-x-3">
//                 <svg className="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
//                   />
//                 </svg>
//                 <span className="text-gray-400 text-sm">+1 (555) 123-4567</span>
//               </div>
//               <div className="flex items-center space-x-3">
//                 <svg className="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
//                   />
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
//                   />
//                 </svg>
//                 <span className="text-gray-400 text-sm">New York, NY</span>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="border-t border-gray-800 mt-12 pt-8">
//           <div className="flex flex-col md:flex-row justify-between items-center">
//             <p className="text-gray-400 text-sm">© {currentYear} VideoCrew. All rights reserved.</p>
//             <div className="flex space-x-6 mt-4 md:mt-0">
//               <Link to="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
//                 Privacy Policy
//               </Link>
//               <Link to="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
//                 Terms of Service
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   )
// }

// export default Footer




import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-gray-300 font-sans w-full py-8 px-4 flex flex-col  justify-start">
      {/* Logo Section */}
      <div className="flex justify-start mb-6">
        <span className="font-bold text-white text-2xl mr-2">VIDEO</span>
        <div className="border border-white text-white px-2 py-1 text-xs uppercase font-bold">
          CREW
        </div>
      </div>

      {/* Description Text */}
      <div className="text-left text-sm leading-relaxed mb-6 whitespace-pre-line">
        비디오크루 (Video Crew) +는 (주)라닝크루 컨셉틴그룹의 영상 전문 브랜드입니다.
        <br />
        리너크루 컨셉틴그룹{" "}
        <a href="#" className="underline cursor-pointer">
          굳식 홈페이지 바로가기
        </a>{" "}
        주소.
      </div>

      {/* Address Text */}
      <div className="justify-start text-sm leading-relaxed mb-6 whitespace-pre-line">
        서울 성동구 연락공단가결 기상수평2가, 상수액 현대테리스타워 1001호~1003호
        <br />
        10매일 | info@learning-crew.com
      </div>

      {/* Copyright Text */}
      <div className="justify-start text-sm text-gray-500">
        © 2025. Video Crew all rights reserved.
      </div>
    </footer>
  );
};

export default Footer;