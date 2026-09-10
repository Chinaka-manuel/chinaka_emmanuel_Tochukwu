import { motion } from 'framer-motion';

const SectionTitle = ({ 
  title, 
  subtitle, 
  className = '',
  children 
}) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
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

  return (
    <motion.div
      className={`text-center mb-12 ${className}`}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
    >
      {subtitle && (
        <motion.p 
          className="text-primary-400 font-semibold text-sm tracking-widest uppercase mb-4"
          variants={itemVariants}
        >
          {subtitle}
        </motion.p>
      )}
      <motion.h2 
        className="section-title mb-4"
        variants={itemVariants}
      >
        {title}
      </motion.h2>
      {children && (
        <motion.div variants={itemVariants}>
          {children}
        </motion.div>
      )}
    </motion.div>
  );
};

export default SectionTitle;
