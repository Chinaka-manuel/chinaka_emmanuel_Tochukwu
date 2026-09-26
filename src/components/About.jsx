import { motion } from 'framer-motion';
import SectionTitle from './common/SectionTitle';
import GradientCard from './common/GradientCard';
import { stats } from '../data/portfolio.data';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  return (
    <section id="about" className="py-20 px-6 bg-gradient-to-b from-dark-900 dark:from-white via-dark-800 dark:via-gray-50 to-dark-900 dark:to-white transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <SectionTitle 
          subtitle="Get to know me"
          title="About Me"
        >
          <p className="text-dark-300 dark:text-dark-600 max-w-2xl mx-auto">
            Passionate software engineer with a proven track record of delivering high-quality, scalable web applications
          </p>
        </SectionTitle>

        <div className="grid md:grid-cols-2 gap-12 items-center mt-12">
          {/* Image/Illustration */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative w-64 h-64">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-blue-600 rounded-2xl opacity-20 blur-2xl" />
              <motion.div
                className="relative h-full w-full overflow-hidden rounded-2xl shadow-2xl"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src="https://res.cloudinary.com/dybaoehch/image/upload/v1787136568/webcapzport/1787136562531_file_0000000049a872439f68a1b64574bed6%20%281%29.png.png"
                  alt="About me"
                  className="h-full w-full object-cover"
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            <motion.p 
              className="text-dark-200 dark:text-dark-700 leading-relaxed text-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5 }}
            >
              I'm a fullstack developer with over 3 years of professional experience building web applications. 
              My passion lies in creating elegant, efficient solutions to complex problems using modern web technologies.
            </motion.p>

            <motion.p 
              className="text-dark-200 dark:text-dark-700 leading-relaxed text-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              I specialize in building scalable MERN stack applications with a focus on clean code, 
              performance optimization, and user experience. When I'm not coding, you'll find me exploring 
              new technologies, contributing to open source, or writing technical blog posts.
            </motion.p>

            <motion.div
              className="space-y-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <p className="text-dark-200 dark:text-dark-700">
                <span className="text-primary-400 dark:text-primary-600 font-semibold">Key Focus Areas:</span>
              </p>
              <ul className="space-y-2 text-dark-300 dark:text-dark-600">
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-primary-400 dark:bg-primary-600 rounded-full" />
                  Building responsive, performant user interfaces
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-primary-400 dark:bg-primary-600 rounded-full" />
                  Designing scalable backend architectures
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-primary-400 dark:bg-primary-600 rounded-full" />
                  Optimizing performance and security
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {stats.map((stat, index) => (
            <GradientCard key={index} delay={index * 0.1}>
              <motion.div
                className="text-center"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                  {stat.value}
                </div>
                <p className="text-dark-300 dark:text-dark-600 text-sm">{stat.label}</p>
              </motion.div>
            </GradientCard>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
