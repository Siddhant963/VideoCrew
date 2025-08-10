import type React from "react"

const About: React.FC = () => {
  return (
    <main className="min-h-screen bg-black text-white pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold font-montserrat mb-6 leading-tight">
              We Are
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                VideoCrew
              </span>
            </h1>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              Founded in 2014, VideoCrew has been at the forefront of video production, creating compelling visual
              stories that connect brands with their audiences. Our passion for storytelling drives everything we do.
            </p>
            <p className="text-lg text-gray-400 leading-relaxed">
              From humble beginnings as a small creative studio, we've grown into a full-service video production
              company, working with Fortune 500 companies and innovative startups alike.
            </p>
          </div>
          <div className="relative">
            <img
              src="/video-production-team.png"
              alt="VideoCrew Team"
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
            <div className="absolute -bottom-6 -left-6 bg-white text-black p-6 rounded-xl">
              <div className="text-2xl font-bold">10+</div>
              <div className="text-sm">Years of Excellence</div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default About
