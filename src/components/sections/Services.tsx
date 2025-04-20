'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const services = [
  {
    title: 'Personal Training',
    description: 'One-on-one sessions tailored to your specific needs and goals. Perfect for focused skill development.',
    icon: '⚽',
    features: ['Customized training plan', 'Individual attention', 'Progress tracking', 'Flexible scheduling']
  },
  {
    title: 'Group Sessions',
    description: 'Train with peers in a competitive yet supportive environment. Great for team building and motivation.',
    icon: '👥',
    features: ['Team dynamics', 'Competitive drills', 'Group exercises', 'Social interaction']
  },
  {
    title: 'Technical Development',
    description: 'Master the fundamentals and advanced techniques of the game. From basic skills to professional moves.',
    icon: '🎯',
    features: ['Ball control', 'Passing accuracy', 'Shooting technique', 'Dribbling skills']
  },
  {
    title: 'Fitness & Conditioning',
    description: 'Build strength, speed, and endurance specific to soccer. Improve your overall athletic performance.',
    icon: '💪',
    features: ['Strength training', 'Speed drills', 'Endurance building', 'Injury prevention']
  }
];

const ServiceCard = ({ service, index }: { service: typeof services[0], index: number }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
    >
      <div className="p-6">
        <div className="text-4xl mb-4">{service.icon}</div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
        <p className="text-gray-600 mb-4">{service.description}</p>
        <ul className="space-y-2">
          {service.features.map((feature, i) => (
            <li key={i} className="flex items-center text-gray-700">
              <svg className="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default function Services() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            Our Coaching Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Comprehensive training programs designed to elevate your game to the next level
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
} 