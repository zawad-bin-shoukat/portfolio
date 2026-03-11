import React from 'react';
import SectionWrapper from './SectionWrapper';
import { FaBirthdayCake, FaFlag, FaHeart, FaUser, FaMapMarkerAlt } from 'react-icons/fa';

const personalDetails = [
  { icon: <FaBirthdayCake />, label: 'Date of Birth', value: 'July 12, 2002' },
  { icon: <FaMapMarkerAlt />, label: 'Location', value: 'Dhaka, Bangladesh' },
  { icon: <FaFlag />, label: 'Nationality', value: 'Bangladeshi' },
  { icon: <FaHeart />, label: 'Marital Status', value: 'Married' },
  { icon: <FaUser />, label: 'Gender', value: 'Male' },
];

const About = () => {
  return (
    <SectionWrapper id="about">
      <div className="text-center mb-12">
        <h2 className="section-title">About Me</h2>
        <p className="text-gray-500 mt-4">Get to know me better</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-start">
        {/* Bio */}
        <div className="glass-card p-8 space-y-4">
          <h3 className="text-xl font-semibold text-white mb-4">My Journey</h3>
          <p className="text-gray-400 leading-relaxed">
            I'm <span className="text-accent font-medium">Zawad Bin Shoukat (Tasin)</span>, 
            a passionate Computer Science and Engineering student at the{' '}
            <span className="text-white font-medium">Islamic University of Technology (IUT)</span>, 
            Bangladesh, graduating in September 2026.
          </p>
          <p className="text-gray-400 leading-relaxed">
            My journey in tech began during my time at{' '}
            <span className="text-white font-medium">Notre Dame College, Dhaka</span>, where I 
            completed my Higher Secondary Certificate (2019–2021). Since then, I've been deeply 
            invested in web development, problem-solving, and building meaningful applications.
          </p>
          <p className="text-gray-400 leading-relaxed">
            I thrive on tackling complex problems and turning ideas into functional, user-friendly 
            solutions. From full-stack MERN applications to mobile development with React Native, 
            I'm constantly expanding my skill set and working on projects that make a difference.
          </p>
        </div>

        {/* Personal Details */}
        <div className="glass-card p-8">
          <h3 className="text-xl font-semibold text-white mb-6">Personal Details</h3>
          <div className="space-y-4">
            {personalDetails.map((detail, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-3 rounded-xl hover:bg-white/5 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent/20 transition-colors">
                  {detail.icon}
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider">{detail.label}</p>
                  <p className="text-gray-300 font-medium">{detail.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default About;
