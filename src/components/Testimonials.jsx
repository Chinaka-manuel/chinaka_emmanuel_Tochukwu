import { motion } from 'framer-motion';
import SectionTitle from './common/SectionTitle';
import GradientCard from './common/GradientCard';
import { testimonials } from '../data/portfolio.data';
import { FaQuoteLeft } from 'react-icons/fa';

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionTitle 
          subtitle="Client feedback"
          title="Testimonials"
        >
          <p className="text-dark-300 max-w-2xl mx-auto">
            What clients and colleagues have to say about working with me
          </p>
        </SectionTitle>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <GradientCard className="h-full flex flex-col">
                {/* Quote Icon */}
                <div className="mb-4">
                  <FaQuoteLeft className="text-3xl text-primary-500 opacity-50" />
                </div>

                {/* Testimonial Text */}
                <p className="text-dark-200 leading-relaxed mb-6 flex-1 italic">
                  "{testimonial.testimonial}"
                </p>

                {/* Divider */}
                <div className="w-12 h-1 bg-gradient-to-r from-primary-500 to-blue-500 rounded-full mb-6" />

                {/* Author Info */}
                <div className="flex items-center gap-4">
                  <motion.img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full"
                    whileHover={{ scale: 1.1 }}
                  />
                  <div>
                    <h4 className="text-white font-bold text-sm">
                      {testimonial.name}
                    </h4>
                    <p className="text-dark-400 text-xs">
                      {testimonial.position} at {testimonial.company}
                    </p>
                  </div>
                </div>
              </GradientCard>
            </motion.div>
          ))}
        </div>

        {/* Stats Banner */}
        <motion.div
          className="mt-16 grid grid-cols-3 gap-6 p-8 glass-effect rounded-xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
        >
          {[
            { label: 'Client Satisfaction', value: '98%' },
            { label: 'Project Success Rate', value: '100%' },
            { label: 'Average Rating', value: '4.9/5' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-3xl font-bold gradient-text mb-2">
                {stat.value}
              </div>
              <p className="text-dark-300 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
