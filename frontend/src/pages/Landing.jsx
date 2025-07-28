import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Shield, Users, MapPin, BarChart3, CheckCircle, Eye, AlertTriangle, Bot,
  ArrowRight, Mail, Github, Linkedin
} from 'lucide-react';

const Landing = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: { transition: { staggerChildren: 0.1 } }
  };

  return (
    <div className="min-h-screen bg-white text-[#002855] font-sans">

      {/* Navbar */}
      <nav className="bg-white shadow-md py-4 px-6 flex justify-between items-center sticky top-0 z-50">
      {/* Left - Logo */}
      <div>
        <img src="/logo.png" alt="SafeReport Logo" className="h-10 object-contain" />
      </div>

      {/* Right - Buttons (Desktop) */}
      <div className="hidden md:flex gap-4 items-center">
        <Link to="/login" className="text-[#002855] hover:text-blue-700 font-medium transition">
          Sign In
        </Link>
        <Link to="/register" className="bg-[#002855] hover:bg-[#001F3F] text-white px-4 py-2 rounded transition">
          Login
        </Link>
      </div>

      {/* Mobile Toggle */}
      <div className="md:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)} className="text-[#002855] focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-16 right-6 bg-white shadow-md rounded-md p-4 flex flex-col gap-2 md:hidden">
          <Link to="/login" className="text-[#002855] hover:text-blue-700 font-medium transition">
            Sign In
          </Link>
          <Link to="/register" className="bg-[#002855] hover:bg-[#001F3F] text-white px-4 py-2 rounded transition">
            Login
          </Link>
        </div>
      )}
    </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white px-6 pb-4 flex flex-col gap-2 shadow">
          <Link to="/login" className="text-[#002855] hover:text-blue-700 font-medium transition">
            Sign In
          </Link>
          <Link to="/register" className="bg-[#002855] hover:bg-[#001F3F] text-white px-4 py-2 rounded transition">
            Login
          </Link>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 bg-[#F5F5F5]">
        <motion.div
          className="relative z-10 text-center max-w-4xl mx-auto"
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Report Smart.
              <br />
              <span className="text-[#C5B358]">Stay Safe.</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
              Empowering communities through intelligent crime reporting and real-time safety insights powered by AI.
            </p>
          </motion.div>

          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/login"
              className="bg-[#002855] hover:bg-[#001F3F] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-md"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="bg-white hover:bg-gray-100 text-[#002855] px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 border border-gray-300"
            >
              Register
            </Link>
          </motion.div>
        </motion.div>
      </section>

     <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div className="text-center mb-16" initial="initial" whileInView="animate" viewport={{ once: true }} variants={fadeInUp}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">About SafeReport</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              We’re revolutionizing safety through technology, uniting citizens and law enforcement for secure communities.
            </p>
          </motion.div>

          <motion.div className="grid md:grid-cols-2 gap-12 items-center" initial="initial" whileInView="animate" viewport={{ once: true }} variants={staggerContainer}>
            <motion.div variants={fadeInUp}>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Transparent, efficient, and AI-powered crime reporting that bridges the gap between people and authorities.
              </p>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                Empower individuals and equip authorities with tools to ensure public safety and quick responses.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="grid grid-cols-2 gap-6">
              {[
                { icon: Users, title: 'Community Driven', desc: 'Built for the people, by the people' },
                { icon: Shield, title: 'Secure & Private', desc: 'Your data is protected with robust security' },
                { icon: BarChart3, title: 'Data-Driven', desc: 'Insights that matter for real impact' },
                { icon: Bot, title: 'AI-Powered', desc: 'Smart assistance for better reporting' }
              ].map((item, index) => (
                <div key={index} className="bg-gray-100 p-6 rounded-lg border border-gray-300">
                  <item.icon className="w-8 h-8 text-[#002855] mb-3" />
                  <h4 className="font-semibold mb-2">{item.title}</h4>
                  <p className="text-gray-700 text-sm">{item.desc}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4 bg-[#F5F5F5]">
        <div className="max-w-6xl mx-auto">
          <motion.div className="text-center mb-16" initial="initial" whileInView="animate" viewport={{ once: true }} variants={fadeInUp}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">How It Works</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">Four steps to make your community safer</p>
          </motion.div>

          <motion.div className="grid md:grid-cols-4 gap-8" initial="initial" whileInView="animate" viewport={{ once: true }} variants={staggerContainer}>
            {[
              { icon: AlertTriangle, title: 'Report', desc: 'Submit crime reports with details', step: '01' },
              { icon: CheckCircle, title: 'Verify', desc: 'AI + authorities verify reports', step: '02' },
              { icon: Eye, title: 'Monitor', desc: 'Track your reports & metrics', step: '03' },
              { icon: Shield, title: 'Stay Safe', desc: 'Get alerts and insights', step: '04' }
            ].map((step, index) => (
              <motion.div key={index} variants={fadeInUp} className="text-center relative">
                <div className="bg-[#002855] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 relative">
                  <step.icon className="w-8 h-8 text-white" />
                  <span className="absolute -top-2 -right-2 bg-white text-[#002855] w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold">{step.step}</span>
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-700 leading-relaxed">{step.desc}</p>
                {index < 3 && <ArrowRight className="hidden md:block absolute top-8 -right-4 w-6 h-6 text-[#002855]" />}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* AI Assistant Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div className="grid md:grid-cols-2 gap-12 items-center" initial="initial" whileInView="animate" viewport={{ once: true }} variants={staggerContainer}>
            <motion.div variants={fadeInUp}>
              <Bot className="w-16 h-16 text-[#002855] mb-6" />
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Meet Your AI Safety Assistant</h2>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Our intelligent assistant guides you 24/7 through safe practices and reporting steps.
              </p>
              <div className="space-y-4">
                {[
                  'Instant crime reporting help',
                  'Neighborhood safety tips',
                  'Real-time updates',
                  'Emergency contacts'
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#002855]" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <div className="bg-gray-100 rounded-lg p-6 border border-gray-300">
                <div className="flex items-center space-x-3 mb-4">
                  <Bot className="w-8 h-8 text-[#002855]" />
                  <span className="font-semibold">AI Assistant</span>
                </div>
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-3">
                    <p className="text-gray-700 text-sm">Hello! I'm here to help you report incidents. What can I assist you with today?</p>
                  </div>
                  <div className="bg-[#002855] rounded-lg p-3 ml-8">
                    <p className="text-white text-sm">I saw something suspicious. How do I report it?</p>
                  </div>
                  <div className="bg-white rounded-lg p-3">
                    <p className="text-gray-700 text-sm">Let's start with the location and time of the incident...</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact & Footer */}
      <section className="py-20 px-4 bg-[#F5F5F5]">
        <div className="max-w-6xl mx-auto">
          <motion.div className="text-center mb-16" initial="initial" whileInView="animate" viewport={{ once: true }} variants={fadeInUp}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">Have questions or feedback? Reach out to us.</p>
          </motion.div>

          <motion.div className="grid md:grid-cols-3 gap-8 mb-16" initial="initial" whileInView="animate" viewport={{ once: true }} variants={staggerContainer}>
            {[
              { icon: Mail, title: 'Email Us', content: 'support@safereport.com', link: 'mailto:support@safereport.com' },
              { icon: Github, title: 'GitHub', content: 'View our code', link: 'https://github.com' },
              { icon: Linkedin, title: 'LinkedIn', content: 'Connect with us', link: 'https://linkedin.com' }
            ].map((contact, index) => (
              <motion.a key={index} href={contact.link} variants={fadeInUp} className="bg-white p-6 rounded-lg border border-gray-300 text-center hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
                <contact.icon className="w-12 h-12 text-[#002855] mx-auto mb-4" />
                <h3 className="font-semibold mb-2">{contact.title}</h3>
                <p className="text-gray-700">{contact.content}</p>
              </motion.a>
            ))}
          </motion.div>

          {/* Footer CTA */}
          <motion.div className="text-center" initial="initial" whileInView="animate" viewport={{ once: true }} variants={fadeInUp}>
            <h3 className="text-3xl font-bold mb-6">Ready to Make Your Community Safer?</h3>
            <Link to="/register" className="inline-flex items-center space-x-2 bg-[#002855] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-md">
              <span>Get Started</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>

          {/* Bottom Footer */}
          <div className="border-t border-gray-300 mt-16 pt-8 text-center">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex items-center space-x-2">
                <Shield className="w-6 h-6 text-[#002855]" />
                <span className="font-bold">SafeReport</span>
              </div>
              <div className="flex space-x-6 text-gray-600">
                <a href="#" className="hover:text-black transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-black transition-colors">Terms</a>
                <a href="#" className="hover:text-black transition-colors">Support</a>
              </div>
              <p className="text-gray-500 text-sm">© 2025 SafeReport. All rights reserved.</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Landing;
