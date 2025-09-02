import React, { useState } from 'react';
import { ExternalLink, Github, ChevronRight, Star, GitBranch, Users, Zap } from 'lucide-react';
import { projects, sideProjects } from '../data/projects';

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null); // Changed to null so no project is active by default

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">Featured Projects</h2>
        <p className="text-slate-400 text-center mb-16 max-w-2xl mx-auto">
          Production-ready systems demonstrating expertise in distributed architecture, 
          high-performance computing, and advanced AI/ML implementations.
        </p>

        {/* Project Cards with individual details */}
        <div className="space-y-8 mb-16">
          {projects.map((project, index) => (
            <div key={index} className="space-y-4">
              {/* Project Card */}
              <div
                className={`bg-slate-800 rounded-xl p-6 border transition-all cursor-pointer transform hover:scale-102 ${
                  activeProject === index ? 'border-blue-500 shadow-lg shadow-blue-500/20' : 'border-slate-700 hover:border-slate-600'
                }`}
                onClick={() => setActiveProject(activeProject === index ? null : index)}
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    project.status === 'Production' 
                      ? 'bg-green-600/20 text-green-300 border border-green-500/30' 
                      : 'bg-blue-600/20 text-blue-300 border border-blue-500/30'
                  }`}>
                    {project.status}
                  </span>
                </div>
                <p className="text-slate-400 mb-4">{project.subtitle}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.slice(0, 3).map((tech, i) => (
                    <span key={i} className="bg-slate-700 text-slate-200 px-2 py-1 rounded text-sm">
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="text-slate-400 text-sm">+{project.tech.length - 3} more</span>
                  )}
                </div>
                <div className="flex space-x-4">
                  <a 
                    href={project.demoUrl} 
                    className="text-slate-300 hover:text-slate-100 flex items-center text-sm font-medium"
                    onClick={(e) => e.stopPropagation()} // Prevent card click when clicking links
                  >
                    <ExternalLink className="w-4 h-4 mr-1" /> Live Demo
                  </a>
                  <a 
                    href={project.githubUrl} 
                    className="text-slate-300 hover:text-slate-200 flex items-center text-sm font-medium"
                    onClick={(e) => e.stopPropagation()} // Prevent card click when clicking links
                  >
                    <Github className="w-4 h-4 mr-1" /> Source Code
                  </a>
                </div>
                
                {/* Click indicator */}
                {/* <div className="flex items-center justify-center mt-4 pt-4 border-t border-slate-700">
                  <span className="text-slate-500 text-sm flex items-center">
                    {activeProject === index ? 'Click to hide details' : 'Click to view details'}
                    <ChevronRight className={`w-4 h-4 ml-1 transition-transform ${
                      activeProject === index ? 'rotate-90' : ''
                    }`} />
                  </span>
                </div> */}
              </div>

              {/* Project Details - Show only when active */}
              {activeProject === index && (
                <div className="bg-slate-800/70 rounded-xl p-8 border border-slate-600 ml-4">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <p className="text-slate-300 mb-6 leading-relaxed">{project.description}</p>
                      
                      <h4 className="text-lg font-semibold mb-4 text-blue-300">Key Achievements</h4>
                      <ul className="space-y-3 mb-6">
                        {project.highlights.map((highlight, i) => (
                          <li key={i} className="flex items-start">
                            <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-slate-300">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, i) => (
                          <span key={i} className="bg-slate-700 text-slate-200 px-3 py-1 rounded-lg text-sm">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold mb-4 text-purple-300">Performance Metrics</h4>
                      <div className="space-y-4 mb-6">
                        {Object.entries(project.metrics).map(([key, value], i) => (
                          <div key={i} className="flex justify-between items-center">
                            <span className="text-slate-400 capitalize">{key.replace(/([A-Z])/g, ' $1')}:</span>
                            <span className="font-semibold text-white">{value}</span>
                          </div>
                        ))}
                      </div>
                      
                      <h4 className="text-lg font-semibold mb-4 text-pink-300">Technical Challenges</h4>
                      <ul className="space-y-2 mb-6">
                        {project.challenges.map((challenge, i) => (
                          <li key={i} className="flex items-start">
                            <div className="w-1 h-1 bg-pink-400 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                            <span className="text-slate-400 text-sm">{challenge}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <div className="flex space-x-4">
                        <a 
                          href={project.demoUrl}
                          className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-2 rounded-lg transition-all flex items-center font-medium"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </a>
                        <a 
                          href={project.githubUrl}
                          className="border border-slate-500 hover:border-slate-400 text-slate-200 hover:text-white px-6 py-2 rounded-lg transition-all flex items-center font-medium"
                        >
                          <Github className="w-4 h-4 mr-2" />
                          Source Code
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Side Projects */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-8 text-center text-white">Side Projects & Experiments</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {sideProjects.map((project, index) => (
              <div key={index} className="bg-slate-800 rounded-lg p-6 border border-slate-700 hover:border-slate-600 transition-all">
                <h4 className="text-lg font-semibold mb-3 text-white">{project.title}</h4>
                <p className="text-slate-400 text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="bg-slate-700 text-slate-200 px-2 py-1 rounded text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
                <a href={project.githubUrl} className="text-slate-300 hover:text-slate-100 flex items-center text-sm font-medium">
                  <Github className="w-4 h-4 mr-1" /> View Code
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;