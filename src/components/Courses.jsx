import React from 'react';
import SectionWrapper from './SectionWrapper';
import { FaBookOpen, FaCalendarAlt, FaMapMarkerAlt, FaExternalLinkAlt } from 'react-icons/fa';

const courses = [
  {
    title: 'AI Python for Beginners',
    provider: 'DeepLearning.AI',
    period: '07/2025 – Present',
    location: 'Dhaka, Bangladesh',
    description:
      'A four-part course that teaches practical AI app development in Python from scratch, with projects and AI chatbot support, covering coding basics, data, automation, and key Python tools.',
    link: 'https://www.deeplearning.ai/',
    current: true,
  },
];

const Courses = () => {
  return (
    <SectionWrapper id="courses">
      <div className="text-center mb-12">
        <h2 className="section-title">Courses</h2>
        <p className="text-gray-500 mt-4">Continuous learning and development</p>
      </div>

      <div className="max-w-2xl mx-auto space-y-6">
        {courses.map((course, index) => (
          <div
            key={index}
            className="glass-card p-6 hover:border-accent/20 transition-all duration-300 group"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent flex-shrink-0 group-hover:bg-accent/20 group-hover:scale-110 transition-all duration-300">
                <FaBookOpen size={20} />
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-white">{course.title}</h3>
                    <p className="text-accent font-medium text-sm">{course.provider}</p>
                  </div>
                  {course.link && (
                    <a
                      href={course.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-dark-300/50 text-gray-400 hover:text-white 
                                 hover:bg-dark-300 transition-all duration-300"
                    >
                      <FaExternalLinkAlt size={14} />
                    </a>
                  )}
                </div>

                <p className="text-gray-400 text-sm leading-relaxed mt-3 mb-4">
                  {course.description}
                </p>

                <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                  <div className="flex items-center gap-1.5">
                    <FaCalendarAlt className="text-accent/60" />
                    <span>{course.period}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <FaMapMarkerAlt className="text-accent/60" />
                    <span>{course.location}</span>
                  </div>
                </div>

                {course.current && (
                  <div className="mt-4">
                    <span className="px-3 py-1 text-xs font-medium text-accent bg-accent/10 rounded-full animate-pulse">
                      In Progress
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Courses;
