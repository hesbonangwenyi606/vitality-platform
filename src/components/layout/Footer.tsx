import React from 'react';
import { HeartPulse, Mail, Phone, MapPin, Share2, Globe, MessageCircle } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-white border-t border-slate-100 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <HeartPulse className="w-8 h-8 text-blue-600" />
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-700 to-indigo-600 bg-clip-text text-transparent">
                MediCare+
              </span>
            </div>
            <p className="text-slate-600 leading-relaxed">
              Providing world-class medical services since 1995. Our mission is to enhance health and well-being through innovative, compassionate care.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 bg-slate-50 flex items-center justify-center rounded-full text-slate-400 hover:text-blue-600 hover:bg-blue-50 transition-all">
                <Share2 className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-50 flex items-center justify-center rounded-full text-slate-400 hover:text-blue-600 hover:bg-blue-50 transition-all">
                <Globe className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-50 flex items-center justify-center rounded-full text-slate-400 hover:text-blue-600 hover:bg-blue-50 transition-all">
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold text-slate-900 mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#services" className="text-slate-600 hover:text-blue-600 transition-colors">Specialized Services</a></li>
              <li><a href="#doctors" className="text-slate-600 hover:text-blue-600 transition-colors">Our Specialists</a></li>
              <li><a href="#booking" className="text-slate-600 hover:text-blue-600 transition-colors">Book Appointment</a></li>
              <li><a href="#blog" className="text-slate-600 hover:text-blue-600 transition-colors">Health Blog</a></li>
              <li><a href="#" className="text-slate-600 hover:text-blue-600 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-slate-900 mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-600 shrink-0" />
                <span className="text-slate-600">Ngong Road Off Wanyee Rd 1009</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-600 shrink-0" />
                <span className="text-slate-600">+254 722 514 540</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-600 shrink-0" />
                <span className="text-slate-600">hesbonmanyinsa96@gmail.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-slate-900 mb-6">Emergency</h4>
            <div className="bg-red-50 p-6 rounded-2xl border border-red-100">
              <p className="text-red-700 font-bold mb-2">24/7 Hotline</p>
              <p className="text-2xl font-black text-red-600 mb-4">+254 722 514 540</p>
              <p className="text-slate-600 text-sm">Call immediately for any life-threatening emergencies.</p>
            </div>
          </div>
        </div>
        
        <div className="pt-10 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-sm">
          <p>© 2024 MediCare+ Healthcare System. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-blue-600">Terms of Service</a>
            <a href="#" className="hover:text-blue-600">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}