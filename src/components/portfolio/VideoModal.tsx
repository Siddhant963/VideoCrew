"use client"

import type React from "react"
import { useEffect } from "react"
import type { Project } from "./PortfolioGrid"

interface VideoModalProps {
  project: Project
  onClose: () => void
}

const VideoModal: React.FC<VideoModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose()
      }
    }

    document.addEventListener("keydown", handleEscape)
    document.body.style.overflow = "hidden"

    return () => {
      document.removeEventListener("keydown", handleEscape)
      document.body.style.overflow = "unset"
    }
  }, [onClose])

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-gray-900 rounded-2xl p-6 max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors">
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="mb-6">
          <div className="aspect-video bg-black rounded-lg mb-4 flex items-center justify-center">
            <div className="text-center">
              <svg className="h-16 w-16 text-gray-600 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
              <p className="text-gray-400">Video Player Placeholder</p>
              <p className="text-sm text-gray-500 mt-2">Duration: {project.duration}</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h2 className="text-2xl font-bold font-montserrat mb-4">{project.title}</h2>
            <p className="text-gray-400 mb-6 leading-relaxed">{project.description}</p>

            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-500">Client:</span>
                <span className="text-white">{project.client}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Category:</span>
                <span className="text-white">{project.category}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Duration:</span>
                <span className="text-white">{project.duration}</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Project Details</h3>
            <div className="space-y-4 text-sm text-gray-400">
              <p>
                This project showcased our ability to create compelling narratives that resonate with target audiences
                while maintaining the highest production standards.
              </p>
              <p>
                The video achieved exceptional engagement rates and helped the client exceed their marketing objectives.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VideoModal
