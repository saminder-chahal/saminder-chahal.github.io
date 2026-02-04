import React from 'react'

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="text-center p-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Saminder Chahal
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          DevSecOps Portfolio
        </p>
        <div className="flex gap-4 justify-center">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition-colors">
            View Projects
          </button>
          <button className="border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white px-6 py-2 rounded-lg transition-colors">
            Contact Me
          </button>
        </div>
      </div>
    </div>
  )
}

export default App