import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import SectionTitle from './common/SectionTitle';
import GradientCard from './common/GradientCard';
import { projects } from '../data/portfolio.data';
import AnimatedButton from './common/AnimatedButton';

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="group relative overflow-hidden rounded-xl bg-dark-800 dark:bg-gray-50 border border-dark-700 dark:border-gray-200 hover:border-primary-500 dark:hover:border-primary-500 transition-all duration-300">
        {/* Image Container */}
        <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary-600 to-blue-600">
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover opacity-80"
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.3 }}
          />
          <div className="absolute inset-0 bg-black bg-opacity-60 group-hover:bg-opacity-40 transition-all duration-300" />
        </div>

        {/* Content */}
        <div className="p-5">
          <h3 className="text-xl md:text-2xl font-bold text-white dark:text-dark-900 mb-2 group-hover:text-primary-400 transition-colors">
            {project.title}
          </h3>
          
          <p className="text-dark-300 dark:text-dark-600 text-sm mb-4 line-clamp-2">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech, idx) => (
              <span 
                key={idx}
                className="text-xs px-3 py-1 rounded-full bg-primary-500 bg-opacity-20 dark:bg-opacity-30 text-primary-300 dark:text-primary-700"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Features */}
          <div className="mb-6">
            <p className="text-dark-400 dark:text-dark-700 text-xs font-semibold mb-2">Key Features:</p>
            <ul className="space-y-1">
              {project.features.map((feature, idx) => (
                <li key={idx} className="text-dark-300 dark:text-dark-600 text-xs flex items-center gap-2">
                  <span className="w-1 h-1 bg-primary-400 rounded-full" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Buttons */}
          <div className="flex gap-3">
            <AnimatedButton
              variant="secondary"
              className="flex-1 text-xs justify-center"
              as="a"
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="mr-2" /> Code
            </AnimatedButton>
            <AnimatedButton
              variant="primary"
              className="flex-1 text-xs justify-center"
              as="a"
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaExternalLinkAlt className="mr-2" /> Live Demo
            </AnimatedButton>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 bg-gradient-to-b from-dark-900 dark:from-white via-dark-800 dark:via-gray-50 to-dark-900 dark:to-white transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <SectionTitle 
          subtitle="My portfolio"
          title="Featured Projects"
        >
          <p className="text-dark-300 max-w-2xl mx-auto">
            A showcase of my recent work demonstrating expertise in fullstack development, UI/UX design, and system architecture
          </p>
        </SectionTitle>

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* View More CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-dark-300 mb-6">Interested in seeing more of my work?</p>
          <AnimatedButton
            variant="secondary"
            as="a"
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            View My GitHub
          </AnimatedButton>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
