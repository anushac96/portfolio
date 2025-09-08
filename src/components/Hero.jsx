import React, { useState, useEffect } from 'react';
import { ChevronRight, Github, Linkedin, Mail, Download } from 'lucide-react';
import { PERSONAL_INFO, SOCIAL_LINKS } from '../utils/constants';

const Hero = () => {
  const [animatedStats, setAnimatedStats] = useState({
    experience: 0,
    projects: 0,
    contributions: 0
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedStats({
        experience: 4,
        projects: 15, // TODO: Update with actual number of projects
        contributions: 47 //TODO: Update with actual number of contributions
      });
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="pt-32 pb-20 px-6 min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-fade-in-up">
            <div className="mb-4">
              <span className="text-blue-400 font-semibold text-lg">Hello, I'm</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="gradient-text">
                Senior Full Stack Software
              </span>
              <br />
              <span className="text-white">Engineer</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Specializing in <span className="text-blue-400 font-semibold">Distributed Systems</span> and{' '}
              <span className="text-purple-400 font-semibold">AI/ML Infrastructure</span>. 
              Building production systems that scale to millions of users with microsecond precision.
            </p>
            
            {/* Key Highlights */}
            <div className="mb-8 space-y-2">
              <div className="flex items-center text-slate-300">
                <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                <span>4+ years building scalable distributed systems</span>
              </div>
              <div className="flex items-center text-slate-300">
                <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                <span>Led technical architecture for healthcare platforms</span>
              </div>
              <div className="flex items-center text-slate-300">
                <div className="w-2 h-2 bg-pink-400 rounded-full mr-3"></div>
                <span>Systems handling 1M+ requests/second</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              
              {/* 
              will be in boxed format
              <a 
                href="#projects" 
                className="btn-primary justify-center sm:justify-start"
              > */
              }
              <a href="#projects" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 flex items-center justify-center sm:justify-start">
                View Projects <ChevronRight className="ml-2 w-4 h-4" />
              </a>
              {/* will be in boxed format
              <a 
                href={PERSONAL_INFO.resume}
                className="btn-secondary justify-center sm:justify-start"
                download
              > */}
              <a href="/resume.pdf" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 flex items-center justify-center sm:justify-start" download>
                <Download className="mr-2 w-4 h-4" />
                Download Resume
              </a>
            </div>

            {/* Social Links */}
            <div className="flex space-x-6">
              <a 
                href={SOCIAL_LINKS.github}
                className="text-slate-400 hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-6 h-6" />
              </a>
              <a 
                href={SOCIAL_LINKS.linkedin}
                className="text-slate-400 hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a 
                href={SOCIAL_LINKS.email}
                className="text-slate-400 hover:text-white transition-colors"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Right Content - Stats Cards */}
          <div className="animate-scale-in">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-slate-600 transition-all">
                <div className="text-3xl font-bold text-blue-400 mb-2">
                  {animatedStats.experience}+
                </div>
                <div className="text-slate-300">Years Experience</div>
                <div className="text-xs text-slate-500 mt-1">Software Engineering</div>
              </div>
              
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-slate-600 transition-all">
                <div className="text-3xl font-bold text-purple-400 mb-2">
                  {animatedStats.projects}+
                </div>
                <div className="text-slate-300">Projects Built</div>
                <div className="text-xs text-slate-500 mt-1">Production Systems</div>
              </div>
              
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-slate-600 transition-all col-span-2">
                <div className="text-3xl font-bold text-pink-400 mb-2">
                  {animatedStats.contributions}+
                </div>
                <div className="text-slate-300">Open Source Contributions</div>
                <div className="text-xs text-slate-500 mt-1">Community Impact</div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="relative mt-8">
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;