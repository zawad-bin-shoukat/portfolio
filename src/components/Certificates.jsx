import React from 'react';
import SectionWrapper from './SectionWrapper';
import { FaTrophy, FaCalendarAlt } from 'react-icons/fa';

const certificates = [
  {
    title: 'Bangladesh Academy of Sciences - Science Olympiad',
    year: '2017',
    description: 'Participated in the national Science Olympiad organized by the Bangladesh Academy of Sciences, demonstrating excellence in scientific knowledge and problem-solving.',
  },
  {
    title: 'Bangladesh Academy of Sciences - Science Olympiad',
    year: '2018',
    description: 'Second consecutive year participating in the Science Olympiad, further strengthening analytical and scientific reasoning skills.',
  },
];

const Certificates = () => {
  return (
    <SectionWrapper id="certificates">
      <div className="text-center mb-12">
        <h2 className="section-title">Certificates</h2>
        <p className="text-gray-500 mt-4">Recognition and achievements</p>
      </div>

      <div className="max-w-2xl mx-auto space-y-6">
        {certificates.map((cert, index) => (
          <div
            key={index}
            className="glass-card p-6 hover:border-gold/20 transition-all duration-300 group"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center text-gold flex-shrink-0 group-hover:bg-gold/20 group-hover:scale-110 transition-all duration-300">
                <FaTrophy size={20} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-1">{cert.title}</h3>
                <div className="flex items-center gap-1.5 text-sm text-gold/80 mb-3">
                  <FaCalendarAlt />
                  <span>{cert.year}</span>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">{cert.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Certificates;
