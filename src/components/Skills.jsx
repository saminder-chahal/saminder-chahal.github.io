import React from 'react';

const Skills = () => {
  return (
    <section id="skills" className="bg-white rounded-lg shadow-lg p-8 mb-8 security-focus">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">Skills</h2>
      <div className="text-gray-900">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-gray-900">
          <div>
            <h3 className="text-xl font-semibold text-primary-700 mb-3">Cloud Platforms</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-500">
              <li>Azure</li>
              <li>GCP</li>
              <li>AWS</li>
              <li>OpenStack</li>
              <li>VmWare</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-primary-700 mb-3">DevSecOps Tools</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-500">
              <li>Terraform</li>
              <li>Ansible</li>
              <li>SaltStack</li>
              <li>Kubernetes</li>
              <li>Github Actions</li>
              <li>Jenkins</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-primary-700 mb-3">Programming/Scripting</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-500">
              <li>Python</li>
              <li>Bash</li>
              <li>Go</li>
            </ul>
          </div>
          <div className="lg:col-span-2">
            <h3 className="text-xl font-semibold text-primary-700 mb-3">Security Tools</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-500">
              <li><strong>CSPM:</strong> Azure Policies, GCP Org Policies, Wiz CSPM Policies, Automated Exemption Pipelines (Governance + policy as code)</li>
              <li><strong>KSPM:</strong> Wiz KSPM Policies, Container runtime threat detection, Kubernetes workload security, Container Image scanning (Static + runtime)</li>
              <li><strong>IaC Security:</strong> WizCLI IaC scanning; Terraform / ARM policy violation, policy as code pipelines, automated exemption workflows</li>
              <li><strong>Container Security:</strong> Static container image scanning, runtime threat detection for containers, Vulnerability scanning, misconfigurations scanning, registry scanning</li>
              <li><strong>Threat Detection/Runtime Security:</strong> Wiz Runtime Detection, Container runtime monitoring, cloud workload threat detection, behavioral anomaly detection</li>
              <li><strong>GRC Automation:</strong> Automated exemption pipelines, Policy lifecycle automation, cloud governance workflows, exception approval workflows</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-primary-700 mb-3">Compliance & Frameworks</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-500">
              <li>ISO 27001</li>
              <li>NIST</li>
              <li>SOC 2</li>
              <li>GDPR</li>
              <li>PCI DSS</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-primary-700 mb-3">Operating Systems</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-500">
              <li>Linux</li>
            </ul>
          </div>
        </div>
        {/* Example:
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <li>Cloud Platforms: AWS, Azure, GCP</li>
          <li>DevSecOps Tools: Terraform, Ansible, Docker, Kubernetes</li>
          <li>Security Tools: Nessus, Qualys, SonarQube, Snyk</li>
        </ul>
        */}
      </div>
    </section>  );
};

export default Skills;
