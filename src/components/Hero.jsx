import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaArrowDown } from 'react-icons/fa';
import AnimatedButton from './common/AnimatedButton';

const Hero = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const texts = [
    'Fullstack Developer',
    'MERN Stack Engineer',
    'Software Engineer',
    'React Developer',
    'Backend Developer',
  ];

  const textIndex = currentIndex % texts.length;
  const currentText = texts[textIndex];
  const isTextComplete = displayedText === currentText;

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isDeleting && displayedText !== currentText) {
        setDisplayedText(currentText.slice(0, displayedText.length + 1));
      } else if (isDeleting && displayedText !== '') {
        setDisplayedText(displayedText.slice(0, -1));
      } else if (isTextComplete && !isDeleting) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (displayedText === '' && isDeleting) {
        setIsDeleting(false);
        setCurrentIndex(currentIndex + 1);
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentText, isTextComplete, currentIndex]
)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  const socialLinks = [
    { icon: FaGithub, url: 'https://github.com', label: 'GitHub' },
    { icon: FaLinkedin, url: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: FaTwitter, url: 'https://twitter.com', label: 'Twitter' },
    { icon: FaEnvelope, url: 'mailto:chinaka@email.com', label: 'Email' },
  ];

  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center justify-center pt-20 px-6 relative overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-primary-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          animate={{
            y: [0, 100, 0],
            x: [0, 50, 0],
          }}
          transition={{ duration: 20, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          animate={{
            y: [0, -100, 0],
            x: [0, -50, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, delay: 2 }}
        />
      </div>

      <motion.div
        className="max-w-4xl mx-auto text-center z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Greeting */}
        <motion.p 
          className="text-primary-400 font-semibold text-lg mb-6"
          variants={itemVariants}
        >
          👋 Welcome to my portfolio
        </motion.p>

        {/* Name */}
        <motion.h1 
          className="text-5xl md:text-7xl font-bold mb-6 gradient-text"
          variants={itemVariants}
        >
          Chinaka Emmanuel
        </motion.h1>

        {/* Typing Effect */}
        <motion.div 
          className="text-2xl md:text-4xl font-semibold mb-6 h-16 flex items-center justify-center"
          variants={itemVariants}
        >
          <span className="gradient-text">
            {displayedText}
            <span className="animate-pulse">|</span>
          </span>
        </motion.div>

        {/* Bio */}
        <motion.p 
          className="text-lg text-dark-300 dark:text-dark-300 max-w-2xl mx-auto mb-8 leading-relaxed"
          variants={itemVariants}
        >
          I craft elegant digital solutions with modern technologies. Specialized in building
          scalable fullstack applications, creating beautiful user interfaces, and architecting
          robust backend systems. Let's build something amazing together.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          variants={itemVariants}
        >
          <AnimatedButton 
            variant="primary"
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
          >
            Hire Me
          </AnimatedButton>
          <AnimatedButton variant="secondary">
            <a href="/resume.pdf" download>Download Resume</a>
          </AnimatedButton>
          <AnimatedButton 
            variant="secondary"
            onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
          >
            View Projects
          </AnimatedButton>
        </motion.div>

        {/* Social Links */}
        <motion.div 
          className="flex justify-center gap-4 mb-12"
          variants={itemVariants}
        >
          {socialLinks.map((link, index) => {
            const Icon = link.icon;
            return (
              <motion.a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-icon text-xl"
                whileHover={{ scale: 1.2, boxShadow: '0 0 20px rgba(14, 165, 233, 0.5)' }}
                whileTap={{ scale: 0.9 }}
                title={link.label}
              >
                <Icon />
              </motion.a>
            );
          })}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="mt-8"
        >
          <FaArrowDown className="mx-auto text-primary-400 text-2xl" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
