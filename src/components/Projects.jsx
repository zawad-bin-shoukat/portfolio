import React from 'react';
import SectionWrapper from './SectionWrapper';
import { FaGithub, FaExternalLinkAlt, FaCalendarAlt } from 'react-icons/fa';

const projects = [
  {
    title: 'Career_Sync',
    period: '02/2025 – 05/2025',
    description:
      'A Job Portal Web Application connecting companies with job aspirants. Features include job posting, application management, user profiles, and a streamlined recruitment workflow.',
    techStack: ['React', 'Node.js', 'Express', 'MongoDB'],
    github: 'https://github.com/zawadttasin17/Career_Sync',
    live: '#',
    gradient: 'from-blue-500/10 to-cyan-500/10',
    accent: 'blue',
  },
  {
    title: 'RDBMS-Library-Project',
    period: '11/2024 – 04/2025',
    description:
      'Simple Online Library Management System built using PHP, MySQL, and XAMPP. Users can browse, view, and download books without logging in, while the admin can manage the library through a secure login system.',
    techStack: ['PHP', 'MySQL', 'XAMPP', 'HTML/CSS'],
    github: 'https://github.com/zawadttasin17/RDBMS-Library-Project',
    live: '#',
    gradient: 'from-green-500/10 to-emerald-500/10',
    accent: 'green',
  },
  {
    title: 'IUT-CritiqueHub',
    period: '11/2024 – 03/2025',
    description:
      'A web application designed to facilitate user critiques and reviews, likely focused on a particular domain of electronic devices. It provides users with a platform to submit, share, and discuss feedback through a collaborative online environment.',
    techStack: ['JavaScript', 'Node.js', 'Express', 'MongoDB'],
    github: 'https://github.com/zawadttasin17/IUT-CritiqueHub',
    live: '#',
    gradient: 'from-purple-500/10 to-violet-500/10',
    accent: 'purple',
  },
  {
    title: 'symple_tasker',
    period: '09/2023 – 01/2024',
    description:
      'Task listing and viewing application implemented in C++ with Object-Oriented Programming. Features clean architecture with proper encapsulation, inheritance, and modular design.',
    techStack: ['C++', 'OOP'],
    github: 'https://github.com/zawadttasin17/symple_tasker',
    live: '#',
    gradient: 'from-pink-500/10 to-rose-500/10',
    accent: 'pink',
  },
];

const accentColors = {
  blue: {
    bg: 'bg-blue-500/10',
    text: 'text-blue-400',
    border: 'border-blue-500/20',
    hoverBorder: 'hover:border-blue-400/40',
    badge: 'bg-blue-500/10 text-blue-300',
  },
  green: {
    bg: 'bg-green-500/10',
    text: 'text-green-400',
    border: 'border-green-500/20',
    hoverBorder: 'hover:border-green-400/40',
    badge: 'bg-green-500/10 text-green-300',
  },
  purple: {
    bg: 'bg-purple-500/10',
    text: 'text-purple-400',
    border: 'border-purple-500/20',
    hoverBorder: 'hover:border-purple-400/40',
    badge: 'bg-purple-500/10 text-purple-300',
  },
  pink: {
    bg: 'bg-pink-500/10',
    text: 'text-pink-400',
    border: 'border-pink-500/20',
    hoverBorder: 'hover:border-pink-400/40',
    badge: 'bg-pink-500/10 text-pink-300',
  },
};

const Projects = () => {
  return (
    <SectionWrapper id="projects" className="bg-dark-100/30">
      <div className="text-center mb-12">
        <h2 className="section-title">Projects</h2>
        <p className="text-gray-500 mt-4">Things I've built</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, index) => {
          const colors = accentColors[project.accent];
          return (
            <div
              key={index}
              className={`glass-card overflow-hidden transition-all duration-300 ${colors.hoverBorder} group`}
            >
              {/* Top gradient bar */}
              <div className={`h-1 bg-gradient-to-r ${project.gradient}`} />

              <div className="p-6">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-1.5 text-sm text-gray-500 mt-1">
                      <FaCalendarAlt className="text-xs" />
                      <span>{project.period}</span>
                    </div>
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-dark-300/50 text-gray-400 hover:text-white 
                                 hover:bg-dark-300 transition-all duration-300"
                      title="View on GitHub"
                    >
                      <FaGithub size={16} />
                    </a>
                    {project.live !== '#' && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-dark-300/50 text-gray-400 hover:text-white 
                                   hover:bg-dark-300 transition-all duration-300"
                        title="View Live"
                      >
                        <FaExternalLinkAlt size={14} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed mb-4">{project.description}</p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className={`px-2.5 py-1 text-xs rounded-md font-medium ${colors.badge}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
};

export default Projects;
