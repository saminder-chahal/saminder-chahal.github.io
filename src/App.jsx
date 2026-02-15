import React from 'react';
import HomeAbout from './components/HomeAbout';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';

function App() {
  return (
    <div className="min-h-screen">
      <nav className="bg-white shadow-lg py-4 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 flex justify-center space-x-8">
          <a href="#home-about" className="text-lg font-semibold text-gray-700 hover:text-blue-600 transition-colors">Home</a>
          <a href="#skills" className="text-lg font-semibold text-gray-700 hover:text-blue-600 transition-colors">Skills</a>
          <a href="#projects" className="text-lg font-semibold text-gray-700 hover:text-blue-600 transition-colors">Projects</a>
          <a href="#experience" className="text-lg font-semibold text-gray-700 hover:text-blue-600 transition-colors">Experience</a>
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
