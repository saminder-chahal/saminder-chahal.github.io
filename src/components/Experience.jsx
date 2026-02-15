import React from 'react';

const Experience = () => {
  return (
    <section id="experience" className="bg-white rounded-lg shadow-lg p-8 mb-8 security-focus">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Experience</h2>
      <div className="text-gray-700">
        <div className="timeline-item mb-8 p-6 bg-blue-50 rounded-lg shadow-md">
          <h3 className="font-bold text-2xl text-blue-800">Siaras Research Inc.</h3>
          <p className="text-blue-600 text-lg">Software Engineer | May 2016 - Jan 2017</p>
          <ul className="list-disc list-inside mt-4 space-y-1 text-left mx-auto max-w-xl text-gray-700">
            <li>Developed and maintained software solutions for research projects.</li>
          </ul>
        </div>
        <div className="timeline-item mb-8 p-6 bg-blue-50 rounded-lg shadow-md">
          <h3 className="font-bold text-2xl text-blue-800">Sandvine</h3>
          <p className="text-blue-600 text-lg">Software Engineer - Virtualization | March 2017 - Feb 2018</p>
          <ul className="list-disc list-inside mt-4 space-y-1 text-left mx-auto max-w-xl text-gray-700">
            <li>Orchestrated Sandvine elements and products in a virtual environment.</li>
            <li>Researched new technologies and standards (i.e ETSI) to integrate cloud services.</li>
          </ul>
        </div>
        {/* Example:
        <div className="mb-4">
          <h3 className="font-bold text-xl">Company Name</h3>
          <p className="text-blue-600">Job Title | Dates</p>
          <ul className="list-disc list-inside mx-auto max-w-xl text-left">
            <li>Achievment 1</li>
            <li>Achievment 2</li>
          </ul>
        </div>
        */}
      </div>
    </section>  );
};

export default Experience;

