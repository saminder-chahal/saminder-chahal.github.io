import React from 'react';

import { CloudIcon, ShieldCheckIcon, CubeIcon } from '@heroicons/react/24/outline'; // Import Heroicons

const HomeAbout = () => {
  return (
    <section id="home-about" className="hero-gradient text-center pb-12 rounded-lg shadow-xl mb-8 security-focus">
      <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-r from-primary-500 to-primary-700 rounded-full flex items-center justify-center text-gray-50 text-3xl font-bold shadow-lg">
        SC
      </div>
      <h1 className="text-5xl font-bold text-gray-900 dark:text-gray-100 mb-3">
        Saminder Chahal
      </h1>
      <p className="text-2xl text-secondary-500 dark:text-secondary-300 font-semibold mb-2">
        Senior DevSecOps & Cloud Security Engineer
      </p>
      <p className="text-lg text-gray-500 dark:text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed">
        With over a decade of hands-on experience, I am a seasoned DevSecOps and Cloud Security Engineer passionate about building secure, scalable, and resilient systems. My expertise lies in architecting robust cloud security frameworks, automating security processes within CI/CD pipelines, and fostering a security-first culture across development and operations teams. I thrive on solving complex security challenges and implementing solutions that protect critical assets while accelerating business growth. Let's build a more secure future, together.
      </p>

      {/* Certifications Section */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8 mx-auto max-w-3xl">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-gray-100">Certifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-4 rounded-lg certificate-badge bg-primary-50 dark:bg-gray-700 transform hover:scale-105 transition-transform duration-300">
            <CloudIcon className="mx-auto h-8 w-8 text-primary-500 dark:text-primary-300 mb-2" /> {/* AWS Icon */}
            <h3 className="font-bold text-lg mb-2 text-primary-700 dark:text-primary-300">AWS Certified</h3>
            <p className="text-gray-500 dark:text-gray-300">Cloud Architecture & Security</p>
          </div>
          <div className="text-center p-4 rounded-lg certificate-badge bg-primary-50 dark:bg-gray-700 transform hover:scale-105 transition-transform duration-300">
            <ShieldCheckIcon className="mx-auto h-8 w-8 text-primary-500 dark:text-primary-300 mb-2" /> {/* CISSP Icon */}
            <h3 className="font-bold text-lg mb-2 text-primary-700 dark:text-primary-300">CISSP</h3>
            <p className="text-gray-500 dark:text-gray-300">Certified Information Systems Security Professional</p>
          </div>
          <div className="text-center p-4 rounded-lg certificate-badge bg-primary-50 dark:bg-gray-700 transform hover:scale-105 transition-transform duration-300">
            <CubeIcon className="mx-auto h-8 w-8 text-primary-500 dark:text-primary-300 mb-2" /> {/* Kubernetes Icon */}
            <h3 className="font-bold text-lg mb-2 text-primary-700 dark:text-primary-300">Kubernetes Certified</h3>
            <p className="text-gray-500 dark:text-gray-300">K8s & Container Security</p>
          </div>
        </div>
      </div>

      {/* Contact information will be added here */}
      <div className="flex gap-4 justify-center">
        <a href="https://linkedin.com/in/saminder-chahal"
           className="bg-secondary-500 hover:bg-secondary-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors shadow-lg">
          🔗 LinkedIn Profile
        </a>
      </div>
    </section>  );
};

export default HomeAbout;
