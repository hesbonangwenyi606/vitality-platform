import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Video, ShieldCheck, HeartPulse } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 2 }}
        className="absolute top-0 right-0 -z-10 w-1/2 h-full blur-3xl pointer-events-none"
      >
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 5, 0]
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-blue-400 to-indigo-600 rounded-full transform translate-x-1/2 -translate-y-1/2" 
        />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6"
            >
              <ShieldCheck className="w-4 h-4" />
              Trusted Healthcare Provider
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-5xl lg:text-7xl font-extrabold text-slate-900 leading-[1.1] mb-6"
            >
              Modern Care, <br />
              <span className="text-blue-600">Personal Touch.</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl text-slate-600 mb-8 max-w-lg leading-relaxed"
            >
              Experience healthcare redefined. From virtual consultations to specialized in-person care, our team is dedicated to your well-being with world-class medical expertise.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="#booking"
                className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-all flex items-center justify-center gap-2 shadow-xl shadow-blue-200 hover:scale-105 active:scale-95"
              >
                <Calendar className="w-5 h-5" />
                Book In-Person
              </a>
              <a
                href="#booking"
                className="bg-white border-2 border-slate-200 text-slate-700 px-8 py-4 rounded-xl font-bold text-lg hover:border-blue-600 hover:text-blue-600 transition-all flex items-center justify-center gap-2 hover:scale-105 active:scale-95"
              >
                <Video className="w-5 h-5" />
                Virtual Consultation
              </a>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 1 }}
              className="mt-12 flex items-center gap-6"
            >
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <motion.div 
                    key={i} 
                    whileHover={{ y: -5, scale: 1.1 }}
                    className="w-12 h-12 rounded-full border-4 border-white overflow-hidden bg-slate-200 relative cursor-pointer"
                  >
                    <img 
                      src={`https://i.pravatar.cc/150?u=doc${i}`} 
                      alt="Doctor" 
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                ))}
              </div>
              <div>
                <div className="text-slate-900 font-bold text-lg">50+ Specialists</div>
                <div className="text-slate-500 text-sm">Serving 10,000+ happy patients</div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative"
          >
            <motion.div 
              animate={{ 
                y: [0, -15, 0],
              }}
              transition={{ 
                duration: 6, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-8 border-white"
            >
              <img 
                src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/7626006c-c098-4b20-bb6d-989e9c044b30/doctors-team-9b636f37-1775106031916.webp" 
                alt="Healthcare Team" 
                className="w-full h-auto"
              />
            </motion.div>

            <motion.div 
              animate={{ 
                y: [0, 10, 0],
                x: [0, 5, 0]
              }}
              transition={{ 
                duration: 5, 
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
              className="absolute -bottom-6 -left-6 z-20 bg-white p-6 rounded-2xl shadow-xl flex items-center gap-4 border border-slate-100"
            >
              <div className="bg-green-100 p-3 rounded-xl text-green-600">
                <HeartPulse className="w-8 h-8" />
              </div>
              <div>
                <div className="text-2xl font-bold text-slate-900">98%</div>
                <div className="text-slate-500 text-sm font-medium">Satisfaction Rate</div>
              </div>
            </motion.div>

            {/* Decorative background element */}
            <motion.div 
              animate={{ 
                rotate: 360 
              }}
              transition={{ 
                duration: 20, 
                repeat: Infinity, 
                ease: "linear" 
              }}
              className="absolute -top-10 -right-10 -z-10 w-40 h-40 bg-blue-100/50 rounded-full blur-2xl"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}