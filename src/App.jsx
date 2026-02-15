import React, { useState, useEffect } from 'react';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline'; // Import icons for theme toggle
import HomeAbout from './components/HomeAbout';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact'; // Import Contact component

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    // Initialize dark mode from localStorage or system preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme === 'dark';
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    // Apply or remove 'dark' class on the HTML element
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-50 transition-colors duration-500">
      <nav className="bg-white dark:bg-gray-800 shadow-lg py-4 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 flex justify-between items-center"> {/* Changed to justify-between to accommodate toggle */}
          <div className="flex space-x-8">
            <a href="#home-about" className="text-lg font-semibold text-gray-700 dark:text-gray-300 hover:text-secondary-500 transition-colors">Home</a>
            <a href="#skills" className="text-lg font-semibold text-gray-700 dark:text-gray-300 hover:text-secondary-500 transition-colors">Skills</a>
            <a href="#projects" className="text-lg font-semibold text-gray-700 dark:text-gray-300 hover:text-secondary-500 transition-colors">Projects</a>
            <a href="#experience" className="text-lg font-semibold text-gray-700 dark:text-gray-300 hover:text-secondary-500 transition-colors">Experience</a>
            <a href="#contact" className="text-lg font-semibold text-gray-700 dark:text-gray-300 hover:text-secondary-500 transition-colors">Contact</a>
          </div>
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:ring-2 hover:ring-primary-500 focus:outline-none transition-colors"
            aria-label="Toggle dark mode"
          >
            {darkMode ? (
              <SunIcon className="h-6 w-6" />
            ) : (
              <MoonIcon className="h-6 w-6" />
            )}
          </button>
        </div>
      </nav>
      <div className="max-w-4xl mx-auto py-12 px-4">
        <HomeAbout />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </div>
    </div>
  );
}

export default App;
