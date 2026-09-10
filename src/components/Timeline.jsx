import { motion } from 'framer-motion';
import SectionTitle from './common/SectionTitle';
import { experience } from '../data/portfolio.data';

const Timeline = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="experience" className="py-20 px-6 bg-gradient-to-b from-dark-900 via-dark-800 to-dark-900">
      <div className="max-w-4xl mx-auto">
        <SectionTitle 
          subtitle="My journey"
          title="Experience & Career"
        >
          <p className="text-dark-300 max-w-2xl mx-auto">
            A timeline of my professional growth and key milestones in my career
          </p>
        </SectionTitle>

        <motion.div
          className="mt-12 space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {experience.map((item, index) => (
            <motion.div
              key={index}
              className="relative"
              variants={itemVariants}
            >
              {/* Timeline Line */}
              {index !== experience.length - 1 && (
                <div className="absolute left-0 top-20 w-1 h-24 bg-gradient-to-b from-primary-500 to-transparent" />
              )}

              <div className="flex gap-8">
                {/* Timeline Dot */}
                <motion.div
                  className="relative flex-shrink-0"
                  whileHover={{ scale: 1.2 }}
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary-500 to-blue-500 shadow-glow flex items-center justify-center">
                    <div className="w-4 h-4 rounded-full bg-dark-900" />
                  </div>
                </motion.div>

                {/* Content */}
                <motion.div
                  className="glass-effect rounded-lg p-6 flex-1"
                  whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(14, 165, 233, 0.3)' }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-white">
                        {item.title}
                      </h3>
                      <p className="text-primary-400 font-semibold">
                        {item.company}
                      </p>
                    </div>
                    <span className="text-dark-400 text-sm font-semibold whitespace-nowrap">
                      {item.year}
                    </span>
                  </div>
                  
                  <p className="text-dark-300 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Achievements - Optional */}
                  <div className="mt-3 pt-3 border-t border-dark-700">
                    <ul className="space-y-2">
                      <li className="text-dark-300 text-sm flex items-start gap-2">
                        <span className="text-primary-400 mt-1">▹</span>
                        Led development of key features
                      </li>
                      <li className="text-dark-300 text-sm flex items-start gap-2">
                        <span className="text-primary-400 mt-1">▹</span>
                        Improved system performance by 40%
                      </li>
                      <li className="text-dark-300 text-sm flex items-start gap-2">
                        <span className="text-primary-400 mt-1">▹</span>
                        Collaborated with cross-functional teams
                      </li>
                    </ul>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Education Section */}
        <motion.div
          className="mt-16 pt-12 border-t border-dark-700"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-bold gradient-text mb-8">Education & Certifications</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* Education */}
            <motion.div
              className="glass-effect rounded-lg p-6"
              whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(14, 165, 233, 0.2)' }}
            >
              <h4 className="text-lg font-bold text-white mb-2">
                Bachelor of Science in Computer Science
              </h4>
              <p className="text-primary-400 font-semibold mb-2">
                University Name
              </p>
              <p className="text-dark-300 text-sm mb-3">
                Graduated: 2021
              </p>
              <p className="text-dark-300">
                Strong foundation in data structures, algorithms, and software engineering principles.
              </p>
            </motion.div>

            {/* Certifications */}
            <motion.div
              className="glass-effect rounded-lg p-6"
              whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(14, 165, 233, 0.2)' }}
            >
              <h4 className="text-lg font-bold text-white mb-4">
                Professional Certifications
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-primary-400">✓</span>
                  <div>
                    <p className="text-white font-semibold text-sm">Full Stack Web Development</p>
                    <p className="text-dark-400 text-xs">Udemy | 2022</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-400">✓</span>
                  <div>
                    <p className="text-white font-semibold text-sm">The Complete JavaScript Course</p>
                    <p className="text-dark-400 text-xs">Udemy | 2021</p>
                  </div>
                </li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Timeline;
