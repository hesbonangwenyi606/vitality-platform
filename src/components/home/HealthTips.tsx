import React from 'react';
import { motion } from 'framer-motion';
import { Apple, Activity, Moon, Droplets } from 'lucide-react';

const tips = [
  {
    icon: Apple,
    title: "Balanced Diet",
    text: "Eat a variety of fruits, vegetables, and lean proteins daily.",
    color: "bg-red-50 text-red-600"
  },
  {
    icon: Droplets,
    title: "Stay Hydrated",
    text: "Drink at least 8-10 glasses of water for optimal body function.",
    color: "bg-blue-50 text-blue-600"
  },
  {
    icon: Activity,
    title: "Active Life",
    text: "30 minutes of moderate exercise can boost your heart health.",
    color: "bg-green-50 text-green-600"
  },
  {
    icon: Moon,
    title: "Better Sleep",
    text: "Aim for 7-9 hours of quality sleep to recharge your mind.",
    color: "bg-purple-50 text-purple-600"
  }
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

const tipVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

export function HealthTips() {
  return (
    <div className="bg-slate-900 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {tips.map((tip, idx) => (
            <motion.div
              key={idx}
              variants={tipVariants}
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-4 group cursor-default p-2 rounded-xl transition-colors hover:bg-slate-800/50"
            >
              <motion.div 
                whileHover={{ rotate: [0, -10, 10, 0] }}
                className={`${tip.color} p-3 rounded-2xl group-hover:shadow-lg transition-all`}
              >
                <tip.icon className="w-6 h-6" />
              </motion.div>
              <div>
                <h4 className="text-white font-bold text-sm group-hover:text-blue-400 transition-colors">{tip.title}</h4>
                <p className="text-slate-400 text-xs mt-1 leading-tight">{tip.text}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}