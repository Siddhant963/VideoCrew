import type React from "react"

const Differentiation: React.FC = () => {
  const differentiators = [
    {
      title: "Cutting-Edge Technology",
      description: "We use the latest 8K cameras, professional lighting, and advanced post-production software.",
      icon: "🎥",
    },
    {
      title: "Award-Winning Team",
      description: "Our team has won over 25 industry awards for creativity and technical excellence.",
      icon: "🏆",
    },
    {
      title: "Fast Turnaround",
      description: "We deliver high-quality videos 40% faster than industry average without compromising quality.",
      icon: "⚡",
    },
    {
      title: "Full-Service Production",
      description: "From concept to distribution, we handle every aspect of video production under one roof.",
      icon: "🎬",
    },
  ]

  return (
    <main className="min-h-screen bg-black text-white pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold font-montserrat mb-6">What Sets Us Apart</h1>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Discover why leading brands choose VideoCrew for their most important video projects
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {differentiators.map((item, index) => (
            <div
              key={index}
              className="bg-gray-900 border border-gray-800 rounded-2xl p-8 hover:border-gray-600 transition-all duration-300"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-2xl font-bold font-montserrat mb-4">{item.title}</h3>
              <p className="text-gray-400 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gray-900 rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold font-montserrat mb-6">Ready to Experience the Difference?</h2>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied clients who have transformed their brand with our video production services
          </p>
          <button className="bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-gray-200 transition-colors">
            Start Your Project
          </button>
        </div>
      </div>
    </main>
  )
}

export default Differentiation
