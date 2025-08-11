"use client"

import { useState } from "react"
import { Eye, Trash2, Filter, X } from "lucide-react"

interface Contact {
  id: number
  name: string
  email: string
  phone: string
  message: string
  status: "new" | "pending" | "completed"
  createdAt: string
}

export default function ContactManagement() {
  const [contacts, setContacts] = useState<Contact[]>([
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      phone: "+1 234 567 8900",
      message: "Interested in wedding videography services for my upcoming ceremony in June",
      status: "new",
      createdAt: "2024-01-15",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      phone: "+1 234 567 8901",
      message: "Need corporate event coverage for our annual conference next month",
      status: "pending",
      createdAt: "2024-01-14",
    },
    {
      id: 3,
      name: "Mike Johnson",
      email: "mike@example.com",
      phone: "+1 234 567 8902",
      message: "Music video production inquiry for my band's latest single",
      status: "completed",
      createdAt: "2024-01-13",
    },
    {
      id: 4,
      name: "Sarah Wilson",
      email: "sarah@example.com",
      phone: "+1 234 567 8903",
      message: "Looking for documentary filmmaker for environmental project",
      status: "new",
      createdAt: "2024-01-12",
    },
  ])

  const [filterStatus, setFilterStatus] = useState<string>("all")
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null)

  const getStatusColor = (status: string) => {
    switch (status) {
      case "new":
        return "bg-green-500/20 text-green-400 border-green-500/30"
      case "pending":
        return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
      case "completed":
        return "bg-blue-500/20 text-blue-400 border-blue-500/30"
      default:
        return "bg-gray-500/20 text-gray-400 border-gray-500/30"
    }
  }

  const updateStatus = (id: number, newStatus: "new" | "pending" | "completed") => {
    setContacts((contacts) =>
      contacts.map((contact) => (contact.id === id ? { ...contact, status: newStatus } : contact)),
    )
  }

  const deleteContact = (id: number) => {
    if (confirm("Are you sure you want to delete this contact?")) {
      setContacts((contacts) => contacts.filter((contact) => contact.id !== id))
    }
  }

  const filteredContacts =
    filterStatus === "all" ? contacts : contacts.filter((contact) => contact.status === filterStatus)

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
        <div>
          <h2 className="text-2xl font-bold text-white mb-2">Contact Management</h2>
          <p className="text-gray-400">Manage customer inquiries and requests</p>
        </div>

        <div className="flex items-center space-x-3 bg-gray-800/50 backdrop-blur-sm rounded-lg p-2 border border-gray-700/50">
          <Filter className="w-4 h-4 text-gray-400" />
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="bg-transparent text-white border-none focus:ring-0 focus:outline-none"
          >
            <option value="all" className="bg-gray-800">
              All Status
            </option>
            <option value="new" className="bg-gray-800">
              New
            </option>
            <option value="pending" className="bg-gray-800">
              Pending
            </option>
            <option value="completed" className="bg-gray-800">
              Completed
            </option>
          </select>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 animate-fade-in">
          <div className="flex items-center">
            <div className="p-3 bg-blue-500/20 rounded-lg">
              <div className="w-4 h-4 bg-blue-400 rounded-full"></div>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-400">Total</p>
              <p className="text-2xl font-bold text-white">{contacts.length}</p>
            </div>
          </div>
        </div>

        <div
          className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 animate-fade-in"
          style={{ animationDelay: "0.1s" }}
        >
          <div className="flex items-center">
            <div className="p-3 bg-green-500/20 rounded-lg">
              <div className="w-4 h-4 bg-green-400 rounded-full"></div>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-400">New</p>
              <p className="text-2xl font-bold text-white">{contacts.filter((c) => c.status === "new").length}</p>
            </div>
          </div>
        </div>

        <div
          className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 animate-fade-in"
          style={{ animationDelay: "0.2s" }}
        >
          <div className="flex items-center">
            <div className="p-3 bg-yellow-500/20 rounded-lg">
              <div className="w-4 h-4 bg-yellow-400 rounded-full"></div>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-400">Pending</p>
              <p className="text-2xl font-bold text-white">{contacts.filter((c) => c.status === "pending").length}</p>
            </div>
          </div>
        </div>

        <div
          className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 animate-fade-in"
          style={{ animationDelay: "0.3s" }}
        >
          <div className="flex items-center">
            <div className="p-3 bg-blue-500/20 rounded-lg">
              <div className="w-4 h-4 bg-blue-400 rounded-full"></div>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-400">Completed</p>
              <p className="text-2xl font-bold text-white">{contacts.filter((c) => c.status === "completed").length}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contacts Table */}
      <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 overflow-hidden animate-slide-up">
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead className="bg-gray-700/50">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                  Contact Info
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                  Message
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Date</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-700/50">
              {filteredContacts.map((contact, index) => (
                <tr
                  key={contact.id}
                  className="hover:bg-gray-700/30 transition-colors duration-200 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <div className="text-sm font-medium text-white">{contact.name}</div>
                      <div className="text-sm text-gray-400">{contact.email}</div>
                      <div className="text-sm text-gray-400">{contact.phone}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-300 max-w-xs truncate">{contact.message}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <select
                      value={contact.status}
                      onChange={(e) => updateStatus(contact.id, e.target.value as any)}
                      className={`px-3 py-1 text-xs font-semibold rounded-full border ${getStatusColor(contact.status)} bg-transparent`}
                    >
                      <option value="new" className="bg-gray-800">
                        New
                      </option>
                      <option value="pending" className="bg-gray-800">
                        Pending
                      </option>
                      <option value="completed" className="bg-gray-800">
                        Completed
                      </option>
                    </select>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">{contact.createdAt}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex space-x-2">
                      <button
                        onClick={() => setSelectedContact(contact)}
                        className="text-blue-400 hover:text-blue-300 p-2 rounded-lg hover:bg-blue-500/10 transition-all duration-200"
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => deleteContact(contact.id)}
                        className="text-red-400 hover:text-red-300 p-2 rounded-lg hover:bg-red-500/10 transition-all duration-200"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Contact Detail Modal */}
      {selectedContact && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-fade-in">
          <div className="bg-gray-800/95 backdrop-blur-xl rounded-xl max-w-lg w-full p-6 border border-gray-700/50 animate-slide-up">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-semibold text-white">Contact Details</h3>
              <button
                onClick={() => setSelectedContact(null)}
                className="text-gray-400 hover:text-white transition-colors duration-200 p-1 hover:bg-gray-700/50 rounded"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Name</label>
                <p className="text-white bg-gray-700/30 rounded-lg p-3">{selectedContact.name}</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Email</label>
                <p className="text-white bg-gray-700/30 rounded-lg p-3">{selectedContact.email}</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Phone</label>
                <p className="text-white bg-gray-700/30 rounded-lg p-3">{selectedContact.phone}</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Message</label>
                <p className="text-white bg-gray-700/30 rounded-lg p-3">{selectedContact.message}</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Status</label>
                <span
                  className={`inline-flex px-3 py-1 text-xs font-semibold rounded-full border ${getStatusColor(selectedContact.status)}`}
                >
                  {selectedContact.status}
                </span>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Date</label>
                <p className="text-white bg-gray-700/30 rounded-lg p-3">{selectedContact.createdAt}</p>
              </div>
            </div>

            <div className="mt-6 flex justify-end">
              <button
                onClick={() => setSelectedContact(null)}
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg transition-all duration-200 shadow-lg shadow-blue-500/25"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

