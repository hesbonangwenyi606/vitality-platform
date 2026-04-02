import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Stethoscope, 
  Heart, 
  Brain, 
  Baby, 
  Bone, 
  Eye, 
  ArrowRight,
  ShieldCheck,
  UserCheck,
  Zap,
  Clock,
  Activity,
  Award
} from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const services = [
  {
    title: "General Medicine",
    description: "Comprehensive health checkups and preventive care for all ages.",
    icon: Stethoscope,
    color: "bg-blue-100 text-blue-600",
    details: "Our General Medicine department provides a foundation for your health. We offer comprehensive physical exams, chronic disease management, and preventive screenings. Our physicians are experts in diagnosing and treating a wide range of common medical conditions, ensuring you and your family receive the best primary care available."
  },
  {
    title: "Cardiology",
    description: "Expert heart care including diagnostics, treatment, and rehabilitation.",
    icon: Heart,
    color: "bg-red-100 text-red-600",
    details: "Protect your heart with our world-class cardiology services. From advanced EKG and stress testing to specialized care for heart disease and hypertension, our cardiovascular specialists use state-of-the-art technology to monitor and treat heart health. We focus on both preventive cardiology and long-term heart management."
  },
  {
    title: "Neurology",
    description: "Advanced treatment for disorders of the nervous system and brain.",
    icon: Brain,
    color: "bg-purple-100 text-purple-600",
    details: "Our neurology department specializes in diagnosing and treating complex disorders of the brain, spine, and nervous system. We provide care for conditions such as migraines, epilepsy, multiple sclerosis, and neurodegenerative diseases using the latest diagnostic tools and therapeutic interventions."
  },
  {
    title: "Pediatrics",
    description: "Specialized medical care for infants, children, and adolescents.",
    icon: Baby,
    color: "bg-yellow-100 text-yellow-600",
    details: "We are committed to the health and well-being of our youngest patients. Our pediatricians provide gentle, expert care from birth through adolescence. Our services include wellness checks, vaccinations, developmental screenings, and treatment for childhood illnesses in a child-friendly environment."
  },
  {
    title: "Orthopedics",
    description: "Treatment for musculoskeletal system issues, from sports injuries to joint replacement.",
    icon: Bone,
    color: "bg-orange-100 text-orange-600",
    details: "Regain your mobility and live pain-free with our orthopedic services. We specialize in treating injuries and disorders of the bones, joints, and muscles. Our team offers both surgical and non-surgical solutions, including joint replacements, sports medicine, and specialized physical therapy programs."
  },
  {
    title: "Ophthalmology",
    description: "Professional eye care, vision testing, and surgical procedures.",
    icon: Eye,
    color: "bg-teal-100 text-teal-600",
    details: "Maintain clear vision and healthy eyes with our comprehensive eye care services. We offer complete vision exams, glaucoma screening, cataract evaluation, and specialized surgical procedures. Our ophthalmologists utilize the latest laser technology and diagnostic tools to protect your sight."
  }
];

const carePillars = [
  {
    icon: ShieldCheck,
    title: "Safety First",
    description: "Rigorous protocols to ensure patient safety and clinical excellence."
  },
  {
    icon: UserCheck,
    title: "Expert Team",
    description: "Highly qualified specialists with years of clinical experience."
  },
  {
    icon: Zap,
    title: "Advanced Tech",
    description: "Modern medical equipment for precise diagnosis and treatment."
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

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

export function Services() {
  const [open, setOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<{title: string, details: string} | null>(null);

  const handleLearnMore = (service?: typeof services[0]) => {
    if (service) {
      setSelectedService({ title: service.title, details: service.details });
    } else {
      setSelectedService({
        title: "High Quality Care at Our Clinic",
        details: "At our facility, we prioritize patient safety and comfort above all else. Our team of expert medical professionals uses the latest technology to provide accurate diagnoses and effective treatments. We believe in a holistic approach to healthcare, addressing not just the symptoms but the underlying causes of illness. From routine check-ups to complex surgical procedures, we are committed to excellence in every aspect of our service. Our mission is to provide accessible, affordable, and world-class healthcare to the community, ensuring every patient receives personalized attention and the best possible clinical outcomes."
      });
    }
    setOpen(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-blue-600 font-bold tracking-wide uppercase text-sm mb-3">Our Services</h2>
        <h3 className="text-4xl font-bold text-slate-900 mb-4">High Quality Care For You</h3>
        <p className="text-slate-600 max-w-2xl mx-auto mb-8">
          We provide a wide range of medical services designed to meet your specific needs and ensure your long-term health.
        </p>
        
        <Button 
          onClick={() => handleLearnMore()}
          variant="default"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-6 px-8 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105 active:scale-95 group"
        >
          Learn More About Our Care
          <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Button>
      </motion.div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {services.map((service, idx) => (
          <motion.div
            key={idx}
            variants={itemVariants}
            whileHover={{ 
              y: -10, 
              boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)" 
            }}
            className="group p-8 rounded-3xl border border-slate-100 hover:border-blue-200 bg-white transition-all duration-300 relative overflow-hidden"
          >
            <div className={`w-14 h-14 ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
              <service.icon className="w-8 h-8" />
            </div>
            <h4 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h4>
            <p className="text-slate-600 mb-6 leading-relaxed relative z-10">
              {service.description}
            </p>
            <button 
              onClick={() => handleLearnMore(service)}
              className="flex items-center gap-2 text-blue-600 font-semibold group-hover:gap-3 transition-all cursor-pointer outline-none focus:ring-2 focus:ring-blue-100 rounded-lg py-1 px-2 -ml-2"
            >
              Learn More <ArrowRight className="w-4 h-4" />
            </button>

            {/* Decorative background circle on hover */}
            <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-blue-50/50 rounded-full group-hover:scale-150 transition-transform duration-500 -z-0" />
          </motion.div>
        ))}
      </motion.div>

      {/* Learn More Dialog */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-2xl bg-white border-none shadow-2xl rounded-3xl overflow-hidden p-0">
          <div className="bg-blue-600 h-24 w-full relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-transparent opacity-50" />
            <div className="absolute bottom-4 left-8 text-white">
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-white">
                  {selectedService?.title}
                </DialogTitle>
              </DialogHeader>
            </div>
          </div>
          
          <div className="p-8">
            <DialogDescription className="text-slate-700 text-lg leading-relaxed mb-8">
              {selectedService?.details}
            </DialogDescription>

            {/* If it's the main "About Our Care" modal, show the pillars */}
            {selectedService?.title === "High Quality Care at Our Clinic" && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-slate-100">
                {carePillars.map((pillar, i) => (
                  <div key={i} className="flex flex-col items-center text-center p-4 rounded-2xl bg-slate-50 border border-slate-100">
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-3 shadow-sm">
                      <pillar.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <h5 className="font-bold text-slate-900 mb-1">{pillar.title}</h5>
                    <p className="text-xs text-slate-500">{pillar.description}</p>
                  </div>
                ))}
              </div>
            )}

            {/* Stats for any service */}
            <div className="mt-8 flex flex-wrap gap-4 items-center justify-between p-4 bg-blue-50 rounded-2xl border border-blue-100">
              <div className="flex items-center gap-3">
                <div className="bg-blue-600 p-2 rounded-lg text-white">
                  <Activity className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-blue-600 font-bold uppercase tracking-wider">Patients Served</div>
                  <div className="text-xl font-bold text-blue-900">10,000+</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-blue-600 p-2 rounded-lg text-white">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-blue-600 font-bold uppercase tracking-wider">Success Rate</div>
                  <div className="text-xl font-bold text-blue-900">99.9%</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-blue-600 p-2 rounded-lg text-white">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-blue-600 font-bold uppercase tracking-wider">Availability</div>
                  <div className="text-xl font-bold text-blue-900">24/7</div>
                </div>
              </div>
            </div>

            <div className="mt-10 flex justify-end">
              <Button 
                onClick={() => setOpen(false)}
                className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 py-2 font-semibold shadow-lg shadow-blue-200 transition-all active:scale-95"
              >
                Got it, thanks!
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}