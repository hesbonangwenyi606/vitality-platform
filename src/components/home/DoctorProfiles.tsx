import React, { useState } from 'react';
import { motion, Variants, AnimatePresence } from 'framer-motion';
import { Star, MessageCircle, Calendar, X, MapPin, Award, BookOpen, Clock, Heart, Phone, Mail } from 'lucide-react';

const doctors = [
  {
    id: '0',
    name: 'Dr. Hesbon Angwenyi',
    specialty: 'Chief Pulmonologist',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/7626006c-c098-4b20-bb6d-989e9c044b30/hesbon-angwenyi---main-medical-officer-de890315-1775106991470.webp',
    bio: 'An expert in respiratory health and patient-centered care, leading our pulmonary department with excellence and compassion.',
    rating: 5.0,
    reviews: 248,
    experience: '12+ Years',
    education: 'MD, University of Nairobi',
    skills: ['Asthma Care', 'Sleep Medicine', 'Critical Care', 'Pulmonary Fibrosis']
  },
  {
    id: '1',
    name: 'Dr. Sarah Mitchell',
    specialty: 'Chief Cardiologist',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/7626006c-c098-4b20-bb6d-989e9c044b30/doctor-female-1-a7d612ff-1775106031908.webp',
    bio: 'Specializing in interventional cardiology with over 15 years of clinical experience.',
    rating: 4.9,
    reviews: 124,
    experience: '15+ Years',
    education: 'MD, Harvard Medical School',
    skills: ['Echocardiography', 'Hypertension', 'Lipid Disorders', 'Heart Failure']
  },
  {
    id: '2',
    name: 'Dr. Arthur Chen',
    specialty: 'Pediatric Specialist',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/7626006c-c098-4b20-bb6d-989e9c044b30/doctor-male-2-66c70724-1775106031685.webp',
    bio: 'Dedicated to providing compassionate care for children and infants with a gentle approach.',
    rating: 5.0,
    reviews: 89,
    experience: '8+ Years',
    education: 'MD, Stanford University',
    skills: ['Child Nutrition', 'Growth Development', 'Immunization', 'Pediatric Allergy']
  },
  {
    id: '3',
    name: 'Dr. Robert Williams',
    specialty: 'Neurologist',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/7626006c-c098-4b20-bb6d-989e9c044b30/doctor-male-1-9fd9ccb7-1775106031590.webp',
    bio: 'Expert in neurodegenerative diseases and comprehensive brain health management.',
    rating: 4.8,
    reviews: 156,
    experience: '20+ Years',
    education: 'MD, Johns Hopkins Medicine',
    skills: ['Stroke Care', 'Epilepsy', 'Multiple Sclerosis', 'Headache Management']
  }
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export function DoctorProfiles() {
  const [selectedDoctor, setSelectedDoctor] = useState<typeof doctors[0] | null>(null);

  const handleBookClick = () => {
    const bookingSection = document.getElementById('booking');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleViewAllClick = () => {
    const doctorsSection = document.getElementById('doctors');
    if (doctorsSection) {
      doctorsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleProfileClick = (doctor: typeof doctors[0]) => {
    setSelectedDoctor(doctor);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 text-center md:text-left"
      >
        <div className="max-w-xl">
          <h2 className="text-blue-600 font-bold tracking-wide uppercase text-sm mb-3">Our Experts</h2>
          <h3 className="text-4xl font-extrabold text-slate-900 mb-4">Meet Our Top Specialists</h3>
          <p className="text-slate-600">
            Our doctors are leaders in their fields, committed to providing the highest standard of medical excellence.
          </p>
        </div>
        <motion.button 
          onClick={handleViewAllClick}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-slate-900 text-white px-8 py-3 rounded-xl font-semibold hover:bg-slate-800 transition-colors shadow-lg hover:shadow-xl cursor-pointer"
        >
          View All
        </motion.button>
      </motion.div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
      >
        {doctors.map((doctor) => (
          <motion.div
            key={doctor.id}
            variants={cardVariants}
            whileHover={{ y: -8 }}
            className={`bg-white rounded-3xl overflow-hidden shadow-sm border ${doctor.name === 'Dr. Hesbon Angwenyi' ? 'border-blue-200 ring-2 ring-blue-50 ring-offset-4' : 'border-slate-100'} group`}
          >
            <div className="relative h-80 overflow-hidden">
              <img 
                src={doctor.image} 
                alt={doctor.name} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {doctor.name === 'Dr. Hesbon Angwenyi' && (
                <motion.div 
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute top-4 left-4 bg-blue-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-lg z-20"
                >
                  Chief Pulmonologist
                </motion.div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <div className="flex gap-2 w-full">
                  <button 
                    onClick={handleBookClick}
                    className="flex-1 bg-white text-slate-900 py-2.5 rounded-xl font-bold text-xs flex items-center justify-center gap-2 hover:bg-slate-100 transition-colors cursor-pointer"
                  >
                    <Calendar className="w-3.5 h-3.5" /> Book
                  </button>
                  <button 
                    onClick={() => handleProfileClick(doctor)}
                    className="flex-1 bg-blue-600 text-white py-2.5 rounded-xl font-bold text-xs flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors cursor-pointer"
                  >
                    <MessageCircle className="w-3.5 h-3.5" /> Profile
                  </button>
                </div>
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-2">
                <span className={`text-xs font-bold uppercase tracking-wider ${doctor.name === 'Dr. Hesbon Angwenyi' ? 'text-blue-600' : 'text-slate-500'}`}>
                  {doctor.specialty}
                </span>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  <span className="text-sm font-bold text-slate-900">{doctor.rating}</span>
                </div>
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-2">{doctor.name}</h4>
              <p className="text-slate-600 text-sm mb-4 line-clamp-2 min-h-[40px]">
                {doctor.bio}
              </p>
              <div className="pt-4 border-t border-slate-50 flex items-center justify-between text-slate-500 text-xs">
                <span>{doctor.reviews} Reviews</span>
                <span className="text-green-600 font-semibold uppercase text-[10px] tracking-tighter">Available Now</span>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Profile Modal */}
      <AnimatePresence>
        {selectedDoctor && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedDoctor(null)}
              className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[100] cursor-pointer"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white rounded-[2rem] shadow-2xl z-[101] p-0"
            >
              <div className="relative">
                <button 
                  onClick={() => setSelectedDoctor(null)}
                  className="absolute top-6 right-6 p-2 bg-slate-100 hover:bg-slate-200 rounded-full transition-colors z-30 cursor-pointer"
                >
                  <X className="w-5 h-5 text-slate-600" />
                </button>

                <div className="grid md:grid-cols-5 gap-0">
                  <div className="md:col-span-2 relative h-[300px] md:h-auto">
                    <img 
                      src={selectedDoctor.image} 
                      alt={selectedDoctor.name} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-6 left-6 text-white">
                      <span className="text-xs font-bold uppercase tracking-widest text-blue-300 block mb-1">
                        {selectedDoctor.specialty}
                      </span>
                      <h2 className="text-3xl font-extrabold">{selectedDoctor.name}</h2>
                    </div>
                  </div>

                  <div className="md:col-span-3 p-8 lg:p-12">
                    <div className="grid grid-cols-2 gap-4 mb-8">
                      <div className="p-4 bg-slate-50 rounded-2xl flex items-center gap-3">
                        <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                          <Award className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="text-[10px] uppercase font-bold text-slate-400">Experience</p>
                          <p className="text-sm font-bold text-slate-900">{selectedDoctor.experience}</p>
                        </div>
                      </div>
                      <div className="p-4 bg-slate-50 rounded-2xl flex items-center gap-3">
                        <div className="p-2 bg-yellow-100 rounded-lg text-yellow-600">
                          <Star className="w-5 h-5 fill-yellow-600" />
                        </div>
                        <div>
                          <p className="text-[10px] uppercase font-bold text-slate-400">Rating</p>
                          <p className="text-sm font-bold text-slate-900">{selectedDoctor.rating} ({selectedDoctor.reviews} reviews)</p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <h4 className="flex items-center gap-2 text-lg font-bold text-slate-900 mb-3">
                          <BookOpen className="w-5 h-5 text-blue-600" />
                          About Specialist
                        </h4>
                        <p className="text-slate-600 leading-relaxed">
                          {selectedDoctor.bio}
                        </p>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-6">
                        <div>
                          <h4 className="flex items-center gap-2 text-sm font-bold text-slate-900 mb-3">
                            <Clock className="w-4 h-4 text-blue-600" />
                            Education
                          </h4>
                          <p className="text-sm text-slate-600">{selectedDoctor.education}</p>
                        </div>
                        <div>
                          <h4 className="flex items-center gap-2 text-sm font-bold text-slate-900 mb-3">
                            <Heart className="w-4 h-4 text-blue-600" />
                            Specialties
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {selectedDoctor.skills.map((skill, idx) => (
                              <span key={idx} className="text-[10px] font-bold bg-slate-100 text-slate-600 px-2 py-1 rounded-md">
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="pt-6 border-t border-slate-100 flex flex-wrap gap-4">
                        <button 
                          onClick={() => {
                            setSelectedDoctor(null);
                            handleBookClick();
                          }}
                          className="flex-1 bg-blue-600 text-white py-4 rounded-xl font-bold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-100 cursor-pointer"
                        >
                          Book Appointment Now
                        </button>
                        <div className="flex gap-2">
                          <button className="p-4 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors text-slate-600 cursor-pointer">
                            <Phone className="w-5 h-5" />
                          </button>
                          <button className="p-4 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors text-slate-600 cursor-pointer">
                            <Mail className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}