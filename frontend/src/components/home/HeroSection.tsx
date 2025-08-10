// "use client"

// import type React from "react"
// import { useState, useEffect } from "react"
// import Button from "../common/Button"

// const HeroSection: React.FC = () => {
//   const [isVisible, setIsVisible] = useState(false)

//   useEffect(() => {
//     setIsVisible(true)
//   }, [])

//   return (
//     <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
//       {/* Background Video/Image */}
//       <div className="absolute inset-0 z-0">
//         <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30 z-10" />
//         <img src="/cinematic-video-setup.png" alt="Video Production Setup" className="w-full h-full object-cover" />
//       </div>

//       {/* Content */}
//       <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//         <div
//           className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
//         >
//           <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-montserrat mb-6 leading-tight">
//             Crafting Visual
//             <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
//               Stories That Matter
//             </span>
//           </h1>

//           <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
//             We transform your ideas into compelling visual narratives through professional video production, from
//             concept to final cut.
//           </p>

//           <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
//             <Button size="lg" className="group">
//               Start Your Project
//               <svg
//                 className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
//               </svg>
//             </Button>

//             <button className="flex items-center space-x-3 text-white hover:text-gray-300 transition-colors group">
//               <div className="bg-white/20 backdrop-blur-sm p-3 rounded-full group-hover:bg-white/30 transition-colors">
//                 <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
//                   <path d="M8 5v14l11-7z" />
//                 </svg>
//               </div>
//               <span className="font-medium">Watch Our Reel</span>
//             </button>
//           </div>

//           {/* Stats */}
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
//             {[
//               { number: "500+", label: "Projects Completed" },
//               { number: "50+", label: "Happy Clients" },
//               { number: "10+", label: "Years Experience" },
//               { number: "25+", label: "Awards Won" },
//             ].map((stat, index) => (
//               <div key={index} className="text-center">
//                 <div className="text-2xl md:text-3xl font-bold font-montserrat mb-1">{stat.number}</div>
//                 <div className="text-sm text-gray-400">{stat.label}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Scroll Indicator */}
//       <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
//         <div className="animate-bounce">
//           <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
//             <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse" />
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default HeroSection

"use client"

import type React from "react"
import { useState, useEffect } from "react"

const HeroSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40 z-10" />
        <img src="/cinematic-video-setup.png" alt="Video Production Setup" className="w-full h-full object-cover" />
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto text-center" style={{ paddingTop: "80px" }}>
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Main Heading */}
          <h1 className="text-display mb-6">
            Crafting Visual
            <span className="block bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Stories That Matter
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-body-lg text-gray-300 mb-12 max-w-3xl mx-auto">
            We transform your ideas into compelling visual narratives through professional video production, from
            concept to final cut.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <button className="btn btn-primary group">
              Start Your Project
              <svg
                className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>

            <button className="flex items-center space-x-3 text-white hover:text-gray-300 transition-colors group">
              <div className="bg-white/20 backdrop-blur-sm p-4 rounded-full group-hover:bg-white/30 transition-colors">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <span className="font-medium">Watch Our Reel</span>
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { number: "500+", label: "Projects Completed" },
              { number: "50+", label: "Happy Clients" },
              { number: "10+", label: "Years Experience" },
              { number: "25+", label: "Awards Won" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
