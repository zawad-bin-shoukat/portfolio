import React, { useEffect, useRef, useState } from 'react';
import SectionWrapper from './SectionWrapper';
import { motion, useInView } from 'framer-motion';
import { 
  FaCode, FaGlobe, FaProjectDiagram, FaMobileAlt, FaBrain, FaDatabase 
} from 'react-icons/fa';

const skillCategories = [
  {
    title: 'Programming Languages',
    icon: <FaCode />,
    skills: [
      { name: 'C', level: 80 },
      { name: 'C++', level: 85 },
      { name: 'Java', level: 75 },
      { name: 'Python', level: 80 },
      { name: 'JavaScript', level: 90 },
    ],
    gradient: 'from-blue-500 to-cyan-400',
    color: 'from-blue-500/20 to-cyan-500/20',
    borderColor: 'hover:border-blue-400/30',
    barColor: 'bg-gradient-to-r from-blue-500 to-cyan-400',
  },
  {
    title: 'Web Development',
    icon: <FaGlobe />,
    skills: [
      { name: 'HTML/CSS', level: 92 },
      { name: 'JavaScript', level: 90 },
      { name: 'PHP', level: 70 },
      { name: 'Spring Boot', level: 60 },
      { name: 'MERN Stack', level: 85 },
    ],
    gradient: 'from-green-500 to-emerald-400',
    color: 'from-green-500/20 to-emerald-500/20',
    borderColor: 'hover:border-green-400/30',
    barColor: 'bg-gradient-to-r from-green-500 to-emerald-400',
  },
  {
    title: 'Data Structures & Algorithms',
    icon: <FaProjectDiagram />,
    skills: [
      { name: 'Arrays & Strings', level: 85 },
      { name: 'Trees & Graphs', level: 75 },
      { name: 'Dynamic Programming', level: 70 },
      { name: 'Sorting & Searching', level: 80 },
    ],
    gradient: 'from-purple-500 to-violet-400',
    color: 'from-purple-500/20 to-violet-500/20',
    borderColor: 'hover:border-purple-400/30',
    barColor: 'bg-gradient-to-r from-purple-500 to-violet-400',
  },
  {
    title: 'Mobile App Development',
    icon: <FaMobileAlt />,
    skills: [
      { name: 'React Native', level: 70 },
      { name: 'Cross-Platform', level: 65 },
    ],
    gradient: 'from-pink-500 to-rose-400',
    color: 'from-pink-500/20 to-rose-500/20',
    borderColor: 'hover:border-pink-400/30',
    barColor: 'bg-gradient-to-r from-pink-500 to-rose-400',
  },
  {
    title: 'Machine Learning',
    icon: <FaBrain />,
    skills: [
      { name: 'Python ML', level: 65 },
      { name: 'NumPy', level: 70 },
      { name: 'pandas', level: 70 },
      { name: 'Data Analysis', level: 65 },
    ],
    gradient: 'from-amber-500 to-orange-400',
    color: 'from-amber-500/20 to-orange-500/20',
    borderColor: 'hover:border-amber-400/30',
    barColor: 'bg-gradient-to-r from-amber-500 to-orange-400',
  },
  {
    title: 'Database Management',
    icon: <FaDatabase />,
    skills: [
      { name: 'SQL', level: 80 },
      { name: 'MySQL', level: 80 },
      { name: 'PostgreSQL', level: 70 },
      { name: 'MongoDB', level: 85 },
    ],
    gradient: 'from-teal-500 to-cyan-400',
    color: 'from-teal-500/20 to-cyan-500/20',
    borderColor: 'hover:border-teal-400/30',
    barColor: 'bg-gradient-to-r from-teal-500 to-cyan-400',
  },
];

const SkillBar = ({ name, level, barColor, delay }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated]);

  return (
    <div ref={ref} className="space-y-1.5">
      <div className="flex items-center justify-between">
        <span className="text-sm text-gray-400">{name}</span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={hasAnimated ? { opacity: 1 } : {}}
          transition={{ duration: 0.4, delay: delay + 0.5 }}
          className="text-xs text-gray-500 font-mono"
        >
          {level}%
        </motion.span>
      </div>
      <div className="h-2 bg-dark-400/50 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={hasAnimated ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1, delay: delay, ease: 'easeOut' }}
          className={`h-full rounded-full ${barColor} shadow-sm`}
          style={{ boxShadow: '0 0 8px rgba(56, 189, 248, 0.15)' }}
        />
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <SectionWrapper id="skills">
      <div className="text-center mb-12">
        <h2 className="section-title">Technical Skills</h2>
        <p className="text-gray-500 mt-4">Technologies and tools I work with</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, index) => (
          <div
            key={index}
            className={`glass-card p-6 transition-all duration-300 ${category.borderColor} group hover:shadow-lg hover:shadow-black/20`}
          >
            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
              {category.icon}
            </div>
            <h3 className="text-lg font-semibold text-white mb-5">{category.title}</h3>
            <div className="space-y-3">
              {category.skills.map((skill, skillIndex) => (
                <SkillBar
                  key={skillIndex}
                  name={skill.name}
                  level={skill.level}
                  barColor={category.barColor}
                  delay={skillIndex * 0.1}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Skills;
