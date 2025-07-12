'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const WhyChooseUs = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    {
      title: 'Expert Chefs',
      description: 'Our team of experienced chefs creates exceptional culinary experiences.',
    },
    {
      title: 'Quality Ingredients',
      description: 'We use only the finest, freshest ingredients in all our dishes.',
    },
    {
      title: 'Custom Menus',
      description: 'Personalized menu planning to match your preferences and dietary needs.',
    },
    {
      title: 'Professional Service',
      description: 'Dedicated staff ensuring smooth execution of your event.',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-indigo-600 to-purple-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose Us
          </h2>
          <p className="text-xl text-gray-100 max-w-3xl mx-auto">
            Experience the difference with our premium catering services
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="text-center"
            >
              <div className="bg-white/10 rounded-lg p-6 backdrop-blur-lg">
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-200">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <a
            href="/contact"
            className="inline-block bg-white text-indigo-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Get Started
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
