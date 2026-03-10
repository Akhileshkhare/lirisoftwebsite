import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import ReusableButton from '../../components/ReusableButton';

const CyberSecurity: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const threats = [
    {
      icon: "🔓",
      title: "Data Breaches",
      desc: "Protect sensitive customer and business data from unauthorized access and theft."
    },
    {
      icon: "🦠",
      title: "Malware & Ransomware",
      desc: "Defend against malicious software that can encrypt or steal your critical data."
    },
    {
      icon: "🎣",
      title: "Phishing Attacks",
      desc: "Guard against social engineering attempts to trick users into revealing credentials."
    },
    {
      icon: "⚡",
      title: "DDoS Attacks",
      desc: "Prevent service disruptions from distributed denial-of-service attacks."
    },
    {
      icon: "🕵️",
      title: "Insider Threats",
      desc: "Monitor and control internal access to prevent data leaks and sabotage."
    },
    {
      icon: "🌐",
      title: "Zero-Day Exploits",
      desc: "Stay protected against unknown vulnerabilities with proactive security measures."
    }
  ];

  const services = [
    {
      icon: "🛡️",
      title: "Security Assessment",
      desc: "Comprehensive evaluation of your current security posture with detailed vulnerability analysis and risk assessment."
    },
    {
      icon: "🔍",
      title: "Penetration Testing",
      desc: "Ethical hacking to identify vulnerabilities before malicious actors can exploit them."
    },
    {
      icon: "🔐",
      title: "Security Architecture",
      desc: "Design and implement robust security frameworks tailored to your infrastructure."
    },
    {
      icon: "👁️",
      title: "Security Monitoring",
      desc: "24/7 monitoring and threat detection with real-time alerts and incident response."
    },
    {
      icon: "📋",
      title: "Compliance & Audit",
      desc: "Ensure compliance with industry standards like GDPR, HIPAA, PCI-DSS, and ISO 27001."
    },
    {
      icon: "🎓",
      title: "Security Training",
      desc: "Employee awareness programs to build a security-conscious culture in your organization."
    }
  ];

  const solutions = [
    {
      title: "Network Security",
      features: ["Firewall Management", "IDS/IPS", "VPN Solutions", "Network Segmentation"]
    },
    {
      title: "Application Security",
      features: ["Secure Code Review", "SAST/DAST", "API Security", "Web App"]
    },
    {
      title: "Cloud Security",
      features: ["Cloud Config", "Identity Management", "Data Encryption", "Backup Solutions"]
    },   
  ];

  const stats = [
    { number: "99.9%", label: "Threat Detection Rate" },
    { number: "24/7", label: "Security Monitoring" },
    { number: "<15min", label: "Incident Response Time" },
    { number: "500+", label: "Clients Protected" }
  ];

  const faqs = [
    {
      question: "What is cybersecurity and why does my business need it?",
      answer: "Cybersecurity protects your systems, networks, and data from digital attacks, theft, and damage. Every business needs cybersecurity to protect sensitive customer data, maintain business continuity, comply with regulations, and preserve brand reputation. Without proper security, you're vulnerable to data breaches, ransomware, and financial losses."
    },
    {
      question: "How often should security assessments be performed?",
      answer: "We recommend comprehensive security assessments at least quarterly, with continuous monitoring and monthly vulnerability scans. Additionally, assessments should be performed after major infrastructure changes, new deployments, or after any security incident."
    },
    {
      question: "What is penetration testing and how is it different from vulnerability scanning?",
      answer: "Penetration testing is ethical hacking where our experts actively attempt to breach your systems to identify exploitable vulnerabilities. Vulnerability scanning automatically identifies known security weaknesses. Penetration testing goes deeper, simulating real-world attacks to test your defenses comprehensively."
    },
    {
      question: "Do you provide 24/7 security monitoring?",
      answer: "Yes, our Security Operations Center (SOC) provides 24/7/365 monitoring with real-time threat detection, automated response, and expert incident handling. We monitor network traffic, endpoints, applications, and cloud infrastructure to identify and respond to threats immediately."
    },
    {
      question: "Can you help with compliance requirements like GDPR, HIPAA, or PCI-DSS?",
      answer: "Absolutely! We have extensive experience helping businesses achieve and maintain compliance with GDPR, HIPAA, PCI-DSS, ISO 27001, SOC 2, and other industry standards. We provide compliance assessments, implementation support, and ongoing compliance monitoring."
    },
    {
      question: "What happens if my business experiences a security breach?",
      answer: "Our incident response team springs into action immediately. We contain the breach, assess the damage, eliminate the threat, recover your systems, and implement measures to prevent future incidents. Our average response time is under 15 minutes, minimizing potential damage."
    },
    {
      question: "How do you protect against ransomware attacks?",
      answer: "We implement multi-layered ransomware protection including endpoint detection and response (EDR), email filtering, network segmentation, regular backups, employee training, and real-time monitoring. Our proactive approach detects and blocks ransomware before it can encrypt your data."
    }
  ];

  // Structured Data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Cyber Security Services",
    "description": "Comprehensive cybersecurity solutions including security assessments, penetration testing, 24/7 monitoring, threat detection, compliance audits, and incident response. Protect your business from data breaches, malware, and cyber threats.",
    "provider": {
      "@type": "Organization",
      "name": "LiriSoft"
    },
    "areaServed": "Worldwide",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Cybersecurity Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Security Assessment & Penetration Testing"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "24/7 Security Monitoring"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Compliance & Audit (GDPR, HIPAA, PCI-DSS)"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Incident Response & Recovery"
          }
        }
      ]
    }
  };

  return (
    <>
      <Helmet>
        <title>Cyber Security Services | Network Security & Threat Protection | LiriSoft</title>
        <meta name="description" content="Professional cybersecurity services with 24/7 monitoring, penetration testing, security assessments, compliance audits (GDPR, HIPAA, PCI-DSS), and incident response. Protect against data breaches, malware, and cyber threats." />
        <meta name="keywords" content="cybersecurity, cyber security services, network security, penetration testing, security assessment, threat protection, data breach prevention, ransomware protection, GDPR compliance, HIPAA compliance, PCI-DSS, security monitoring, incident response" />
        <meta property="og:title" content="Professional Cyber Security Services | LiriSoft" />
        <meta property="og:description" content="Protect your business with comprehensive cybersecurity solutions. 24/7 monitoring, penetration testing, and compliance services." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Cyber Security Services | LiriSoft" />
        <meta name="twitter:description" content="Professional cybersecurity solutions to protect against modern cyber threats and ensure compliance." />
        <link rel="canonical" href="https://lirisoft.com/services/cyber-security" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <div className="w-full">
        {/* Hero Section */}
        <section className="w-full bg-gradient-to-br from-[#043A53] to-[#043A53] py-20 md:py-32">
        <div className="w-11/12 max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="w-full md:w-1/2 text-white">
              <div className="inline-block px-4 py-2 bg-white/10 rounded-full mb-6">
                <span className="text-sm font-medium">Security Services</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Professional Cyber Security Solutions
              </h1>
              <p className="text-xl text-gray-100 mb-8">
                Protect your business from cyber threats with comprehensive security solutions. Our expert team provides 24/7 monitoring, penetration testing, compliance audits, and rapid incident response to safeguard your systems and data.
              </p>
              <div className="flex gap-4">
                <ReusableButton
                  text="Get Protected"
                  widthClass="px-8"
                  onClick={() => navigate('/contact')}
                  showArrow={true}
                />
                <button
                  onClick={() => navigate('/contact')}
                  className="px-8 py-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-all duration-300"
                >
                  Request Audit
                </button>
              </div>
            </div>
            <div className="w-full md:w-1/2 flex justify-center">
              <div className="relative w-full max-w-md">
                <div className="absolute inset-0 bg-white/10 rounded-3xl transform rotate-6"></div>
                <div className="relative bg-white rounded-3xl p-8 shadow-2xl">
                  <img src="/Cyber_security.png" alt="Cyber Security Services - Threat Protection and Network Security" className="w-full h-auto" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      {/* <section className="w-full py-12 bg-white border-b">
        <div className="w-11/12 max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-[#043A53] mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Threats Section */}
      {/* <section className="w-full py-20 bg-gray-50">
        <div className="w-11/12 max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Defend Against Modern Cyber Threats
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cybercriminals are constantly evolving their tactics. Stay protected with our comprehensive multi-layered security approach that detects and prevents the latest threats.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {threats.map((threat, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-l-4 border-red-500"
              >
                <div className="text-5xl mb-4">{threat.icon}</div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                  {threat.title}
                </h3>
                <p className="text-gray-600">{threat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Services Section */}
      <section className="w-full py-20 bg-white">
        <div className="w-11/12 max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Comprehensive Cyber Security Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              End-to-end security solutions designed to protect your digital assets, ensure compliance, and maintain business continuity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gray-50 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="w-full py-20 bg-gray-50">
        <div className="w-11/12 max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Complete Security Coverage
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Multi-layered defense strategy for comprehensive protection.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {solution.title}
                </h3>
                <ul className="space-y-2">
                  {solution.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-600">
                      <span className="text-[#043A53] mt-1">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-20 bg-white">
        <div className="w-11/12 max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about our cybersecurity services.
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group"
              >
                <summary className="font-semibold text-lg text-gray-900 cursor-pointer list-none flex justify-between items-center">
                  <span>{faq.question}</span>
                  <span className="text-2xl text-[#043A53] group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="mt-4 text-gray-600 leading-relaxed">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>



      {/* CTA Section */}
      <section className="w-full py-20 bg-gradient-to-br from-[#043A53] to-[#043A53]">
        <div className="w-11/12 max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Protect Your Business Before It's Too Late
          </h2>
          <p className="text-xl text-gray-100 mb-8">
            Don't wait for a security breach to take action. Get a comprehensive free security assessment from our certified experts and discover vulnerabilities before cybercriminals do.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ReusableButton
              text="Get Free Assessment"
              widthClass="px-8"
              onClick={() => navigate('/contact')}
              showArrow={true}
            />
            <button
              onClick={() => navigate('/contact')}
              className="px-8 py-3 bg-white text-[#043A53] rounded-full hover:bg-gray-100 transition-all duration-300 font-semibold"
            >
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>
      </div>
    </>
  );
};

export default CyberSecurity;
