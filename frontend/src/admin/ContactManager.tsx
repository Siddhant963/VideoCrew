"use client"

import type React from "react"
import { useState } from "react"

interface ContactInquiry {
  id: number
  name: string
  email: string
  company: string
  projectType: string
  budget: string
  message: string
  date: string
  status: "new" | "contacted" | "closed"
}

const ContactManager: React.FC = () => {
  const [inquiries] = useState<ContactInquiry[]>([
    {
      id: 1,
      name: "John Smith",
      email: "john@example.com",
      company: "Tech Corp",
      projectType: "Corporate Video",
      budget: "$10,000 - $25,000",
      message: "We need a corporate video for our new product launch...",
      date: "2024-01-15",
      status: "new",
    },
    {
      id: 2,
      name: "Sarah Johnson",
      email: "sarah@startup.com",
      company: "Startup Inc",
      projectType: "Commercial",
      budget: "$25,000 - $50,000",
      message: "Looking for a high-end commercial for our brand...",
      date: "2024-01-14",
      status: "contacted",
    },
  ])

  const getStatusColor = (status: string) => {
    switch (status) {
      case "new":
        return "bg-green-600"
      case "contacted":
        return "bg-yellow-600"
      case "closed":
        return "bg-gray-600"
      default:
        return "bg-gray-600"
    }
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Contact Inquiries</h2>

      <div className="space-y-4">
        {inquiries.map((inquiry) => (
          <div key={inquiry.id} className="bg-gray-900 border border-gray-800 rounded-lg p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-lg font-bold">{inquiry.name}</h3>
                <p className="text-gray-400">{inquiry.email}</p>
                <p className="text-gray-500 text-sm">{inquiry.company}</p>
              </div>
              <div className="text-right">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium text-white ${getStatusColor(inquiry.status)}`}
                >
                  {inquiry.status.toUpperCase()}
                </span>
                <p className="text-gray-500 text-sm mt-2">{inquiry.date}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <p className="text-sm text-gray-400">Project Type:</p>
                <p className="text-white">{inquiry.projectType}</p>
              </div>
              <div>
                <p className="text-sm text-gray-400">Budget:</p>
                <p className="text-white">{inquiry.budget}</p>
              </div>
            </div>

            <div className="mb-4">
              <p className="text-sm text-gray-400 mb-2">Message:</p>
              <p className="text-gray-300">{inquiry.message}</p>
            </div>

            <div className="flex space-x-2">
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
                Reply
              </button>
              <button className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700 transition-colors">
                Mark as Contacted
              </button>
              <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ContactManager
