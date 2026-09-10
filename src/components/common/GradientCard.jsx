import { motion } from 'framer-motion';

const GradientCard = ({ 
  children, 
  className = '',
  delay = 0,
  hoverScale = 1.05,
  ...props 
}) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
        delay,
      },
    },
  };

  return (
    <motion.div
      className={`glass-effect rounded-xl p-6 transition-all duration-300 ${className}`}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      whileHover={{ 
        scale: hoverScale,
        boxShadow: '0 0 30px rgba(14, 165, 233, 0.3)',
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default GradientCard;
