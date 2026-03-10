import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import ReusableButton from '../../components/ReusableButton';

const WebDevelopment: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const technologies = [
    {
      category: "Frontend",
      icon: "💻",
      techs: ["React", "Angular", "Vue.js", "Next.js", "TypeScript", "Tailwind CSS"]
    },
    {
      category: "Backend",
      icon: "⚙️",
      techs: ["Node.js", "Python", ".NET", "Java", "PHP", "Ruby on Rails"]
    },
    {
      category: "Database",
      icon: "🗄️",
      techs: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Firebase"]
    },
    {
      category: "Cloud & DevOps",
      icon: "☁️",
      techs: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes"]
    }
  ];

  const services = [
    {
      icon: "🌐",
      title: "Custom Web Applications",
      desc: "Scalable, high-performance web applications tailored to your business needs using modern frameworks and technologies."
    },
    {
      icon: "🛒",
      title: "E-Commerce Solutions",
      desc: "Feature-rich online stores with secure payment gateways, inventory management, and seamless checkout experiences."
    },
    {
      icon: "📱",
      title: "Progressive Web Apps",
      desc: "Fast, reliable, and engaging web apps that work offline and provide native app-like experiences."
    },
    {
      icon: "🔌",
      title: "API Development",
      desc: "RESTful and GraphQL APIs designed for performance, scalability, and easy integration with third-party services."
    },
    {
      icon: "🏢",
      title: "Enterprise Solutions",
      desc: "Complex enterprise-grade applications with advanced features, security, and integration capabilities."
    },
    {
      icon: "🔧",
      title: "Web Maintenance",
      desc: "Ongoing support, updates, and optimization to keep your web applications running smoothly and securely."
    }
  ];

  const features = [
    {
      title: "Responsive Design",
      desc: "Perfect display across all devices"
    },
    {
      title: "Performance Optimized",
      desc: "Lightning-fast load times"
    },
    {
      title: "SEO Friendly",
      desc: "Built for search engine visibility"
    },
    {
      title: "Secure",
      desc: "Industry-standard security practices"
    },
    {
      title: "Scalable",
      desc: "Grows with your business"
    },
    {
      title: "Maintainable",
      desc: "Clean, documented codebase"
    }
  ];

  const stats = [
    { number: "300+", label: "Web Projects Delivered" },
    { number: "99%", label: "Client Satisfaction" },
    { number: "50ms", label: "Avg. Page Load Time" },
    { number: "15+", label: "Years of Expertise" }
  ];

  const testimonials = [
    {
      name: "Mahendra",
      role: "CEO Canyon Tech",
      content: "We had an outstanding experience collaborating with Lirisoft. Their development team demonstrated exceptional expertise, reliability, and a commitment to meeting deadlines. They delivered high-quality solutions tailored to our needs, ensuring a seamless partnership. We wholeheartedly recommend Lirisoft for their professionalism and technical excellence..",
      rating: 5
    },
    {
      name: "From Sanjeev",
      role: "CEO Prolifica",
      content: "Have worked with Ishaque and Lirisoft across many projects over many years. From design to development to deployment and support, they have always delivered high quality output. And are always responsive to our needs. Flexibility combined with excellent technical skills makes Lirisoft an easy go to technology partner.",
      rating: 5
    }
  ];

  const faqs = [
    {
      question: "What web development technologies do you specialize in?",
      answer: "We specialize in modern web technologies including React, Angular, Vue.js, Next.js for frontend; Node.js, Python, .NET, Java for backend; and databases like MongoDB, PostgreSQL, and MySQL. We choose the best stack based on your project requirements."
    },
    {
      question: "How long does it take to develop a custom web application?",
      answer: "Development timelines vary based on complexity. A simple website takes 4-6 weeks, a medium-complexity web app takes 8-16 weeks, and enterprise applications can take 4-9 months. We provide detailed timelines after analyzing your requirements."
    },
    {
      question: "Do you provide ongoing maintenance and support?",
      answer: "Yes, we offer comprehensive maintenance and support packages including bug fixes, security updates, performance optimization, feature enhancements, and 24/7 technical support to ensure your web application runs smoothly."
    },
    {
      question: "Can you integrate third-party services and APIs?",
      answer: "Absolutely! We have extensive experience integrating payment gateways, CRM systems, marketing tools, social media APIs, analytics platforms, and custom third-party services to extend your web application's functionality."
    },
    {
      question: "Is the web application mobile-responsive?",
      answer: "Yes, all our web applications are fully responsive and optimized for all devices including desktops, tablets, and smartphones. We follow mobile-first design principles to ensure excellent user experience across all screen sizes."
    },
    {
      question: "Do you build Progressive Web Apps (PWA)?",
      answer: "Yes, we develop Progressive Web Apps that combine the best of web and mobile apps. PWAs offer offline functionality, push notifications, fast loading, and app-like experience while being accessible through web browsers."
    }
  ];

  // Structured Data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Web Development Services",
    "description": "Professional web development services including custom web applications, e-commerce solutions, Progressive Web Apps, API development, and enterprise solutions using React, Node.js, Python, and modern technologies.",
    "provider": {
      "@type": "Organization",
      "name": "LiriSoft"
    },
    "areaServed": "Worldwide",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Web Development Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Custom Web Application Development"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "E-Commerce Development"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Progressive Web Apps (PWA)"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "API Development & Integration"
          }
        }
      ]
    }
  };

  return (
    <>
      <Helmet>
        <title>Web Development Services | Custom Web Application Development | LiriSoft</title>
        <meta name="description" content="Professional web development services. We build scalable custom web applications, e-commerce platforms, PWAs, and APIs using React, Node.js, Python, and modern technologies." />
        <meta name="keywords" content="web development, custom web application, e-commerce development, progressive web apps, PWA, API development, React development, Node.js development, Python web development, full stack development" />
        <meta property="og:title" content="Professional Web Development Services | LiriSoft" />
        <meta property="og:description" content="Build powerful web applications with our expert development team. Custom solutions using React, Node.js, Python, and cutting-edge technologies." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Web Development Services | LiriSoft" />
        <meta name="twitter:description" content="Professional web development services for custom applications, e-commerce, and enterprise solutions." />
        <link rel="canonical" href="https://lirisoft.com/services/web-development" />
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
                <span className="text-sm font-medium">Development Services</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Professional Web Development Services
              </h1>
              <p className="text-xl text-gray-100 mb-8">
                Transform your ideas into powerful web applications. Our expert developers build scalable, high-performance custom web solutions using cutting-edge technologies like React, Node.js, and Python.
              </p>
              <div className="flex gap-4">
                <ReusableButton
                  text="Get Started"
                  widthClass="px-8"
                  onClick={() => navigate('/contact')}
                  showArrow={true}
                />
                <button
                  onClick={() => navigate('/portfolio')}
                  className="px-8 py-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-all duration-300"
                >
                  View Projects
                </button>
              </div>
            </div>
            <div className="w-full md:w-1/2 flex justify-center">
              <div className="relative w-full max-w-md">
                <div className="absolute inset-0 bg-white/10 rounded-3xl transform -rotate-6"></div>
                <div className="relative bg-white rounded-3xl p-8 shadow-2xl">
                  <img src="/back-2.svg" alt="Custom Web Application Development - React, Node.js, Python" className="w-full h-auto" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Services Section */}
      <section className="w-full py-20 bg-white">
        <div className="w-11/12 max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Comprehensive Web Development Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From custom web applications to enterprise solutions, we deliver scalable, high-performance web development services that transform your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gray-50 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
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

      {/* Technologies Section */}
      <section className="w-full py-20 bg-gray-50">
        <div className="w-11/12 max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Technologies We Master
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We work with the latest and most reliable technologies to build your solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="text-4xl mb-4">{tech.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {tech.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {tech.techs.map((t, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-[#043A53]/10 text-[#043A53] rounded-full text-sm font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="w-full py-20 bg-white">
        <div className="w-11/12 max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Choose Our Development Team?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#043A53] to-[#043A53] rounded-full flex items-center justify-center">
                  <span className="text-white text-xl">✓</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="w-full py-20 bg-gray-50">
        <div className="w-11/12 max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Development Process
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Planning", desc: "Requirements analysis and project roadmap" },
              { step: "02", title: "Design", desc: "UI/UX design and architecture planning" },
              { step: "03", title: "Development", desc: "Agile development with regular updates" },
              { step: "04", title: "Launch", desc: "Testing, deployment, and ongoing support" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-[#043A53] to-[#043A53] rounded-full flex items-center justify-center">
                  <span className="text-3xl font-bold text-white">{item.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full py-20 bg-white">
        <div className="w-11/12 max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Client Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how our web development services have helped businesses grow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">★</span>
                  ))}
                </div>
                <p className="text-gray-700 text-lg mb-6 italic">"{testimonial.content}"</p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-20 bg-gray-50">
        <div className="w-11/12 max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about our web development services.
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group"
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
            Ready to Build Your Next Project?
          </h2>
          <p className="text-xl text-gray-100 mb-8">
            Let's discuss how we can help you create a powerful web solution that drives your business forward. Get a free consultation today.
          </p>
          <ReusableButton
            text="Start Your Project"
            widthClass="px-8"
            onClick={() => navigate('/contact')}
            showArrow={true}
          />
        </div>
      </section>
      </div>
    </>
  );
};

export default WebDevelopment;
