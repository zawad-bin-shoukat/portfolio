import React from 'react';
import SectionWrapper from './SectionWrapper';
import { FaLanguage } from 'react-icons/fa';

const languages = [
  { name: 'Bangla', level: 5, label: 'Native' },
  { name: 'English', level: 4, label: 'Professional' },
];

const Languages = () => {
  return (
    <SectionWrapper id="languages" className="bg-dark-100/30">
      <div className="text-center mb-12">
        <h2 className="section-title">Languages</h2>
        <p className="text-gray-500 mt-4">Languages I communicate in</p>
      </div>

      <div className="max-w-md mx-auto glass-card p-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent">
            <FaLanguage size={20} />
          </div>
          <h3 className="text-lg font-semibold text-white">Language Proficiency</h3>
        </div>

        <div className="space-y-6">
          {languages.map((lang, index) => (
            <div key={index} className="group">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-300 font-medium">{lang.name}</span>
                <span className="text-xs text-gray-500 uppercase tracking-wider">{lang.label}</span>
              </div>
              <div className="flex items-center gap-2">
                {[1, 2, 3, 4, 5].map((dot) => (
                  <div
                    key={dot}
                    className={`w-4 h-4 rounded-full transition-all duration-300 ${
                      dot <= lang.level
                        ? 'bg-accent shadow-md shadow-accent/30'
                        : 'bg-dark-400/50 border border-white/10'
                    }`}
                  />
                ))}
                <span className="text-sm text-gray-500 ml-2">{lang.level}/5</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Languages;
