'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Hero = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="relative h-screen">
      {/* Background Image */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("/images/hero-bg.jpg")',
          }}
        >
          <div className="absolute inset-0 bg-black opacity-50" />
        </div>
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center justify-center text-center px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Exceptional Catering Services for Your Special Events
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8">
            Creating unforgettable culinary experiences with passion and precision
          </p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
          >
            <a
              href="/contact"
              className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-indigo-700 transition-colors"
            >
              Book Now
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <div className="w-6 h-10 border-2 border-white rounded-full p-1">
          <div className="w-1.5 h-3 bg-white rounded-full mx-auto animate-bounce" />
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
