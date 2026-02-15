import React from 'react';

const HomeAbout = () => {
  return (
    <section id="home-about" className="hero-gradient text-center pb-12 rounded-lg shadow-xl mb-8 security-focus">
      <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white text-3xl font-bold shadow-lg">
        SC
      </div>
      <h1 className="text-5xl font-bold text-gray-800 mb-3">
        Saminder Chahal
      </h1>
      <p className="text-2xl text-blue-600 font-semibold mb-2">
        Senior DevSecOps & Cloud Security Engineer
      </p>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
        10+ years of experience in cloud security, automation, and secure CI/CD pipelines
        for enterprise applications.
      </p>

      {/* Certifications Section */}
      <div className="bg-white rounded-lg shadow-lg p-8 mb-8 mx-auto max-w-3xl">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Certifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-4 rounded-lg certificate-badge transform hover:scale-105 transition-transform duration-300">
            <div className="text-4xl mb-3">☁️</div>
            <h3 className="font-bold text-lg mb-2 text-gray-800">AWS Certified</h3>
            <p className="text-gray-600">Cloud Architecture & Security</p>
          </div>
          <div className="text-center p-4 rounded-lg certificate-badge transform hover:scale-105 transition-transform duration-300">
            <div className="text-4xl mb-3">🔒</div>
            <h3 className="font-bold text-lg mb-2 text-gray-800">CISSP</h3>
            <p className="text-gray-600">Certified Information Systems Security Professional</p>
          </div>
          <div className="text-center p-4 rounded-lg certificate-badge transform hover:scale-105 transition-transform duration-300">
            <div className="text-4xl mb-3">⚓</div>
            <h3 className="font-bold text-lg mb-2 text-gray-800">Kubernetes Certified</h3>
            <p className="text-gray-600">K8s & Container Security</p>
          </div>
        </div>
      </div>

      {/* Contact information will be added here */}
      <div className="flex gap-4 justify-center">
        <a href="https://linkedin.com/in/saminder-chahal"
           className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors shadow-lg">
          🔗 LinkedIn Profile
        </a>
      </div>
    </section>  );
};

export default HomeAbout;
