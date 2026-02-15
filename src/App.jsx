import React from 'react';
import HomeAbout from './components/HomeAbout';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <nav className="bg-white shadow-lg py-4">
        <div className="max-w-4xl mx-auto px-4 flex justify-center space-x-8">
          <a href="#home-about" className="text-lg font-semibold text-gray-600 hover:text-blue-600">Home</a>
          <a href="#skills" className="text-lg font-semibold text-gray-600 hover:text-blue-600">Skills</a>
          <a href="#projects" className="text-lg font-semibold text-gray-600 hover:text-blue-600">Projects</a>
          <a href="#experience" className="text-lg font-semibold text-gray-600 hover:text-blue-600">Experience</a>
        </div>
      </nav>
      <div className="max-w-4xl mx-auto py-12 px-4">
        <HomeAbout />
        <Skills />
        <Projects />
        <Experience />
      </div>
    </div>
  );
}

export default App;
