import React, { useState } from 'react';
import { skillCategories, tools } from '../data/skills';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  const getColorClasses = (color) => {
    const colors = {
      blue: 'text-blue-400 border-blue-500',
      purple: 'text-purple-400 border-purple-500',
      pink: 'text-pink-400 border-pink-500',
      yellow: 'text-yellow-400 border-yellow-500',
      green: 'text-green-400 border-green-500',
      indigo: 'text-indigo-400 border-indigo-500'
    };
    return colors[color] || 'text-blue-400 border-blue-500';
  };

  return (
    <section id="skills" className="py-20 px-6 bg-slate-800/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">Technical Expertise</h2>
        <p className="text-slate-400 text-center mb-16 max-w-2xl mx-auto">
          Deep expertise across the full technology stack, from distributed systems architecture 
          to cutting-edge AI/ML implementations.
        </p>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(index)}
                className={`flex items-center px-6 py-3 rounded-lg border-2 transition-all ${
                  activeCategory === index
                    ? `${getColorClasses(category.color)} bg-slate-800`
                    : 'text-slate-400 border-slate-600 hover:border-slate-500'
                }`}
              >
                <IconComponent className="w-5 h-5 mr-2" />
                {category.title}
              </button>
            );
          })}
        </div>

        {/* Active Category Details */}
        <div className="bg-slate-800 rounded-xl p-8 border border-slate-700">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                {React.createElement(skillCategories[activeCategory].icon, { className: "w-6 h-6 mr-3 " + getColorClasses(skillCategories[activeCategory].color).split(' ')[0] })}
                {skillCategories[activeCategory].title}
              </h3>
              
              <div className="space-y-6">
                {skillCategories[activeCategory].skills.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-white font-medium">{skill.name}</span>
                      <div className="flex items-center space-x-2">
                        <span className="text-slate-400 text-sm">{skill.experience}</span>
                        {/* TODO: uncomment skill level */}
                        {/* <span className="text-slate-300 text-sm">{skill.level}%</span> */}
                      </div>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full bg-gradient-to-r ${
                          skillCategories[activeCategory].color === 'blue' ? 'from-blue-500 to-blue-600' :
                          skillCategories[activeCategory].color === 'purple' ? 'from-purple-500 to-purple-600' :
                          skillCategories[activeCategory].color === 'pink' ? 'from-pink-500 to-pink-600' :
                          skillCategories[activeCategory].color === 'yellow' ? 'from-yellow-500 to-yellow-600' :
                          skillCategories[activeCategory].color === 'green' ? 'from-green-500 to-green-600' :
                          'from-indigo-500 to-indigo-600'
                        }`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              {/* TODO: Uncomment when I get to know in which project the these technologies are used */}
              {/* <h4 className="text-lg font-semibold mb-4 text-slate-300">Applied In Projects</h4>
              <div className="flex flex-wrap gap-2 mb-6">
                {skillCategories[activeCategory].projects.map((project, index) => (
                  <span key={index} className="bg-slate-700 px-3 py-1 rounded-lg text-sm">
                    {project}
                  </span>
                ))}
              </div> */}

              {/* TODO: Uncomment when I get to know in which certificate the these technologies are used */}
              {/* {skillCategories[activeCategory].certifications.length > 0 && (
                <>
                  <h4 className="text-lg font-semibold mb-4 text-slate-300">Certifications</h4>
                  <div className="space-y-2 mb-6">
                    {skillCategories[activeCategory].certifications.map((cert, index) => (
                      <div key={index} className="flex items-center">
                        <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                        <span className="text-slate-300">{cert}</span>
                      </div>
                    ))}
                  </div>
                </>
              )} */}

              {/* Tools Section */}
              <h4 className="text-lg font-semibold mb-4 text-slate-300">Development Tools</h4>
              <div className="grid grid-cols-2 gap-4">
                {tools.map((toolGroup, index) => (
                  <div key={index} className="space-y-2">
                    <h5 className="text-sm font-medium text-slate-400">{toolGroup.category}</h5>
                    <ul className="space-y-1">
                      {toolGroup.items.map((tool, toolIndex) => (
                        <li key={toolIndex} className="text-slate-300 text-sm flex items-center">
                          <div className="w-1 h-1 bg-slate-500 rounded-full mr-2"></div>
                          {tool}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;