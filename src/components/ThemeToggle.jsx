import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from './ThemeContext';
import { FaSun, FaMoon } from 'react-icons/fa';

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative w-14 h-7 rounded-full p-1 transition-colors duration-300 focus:outline-none
                 border border-white/10 hover:border-accent/30"
      style={{
        background: isDark 
          ? 'linear-gradient(135deg, #1e293b, #334155)' 
          : 'linear-gradient(135deg, #93c5fd, #60a5fa)',
      }}
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle dark/light mode"
    >
      <motion.div
        className="w-5 h-5 rounded-full flex items-center justify-center shadow-md"
        style={{
          background: isDark ? '#0f172a' : '#fef3c7',
        }}
        animate={{ x: isDark ? 0 : 26 }}
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
      >
        {isDark ? (
          <FaMoon className="text-accent text-[10px]" />
        ) : (
          <FaSun className="text-amber-500 text-[10px]" />
        )}
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle;
