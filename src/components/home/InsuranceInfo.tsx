import React from 'react';
import { motion } from 'framer-motion';

const partners = [
  "Social Health Authority (SHA)",
  "AAR Insurance",
  "Jubilee Insurance",
  "Britam",
  "CIC Insurance Group",
  "Madison Insurance",
  "APA Insurance",
  "Sanlam Kenya",
  "Old Mutual Kenya"
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const partnerVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4 }
  }
};

export function InsuranceInfo() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:max-w-md"
        >
          <h3 className="text-2xl font-bold text-slate-900 mb-4">Accepted Insurance</h3>
          <p className="text-slate-600">
            We work with most major insurance providers to make quality healthcare accessible to everyone. Don't see yours? Contact our billing office.
          </p>
        </motion.div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="w-full lg:flex-1 grid grid-cols-2 md:grid-cols-3 gap-4"
        >
          {partners.map(p => (
            <motion.div 
              key={p} 
              variants={partnerVariants}
              whileHover={{ 
                y: -5, 
                borderColor: "rgba(37, 99, 235, 0.4)",
                backgroundColor: "rgba(248, 250, 252, 1)" 
              }}
              className="bg-white p-6 rounded-2xl border border-slate-100 flex items-center justify-center text-center shadow-sm transition-all cursor-default"
            >
              <span className="font-bold text-slate-400 group-hover:text-slate-600 transition-colors">{p}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}