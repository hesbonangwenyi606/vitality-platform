import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { toast } from 'sonner';
import { Calendar, Clock, User, Phone, Mail, FileText, ChevronRight, Loader2, Stethoscope, CheckCircle } from 'lucide-react';

export function AppointmentBooking() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    department: '',
    date: '',
    time: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setIsSubmitted(false);

    try {
      // Using formsubmit.co for a reliable, backend-free email solution for hesbonmanyinsa96@gmail.com
      const response = await fetch("https://formsubmit.co/ajax/hesbonmanyinsa96@gmail.com", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          ...formData,
          _subject: `New Appointment Request from ${formData.name}`,
          _template: "table",
          _honey: "", // Honeypot field for spam prevention
          _captcha: "false" // Suggested to disable captcha in FormSubmit settings for seamless AJAX
        })
      });

      if (response.ok) {
        toast.success("message submitted successfully");
        setIsSubmitted(true);
        
        setFormData({
          name: '',
          phone: '',
          email: '',
          department: '',
          date: '',
          time: '',
          message: ''
        });

        // Hide success message after 5 seconds
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to send appointment request");
      }
    } catch (error) {
      console.error('Email sending error:', error);
      toast.error("Unable to send request. Please try again or call us directly at +254 722 514 540.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const departments = [
    "General Health", "Pulmonology", "Cardiology", "Neurology", "Pediatrics", "Dermatology", "Orthopedics"
  ];

  return (
    <div id="booking" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-blue-600 rounded-[3rem] overflow-hidden shadow-2xl relative"
      >
        {/* Background Decorations */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1], 
              rotate: [0, 90, 0] 
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-10 -right-10 w-96 h-96 bg-white rounded-full blur-3xl"
          />
          <motion.div 
            animate={{ 
              scale: [1, 1.3, 1], 
              rotate: [0, -90, 0] 
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-10 -left-10 w-96 h-96 bg-white rounded-full blur-3xl"
          />
        </div>

        <div className="grid lg:grid-cols-2 gap-0 relative z-10">
          {/* Info Section */}
          <div className="p-8 lg:p-16 text-white flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 mb-4"
            >
              <div className="h-1 w-12 bg-blue-300 rounded-full" />
              <span className="text-blue-200 font-bold uppercase tracking-wider text-sm">Priority Booking</span>
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-4xl lg:text-5xl font-extrabold mb-6 leading-tight"
            >
              Start Your Journey to <br /> Better Health
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-blue-100 text-lg mb-10 max-w-md"
            >
              Skip the queue and schedule your visit with our expert doctors. 
              Submissions are sent directly to our administration for immediate processing.
            </motion.p>
            
            <div className="space-y-6 mb-12">
              {[ 
                { icon: Calendar, title: "Flexible Scheduling", desc: "Choose a time that works best for you, weekdays or weekends." },
                { icon: Stethoscope, title: "Expert Care", desc: "Consult with board-certified specialists in various departments." }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + (i * 0.1) }}
                  className="flex items-start gap-4"
                >
                  <div className="bg-white/20 p-3 rounded-2xl backdrop-blur-sm">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl">{item.title}</h4>
                    <p className="text-blue-100">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="p-6 bg-white/10 rounded-3xl border border-white/20 backdrop-blur-sm"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-bold text-blue-200">Need immediate assistance?</span>
                <span className="text-xs bg-white text-blue-600 px-3 py-1 rounded-full font-bold">24/7 SUPPORT</span>
              </div>
              <p className="text-3xl font-extrabold">+254 722 514 540</p>
            </motion.div>
          </div>

          {/* Form Section */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white p-8 lg:p-16 flex flex-col justify-center"
          >
            {isSubmitted && (
              <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-green-50 border border-green-200 text-green-700 px-6 py-4 rounded-2xl mb-8 flex items-center gap-3"
              >
                <div className="bg-green-100 p-1 rounded-full">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                </div>
                <p className="font-bold text-lg tracking-tight">message submitted successfully</p>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Form Honeypot for Spam Protection */}
              <input type="text" name="_honey" style={{ display: 'none' }} />
              
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Full Name</label>
                  <div className="relative group">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-blue-500 transition-colors" />
                    <input 
                      required
                      name="name"
                      type="text" 
                      placeholder="John Doe"
                      className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      disabled={isSubmitting}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Phone Number</label>
                  <div className="relative group">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-blue-500 transition-colors" />
                    <input 
                      required
                      name="phone"
                      type="tel" 
                      placeholder="+254 7XX XXX XXX"
                      className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      disabled={isSubmitting}
                    />
                  </div>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Email Address</label>
                  <div className="relative group">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-blue-500 transition-colors" />
                    <input 
                      type="email" 
                      name="email" 
                      placeholder="Email Address"
                      className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Specialty Department</label>
                  <div className="relative">
                    <select 
                      required
                      name="department"
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all appearance-none cursor-pointer"
                      value={formData.department}
                      onChange={(e) => setFormData({...formData, department: e.target.value})}
                      disabled={isSubmitting}
                    >
                      <option value="">Select Service</option>
                      {departments.map(d => <option key={d} value={d}>{d}</option>)}
                    </select>
                    <ChevronRight className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 rotate-90 pointer-events-none" />
                  </div>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Preferred Date</label>
                  <div className="relative group">
                    <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-blue-500 transition-colors" />
                    <input 
                      required
                      name="date"
                      type="date" 
                      className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                      value={formData.date}
                      onChange={(e) => setFormData({...formData, date: e.target.value})}
                      disabled={isSubmitting}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Preferred Time</label>
                  <div className="relative group">
                    <Clock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-blue-500 transition-colors" />
                    <input 
                      required
                      name="time"
                      type="time" 
                      className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                      value={formData.time}
                      onChange={(e) => setFormData({...formData, time: e.target.value})}
                      disabled={isSubmitting}
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 ml-1">Additional Information</label>
                <div className="relative group">
                  <FileText className="absolute left-4 top-4 w-4 h-4 text-slate-400 group-focus-within:text-blue-500 transition-colors" />
                  <textarea 
                    name="message"
                    rows={3}
                    placeholder="Briefly describe your symptoms or reason for visit"
                    className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    disabled={isSubmitting}
                  />
                </div>
              </div>

              <motion.button 
                whileHover={{ scale: isSubmitting ? 1 : 1.01 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.99 }}
                type="submit"
                disabled={isSubmitting}
                className={`w-full ${isSubmitting ? 'bg-blue-400' : 'bg-blue-600 hover:bg-blue-700'} text-white py-4 rounded-xl font-bold text-lg transition-all shadow-xl hover:shadow-blue-200 flex items-center justify-center gap-2 cursor-pointer disabled:cursor-not-allowed`}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Sending Request...
                  </>
                ) : (
                  <>
                    Confirm Appointment <ChevronRight className="w-5 h-5" />
                  </>
                )}
              </motion.button>
              
              <p className="text-center text-xs text-slate-400 mt-4">
                By submitting this form, you agree to our privacy policy and terms of service.
              </p>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}