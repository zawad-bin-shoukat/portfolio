import React from 'react';
import { Link } from 'react-scroll';
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp, FaHeart } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="relative bg-dark-100/50 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo & Name */}
          <div>
            <h3 className="text-xl font-bold">
              <span className="gradient-text">Zawad</span>
              <span className="text-gray-400 font-light"> Tasin</span>
            </h3>
            <p className="text-gray-500 text-sm mt-2">
              CS & Engineering Student at IUT
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            {['about', 'skills', 'projects', 'contact'].map((link) => (
              <Link
                key={link}
                to={link}
                spy={true}
                smooth={true}
                offset={-80}
                duration={600}
                className="text-sm text-gray-500 hover:text-accent transition-colors cursor-pointer capitalize"
              >
                {link}
              </Link>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-end gap-3">
            <a
              href="https://github.com/zawad-bin-shoukat"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-dark-300/50 text-gray-500 hover:text-white 
                         hover:bg-dark-300 transition-all duration-300"
            >
              <FaGithub size={16} />
            </a>
            <a
              href="https://linkedin.com/in/zawad-bin-shoukat-tasin"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-dark-300/50 text-gray-500 hover:text-white 
                         hover:bg-dark-300 transition-all duration-300"
            >
              <FaLinkedin size={16} />
            </a>
            <a
              href="mailto:zawad@iut-dhaka.edu"
              className="p-2.5 rounded-lg bg-dark-300/50 text-gray-500 hover:text-white 
                         hover:bg-dark-300 transition-all duration-300"
            >
              <FaEnvelope size={16} />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-8 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-sm flex items-center gap-1">
            © {new Date().getFullYear()} Zawad Bin Shoukat. Made with{' '}
            <FaHeart className="text-red-500 text-xs" /> in Bangladesh
          </p>

          {/* Back to top */}
          <Link
            to="hero"
            spy={true}
            smooth={true}
            duration={800}
            className="flex items-center gap-2 text-sm text-gray-500 hover:text-accent 
                       transition-colors cursor-pointer group"
          >
            Back to top
            <FaArrowUp className="group-hover:-translate-y-1 transition-transform" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
