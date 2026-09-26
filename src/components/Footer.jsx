import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaArrowUp } from 'react-icons/fa';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: FaGithub, url: 'https://github.com', label: 'GitHub' },
    { icon: FaLinkedin, url: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: FaTwitter, url: 'https://twitter.com', label: 'Twitter' },
    { icon: FaEnvelope, url: 'mailto:chinaka@email.com', label: 'Email' },
  ];

  const footerLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 },
    },
  };

  return (
    <footer className="bg-dark-900 dark:bg-gray-50 border-t border-dark-700 dark:border-gray-200 py-12 px-6 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="grid md:grid-cols-4 gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {/* Brand */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold gradient-text mb-4">CE</h3>
            <p className="text-dark-300 dark:text-dark-600 text-sm">
              Fullstack developer crafting beautiful, scalable web experiences.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-white dark:text-dark-900 font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              {footerLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-dark-300 dark:text-dark-600 hover:text-primary-400 dark:hover:text-primary-600 transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants}>
            <h4 className="text-white dark:text-dark-900 font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-dark-300 dark:text-dark-600 hover:text-primary-400 dark:hover:text-primary-600 transition-colors text-sm">
                  Web Development
                </a>
              </li>
              <li>
                <a href="#services" className="text-dark-300 dark:text-dark-600 hover:text-primary-400 dark:hover:text-primary-600 transition-colors text-sm">
                  API Design
                </a>
              </li>
              <li>
                <a href="#services" className="text-dark-300 dark:text-dark-600 hover:text-primary-400 dark:hover:text-primary-600 transition-colors text-sm">
                  UI/UX Design
                </a>
              </li>
              <li>
                <a href="#services" className="text-dark-300 dark:text-dark-600 hover:text-primary-400 dark:hover:text-primary-600 transition-colors text-sm">
                  Optimization
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-white dark:text-dark-900 font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              {socialLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <motion.a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-dark-800 dark:bg-gray-200 border border-dark-700 dark:border-gray-300 flex items-center justify-center text-dark-100 dark:text-dark-900 hover:bg-primary-600 dark:hover:bg-primary-400 hover:border-primary-500 dark:hover:border-primary-500 transition-all"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    title={link.label}
                  >
                    <Icon />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <div className="border-t border-dark-700 dark:border-gray-200 my-8" />

        {/* Bottom Section */}
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
        >
          {/* Copyright */}
          <div className="text-dark-400 dark:text-dark-600 text-sm mb-6 md:mb-0">
            <p>
              © {new Date().getFullYear()} Chinaka Emmanuel Tochukwu. All rights reserved.
            </p>
            <p className="mt-2">
              {' '}
              <span className="text-primary-400 dark:text-primary-600"></span> 
            </p>
          </div>

          {/* Scroll to Top Button */}
          <motion.button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-6 py-3 rounded-lg bg-primary-600 dark:bg-primary-500 text-white dark:text-white font-semibold hover:bg-primary-500 dark:hover:bg-primary-400 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Back to top</span>
            <FaArrowUp />
          </motion.button>
        </motion.div>

        {/* Footer Note */}
        <motion.div
          className="mt-8 text-center text-dark-400 dark:text-dark-600 text-xs"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p>
            I created this portfolio site using reactjs, tailwindcss, framer motion, using all industrial standards
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
