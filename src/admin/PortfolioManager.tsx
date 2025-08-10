"use client"

import type React from "react"
import { useState } from "react"
import type { Project } from "../components/portfolio/PortfolioGrid"

const PortfolioManager: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([
    {
      id: 1,
      title: "Tech Startup Launch",
      category: "Corporate",
      thumbnail: "/tech-startup-office.png",
      description: "A compelling brand story for a revolutionary fintech startup.",
      client: "FinTech Solutions",
      duration: "2:30",
    },
    {
      id: 2,
      title: "Luxury Brand Commercial",
      category: "Commercial",
      thumbnail: "/luxury-product.png",
      description: "High-end commercial showcasing premium lifestyle products.",
      client: "Luxury Brands Co.",
      duration: "1:45",
    },
  ])

  const [isEditing, setIsEditing] = useState<number | null>(null)
  const [editForm, setEditForm] = useState<Partial<Project>>({})

  const handleEdit = (project: Project) => {
    setIsEditing(project.id)
    setEditForm(project)
  }

  const handleSave = () => {
    if (isEditing && editForm) {
      setProjects(projects.map((p) => (p.id === isEditing ? { ...p, ...editForm } : p)))
      setIsEditing(null)
      setEditForm({})
    }
  }

  const handleDelete = (id: number) => {
    if (confirm("Are you sure you want to delete this project?")) {
      setProjects(projects.filter((p) => p.id !== id))
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Portfolio Projects</h2>
        <button className="bg-white text-black px-6 py-2 rounded-lg font-medium hover:bg-gray-200 transition-colors">
          Add New Project
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div key={project.id} className="bg-gray-900 border border-gray-800 rounded-lg p-4">
            {isEditing === project.id ? (
              <div className="space-y-4">
                <input
                  type="text"
                  value={editForm.title || ""}
                  onChange={(e) => setEditForm({ ...editForm, title: e.target.value })}
                  className="w-full px-3 py-2 bg-black border border-gray-700 rounded text-white"
                  placeholder="Project title"
                />
                <select
                  value={editForm.category || ""}
                  onChange={(e) => setEditForm({ ...editForm, category: e.target.value })}
                  className="w-full px-3 py-2 bg-black border border-gray-700 rounded text-white"
                >
                  <option value="Corporate">Corporate</option>
                  <option value="Commercial">Commercial</option>
                  <option value="Documentary">Documentary</option>
                  <option value="Event">Event</option>
                  <option value="Animation">Animation</option>
                </select>
                <textarea
                  value={editForm.description || ""}
                  onChange={(e) => setEditForm({ ...editForm, description: e.target.value })}
                  className="w-full px-3 py-2 bg-black border border-gray-700 rounded text-white"
                  placeholder="Description"
                  rows={3}
                />
                <div className="flex space-x-2">
                  <button
                    onClick={handleSave}
                    className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors"
                  >
                    Save
                  </button>
                  <button
                    onClick={() => setIsEditing(null)}
                    className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700 transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <>
                <img
                  src={project.thumbnail || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-32 object-cover rounded mb-4"
                />
                <h3 className="font-bold mb-2">{project.title}</h3>
                <p className="text-sm text-gray-400 mb-2">{project.category}</p>
                <p className="text-sm text-gray-500 mb-4">{project.description}</p>
                <div className="flex space-x-2">
                  <button
                    onClick={() => handleEdit(project)}
                    className="bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700 transition-colors"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(project.id)}
                    className="bg-red-600 text-white px-3 py-1 rounded text-sm hover:bg-red-700 transition-colors"
                  >
                    Delete
                  </button>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default PortfolioManager
