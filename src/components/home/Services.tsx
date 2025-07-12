'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaUtensils, FaBirthdayCake, FaGlassCheers, FaHandshake } from 'react-icons/fa';

const services = [
  {
    icon: <FaUtensils className="w-12 h-12" />,
    title: 'Corporate Events',
    description: 'Professional catering solutions for business meetings, conferences, and corporate gatherings.',
  },
  {
    icon: <FaBirthdayCake className="w-12 h-12" />,
    title: 'Private Parties',
    description: 'Custom menus and service for birthdays, anniversaries, and special celebrations.',
  },
  {
    icon: <FaGlassCheers className="w-12 h-12" />,
    title: 'Weddings',
    description: 'Elegant catering services to make your wedding day truly memorable.',
  },
  {
    icon: <FaHandshake className="w-12 h-12" />,
    title: 'Social Events',
    description: 'Versatile catering options for any social gathering or community event.',
  },
];

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer comprehensive catering services tailored to your specific needs and preferences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-indigo-600 mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
