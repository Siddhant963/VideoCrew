"use client"

import type React from "react"
import type { Project } from "./PortfolioGrid"

interface PortfolioCardProps {
  project: Project
  onClick: () => void
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({ project, onClick }) => {
  return (
    <div className="group cursor-pointer" onClick={onClick}>
      <div className="relative rounded-xl overflow-hidden mb-4">
        <img
          src={project.thumbnail || "/placeholder.svg"}
          alt={project.title}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
        <div className="absolute inset-0 flex items-center justify-center">
          <button className="bg-white/20 backdrop-blur-sm p-4 rounded-full hover:bg-white/30 transition-colors">
            <svg className="h-8 w-8 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </button>
        </div>
        <div className="absolute top-4 left-4">
          <span className="text-xs text-white bg-black/60 backdrop-blur-sm px-2 py-1 rounded">{project.category}</span>
        </div>
        <div className="absolute bottom-4 right-4">
          <span className="text-xs text-white bg-black/60 backdrop-blur-sm px-2 py-1 rounded">{project.duration}</span>
        </div>
      </div>
      <h3 className="text-lg font-bold mb-2 group-hover:text-gray-300 transition-colors">{project.title}</h3>
      <p className="text-gray-400 text-sm mb-1">{project.description}</p>
      <p className="text-gray-500 text-xs">Client: {project.client}</p>
    </div>
  )
}

export default PortfolioCard
