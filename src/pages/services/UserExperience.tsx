import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import ReusableButton from '../../components/ReusableButton';

const UserExperience: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const benefits = [
    {
      icon: "🎯",
      title: "User-Centric Design",
      desc: "We place your users at the heart of every design decision, ensuring intuitive and engaging experiences."
    },
    {
      icon: "🔍",
      title: "Research & Analysis",
      desc: "In-depth user research and competitive analysis to understand your audience and market landscape."
    },
    {
      icon: "🎨",
      title: "Interactive Prototypes",
      desc: "High-fidelity prototypes that bring your vision to life before development begins."
    },
    {
      icon: "📊",
      title: "Usability Testing",
      desc: "Rigorous testing with real users to validate designs and optimize the user journey."
    },
    {
      icon: "♿",
      title: "Accessibility First",
      desc: "WCAG compliant designs ensuring your product is accessible to all users."
    },
    {
      icon: "📱",
      title: "Responsive Design",
      desc: "Seamless experiences across all devices and screen sizes."
    }
  ];

  const process = [
    {
      step: "01",
      title: "Discovery & Research",
      desc: "We begin by understanding your business goals, target audience, and competitive landscape through comprehensive research."
    },
    {
      step: "02",
      title: "User Personas & Journey Mapping",
      desc: "Create detailed user personas and map out user journeys to identify pain points and opportunities."
    },
    {
      step: "03",
      title: "Wireframing & Prototyping",
      desc: "Develop low to high-fidelity wireframes and interactive prototypes to visualize the user experience."
    },
    {
      step: "04",
      title: "Visual Design",
      desc: "Apply your brand identity to create beautiful, cohesive interfaces that resonate with your users."
    },
    {
      step: "05",
      title: "Testing & Iteration",
      desc: "Conduct usability testing, gather feedback, and refine the design for optimal user satisfaction."
    },
    {
      step: "06",
      title: "Handoff & Support",
      desc: "Deliver complete design specifications and provide ongoing support during implementation."
    }
  ];

  const faqs = [
    {
      question: "What is UX/UI design and why is it important?",
      answer: "UX (User Experience) design focuses on optimizing how users interact with your product, while UI (User Interface) design focuses on the visual elements. Together, they ensure your digital product is both functional and visually appealing, leading to higher user satisfaction and conversion rates."
    },
    {
      question: "How long does a typical UX design project take?",
      answer: "A typical UX design project takes 4-12 weeks depending on complexity. This includes research, wireframing, prototyping, visual design, and testing phases. We provide detailed timelines during the discovery phase."
    },
    {
      question: "Do you conduct user research and testing?",
      answer: "Yes, user research and testing are integral parts of our UX process. We conduct user interviews, surveys, usability testing, and A/B testing to ensure designs meet real user needs and preferences."
    },
    {
      question: "Can you redesign my existing website or app?",
      answer: "Absolutely! We specialize in UX audits and redesigns. We analyze your current design, identify pain points, and create improved experiences that increase user engagement and conversion rates."
    },
    {
      question: "What deliverables will I receive?",
      answer: "You'll receive comprehensive design deliverables including user research reports, personas, user journey maps, wireframes, high-fidelity mockups, interactive prototypes, design systems, and developer handoff documentation."
    }
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

  const stats = [
    { number: "200+", label: "UX Projects Delivered" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "45%", label: "Avg. Conversion Increase" },
    { number: "10+", label: "Years of Experience" }
  ];

  // Structured Data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "User Experience Design Services",
    "description": "Professional UX/UI design services including user research, wireframing, prototyping, and usability testing. WCAG compliant designs for optimal user experience.",
    "provider": {
      "@type": "Organization",
      "name": "LiriSoft"
    },
    "areaServed": "Worldwide",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "UX/UI Design Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "User Research & Analysis"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Wireframing & Prototyping"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Visual Design"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Usability Testing"
          }
        }
      ]
    }
  };

  return (
    <>
      <Helmet>
        <title>UX/UI Design Services | User Experience Design Company | LiriSoft</title>
        <meta name="description" content="Expert UX/UI design services. We create user-centered designs with comprehensive research, wireframing, prototyping, and usability testing. WCAG compliant & accessible designs." />
        <meta name="keywords" content="UX design, UI design, user experience design, user interface design, wireframing, prototyping, usability testing, user research, WCAG compliance, accessibility design" />
        <meta property="og:title" content="Professional UX/UI Design Services | LiriSoft" />
        <meta property="og:description" content="Transform your digital products with our expert UX/UI design services. User research, prototyping, and testing for optimal user satisfaction." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="UX/UI Design Services | LiriSoft" />
        <meta name="twitter:description" content="Expert UX/UI design services focused on creating intuitive, engaging user experiences." />
        <link rel="canonical" href="https://lirisoft.com/services/user-experience" />
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
                  <span className="text-sm font-medium">UX/UI Design Services</span>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                  Professional User Experience Design Services
                </h1>
                <p className="text-xl text-gray-100 mb-8">
                  Transform your digital products with expert UX/UI design. Our certified designers create intuitive, accessible, and engaging user experiences that drive results and exceed user expectations.
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
                    View Portfolio
                  </button>
                </div>
              </div>
              <div className="w-full md:w-1/2 flex justify-center">
                <div className="relative w-full max-w-md">
                  <div className="absolute inset-0 bg-white/10 rounded-3xl transform rotate-6"></div>
                  <div className="relative bg-white rounded-3xl p-8 shadow-2xl">
                    <img src="/SMB.png" alt="Professional UX/UI Design Services - User Research and Prototyping" className="w-full h-auto" />
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
                  <div className="text-gray-600 text-sm md:text-base">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section> */}

        {/* Benefits Section */}
        <section className="w-full py-20 bg-gray-50">
          <div className="w-11/12 max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Comprehensive UX/UI Design Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We combine in-depth user research, creative design thinking, and modern technology to create experiences that delight users and drive measurable business results.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="text-5xl mb-4">{benefit.icon}</div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="w-full py-20 bg-white">
          <div className="w-11/12 max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Our UX Design Process
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                A proven methodology that ensures exceptional results every time.
              </p>
            </div>

            <div className="space-y-8">
              {process.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col md:flex-row gap-6 p-8 bg-gray-50 rounded-2xl hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-gradient-to-br from-[#043A53] to-[#043A53] rounded-full flex items-center justify-center">
                      <span className="text-3xl font-bold text-white">{item.step}</span>
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-lg">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="w-full py-20 bg-gray-50">
          <div className="w-11/12 max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Client Success Stories
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                See how our UX design services have helped businesses improve their digital products.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
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
        <section className="w-full py-20 bg-white">
          <div className="w-11/12 max-w-4xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-600">
                Everything you need to know about our UX/UI design services.
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
              Ready to Transform Your User Experience?
            </h2>
            <p className="text-xl text-gray-100 mb-8">
              Let's create intuitive, engaging experiences that your users will love. Get in touch with our UX experts today for a free consultation.
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

export default UserExperience;
