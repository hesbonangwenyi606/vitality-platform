import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    name: "Eleanor Shellstrop",
    role: "Patient",
    image: "https://i.pravatar.cc/150?u=eleanor",
    content: "The level of care I received was exceptional. Dr. Mitchell took the time to explain everything clearly and made me feel completely at ease during my procedure."
  },
  {
    name: "Michael Tahani",
    role: "Regular Patient",
    image: "https://i.pravatar.cc/150?u=michael",
    content: "I've been coming here for 3 years now. The virtual consultation feature is a lifesaver for my busy schedule. Fast, professional, and very convenient."
  },
  {
    name: "Jason Mendoza",
    role: "Patient",
    image: "https://i.pravatar.cc/150?u=jason",
    content: "Best medical facility I've ever visited. The staff is friendly, the environment is clean and modern, and the doctors actually listen to you."
  }
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

export function Testimonials() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-blue-600 font-bold tracking-wide uppercase text-sm mb-3">Testimonials</h2>
        <h3 className="text-4xl font-bold text-slate-900 mb-4">What Our Patients Say</h3>
      </motion.div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid md:grid-cols-3 gap-8"
      >
        {testimonials.map((t, idx) => (
          <motion.div
            key={idx}
            variants={itemVariants}
            whileHover={{ y: -10 }}
            className="bg-slate-50 p-8 rounded-[2rem] relative hover:bg-white hover:shadow-xl transition-all duration-300 group"
          >
            <motion.div 
              initial={{ rotate: -10 }}
              whileInView={{ rotate: 0 }}
              className="absolute -top-4 -left-4 bg-blue-600 p-3 rounded-2xl shadow-lg group-hover:scale-110 transition-transform"
            >
              <Quote className="w-6 h-6 text-white" />
            </motion.div>
            <div className="flex items-center gap-1 mb-6 mt-2">
              {[1, 2, 3, 4, 5].map(s => (
                <motion.div
                  key={s}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 + (s * 0.05) }}
                  viewport={{ once: true }}
                >
                  <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                </motion.div>
              ))}
            </div>
            <p className="text-slate-700 italic mb-8 leading-relaxed">"{t.content}"</p>
            <div className="flex items-center gap-4">
              <motion.img 
                whileHover={{ scale: 1.2, rotate: 5 }}
                src={t.image} 
                alt={t.name} 
                className="w-12 h-12 rounded-full border-2 border-white shadow-sm"
              />
              <div>
                <h5 className="font-bold text-slate-900">{t.name}</h5>
                <p className="text-slate-500 text-sm">{t.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}