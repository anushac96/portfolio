import React, { useState } from "react";
import {
  MapPin,
  Calendar,
  ExternalLink,
  Award,
  GraduationCap,
  Briefcase,
  Code,
  Trophy,
} from "lucide-react";
import { workExperience, education, certifications } from "../data/experience";

const Experience = () => {
  const [activeTab, setActiveTab] = useState("work");

  const TabButton = ({ id, label, icon: Icon, active, onClick }) => (
    <button
      onClick={() => onClick(id)}
      className={`flex items-center px-6 py-3 rounded-lg font-medium transition-all ${
        active
          ? "bg-blue-600 text-slate-400 shadow-lg"
          : "text-slate-500 hover:text-slate-300 hover:bg-slate-700"
      }`}
    >
      <Icon className="w-5 h-5 mr-2" />
      {label}
    </button>
  );

  return (
    <section id="experience" className="py-20 px-6 bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">
          Professional Journey
        </h2>
        <p className="text-slate-400 text-center mb-16 max-w-2xl mx-auto">
          4+ years of experience building scalable systems, leading technical
          initiatives, and delivering high-impact solutions across healthcare,
          e-commerce, and enterprise domains.
        </p>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <TabButton
            id="work"
            label="Work Experience"
            icon={Briefcase}
            active={activeTab === "work"}
            onClick={setActiveTab}
          />
          <TabButton
            id="education"
            label="Education"
            icon={GraduationCap}
            active={activeTab === "education"}
            onClick={setActiveTab}
          />
          <TabButton
            id="certifications"
            label="Certifications"
            icon={Award}
            active={activeTab === "certifications"}
            onClick={setActiveTab}
          />
        </div>

        {/* Work Experience Tab */}
        {activeTab === "work" && (
          <div className="space-y-8">
            {workExperience.map((job, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-8 border border-slate-700 shadow-lg hover:border-slate-600 transition-all"
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex flex-nowrap items-center justify-start mb-2 gap-2 max-w-md overflow-x-auto">
                      <h3 className="text-xl font-bold text-white mr-2">
                        {job.position}
                      </h3>
                      <span className="bg-slate-600/30 text-slate-200 border border-slate-500/40 px-3 py-1 rounded-full text-sm">
                        {job.type}
                      </span>
                    </div>
                    <div className="flex items-center text-slate-300 mb-2">
                      <Briefcase className="w-4 h-4 mr-2" />
                      <a
                        href={job.website}
                        className="text-blue-400 hover:text-blue-300 transition-colors font-semibold"
                      >
                        {job.company}
                      </a>
                    </div>
                    <div className="flex flex-wrap gap-4 text-slate-400 text-sm">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {job.duration}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {job.location}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <h4 className="text-lg font-semibold mb-4 text-blue-300">
                      Key Achievements
                    </h4>
                    <ul className="space-y-3 mb-6">
                      {job.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start">
                          <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-slate-300 text-sm leading-relaxed">
                            {achievement}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold mb-4 text-purple-400">
                      Impact Metrics
                    </h4>
                    <div className="space-y-3 mb-6">
                      {job.highlights.map((highlight, i) => (
                        <div key={i} className="bg-slate-700/50 p-3 rounded-lg">
                          <div className="flex items-center">
                            <Trophy className="w-4 h-4 text-yellow-400 mr-2" />
                            <span className="text-slate-300 text-sm">
                              {highlight}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>

                    <h4 className="text-lg font-semibold mb-4 text-green-300">
                      Technologies
                    </h4>
                    {/* <div className="flex flex-wrap gap-2">
                      {job.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="bg-slate-700 text-slate-200 px-3 py-1 rounded-lg text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div> */}
                    <p className="text-slate-300 text-sm">
                      {job.technologies.join(", ")}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Education Tab */}
        {activeTab === "education" && (
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-8 border border-slate-700 shadow-lg hover:border-slate-600 transition-all"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {edu.degree}
                    </h3>
                    <div className="flex items-center text-slate-300 mb-2">
                      <GraduationCap className="w-4 h-4 mr-2" />
                      {edu.school}
                    </div>
                    <div className="flex flex-wrap gap-4 text-slate-400 text-sm mb-6">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {edu.duration}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {edu.location}
                      </div>
                      {edu.gpa && (
                        <div className="flex items-center">
                          <Award className="w-4 h-4 mr-1" />
                          GPA: {edu.gpa}
                        </div>
                      )}
                    </div>

                    <h4 className="text-lg font-semibold mb-4 text-blue-300">
                      Relevant Coursework
                    </h4>
                    <div className="grid grid-cols-1 gap-2">
                      {edu.coursework.map((course, i) => (
                        <div key={i} className="flex items-center">
                          <div className="w-1 h-1 bg-blue-400 rounded-full mr-3"></div>
                          <span className="text-slate-300 text-sm">
                            {course}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    {/* <h4 className="text-lg font-semibold mb-4 text-purple-400">
                      Notable Projects
                    </h4>
                    <div className="space-y-4">
                      {edu.projects.map((project, i) => (
                        <div key={i} className="bg-slate-700/50 p-4 rounded-lg">
                          <div className="flex items-start">
                            <Code className="w-4 h-4 text-purple-400 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-slate-300 text-sm">
                              {project}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Certifications Tab */}
        {activeTab === "certifications" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-8 border border-slate-700 shadow-lg hover:border-slate-600 transition-all"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-slate-700 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-yellow-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white mb-2">
                      {cert.name}
                    </h3>
                    <p className="text-slate-300 text-sm mb-2">{cert.issuer}</p>
                    <div className="flex items-center text-slate-400 text-sm mb-3">
                      <Calendar className="w-4 h-4 mr-1" />
                      {cert.date}
                    </div>
                    {cert.credentialId && (
                      <p className="text-slate-500 text-xs">
                        ID: {cert.credentialId}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Experience;
