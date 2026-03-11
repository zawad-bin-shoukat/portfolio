import React from 'react';
import SectionWrapper from './SectionWrapper';
import { FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

const educationData = [
  {
    degree: 'B.Sc. in Computer Science and Engineering',
    institution: 'Islamic University of Technology (IUT)',
    period: '08/2022 – Present',
    location: 'Gazipur, Dhaka, Bangladesh',
    description: 'Currently pursuing a Bachelor of Science in Computer Science and Engineering, focusing on software development, algorithms, and machine learning.',
    current: true,
  },
  {
    degree: 'Higher Secondary Certificate (HSC)',
    institution: 'Notre Dame College',
    period: '07/2019 – 12/2021',
    location: 'Dhaka, Bangladesh',
    description: 'Completed Higher Secondary Certificate with a focus on Science, building a strong foundation in mathematics and analytical thinking.',
    current: false,
  },
];

const Education = () => {
  return (
    <SectionWrapper id="education" className="bg-dark-100/30">
      <div className="text-center mb-12">
        <h2 className="section-title">Education</h2>
        <p className="text-gray-500 mt-4">My academic journey</p>
      </div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent via-primary-500 to-transparent" />

        <div className="space-y-12">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className={`relative flex flex-col md:flex-row items-start gap-8 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-accent border-4 border-dark z-10 shadow-lg shadow-accent/30">
                {edu.current && (
                  <div className="absolute inset-0 rounded-full bg-accent animate-ping opacity-30" />
                )}
              </div>

              {/* Card */}
              <div className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                <div className="glass-card p-6 hover:border-accent/20 transition-all duration-300 group">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                      <FaGraduationCap size={20} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">{edu.degree}</h3>
                      <p className="text-accent font-medium">{edu.institution}</p>
                    </div>
                  </div>

                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">{edu.description}</p>

                  <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1.5">
                      <FaCalendarAlt className="text-accent/60" />
                      <span>{edu.period}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <FaMapMarkerAlt className="text-accent/60" />
                      <span>{edu.location}</span>
                    </div>
                  </div>

                  {edu.current && (
                    <div className="mt-4">
                      <span className="px-3 py-1 text-xs font-medium text-accent bg-accent/10 rounded-full">
                        Currently Enrolled
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Education;
