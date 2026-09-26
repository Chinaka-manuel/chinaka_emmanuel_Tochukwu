import { motion } from 'framer-motion';
import {
  FaCode,
  FaServer,
  FaPalette,
  FaDatabase,
  FaRocket,
  FaTools,
  FaSearch,
  FaBrain,
} from 'react-icons/fa';
import SectionTitle from './common/SectionTitle';
import GradientCard from './common/GradientCard';
import { services } from '../data/portfolio.data';

const iconMap = {
  FaCode: FaCode,
  FaServer: FaServer,
  FaPalette: FaPalette,
  FaDatabase: FaDatabase,
  FaRocket: FaRocket,
  FaTools: FaTools,
  FaSearch: FaSearch,
  FaBrain: FaBrain,
};

const ServiceCard = ({ service, index }) => {
  const Icon = iconMap[service.icon];

  return (
    <GradientCard delay={index * 0.1}>
      <motion.div
        className="text-center"
        whileHover={{ y: -5 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className="text-5xl mb-4 text-primary-400 mx-auto w-20 h-20 flex items-center justify-center rounded-full bg-primary-500 bg-opacity-10"
          whileHover={{ rotate: 360, scale: 1.1 }}
          transition={{ duration: 0.6 }}
        >
          {Icon && <Icon />}
        </motion.div>

        <h3 className="text-xl font-bold text-white mb-3">
          {service.title}
        </h3>

        <p className="text-dark-300 leading-relaxed">
          {service.description}
        </p>
      </motion.div>
    </GradientCard>
  );
};

const Services = () => {
  return (
    <section id="services" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionTitle 
          subtitle="What I offer"
          title="Services"
        >
          <p className="text-dark-300 max-w-2xl mx-auto">
            Web, search, and AI data services tailored to your business needs
          </p>
        </SectionTitle>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          className="mt-16 pt-12 border-t border-dark-700 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-bold mb-4 gradient-text">
            Ready to work together?
          </h3>
          <p className="text-dark-300 mb-6 max-w-2xl mx-auto">
            I'm always excited about new projects and opportunities. Whether you need a complete website,
            API development, or consultation on your tech stack, let's discuss how I can help bring your
            vision to life.
          </p>
          <a 
            href="#contact"
            className="btn-primary inline-block"
          >
            Start a Project
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
