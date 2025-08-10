import type React from "react"

const Process: React.FC = () => {
  const processSteps = [
    {
      step: "01",
      title: "Discovery & Planning",
      description:
        "We start by understanding your vision, goals, and target audience to create a comprehensive production plan.",
      features: ["Strategy Development", "Creative Brief", "Timeline Planning", "Budget Allocation"],
    },
    {
      step: "02",
      title: "Pre-Production",
      description: "Detailed planning phase where we prepare everything needed for a successful shoot.",
      features: ["Script Writing", "Storyboarding", "Location Scouting", "Casting & Crew"],
    },
    {
      step: "03",
      title: "Production",
      description: "The filming phase where our experienced crew brings your vision to life.",
      features: ["Professional Filming", "Direction", "Lighting Setup", "Audio Recording"],
    },
    {
      step: "04",
      title: "Post-Production",
      description: "Where the magic happens - editing, color grading, and sound design to perfect your video.",
      features: ["Video Editing", "Color Grading", "Sound Design", "Motion Graphics"],
    },
  ]

  return (
    <main className="min-h-screen bg-black text-white pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold font-montserrat mb-6">Our Process</h1>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            From concept to completion, our proven 4-step process ensures every project exceeds expectations
          </p>
        </div>

        <div className="space-y-20">
          {processSteps.map((process, index) => (
            <div
              key={index}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
            >
              <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                <div className="text-6xl font-bold text-gray-800 mb-4">{process.step}</div>
                <h2 className="text-3xl font-bold font-montserrat mb-6">{process.title}</h2>
                <p className="text-lg text-gray-400 mb-8 leading-relaxed">{process.description}</p>
                <ul className="space-y-3">
                  {process.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <div className="w-2 h-2 bg-white rounded-full mr-4"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className={index % 2 === 1 ? "lg:col-start-1" : ""}>
                <img
                  src={`/video-production-scene.png?height=400&width=600&query=video production ${process.title.toLowerCase()}`}
                  alt={process.title}
                  className="rounded-2xl shadow-2xl w-full h-auto"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}

export default Process
