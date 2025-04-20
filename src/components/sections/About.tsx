'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

const qualifications = [
  {
    title: 'Professional Experience',
    items: [
      'Former professional player with 10+ years of experience',
      'Coached at youth and professional levels',
      'Specialized in technical development',
      'International coaching experience'
    ]
  },
  {
    title: 'Certifications',
    items: [
      'UEFA Pro License',
      'FIFA Technical Director',
      'Sports Science Degree',
      'First Aid & CPR Certified'
    ]
  },
  {
    title: 'Achievements',
    items: [
      'Developed 50+ professional players',
      'Multiple championship titles',
      'Recognized by national federation',
      'Published training methodology'
    ]
  }
];

const QualificationCard = ({ qualification, index }: { qualification: typeof qualifications[0], index: number }) => {
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
      className="bg-white rounded-xl shadow-lg p-6"
    >
      <h3 className="text-xl font-bold text-gray-900 mb-4">{qualification.title}</h3>
      <ul className="space-y-3">
        {qualification.items.map((item, i) => (
          <li key={i} className="flex items-start">
            <svg className="w-5 h-5 text-blue-500 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-gray-700">{item}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default function About() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative h-[500px] rounded-2xl overflow-hidden"
          >
            <Image
              src="/coach-profile.jpg"
              alt="Professional Soccer Coach"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Content Section */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
            >
              Meet Your Coach
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl text-gray-600 mb-8"
            >
              With over 15 years of professional experience in soccer, I've dedicated my career to developing players of all levels. My coaching philosophy combines technical excellence with mental strength and tactical awareness.
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {qualifications.map((qualification, index) => (
                <QualificationCard key={qualification.title} qualification={qualification} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 