import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaBars, FaTimes, FaSun, FaMoon } from 'react-icons/fa';
import { Link } from 'react-scroll';
import { useTheme } from '../ThemeContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  const navItems = [
    { label: 'Home', to: 'hero' },
    { label: 'About', to: 'about' },
    { label: 'Skills', to: 'skills' },
    { label: 'Projects', to: 'projects' },
    { label: 'Services', to: 'services' },
    { label: 'Contact', to: 'contact' },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3 },
    },
    exit: { opacity: 0, x: 100, transition: { duration: 0.2 } },
  };

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 bg-dark-900 dark:bg-gray-50 bg-opacity-95 dark:bg-opacity-95 backdrop-blur-md border-b border-dark-700 dark:border-gray-200 z-50 transition-colors duration-300"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <motion.div 
          className="text-2xl font-bold gradient-text"
          whileHover={{ scale: 1.1 }}
        >
          Chinaka
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              spy
              smooth
              duration={500}
              className="text-dark-100 dark:text-dark-900 hover:text-primary-400 dark:hover:text-primary-600 transition-colors cursor-pointer"
              activeClass="text-primary-400"
            >
              <motion.span
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
              </motion.span>
            </Link>
          ))}
        </div>

        {/* Right side - Theme Toggle + CTA */}
        <div className="hidden md:flex items-center gap-4">
          <motion.button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-dark-800 dark:bg-gray-200 text-dark-100 dark:text-dark-900 hover:bg-primary-600 dark:hover:bg-primary-400 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            title="Toggle theme"
          >
            {isDark ? <FaSun size={20} /> : <FaMoon size={20} />}
          </motion.button>
          <motion.a
            href="#contact"
            className="btn-primary text-sm"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Hire Me
          </motion.a>
        </div>

        {/* Mobile Menu Button + Theme Toggle */}
        <div className="md:hidden flex items-center gap-3">
          <motion.button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-dark-800 dark:bg-gray-200 text-dark-100 dark:text-dark-900 hover:bg-primary-600 dark:hover:bg-primary-400 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {isDark ? <FaSun size={20} /> : <FaMoon size={20} />}
          </motion.button>
          <button
            className="md:hidden text-dark-100 dark:text-dark-900 text-xl"
            onClick={toggleMenu}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          className="md:hidden bg-dark-800 dark:bg-gray-100 border-t border-dark-700 dark:border-gray-200 p-6 transition-colors duration-300"
          variants={menuVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                spy
                smooth
                duration={500}
                className="text-dark-100 dark:text-dark-900 hover:text-primary-400 dark:hover:text-primary-600 transition-colors cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <a href="#contact" className="btn-primary text-center text-sm mt-4">
              Hire Me
            </a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
