import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaChevronDown, FaDownload } from 'react-icons/fa';
import profileImg from '../assets/profile.jpg';

// --- Typing Animation Hook ---
const useTypingAnimation = (texts, typingSpeed = 80, deletingSpeed = 40, pauseDuration = 2000) => {
  const [displayText, setDisplayText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const animate = useCallback(() => {
    const currentFullText = texts[textIndex];

    if (!isDeleting) {
      if (displayText.length < currentFullText.length) {
        return setTimeout(() => {
          setDisplayText(currentFullText.slice(0, displayText.length + 1));
        }, typingSpeed);
      } else {
        return setTimeout(() => setIsDeleting(true), pauseDuration);
      }
    } else {
      if (displayText.length > 0) {
        return setTimeout(() => {
          setDisplayText(currentFullText.slice(0, displayText.length - 1));
        }, deletingSpeed);
      } else {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % texts.length);
        return null;
      }
    }
  }, [displayText, textIndex, isDeleting, texts, typingSpeed, deletingSpeed, pauseDuration]);

  useEffect(() => {
    const timeout = animate();
    return () => { if (timeout) clearTimeout(timeout); };
  }, [animate]);

  return displayText;
};

// --- Particle Background ---
const ParticleBackground = () => {
  const particles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 5,
    opacity: Math.random() * 0.5 + 0.1,
  }));

  const lines = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    x1: Math.random() * 100,
    y1: Math.random() * 100,
    x2: Math.random() * 100,
    y2: Math.random() * 100,
    duration: Math.random() * 15 + 10,
    delay: Math.random() * 3,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark-200 to-primary-900/30" />

      {/* Floating orbs */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-accent/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/[0.03] rounded-full blur-[100px]" />

      {/* SVG Particles */}
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        {/* Constellation lines */}
        {lines.map((line) => (
          <motion.line
            key={`line-${line.id}`}
            x1={`${line.x1}%`}
            y1={`${line.y1}%`}
            x2={`${line.x2}%`}
            y2={`${line.y2}%`}
            stroke="rgba(56, 189, 248, 0.06)"
            strokeWidth="1"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{
              pathLength: [0, 1, 1, 0],
              opacity: [0, 0.3, 0.3, 0],
            }}
            transition={{
              duration: line.duration,
              delay: line.delay,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}

        {/* Dots */}
        {particles.map((particle) => (
          <motion.circle
            key={`particle-${particle.id}`}
            cx={`${particle.x}%`}
            cy={`${particle.y}%`}
            r={particle.size}
            fill="rgba(56, 189, 248, 0.4)"
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, particle.opacity, 0],
              scale: [0, 1, 0],
              cx: [`${particle.x}%`, `${particle.x + (Math.random() - 0.5) * 10}%`],
              cy: [`${particle.y}%`, `${particle.y + (Math.random() - 0.5) * 10}%`],
            }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </svg>
    </div>
  );
};

// --- Hero Component ---
const Hero = () => {
  const typedText = useTypingAnimation([
    'CS & Engineering Student',
    'Full-Stack Web Developer',
    'Problem Solver',
    'MERN Stack Developer',
    'Tech Enthusiast',
  ]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <ParticleBackground />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mb-8"
        >
          {/* Profile Photo */}
          <div className="relative inline-block">
            <div className="w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden border-4 border-accent/30 shadow-2xl shadow-accent/10 mx-auto animate-glow">
              <img
                src={profileImg}
                alt="Zawad Bin Shoukat (Tasin)"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-green-500 rounded-full border-4 border-dark" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
            <span className="text-white">Zawad Bin Shoukat</span>
            <br />
            <span className="gradient-text">(Tasin)</span>
          </h1>
        </motion.div>

        {/* Typing Animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto h-8"
        >
          <span>{typedText}</span>
          <span className="inline-block w-0.5 h-6 bg-accent ml-1 animate-pulse align-middle" />
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex items-center justify-center gap-4 mb-12"
        >
          <a
            href="https://github.com/zawad-bin-shoukat"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl bg-dark-100/50 border border-white/5 text-gray-400 
                       hover:text-white hover:border-accent/30 hover:bg-dark-300/50 
                       transition-all duration-300 hover:-translate-y-1"
          >
            <FaGithub size={22} />
          </a>
          <a
            href="https://linkedin.com/in/zawad-bin-shoukat-tasin"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl bg-dark-100/50 border border-white/5 text-gray-400 
                       hover:text-white hover:border-accent/30 hover:bg-dark-300/50 
                       transition-all duration-300 hover:-translate-y-1"
          >
            <FaLinkedin size={22} />
          </a>
          <a
            href="mailto:zawad@iut-dhaka.edu"
            className="p-3 rounded-xl bg-dark-100/50 border border-white/5 text-gray-400 
                       hover:text-white hover:border-accent/30 hover:bg-dark-300/50 
                       transition-all duration-300 hover:-translate-y-1"
          >
            <FaEnvelope size={22} />
          </a>
          <a
            href="tel:+8801642281689"
            className="p-3 rounded-xl bg-dark-100/50 border border-white/5 text-gray-400 
                       hover:text-white hover:border-accent/30 hover:bg-dark-300/50 
                       transition-all duration-300 hover:-translate-y-1"
          >
            <FaPhone size={22} />
          </a>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <Link
            to="projects"
            spy={true}
            smooth={true}
            offset={-80}
            duration={600}
            className="btn-primary cursor-pointer"
          >
            View Projects
          </Link>
          <a
            href="/resume.pdf"
            download="Zawad_Bin_Shoukat_Resume.pdf"
            className="px-6 py-3 rounded-xl border border-accent/30 text-accent 
                       hover:bg-accent/10 hover:border-accent/50
                       transition-all duration-300 font-medium inline-flex items-center gap-2
                       hover:-translate-y-0.5"
          >
            <FaDownload size={14} />
            Download Resume
          </a>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-80}
            duration={600}
            className="px-6 py-3 rounded-xl border border-white/10 text-gray-300 
                       hover:border-accent/30 hover:text-white hover:bg-white/5
                       transition-all duration-300 cursor-pointer font-medium"
          >
            Get In Touch
          </Link>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-80}
            duration={600}
            className="cursor-pointer"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-gray-500 hover:text-accent transition-colors"
            >
              <FaChevronDown size={24} />
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
