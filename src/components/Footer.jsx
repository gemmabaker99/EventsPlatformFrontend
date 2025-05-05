import React from 'react'

function Footer() {
  return (
    <footer className="bg-indigo-600 text-white p-6 mt-8">
    <div className="max-w-4xl mx-auto flex flex-col sm:flex-row justify-between items-start sm:items-center">
      <div>
        <h2 className="text-2xl font-bold mb-2">Contact Us</h2>
        <p className="mb-1">📍 Manchester, UK</p>
        <p className="mb-1">📧 info@eventify.com</p>
        <p>📞 0161 123 4567</p>
      </div>
      <div className="mt-4 sm:mt-0">
        <p className="text-sm">&copy; {new Date().getFullYear()} Eventify. All rights reserved.</p>
      </div>
    </div>
  </footer>
  )
}

export default Footer