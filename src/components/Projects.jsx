import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="bg-gray-800 rounded-lg shadow-lg p-8 mb-8 security-focus">
      <h2 className="text-3xl font-bold text-center mb-8 text-white">Projects</h2>
      <div className="text-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-200">
          <div className="bg-gray-700 p-6 rounded-lg shadow-md project-card">
            <h3 className="text-xl font-semibold text-blue-400 mb-2">Automated Cloud Security Posture Management (CSPM) Tool</h3>
            <p className="mb-4 text-gray-300">A custom tool designed to scan cloud environments (AWS, Azure, GCP) for misconfigurations, vulnerabilities, and compliance deviations. Integrates with cloud APIs and CI/CD pipelines for continuous security.</p>
            <p className="text-sm font-semibold text-gray-400">Key Technologies: Python/Go, Cloud SDKs, Terraform, CI/CD (GitHub Actions/GitLab CI), Reporting tools.</p>
            <a href="#" className="text-blue-400 hover:underline mt-2 inline-block">View on GitHub</a>
          </div>
          <div className="bg-gray-700 p-6 rounded-lg shadow-md project-card">
            <h3 className="text-xl font-semibold text-blue-400 mb-2">Secure CI/CD Pipeline with Advanced Security Scans</h3>
            <p className="mb-4 text-gray-300">An end-to-end CI/CD pipeline demonstrating the integration of various security tools (SAST, DAST, SCA, IaC scanning, Container scanning) to shift security left.</p>
            <p className="text-sm font-semibold text-gray-400">Key Technologies: GitHub Actions/GitLab CI, SonarQube, OWASP ZAP, Snyk, Checkov, Trivy, Gitleaks.</p>
            <a href="#" className="text-blue-400 hover:underline mt-2 inline-block">View on GitHub</a>
          </div>
          <div className="bg-gray-700 p-6 rounded-lg shadow-md project-card">
            <h3 className="text-xl font-semibold text-blue-400 mb-2">Kubernetes Security Hardening & Policy Enforcement</h3>
            <p className="mb-4 text-gray-300">Project showcasing advanced Kubernetes security practices, including network policies, pod security standards, RBAC, and admission controllers for robust cluster defense.</p>
            <p className="text-sm font-semibold text-gray-400">Key Technologies: Kubernetes, Network Policies, Pod Security Admission, RBAC, OPA Gatekeeper/Kyverno, Falco.</p>
            <a href="#" className="text-blue-400 hover:underline mt-2 inline-block">View on GitHub</a>
          </div>
          <div className="bg-gray-700 p-6 rounded-lg shadow-md project-card">
            <h3 className="text-xl font-semibold text-blue-400 mb-2">Security Architecture & Best Practices</h3>
            <p className="mb-4 text-gray-300">Demonstration of strategic security thinking through comprehensive threat modeling, risk assessment, and implementation of security best practices for cloud and serverless applications.</p>
            <p className="text-sm font-semibold text-gray-400">Key Technologies: STRIDE/DREAD, Threat Modeling Tools, AWS Lambda/Azure Functions, API Gateway Security, IAM, KMS.</p>
            <a href="#" className="text-blue-400 hover:underline mt-2 inline-block">View on GitHub</a>
          </div>
        </div>
        {/* Each project will be a card with title, description, technologies, and link to GitHub */}
      </div>
    </section>
  );
};

export default Projects;
