import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaArrowDown } from 'react-icons/fa';
import AnimatedButton from './common/AnimatedButton';

const Hero = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const texts = [
    "Python Programmer",
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
        className="relative z-10 mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 py-16 md:grid-cols-2 md:gap-8 lg:gap-16"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="text-left" variants={containerVariants}>
          <motion.p
            className="mb-5 text-lg font-semibold text-primary-400"
            variants={itemVariants}
          >
            Welcome to my portfolio
          </motion.p>

          <motion.h1
            className="mb-5 text-3xl font-bold leading-tight gradient-text sm:text-5xl xl:text-6xl"
            variants={itemVariants}
          >
            Chinaka T. Emmanuel
          </motion.h1>

          <motion.div
            className="mb-5 flex min-h-12 items-center text-2xl font-semibold sm:text-3xl"
            variants={itemVariants}
          >
            <span className="gradient-text">
              {displayedText}
              <span className="animate-pulse">|</span>
            </span>
          </motion.div>

          <motion.p
            className="mb-8 max-w-xl text-lg leading-relaxed text-dark-300 dark:text-dark-300"
            variants={itemVariants}
          >
            I craft elegant digital solutions with modern technologies. Specialized in building
            scalable fullstack applications, creating beautiful user interfaces, and architecting
            robust backend systems. Let's build something amazing together.
          </motion.p>

          <motion.div
            className="mb-10 flex flex-wrap justify-start gap-4"
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

          <motion.div className="flex justify-start gap-4" variants={itemVariants}>
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
        </motion.div>

        <motion.div
          className="flex justify-center md:justify-end"
          variants={itemVariants}
        >
          <img
            src="https://res.cloudinary.com/dybaoehch/image/upload/v1788102958/mypx2_bz0wip.png"
            alt="Chinaka Emmanuel"
            className="h-auto max-h-[100vh] w-full max-w-md object-contain lg:max-w-lg"
          />
        </motion.div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2"
      >
        <FaArrowDown className="text-2xl text-primary-400" />
      </motion.div>
    </section>
  );
};

export default Hero;
