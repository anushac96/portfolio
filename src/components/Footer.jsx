// import React from 'react';
// import { Heart, Code, Coffee, Github, Linkedin, Mail } from 'lucide-react';
// import { PERSONAL_INFO, SOCIAL_LINKS } from '../utils/constants';

// const Footer = () => {
//   const currentYear = new Date().getFullYear();
  
//   const quickLinks = [
//     { name: 'Projects', href: '#projects' },
//     { name: 'Skills', href: '#skills' },
//     { name: 'Experience', href: '#experience' },
//     { name: 'Contact', href: '#contact' }
//   ];

//   return (
//     <footer className="py-12 px-6 border-t border-slate-700">
//      <div className="max-w-6xl mx-auto">
//        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
//          {/* Brand Section */}
//          <div className="md:col-span-2">
//            <div className="mb-4">
//              <h3 className="text-xl font-bold gradient-text mb-2">
//                {PERSONAL_INFO.name}
//              </h3>
//              <p className="text-slate-400 text-sm leading-relaxed">
//                Senior Software Engineer specializing in distributed systems and AI/ML infrastructure. 
//                Passionate about building scalable solutions that make a real impact.
//              </p>
//            </div>
           
//            {/* Social Links */}
//            <div className="flex space-x-4">
//              <a 
//                href={SOCIAL_LINKS.github}
//                className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-slate-700 transition-colors"
//                target="_blank"
//                rel="noopener noreferrer"
//                aria-label="GitHub"
//              >
//                <Github className="w-5 h-5 text-slate-400 hover:text-white" />
//              </a>
//              <a 
//                href={SOCIAL_LINKS.linkedin}
//                className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-slate-700 transition-colors"
//                target="_blank"
//                rel="noopener noreferrer"
//                aria-label="LinkedIn"
//              >
//                <Linkedin className="w-5 h-5 text-slate-400 hover:text-white" />
//              </a>
//              <a 
//                href={SOCIAL_LINKS.email}
//                className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-slate-700 transition-colors"
//                aria-label="Email"
//              >
//                <Mail className="w-5 h-5 text-slate-400 hover:text-white" />
//              </a>
//            </div>
//          </div>

//          {/* Quick Links */}
//          <div>
//            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
//            <ul className="space-y-2">
//              {quickLinks.map((link) => (
//                <li key={link.name}>
//                  <a 
//                    href={link.href}
//                    className="text-slate-400 hover:text-white transition-colors text-sm"
//                  >
//                    {link.name}
//                  </a>
//                </li>
//              ))}
//            </ul>
//          </div>

//          {/* Contact Info */}
//          <div>
//            <h4 className="text-lg font-semibold mb-4 text-white">Contact</h4>
//            <div className="space-y-2 text-sm">
//              <p className="text-slate-400">
//                <span className="block">📧 {PERSONAL_INFO.email}</span>
//              </p>
//              <p className="text-slate-400">
//                <span className="block">📱 {PERSONAL_INFO.phone}</span>
//              </p>
//              <p className="text-slate-400">
//                <span className="block">📍 {PERSONAL_INFO.location}</span>
//              </p>
//            </div>
//          </div>
//        </div>

//        {/* Bottom Section */}
//        <div className="pt-8 border-t border-slate-700">
//          <div className="flex flex-col md:flex-row justify-between items-center">
//            {/* Copyright */}
//            <div className="text-slate-400 text-sm mb-4 md:mb-0">
//              <p className="flex items-center">
//                © {currentYear} {PERSONAL_INFO.name}. Made with{' '}
//                <Heart className="w-4 h-4 text-red-400 mx-1" />,{' '}
//                <Code className="w-4 h-4 text-blue-400 mx-1" />, and{' '}
//                <Coffee className="w-4 h-4 text-amber-400 mx-1" />
//              </p>
//            </div>

//            {/* Tech Stack Used */}
//            <div className="flex items-center space-x-4 text-slate-500 text-xs">
//              <span>Built with:</span>
//              <div className="flex space-x-2">
//                <span className="bg-slate-800 px-2 py-1 rounded">React</span>
//                <span className="bg-slate-800 px-2 py-1 rounded">Vite</span>
//                <span className="bg-slate-800 px-2 py-1 rounded">CSS3</span>
//              </div>
//            </div>
//          </div>
//        </div>

//        {/* Fun Stats */}
//        <div className="mt-8 pt-6 border-t border-slate-700">
//          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
//            <div className="bg-slate-800/50 rounded-lg p-4">
//              <div className="text-blue-400 font-bold text-lg">4+</div>
//              <div className="text-slate-400 text-xs">Years Experience</div>
//            </div>
//            <div className="bg-slate-800/50 rounded-lg p-4">
//              <div className="text-purple-400 font-bold text-lg">15+</div>
//              <div className="text-slate-400 text-xs">Projects Built</div>
//            </div>
//            <div className="bg-slate-800/50 rounded-lg p-4">
//              <div className="text-pink-400 font-bold text-lg">47+</div>
//              <div className="text-slate-400 text-xs">Open Source</div>
//            </div>
//            <div className="bg-slate-800/50 rounded-lg p-4">
//              <div className="text-green-400 font-bold text-lg">∞</div>
//              <div className="text-slate-400 text-xs">Lines of Code</div>
//            </div>
//          </div>
//        </div>
//      </div>
//    </footer>
//  );
// };

// export default Footer;

import React from 'react';
import { Github, Linkedin, Mail, MapPin, Phone, FileText, ExternalLink, Heart, Code, Coffee } from 'lucide-react';
import { PERSONAL_INFO, SOCIAL_LINKS } from '../utils/constants';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const navigationSections = [
    {
      title: 'Portfolio',
      links: [
        { name: 'Featured Projects', href: '#projects' },
        { name: 'Technical Skills', href: '#skills' },
        { name: 'Work Experience', href: '#experience' },
        { name: 'Contact Me', href: '#contact' }
      ]
    },
    {
      title: 'Projects',
      links: [
        { name: 'DistributedML Platform', href: '#projects' },
        { name: 'StreamForge Processor', href: '#projects' },
        { name: 'CodeIntel Analysis', href: '#projects' },
        { name: 'Side Projects', href: '#projects' }
      ]
    }
  ];

  const achievements = [
    { label: 'Years Experience', value: '4+', color: 'text-blue-400' },
    { label: 'Projects Delivered', value: '15+', color: 'text-purple-400' },
    { label: 'Team Members Led', value: '12+', color: 'text-green-400' },
    { label: 'Technologies Mastered', value: '25+', color: 'text-pink-400' }
  ];

  return (
    <footer className="bg-slate-900/90 border-t border-slate-700">
      <div className="max-w-6xl mx-auto">
        {/* Main Footer Content */}
        <div className="px-6 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Brand & Contact Section */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h3 className="text-2xl font-bold gradient-text mb-3">
                  {PERSONAL_INFO.name}
                </h3>
                <p className="text-slate-300 text-lg mb-2">Senior Software Engineer</p>
                <p className="text-slate-400 leading-relaxed max-w-md">
                  Specializing in distributed systems and AI/ML infrastructure. 
                  Building scalable solutions that drive real business impact and technical innovation.
                </p>
              </div>

              {/* Contact Information */}
              <div className="space-y-3">
                <div className="flex items-center text-slate-300">
                  <Mail className="w-5 h-5 mr-3 text-blue-400 flex-shrink-0" />
                  <a href={SOCIAL_LINKS.email} className="hover:text-blue-300 transition-colors">
                    {PERSONAL_INFO.email}
                  </a>
                </div>
                <div className="flex items-center text-slate-300">
                  <Phone className="w-5 h-5 mr-3 text-purple-400 flex-shrink-0" />
                  <a href={`tel:${PERSONAL_INFO.phone}`} className="hover:text-purple-300 transition-colors">
                    {PERSONAL_INFO.phone}
                  </a>
                </div>
                <div className="flex items-center text-slate-300">
                  <MapPin className="w-5 h-5 mr-3 text-pink-400 flex-shrink-0" />
                  <span>{PERSONAL_INFO.location}</span>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-sm font-semibold text-slate-400 mb-3 uppercase tracking-wide">
                  Connect With Me
                </h4>
                <div className="flex space-x-4">
                  <a 
                    href={SOCIAL_LINKS.github}
                    className="group w-12 h-12 bg-slate-800 hover:bg-slate-700 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-105"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub Profile"
                  >
                    <Github className="w-6 h-6 text-slate-400 group-hover:text-white transition-colors" />
                  </a>
                  <a 
                    href={SOCIAL_LINKS.linkedin}
                    className="group w-12 h-12 bg-slate-800 hover:bg-slate-700 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-105"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn Profile"
                  >
                    <Linkedin className="w-6 h-6 text-slate-400 group-hover:text-blue-400 transition-colors" />
                  </a>
                  <a 
                    href={PERSONAL_INFO.resume}
                    className="group w-12 h-12 bg-slate-800 hover:bg-slate-700 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-105"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Download Resume"
                  >
                    <FileText className="w-6 h-6 text-slate-400 group-hover:text-green-400 transition-colors" />
                  </a>
                </div>
              </div>
            </div>

            {/* Navigation Sections */}
            {navigationSections.map((section, index) => (
              <div key={index}>
                <h4 className="text-sm font-semibold text-slate-400 mb-4 uppercase tracking-wide">
                  {section.title}
                </h4>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a 
                        href={link.href}
                        className="text-slate-300 hover:text-white transition-colors duration-200 flex items-center group"
                      >
                        <span className="group-hover:translate-x-1 transition-transform duration-200">
                          {link.name}
                        </span>
                        <ExternalLink className="w-3 h-3 ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements Bar
        <div className="px-6 py-6 bg-slate-800/50 border-t border-slate-700">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center group">
                <div className={`text-2xl font-bold ${achievement.color} group-hover:scale-110 transition-transform duration-300`}>
                  {achievement.value}
                </div>
                <div className="text-slate-400 text-sm mt-1">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div> */}

        {/* Bottom Copyright Section */}
        <div className="px-6 py-6 border-t border-slate-700">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <p className="text-slate-400 text-sm flex items-center">
                © {currentYear} {PERSONAL_INFO.name}. All rights reserved.
              </p>
              <p className="text-slate-500 text-sm flex items-center">
                Made with <Heart className="w-4 h-4 text-red-400 mx-1" />, 
                <Code className="w-4 h-4 text-blue-400 mx-1" />, and 
                <Coffee className="w-4 h-4 text-amber-400 mx-1" />
              </p>
            </div>

            {/* Tech Stack & Status */}
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2 text-slate-500 text-xs">
                <span>Built with:</span>
                <div className="flex space-x-1">
                  <span className="bg-slate-700 text-slate-300 px-2 py-1 rounded text-xs">React</span>
                  <span className="bg-slate-700 text-slate-300 px-2 py-1 rounded text-xs">Vite</span>
                  <span className="bg-slate-700 text-slate-300 px-2 py-1 rounded text-xs">CSS3</span>
                </div>
              </div>
              <div className="flex items-center space-x-2 text-xs">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-slate-400">Available for opportunities</span>
              </div>
            </div>
          </div>
        </div>

        {/* Call-to-Action Section */}
        <div className="px-6 py-8 bg-gradient-to-r from-blue-600/10 to-purple-600/10 border-t border-blue-500/20">
          <div className="text-center">
            <h3 className="text-xl font-bold text-white mb-2">Ready to Build Something Amazing?</h3>
            <p className="text-slate-300 mb-4 max-w-2xl mx-auto">
              I'm always interested in discussing new opportunities and challenging projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href={SOCIAL_LINKS.email}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-center group"
              >
                <Mail className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Get In Touch
              </a>
              <a 
                href={PERSONAL_INFO.resume}
                className="border-2 border-slate-500 hover:border-slate-400 text-slate-200 hover:text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-center group"
                download
              >
                <FileText className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                View Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;