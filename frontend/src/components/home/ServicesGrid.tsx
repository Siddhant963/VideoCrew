// "use client"

// import type React from "react"
// import { useState, useEffect, useRef } from "react"

// const ServicesGrid: React.FC = () => {
//   const [visibleItems, setVisibleItems] = useState<number[]>([])
//   const sectionRef = useRef<HTMLElement>(null)

//   const services = [
//     {
//       icon: "🎥",
//       title: "Corporate Videos",
//       description: "Professional corporate content that communicates your brand message effectively.",
//       features: ["Brand Videos", "Training Content", "Internal Communications"],
//     },
//     {
//       icon: "📹",
//       title: "Commercial Production",
//       description: "High-impact commercials that drive engagement and conversions.",
//       features: ["TV Commercials", "Digital Ads", "Product Showcases"],
//     },
//     {
//       icon: "✂️",
//       title: "Post-Production",
//       description: "Expert editing, color grading, and sound design to perfect your content.",
//       features: ["Video Editing", "Color Grading", "Sound Design"],
//     },
//     {
//       icon: "🎨",
//       title: "Animation & Motion",
//       description: "Creative animation and motion graphics that bring ideas to life.",
//       features: ["2D Animation", "3D Graphics", "Motion Design"],
//     },
//     {
//       icon: "📺",
//       title: "Event Coverage",
//       description: "Comprehensive event documentation and live streaming services.",
//       features: ["Live Events", "Conferences", "Weddings"],
//     },
//     {
//       icon: "🏆",
//       title: "Documentary",
//       description: "Compelling documentary storytelling that captures authentic narratives.",
//       features: ["Corporate Docs", "Personal Stories", "Historical Content"],
//     },
//   ]

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             const index = Number.parseInt(entry.target.getAttribute("data-index") || "0")
//             setVisibleItems((prev) => [...prev, index])
//           }
//         })
//       },
//       { threshold: 0.1 },
//     )

//     const items = sectionRef.current?.querySelectorAll("[data-index]")
//     items?.forEach((item) => observer.observe(item))

//     return () => observer.disconnect()
//   }, [])

//   return (
//     <section ref={sectionRef} className="py-20 lg:py-32 bg-gray-900">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <h2 className="text-3xl md:text-5xl font-bold font-montserrat mb-6">Our Services</h2>
//           <p className="text-lg text-gray-400 max-w-3xl mx-auto">
//             From concept to completion, we offer comprehensive video production services tailored to meet your unique
//             needs and objectives.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {services.map((service, index) => {
//             const isVisible = visibleItems.includes(index)

//             return (
//               <div
//                 key={index}
//                 data-index={index}
//                 className={`group bg-black border border-gray-800 rounded-2xl p-8 hover:border-gray-600 transition-all duration-500 hover:transform hover:scale-105 ${
//                   isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
//                 }`}
//                 style={{ transitionDelay: `${index * 100}ms` }}
//               >
//                 <div className="text-4xl mb-6">{service.icon}</div>

//                 <h3 className="text-xl font-bold font-montserrat mb-4 group-hover:text-gray-200 transition-colors">
//                   {service.title}
//                 </h3>

//                 <p className="text-gray-400 mb-6 leading-relaxed">{service.description}</p>

//                 <ul className="space-y-2">
//                   {service.features.map((feature, featureIndex) => (
//                     <li key={featureIndex} className="flex items-center text-sm text-gray-500">
//                       <div className="w-1.5 h-1.5 bg-white rounded-full mr-3" />
//                       {feature}
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             )
//           })}
//         </div>
//       </div>
//     </section>
//   )
// }

// export default ServicesGrid

"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"

const ServicesGrid: React.FC = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([])
  const sectionRef = useRef<HTMLElement>(null)

  const services = [
    {
      icon: "🎥",
      title: "Corporate Videos",
      description: "Professional corporate content that communicates your brand message effectively.",
      features: ["Brand Videos", "Training Content", "Internal Communications"],
    },
    {
      icon: "📹",
      title: "Commercial Production",
      description: "High-impact commercials that drive engagement and conversions.",
      features: ["TV Commercials", "Digital Ads", "Product Showcases"],
    },
    {
      icon: "✂️",
      title: "Post-Production",
      description: "Expert editing, color grading, and sound design to perfect your content.",
      features: ["Video Editing", "Color Grading", "Sound Design"],
    },
    {
      icon: "🎨",
      title: "Animation & Motion",
      description: "Creative animation and motion graphics that bring ideas to life.",
      features: ["2D Animation", "3D Graphics", "Motion Design"],
    },
    {
      icon: "📺",
      title: "Event Coverage",
      description: "Comprehensive event documentation and live streaming services.",
      features: ["Live Events", "Conferences", "Weddings"],
    },
    {
      icon: "🏆",
      title: "Documentary",
      description: "Compelling documentary storytelling that captures authentic narratives.",
      features: ["Corporate Docs", "Personal Stories", "Historical Content"],
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number.parseInt(entry.target.getAttribute("data-index") || "0")
            setVisibleItems((prev) => [...prev, index])
          }
        })
      },
      { threshold: 0.1 },
    )

    const items = sectionRef.current?.querySelectorAll("[data-index]")
    items?.forEach((item) => observer.observe(item))

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 bg-gray-900">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-heading-xl mb-6">Our Services</h2>
          <p className="text-body-lg text-gray-400 max-w-3xl mx-auto">
            From concept to completion, we offer comprehensive video production services tailored to meet your unique
            needs and objectives.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const isVisible = visibleItems.includes(index)

            return (
              <div
                key={index}
                data-index={index}
                className={`card group transition-all duration-500 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Icon */}
                <div className="text-4xl mb-6">{service.icon}</div>

                {/* Title */}
                <h3 className="text-heading-md mb-4 group-hover:text-gray-200 transition-colors">{service.title}</h3>

                {/* Description */}
                <p className="text-body text-gray-400 mb-6">{service.description}</p>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-body-sm text-gray-500">
                      <div className="w-1.5 h-1.5 bg-white rounded-full mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ServicesGrid
