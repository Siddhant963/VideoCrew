"use client"

import type React from "react"
import { useState } from "react"
import PortfolioCard from "./PortfolioCard"
import VideoModal from "./VideoModal"

export interface Project {
  id: number
  title: string
  category: string
  thumbnail: string
  description: string
  client: string
  duration: string
  videoUrl?: string
}

const PortfolioGrid: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [filter, setFilter] = useState("All")

  const projects: Project[] = [
    {
      id: 1,
      title: "Tech Startup Launch",
      category: "Corporate",
      thumbnail: "/modern-tech-startup-office.png",
      description: "A compelling brand story for a revolutionary fintech startup.",
      client: "FinTech Solutions",
      duration: "2:30",
    },
    {
      id: 2,
      title: "Luxury Brand Commercial",
      category: "Commercial",
      thumbnail: "/luxury-product-setup.png",
      description: "High-end commercial showcasing premium lifestyle products.",
      client: "Luxury Brands Co.",
      duration: "1:45",
    },
    {
      id: 3,
      title: "Documentary Series",
      category: "Documentary",
      thumbnail: "/documentary-interview-setup.png",
      description: "Award-winning documentary about sustainable innovation.",
      client: "Green Future Foundation",
      duration: "45:00",
    },
    {
      id: 4,
      title: "Product Launch Event",
      category: "Event",
      thumbnail: "/corporate-event-stage.png",
      description: "Complete coverage of a major product launch event.",
      client: "Innovation Corp",
      duration: "3:15",
    },
    {
      id: 5,
      title: "Brand Animation",
      category: "Animation",
      thumbnail: "/3d-animation-workspace.png",
      description: "Creative animated explainer video for SaaS platform.",
      client: "CloudTech Inc",
      duration: "1:20",
    },
    {
      id: 6,
      title: "Training Series",
      category: "Corporate",
      thumbnail: "/corporate-training-video.png",
      description: "Comprehensive training video series for employee onboarding.",
      client: "Global Enterprises",
      duration: "12:30",
    },
  ]

  const categories = ["All", "Corporate", "Commercial", "Documentary", "Event", "Animation"]

  const filteredProjects = filter === "All" ? projects : projects.filter((project) => project.category === filter)

  return (
    <>
      <div className="mb-8">
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                filter === category
                  ? "bg-white text-black"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <PortfolioCard key={project.id} project={project} onClick={() => setSelectedProject(project)} />
        ))}
      </div>

      {selectedProject && <VideoModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
    </>
  )
}

export default PortfolioGrid
