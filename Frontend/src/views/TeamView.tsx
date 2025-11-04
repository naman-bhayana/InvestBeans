import React, { useState } from 'react';
import Layout from '@/components/Layout';

const TeamView = () => {
  // state now keyed by member id (string)
  const [expandedBios, setExpandedBios] = useState({});
  const [showAllValues, setShowAllValues] = useState(false);
  const [readMoreStory, setReadMoreStory] = useState(false);
  const [readMoreFounder, setReadMoreFounder] = useState(false);

  // Toggle by id (string)
  const toggleBio = (id) => {
    setExpandedBios(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  // Give each member a stable unique id (use uuid or stable string)
  const teamMembers = [
    {
      id: 'manu-tyagi',
      name: "Manu Tyagi",
      role: "Founder & NISM Certified Research Analyst",
      image: "",
      shortBio: "NISM-certified Research Analyst with over five years of trading experience in the Indian and U.S. equity markets.",
      bio: "Manu Tyagi, Founder of InvestBeans, is a NISM-certified Research Analyst with over five years of trading experience in the Indian and U.S. equity markets. Backed by a decade of corporate experience with leading multinational organizations, Manu brings strategic insight, analytical depth, and a mission-driven approach to simplifying market complexities.",
      linkedin: "#"
    },
    {
      id: 'mona-tyagi',
      name: "Mona Tyagi",
      role: "Co-Founder & NISM Certified Equity Derivatives Specialist",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80",
      shortBio: "MBA in Finance (Gold Medalist) and NISM-certified Equity Derivatives Specialist with over 15 years of experience.",
      bio: "Mona Tyagi is an NISM-certified Equity Derivatives Specialist and MBA in Finance from APJ Abdul Kalam University, where she graduated as a gold medalist. Beginning her career in 2009 with Mansukh Finance and Securities Ltd as a Derivatives Analyst, she has since developed expertise of over 15 years across commodities, forex, and Indian equity. With over a decade of experience, Mona brings deep market insight, strong risk management skills, and a data-driven approach to investment strategies. At InvestBeans, she empowers traders and investors with actionable research and practical guidance.",
      linkedin: "#"
    }
  ];

  const allValues = [
    { 
      icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z", 
      title: "Integrity", 
      desc: "Always doing the right thing, even when no one's watching",
      gradient: "from-blue-500 to-blue-600"
    },
    { 
      icon: "M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z", 
      title: "Transparency", 
      desc: "Clear communication and complete honesty in every interaction",
      gradient: "from-green-500 to-green-600"
    },
    { 
      icon: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z", 
      title: "Client-Centricity", 
      desc: "Prioritizing our learners' and clients' growth over everything else",
      gradient: "from-purple-500 to-purple-600"
    },
    { 
      icon: "M13 10V3L4 14h7v7l9-11h-7z", 
      title: "Adaptability", 
      desc: "Embracing change and aligning with ever-shifting market dynamics",
      gradient: "from-orange-500 to-orange-600"
    },
    { 
      icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z", 
      title: "Ethics & Accountability", 
      desc: "Upholding the highest standards in education and guidance",
      gradient: "from-red-500 to-red-600"
    },
    { 
      icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z", 
      title: "Excellence in Service", 
      desc: "Striving for unmatched quality in every initiative",
      gradient: "from-yellow-500 to-yellow-600"
    },
    { 
      icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z", 
      title: "Diversity & Inclusion", 
      desc: "Encouraging participation from all backgrounds",
      gradient: "from-indigo-500 to-indigo-600"
    },
    { 
      icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z", 
      title: "Sustainability", 
      desc: "Promoting long-term growth over quick, speculative gains",
      gradient: "from-teal-500 to-teal-600"
    },
    { 
      icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z", 
      title: "Trust", 
      desc: "The most valuable investment we build every day",
      gradient: "from-pink-500 to-pink-600"
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-br from-navy via-blue-900 to-blue-800 text-white py-16 sm:py-20 lg:py-24 px-4 overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-20 left-10 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-64 h-64 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
            <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
          </div>
          
          <div className="container mx-auto max-w-6xl text-center relative z-10">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4 leading-tight">
              About <span className="text-blue-300">InvestBeans</span>
            </h1>
            <p className="text-sm sm:text-base lg:text-lg opacity-90 max-w-2xl mx-auto">
              From passion to purpose — meet the people and principles behind InvestBeans
            </p>
          </div>
        </div>

        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          {/* Our Story Section */}
          <div id="our-story" className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 p-6 sm:p-8 mb-8 border border-gray-100">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-navy">Our Story</h2>
            </div>
            <div className="text-gray-700 space-y-3 sm:space-y-4 text-sm sm:text-base leading-relaxed">
              <p>
                Founded in 2024, InvestBeans began as a humble WhatsApp group in 2023, where a few friends shared market learnings and stock insights. What started as a small circle of curiosity soon evolved into a structured educational and research initiative designed to help individuals understand and navigate financial markets with confidence.
              </p>
              {readMoreStory && (
                <>
                  <p>
                    As the name suggests, InvestBeans is built on the idea that small, consistent efforts — like planting beans — when nurtured with patience and knowledge, can grow into a strong, fruitful foundation for the future. Much like a dedicated farmer tending to each seed, we guide learners in developing their understanding and approach to investments.
                  </p>
                  <p>
                    We empower individuals and communities—particularly students, women, the self-employed, and private sector professionals—by providing research-based guidance and educational services across Equities, Commodities, and Forex markets.
                  </p>
                  <p>
                    Our approach focuses on helping you make informed investment decisions, manage risks thoughtfully, and cultivate a future with potential for sustainable growth. At InvestBeans, we aim to equip learners for a lifetime of financial awareness and confidence, rather than promising specific returns.
                  </p>
                </>
              )}
              <button 
                onClick={() => setReadMoreStory(!readMoreStory)}
                type="button"
                className="text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-2 group mt-2 text-sm"
              >
                {readMoreStory ? 'Show Less' : 'Read More'}
                <svg 
                  className={`w-4 h-4 transition-transform ${readMoreStory ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Founder's Journey */}
          <div id="founder-journey" className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl shadow-sm p-6 sm:p-8 mb-8 border border-blue-100">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-navy">Founder's Journey</h2>
            </div>
            <div className="text-gray-700 space-y-3 sm:space-y-4 text-sm sm:text-base leading-relaxed">
              <p>
                Manu Tyagi, Founder of Investbeans, combines global exposure, corporate expertise, and market insight with a vision to simplify financial learning. A graduate of Delhi University and an alumnus of KV Moscow (Russia), he comes from a defence family background of air warriors, fostering discipline, precision, and integrity in his professional approach.
              </p>
              {readMoreFounder && (
                <>
                  <p>
                    With over 10 years of corporate experience, the founder has worked closely with senior leadership and CXOs at top multinational organizations including WNS, DS Group, Radisson, and Publicis Groupe. His deep understanding of business operations and leadership strategy continues to shape his analytical and disciplined perspective on market behavior.
                  </p>
                  <p>
                    Since 2020, Manu has been actively trading in both Indian and U.S. equity markets, developing structured strategies focused on ethical investing, research-backed decisions, and risk management. As a NISM-certified Research Analyst, he brings professionalism and credibility to every educational initiative under Investbeans.
                  </p>
                  <p>
                    Through Investbeans, he envisions a platform that bridges the gap between curiosity and confidence — helping individuals understand markets logically, act strategically, and grow sustainably.
                  </p>
                </>
              )}
              <button 
                onClick={() => setReadMoreFounder(!readMoreFounder)}
                type="button"
                className="text-indigo-600 hover:text-indigo-700 font-semibold flex items-center gap-2 group mt-2 text-sm"
              >
                {readMoreFounder ? 'Show Less' : 'Read More'}
                <svg 
                  className={`w-4 h-4 transition-transform ${readMoreFounder ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Mission & Vision */}
          <div id="mission" className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <div className="group bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border border-gray-100">
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-6 sm:p-7">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mr-3">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h2 className="text-lg sm:text-xl font-bold text-white">Our Mission</h2>
                </div>
                <h3 className="text-sm sm:text-base font-semibold mb-3 text-white/95">Turning Market Complexity into Trading Clarity</h3>
                <p className="text-xs sm:text-sm text-white/90 leading-relaxed">
                  Investbeans strives to transform the complexities of financial markets into simple, actionable, and educational insights. Our mission is to make trading and investing an accessible journey of growth — supported by structured learning, guided strategies, and a strong foundation in financial awareness.
                </p>
              </div>
            </div>

            <div id="vision" className="group bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border border-gray-100">
              <div className="bg-gradient-to-br from-green-600 to-green-700 p-6 sm:p-7">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mr-3">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <h2 className="text-lg sm:text-xl font-bold text-white">Our Vision</h2>
                </div>
                <h3 className="text-sm sm:text-base font-semibold mb-3 text-white/95">Empowering Futures, Building Generational Prosperity</h3>
                <p className="text-xs sm:text-sm text-white/90 leading-relaxed">
                  Our vision is to empower individuals across all walks of life — women, youth, self-employed, and working professionals — to achieve financial independence through education and ethical practices. By promoting awareness, discipline, and resilience, we aim to create lasting prosperity.
                </p>
              </div>
            </div>
          </div>

          {/* Team Members */}
          <div id="team-members" className="mb-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-navy mb-2">Meet Our Team</h2>
              <p className="text-sm sm:text-base text-gray-600 mb-3">The experts driving InvestBeans forward</p>
              <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {teamMembers.map((member) => (
                <div key={member.id} className="group bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border border-gray-100">
                  <div className="relative overflow-hidden">
                    {member.image ? (
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-56 sm:h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                        onError={(e) => {
                          e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=3b82f6&color=ffffff&size=512`;
                        }}
                      />
                    ) : (
                      <div className="w-full h-56 sm:h-64 bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
                        <div className="text-white text-5xl sm:text-6xl font-bold">
                          {member.name.split(' ').map(n => n[0]).join('')}
                        </div>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  </div>
                  <div className="p-5 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-bold text-navy mb-1">{member.name}</h3>
                    <p className="text-blue-600 font-medium mb-3 sm:mb-4 text-xs sm:text-sm">{member.role}</p>
                    <p id={`bio-${member.id}`} className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4">
                      {expandedBios[member.id] ? member.bio : member.shortBio}
                    </p>
                    <button 
                      type="button"
                      onClick={() => toggleBio(member.id)}
                      className="text-blue-600 hover:text-blue-700 font-semibold text-xs sm:text-sm flex items-center gap-1 mb-3 sm:mb-4"
                      aria-expanded={!!expandedBios[member.id]}
                      aria-controls={`bio-${member.id}`}
                    >
                      {expandedBios[member.id] ? 'Show Less' : 'Read More'}
                      <svg 
                        className={`w-3 h-3 sm:w-4 sm:h-4 transition-transform ${expandedBios[member.id] ? 'rotate-180' : ''}`} 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    <a 
                      href={member.linkedin}
                      className="inline-flex items-center text-gray-700 hover:text-blue-600 font-medium transition-colors text-xs sm:text-sm group/link"
                    >
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover/link:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                      Connect on LinkedIn
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Company Values */}
          <div id="core-values" className="mb-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-navy mb-2">Our Core Values</h2>
              <p className="text-sm sm:text-base text-gray-600 mb-3">The principles that guide everything we do</p>
              <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
            </div>
            
            {/* Mobile View: Stacked Cards */}
            <div className="block sm:hidden space-y-3">
              {allValues.slice(0, showAllValues ? undefined : 6).map((value, idx) => (
                <div key={idx} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-4 border border-gray-100">
                  <div className="flex items-start gap-3">
                    <div className={`flex-shrink-0 w-10 h-10 bg-gradient-to-br ${value.gradient} rounded-lg flex items-center justify-center`}>
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={value.icon} />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm font-bold text-navy mb-1">{value.title}</h3>
                      <p className="text-gray-600 text-xs leading-relaxed">{value.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Tablet & Desktop View: Grid */}
            <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {allValues.slice(0, showAllValues ? undefined : 6).map((value, idx) => (
                <div key={idx} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-5 border border-gray-100 group">
                  <div className={`w-12 h-12 bg-gradient-to-br ${value.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={value.icon} />
                    </svg>
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-navy mb-2">{value.title}</h3>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{value.desc}</p>
                </div>
              ))}
            </div>
            
            {!showAllValues && (
              <div className="text-center mt-6">
                <button 
                  onClick={() => setShowAllValues(true)}
                  type="button"
                  className="text-blue-600 hover:text-blue-700 font-semibold text-sm flex items-center gap-2 mx-auto"
                >
                  View All Values
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
            )}
          </div>

          {/* Why Us Section */}
          <div id="why-us" className="bg-white rounded-2xl shadow-sm p-6 sm:p-8 mb-8 border border-gray-100">
            <div className="text-center mb-6 sm:mb-8">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-navy mb-2">Why Choose InvestBeans?</h2>
              <p className="text-sm sm:text-base text-gray-600 max-w-3xl mx-auto mb-3">
                We don't promise unrealistic profits or overnight success — we teach the power of patience, planning, and perspective
              </p>
              <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
            </div>
            
            {/* Mobile View: Stacked */}
            <div className="block sm:hidden space-y-3">
              {[
                { title: "No Fake Promotions", desc: "No marketing gimmicks — we let our knowledge and your own results speak for itself" },
                { title: "Research-Backed Insights", desc: "Focus on education and research-backed insights instead of blind tips" },
                { title: "Educational Guidance", desc: "Guidance on swing/positional trading strategies that promotes sensible risk-taking and market understanding" },
                { title: "Community-First", desc: "Empowering traders and investors through learning and collaborative growth" },
                { title: "Holistic Support", desc: "From equity, commodity to forex, we educate and research across multiple domains" },
                { title: "Growth Platform", desc: "Investbeans isn't just advisory — it's a platform for growth, learning, and empowerment" }
              ].map((item, idx) => (
                <div key={idx} className="flex items-start bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-3 border border-green-100">
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center mr-3 mt-0.5">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-navy mb-1 text-sm">{item.title}</h3>
                    <p className="text-gray-600 text-xs leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Tablet & Desktop View: Grid */}
            <div className="hidden sm:grid sm:grid-cols-2 gap-4">
              {[

                { title: "No Fake Promotions", desc: "No marketing gimmicks — we let our knowledge and your own results speak for itself" },
                { title: "Research-Backed Insights", desc: "Focus on education and research-backed insights instead of blind tips" },
                { title: "Educational Guidance", desc: "Guidance on swing/positional trading strategies that promotes sensible risk-taking and market understanding" },
                { title: "Community-First", desc: "Empowering traders and investors through learning and collaborative growth" },
                { title: "Holistic Support", desc: "From equity, commodity to forex, we educate and research across multiple domains" },
                { title: "Growth Platform", desc: "Investbeans isn't just advisory — it's a platform for growth, learning, and empowerment" }
              ].map((item, idx) => (
                <div key={idx} className="flex items-start bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-4 sm:p-5 hover:shadow-md transition-all border border-green-100 group">
                  <div className="flex-shrink-0 w-9 h-9 sm:w-10 sm:h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center mr-3 sm:mr-4 mt-0.5 group-hover:scale-110 transition-transform">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-navy mb-1 text-sm sm:text-base">{item.title}</h3>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications Section */}
          <div id="certifications" className="bg-gradient-to-br from-navy to-blue-900 text-white rounded-2xl shadow-md p-6 sm:p-8 mb-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -mr-20 -mt-20"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/5 rounded-full -ml-20 -mb-20"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-center mb-5 sm:mb-6">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mr-3">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold">Certifications & Trust</h2>
              </div>
              <p className="text-center text-sm sm:text-base mb-5 sm:mb-6 opacity-95">
                Building trust through knowledge, ethics, and expertise
              </p>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-white/20">
                <p className="text-xs sm:text-sm leading-relaxed opacity-95">
                  InvestBeans builds trust through knowledge, ethics, and expertise. While we are not yet SEBI-registered, our team holds <strong className="text-yellow-300">NISM Certifications as Research Analysts and in Equity Derivatives Analysis</strong>, reflecting our commitment to professional standards. We are continuously pursuing all relevant certifications to ensure alignment with SEBI guidelines and to strengthen the trust our community places in us. Each certification reinforces our dedication to providing reliable, research-driven financial guidance.
                </p>
              </div>
            </div>
          </div>

          {/* Join Our Mission CTA */}
          <div  id="join" className="text-center">
            <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-all duration-300">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3">Join Our Mission</h2>
              <p className="text-xs sm:text-sm mb-5 sm:mb-6 opacity-95 max-w-2xl mx-auto">
                We're always looking for passionate individuals to join our mission of democratizing investment knowledge 
                and empowering financial independence through education
              </p>
              <button type="button" className="bg-white text-orange-600 px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-bold text-sm hover:bg-gray-50 hover:scale-105 transition-all duration-300 shadow-md">
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TeamView;
