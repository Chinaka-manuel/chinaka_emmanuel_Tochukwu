import { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import SectionTitle from './common/SectionTitle';
import GradientCard from './common/GradientCard';
import AnimatedButton from './common/AnimatedButton';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setSubmitMessage('Email service is not configured. Please try again later.');
      return;
    }

    setIsSubmitting(true);

    try {
      await emailjs.send(serviceId, templateId, {
        from_name: formData.name,
        from_email: formData.email,
        reply_to: formData.email,
        subject: formData.subject,
        message: formData.message,
      }, publicKey);

      setSubmitMessage('Message sent successfully! I\'ll get back to you soon.');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setSubmitMessage('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: FaEnvelope,
      label: 'Email',
      value: 'chinakamanuel@gmail.com',
      link: 'mailto:chinakamanuel@gmail.com',
    },
    {
      icon: FaPhone,
      label: 'Phone',
      value: '+2349035570702',
      link: 'tel:+2349035570702',
    },
    {
      icon: FaMapMarkerAlt,
      label: 'Location',
      value: 'Port Harcourt, Nigeria',
      link: '#',
    },
  ];

  const socialLinks = [
    { icon: FaGithub, url: 'https://github.com', label: 'GitHub' },
    { icon: FaLinkedin, url: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: FaTwitter, url: 'https://twitter.com', label: 'Twitter' },
    { icon: FaEnvelope, url: 'mailto:chinaka@email.com', label: 'Email' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  return (
    <section id="contact" className="py-20 px-6 bg-gradient-to-b from-dark-900 dark:from-white via-dark-800 dark:via-gray-50 to-dark-900 dark:to-white transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <SectionTitle 
          subtitle="Get in touch"
          title="Contact Me"
        >
          <p className="text-dark-300 dark:text-dark-600 max-w-2xl mx-auto">
            Have a project in mind or want to discuss opportunities? Let's connect and create something amazing together.
          </p>
        </SectionTitle>

        <div className="grid md:grid-cols-2 gap-12 mt-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
          >
            <GradientCard>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                >
                  <label className="block text-dark-200 dark:text-dark-700 font-semibold mb-2">
                    Your Name
                  </label>
                  <motion.input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Chinaka Emmanuel"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-dark-800 dark:bg-white border border-dark-700 dark:border-gray-300 text-dark-100 dark:text-dark-900 placeholder-dark-500 dark:placeholder-dark-400 focus-ring transition-all"
                    whileFocus={{ borderColor: '#0ea5e9' }}
                  />
                </motion.div>

                {/* Email Field */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.3, delay: 0.15 }}
                >
                  <label className="block text-dark-200 dark:text-dark-700 font-semibold mb-2">
                    Your Email
                  </label>
                  <motion.input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="chinakamanuel@gmail.com"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-dark-800 dark:bg-white border border-dark-700 dark:border-gray-300 text-dark-100 dark:text-dark-900 placeholder-dark-500 dark:placeholder-dark-400 focus-ring transition-all"
                    whileFocus={{ borderColor: '#0ea5e9' }}
                  />
                </motion.div>

                {/* Subject Field */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                >
                  <label className="block text-dark-200 dark:text-dark-700 font-semibold mb-2">
                    Subject
                  </label>
                  <motion.input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Inquiry"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-dark-800 dark:bg-white border border-dark-700 dark:border-gray-300 text-dark-100 dark:text-dark-900 placeholder-dark-500 dark:placeholder-dark-400 focus-ring transition-all"
                    whileFocus={{ borderColor: '#0ea5e9' }}
                  />
                </motion.div>

                {/* Message Field */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.3, delay: 0.25 }}
                >
                  <label className="block text-dark-200 dark:text-dark-700 font-semibold mb-2">
                    Message
                  </label>
                  <motion.textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    rows="5"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-dark-800 dark:bg-white border border-dark-700 dark:border-gray-300 text-dark-100 dark:text-dark-900 placeholder-dark-500 dark:placeholder-dark-400 focus-ring transition-all resize-none"
                    whileFocus={{ borderColor: '#0ea5e9' }}
                  />
                </motion.div>

                {/* Submit Message */}
                {submitMessage && (
                  <motion.div
                    aria-live="polite"
                    className={`p-4 rounded-lg text-sm font-semibold text-center ${
                      submitMessage.includes('success')
                        ? 'bg-green-500 bg-opacity-20 text-green-400'
                        : 'bg-red-500 bg-opacity-20 text-red-400'
                    }`}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    {submitMessage}
                  </motion.div>
                )}

                {/* Submit Button */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.3, delay: 0.3 }}
                >
                  <AnimatedButton
                    variant="primary"
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </AnimatedButton>
                </motion.div>
              </form>
            </GradientCard>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            {/* Contact Info Cards */}
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <motion.a
                  key={index}
                  href={info.link}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <GradientCard>
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-full bg-primary-500 bg-opacity-20 flex items-center justify-center flex-shrink-0">
                        <Icon className="text-2xl text-primary-400" />
                      </div>
                      <div>
                        <h3 className="text-dark-100 font-semibold">{info.label}</h3>
                        <p className="text-dark-300">{info.value}</p>
                      </div>
                    </div>
                  </GradientCard>
                </motion.a>
              );
            })}

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="text-white font-bold mb-4">Connect with me</h3>
              <div className="flex gap-4">
                {socialLinks.map((link, index) => {
                  const Icon = link.icon;
                  return (
                    <motion.a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-dark-800 border border-dark-700 flex items-center justify-center text-dark-100 hover:bg-primary-600 hover:border-primary-500 transition-all"
                      whileHover={{ scale: 1.1, boxShadow: '0 0 20px rgba(14, 165, 233, 0.5)' }}
                      whileTap={{ scale: 0.9 }}
                      title={link.label}
                    >
                      <Icon className="text-lg" />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>

            {/* Availability */}
            <motion.div
              className="glass-effect rounded-lg p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h3 className="text-white font-bold mb-2">Availability</h3>
              <p className="text-dark-300 mb-3">
                I'm currently available for freelance projects and full-time opportunities.
              </p>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-green-400 text-sm font-semibold">Open for work</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
