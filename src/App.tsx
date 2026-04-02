import React, { useState, useEffect } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/home/Hero';
import { Services } from './components/home/Services';
import { DoctorProfiles } from './components/home/DoctorProfiles';
import { AppointmentBooking } from './components/home/AppointmentBooking';
import { Testimonials } from './components/home/Testimonials';
import { HealthBlog } from './components/home/HealthBlog';
import { InsuranceInfo } from './components/home/InsuranceInfo';
import { HealthTips } from './components/home/HealthTips';
import { Footer } from './components/layout/Footer';
import { Toaster } from 'sonner';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, X } from 'lucide-react';

export default function App() {
  const [showEmergency, setShowEmergency] = useState(true);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-blue-100 selection:text-blue-900">
      <Toaster position="top-center" richColors />
      
      <AnimatePresence>
        {showEmergency && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="bg-red-600 text-white py-2 px-4 text-center text-sm font-medium flex items-center justify-center relative z-[60]"
          >
            <Phone className="w-4 h-4 mr-2" />
            <span>24/7 Emergency Line: 1-800-MED-HELP (1-800-633-4357)</span>
            <button 
              onClick={() => setShowEmergency(false)}
              className="absolute right-4 p-1 hover:bg-red-700 rounded-full transition-colors"
              aria-label="Close emergency banner"
            >
              <X className="w-4 h-4" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <Navbar />
      
      <main>
        <section id="home">
          <Hero />
        </section>

        <section id="health-tips">
          <HealthTips />
        </section>

        <section id="services" className="py-20 bg-white">
          <Services />
        </section>

        <section id="doctors" className="py-20 bg-slate-50">
          <DoctorProfiles />
        </section>

        <section id="booking" className="py-20 bg-white">
          <AppointmentBooking />
        </section>

        <section id="insurance" className="py-12 bg-slate-50">
          <InsuranceInfo />
        </section>

        <section id="testimonials" className="py-20 bg-white">
          <Testimonials />
        </section>

        <section id="blog" className="py-20 bg-slate-50">
          <HealthBlog />
        </section>
      </main>

      <Footer />
    </div>
  );
}