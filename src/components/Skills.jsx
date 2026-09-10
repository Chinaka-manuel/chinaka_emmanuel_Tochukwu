import { motion } from 'framer-motion';
import SectionTitle from './common/SectionTitle';
import GradientCard from './common/GradientCard';
import { skills } from '../data/portfolio.data';

const SkillBar = ({ name, level, delay }) => {
  return (
    <motion.div
      className="space-y-2"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay }}
    >
      <div className="flex justify-between items-center">
        <span className="text-dark-200 font-medium">{name}</span>
        <span className="text-primary-400 font-semibold">{level}%</span>
      </div>
      <div className="w-full bg-dark-700 rounded-full h-3 overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-primary-500 to-blue-500 rounded-full"
          initial={{ width: '0%' }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 1.2, delay: delay + 0.3, ease: 'easeOut' }}
        />
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 },
    },
  };

  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionTitle 
          subtitle="My expertise"
          title="Skills & Technologies"
        >
          <p className="text-dark-300 max-w-2xl mx-auto">
            Proficient in modern web technologies with a strong foundation in fullstack development
          </p>
        </SectionTitle>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {/* Frontend Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0 }}
          >
            <GradientCard className="h-full">
              <h3 className="text-2xl font-bold text-primary-400 mb-6 flex items-center gap-2">
                <span className="text-2xl">🎨</span> Frontend
              </h3>
              <motion.div
                className="space-y-6"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-100px' }}
              >
                {skills.frontend.map((skill, index) => (
                  <SkillBar 
                    key={index} 
                    name={skill.name} 
                    level={skill.level}
                    delay={index * 0.05}
                  />
                ))}
              </motion.div>
            </GradientCard>
          </motion.div>

          {/* Backend Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <GradientCard className="h-full">
              <h3 className="text-2xl font-bold text-primary-400 mb-6 flex items-center gap-2">
                <span className="text-2xl">⚙️</span> Backend
              </h3>
              <motion.div
                className="space-y-6"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-100px' }}
              >
                {skills.backend.map((skill, index) => (
                  <SkillBar 
                    key={index} 
                    name={skill.name} 
                    level={skill.level}
                    delay={index * 0.05}
                  />
                ))}
              </motion.div>
            </GradientCard>
          </motion.div>

          {/* Tools & Others */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <GradientCard className="h-full">
              <h3 className="text-2xl font-bold text-primary-400 mb-6 flex items-center gap-2">
                <span className="text-2xl">🛠️</span> Tools & CLI
              </h3>
              <motion.div
                className="space-y-6"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-100px' }}
              >
                {skills.tools.map((skill, index) => (
                  <SkillBar 
                    key={index} 
                    name={skill.name} 
                    level={skill.level}
                    delay={index * 0.05}
                  />
                ))}
              </motion.div>
            </GradientCard>
          </motion.div>
        </div>

        {/* Tech Stack Pills */}
        <motion.div
          className="mt-16 pt-12 border-t border-dark-700"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-center text-dark-200 font-semibold mb-6">Tech Stack & Ecosystems</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {['React', 'Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'Tailwind CSS', 'Framer Motion', 'TypeScript', 'REST APIs', 'Git'].map((tech, index) => (
              <motion.div
                key={index}
                className="px-4 py-2 rounded-full bg-dark-800 border border-primary-500 border-opacity-30 text-dark-200 text-sm"
                whileHover={{ 
                  scale: 1.1, 
                  borderColor: '#0ea5e9',
                  backgroundColor: 'rgba(14, 165, 233, 0.1)'
                }}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.3, delay: index * 0.02 }}
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
