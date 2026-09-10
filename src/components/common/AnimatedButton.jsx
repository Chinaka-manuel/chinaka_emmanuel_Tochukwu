import { motion } from 'framer-motion';

const AnimatedButton = ({ 
  variant = 'primary', 
  children, 
  onClick, 
  className = '',
  ...props 
}) => {
  const baseClasses = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    icon: 'btn-icon',
  };

  return (
    <motion.button
      className={`${baseClasses[variant]} ${className}`}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 400, damping: 10 }}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default AnimatedButton;
