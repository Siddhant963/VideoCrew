import type React from "react"
import PortfolioGrid from "../components/portfolio/PortfolioGrid"

const Portfolio: React.FC = () => {
  return (
    <main className="min-h-screen bg-black text-white pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold font-montserrat mb-6">Our Portfolio</h1>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Explore our latest projects and see how we bring creative visions to life through exceptional video
            production
          </p>
        </div>
        <PortfolioGrid />
      </div>
    </main>
  )
}

export default Portfolio
