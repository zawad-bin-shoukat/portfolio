import React, { useState, useRef } from 'react';
import SectionWrapper from './SectionWrapper';
import { FaPaperPlane, FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [sending, setSending] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setStatus({ type: '', message: '' });

    try {
      // Replace these with your actual EmailJS credentials
      // Sign up at https://www.emailjs.com/ to get your service ID, template ID, and public key
      await emailjs.sendForm(
        'YOUR_SERVICE_ID',    // Replace with your EmailJS Service ID
        'YOUR_TEMPLATE_ID',   // Replace with your EmailJS Template ID
        formRef.current,
        'YOUR_PUBLIC_KEY'     // Replace with your EmailJS Public Key
      );

      setStatus({
        type: 'success',
        message: 'Message sent successfully! I\'ll get back to you soon.',
      });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Oops! Something went wrong. Please try again or contact me directly via email.',
      });
    }
    setSending(false);
  };

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      label: 'Email',
      value: 'zawad@iut-dhaka.edu',
      href: 'mailto:zawad@iut-dhaka.edu',
    },
    {
      icon: <FaPhone />,
      label: 'Phone',
      value: '+880 1642 281689',
      href: 'tel:+8801642281689',
    },
    {
      icon: <FaMapMarkerAlt />,
      label: 'Location',
      value: 'Gazipur, Dhaka, Bangladesh',
      href: null,
    },
  ];

  return (
    <SectionWrapper id="contact" className="bg-dark-100/30">
      <div className="text-center mb-12">
        <h2 className="section-title">Get In Touch</h2>
        <p className="text-gray-500 mt-4">Have a question or want to work together?</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Contact Info */}
        <div className="space-y-6">
          <div className="glass-card p-8">
            <h3 className="text-xl font-semibold text-white mb-6">Contact Information</h3>
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href || '#'}
                  className="flex items-center gap-4 p-3 rounded-xl hover:bg-white/5 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent/20 transition-colors">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wider">{info.label}</p>
                    <p className="text-gray-300 font-medium">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="glass-card p-8">
            <h3 className="text-lg font-semibold text-white mb-4">Follow Me</h3>
            <div className="flex gap-3">
              <a
                href="https://github.com/zawad-bin-shoukat"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-dark-300/50 border border-white/5
                           text-gray-400 hover:text-white hover:border-accent/30 transition-all duration-300"
              >
                <FaGithub size={18} />
                <span className="text-sm font-medium">GitHub</span>
              </a>
              <a
                href="https://linkedin.com/in/zawad-bin-shoukat-tasin"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-dark-300/50 border border-white/5
                           text-gray-400 hover:text-white hover:border-accent/30 transition-all duration-300"
              >
                <FaLinkedin size={18} />
                <span className="text-sm font-medium">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="glass-card p-8">
          <h3 className="text-xl font-semibold text-white mb-6">Send a Message</h3>
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1.5">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl bg-dark-300/50 border border-white/10
                           text-white placeholder-gray-600 focus:outline-none focus:border-accent/50
                           focus:ring-1 focus:ring-accent/20 transition-all duration-300"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1.5">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl bg-dark-300/50 border border-white/10
                           text-white placeholder-gray-600 focus:outline-none focus:border-accent/50
                           focus:ring-1 focus:ring-accent/20 transition-all duration-300"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-1.5">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full px-4 py-3 rounded-xl bg-dark-300/50 border border-white/10
                           text-white placeholder-gray-600 focus:outline-none focus:border-accent/50
                           focus:ring-1 focus:ring-accent/20 transition-all duration-300 resize-none"
                placeholder="Your message here..."
              />
            </div>

            {status.message && (
              <div
                className={`p-3 rounded-xl text-sm ${
                  status.type === 'success'
                    ? 'bg-green-500/10 text-green-400 border border-green-500/20'
                    : 'bg-red-500/10 text-red-400 border border-red-500/20'
                }`}
              >
                {status.message}
              </div>
            )}

            <button
              type="submit"
              disabled={sending}
              className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {sending ? (
                <>
                  <div className="w-5 h-5 border-2 border-dark/30 border-t-dark rounded-full animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <FaPaperPlane />
                  Send Message
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Contact;
