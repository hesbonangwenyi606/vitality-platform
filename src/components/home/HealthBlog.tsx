import React, { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { Calendar, User, ArrowRight, ChevronDown, ChevronUp, X, Share2, Link, Mail } from 'lucide-react';
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";

const posts = [
  {
    id: '1',
    title: "Understanding Heart Health: Tips for a Healthy Lifestyle",
    excerpt: "Small changes in your daily routine can significantly reduce the risk of cardiovascular diseases.",
    category: "Cardiology",
    date: "May 12, 2024",
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/7626006c-c098-4b20-bb6d-989e9c044b30/heart-health-blog-image-7e7728a8-1775109904429.webp",
    content: "Maintaining a healthy heart is crucial for long-term well-being. Cardiovascular diseases remain a leading cause of health issues worldwide, but the good news is that many of these conditions are preventable through lifestyle choices. Key tips for a healthy heart include: Regular Exercise, Balanced Diet, Stress Management, and Regular Checkups."
  },
  {
    id: '2',
    title: "The Benefits of Regular Physical Activity for Kids",
    excerpt: "Exploring how exercise helps childhood development both physically and mentally.",
    category: "Pediatrics",
    date: "May 10, 2024",
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/7626006c-c098-4b20-bb6d-989e9c044b30/pediatric-clinic-environment-b9c74aed-1775109941052.webp",
    content: "Physical activity is essential for children's growth and development. It's not just about building strong muscles and bones; it's also about mental health and social skills. Benefits include: Physical Development, Cognitive Function, Mental Well-being, and Social Skills."
  },
  {
    id: '3',
    title: "Navigating Virtual Healthcare: What to Expect",
    excerpt: "Everything you need to know about your first tele-health appointment and how to prepare.",
    category: "Technology",
    date: "May 08, 2024",
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/7626006c-c098-4b20-bb6d-989e9c044b30/virtual-healthcare-blog-image-4efca82b-1775109898336.webp",
    content: "Tele-health has transformed how we access medical care, offering convenience and safety from the comfort of your home. If you're new to virtual appointments, prepare your history and find a private space."
  },
  {
    id: '4',
    title: "Healthy Diet and Nutrition for Families",
    excerpt: "Nourish your loved ones with balanced meals and essential nutrients for lifelong wellness.",
    category: "Nutrition",
    date: "May 06, 2024",
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/7626006c-c098-4b20-bb6d-989e9c044b30/healthy-diet-and-nutrition-8524e6da-1775110695916.webp",
    content: "Eating well as a family doesn't have to be complicated. It's about creating sustainable habits that nourish everyone. Top nutrition tips: Cook Together, Variety is Key, Hydration, and Mindful Eating."
  },
  {
    id: '5',
    title: "Mental Health Awareness and Stress Management",
    excerpt: "Practical techniques to reduce stress and maintain mental clarity in a fast-paced world.",
    category: "Mental Health",
    date: "May 04, 2024",
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/7626006c-c098-4b20-bb6d-989e9c044b30/mental-health-awareness-b7b83bf8-1775110701882.webp",
    content: "In today's fast-paced world, mental health is just as important as physical health. Managing stress is a critical skill for maintaining overall well-being."
  },
  {
    id: '6',
    title: "Essential Skin Care Tips for the Summer Season",
    excerpt: "Protect your skin from UV rays and keep it hydrated during the hottest months.",
    category: "Dermatology",
    date: "May 02, 2024",
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/7626006c-c098-4b20-bb6d-989e9c044b30/skin-care-tips-d2d1b798-1775110696238.webp",
    content: "Summer brings sunshine and outdoor fun, but it also brings challenges for your skin. UV radiation and heat can cause damage if you're not careful."
  },
  {
    id: '7',
    title: "The Importance of Regular Health Checkups",
    excerpt: "Early detection is key to managing health risks and ensuring long-term vitality.",
    category: "General Health",
    date: "April 30, 2024",
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/7626006c-c098-4b20-bb6d-989e9c044b30/importance-of-regular-checkups-9e4c2a05-1775110702569.webp",
    content: "Prevention is better than cure. Regular health checkups are vital for identifying potential health issues before they become serious problems."
  },
  {
    id: '8',
    title: "Managing Chronic Conditions: A Proactive Approach",
    excerpt: "Living well with chronic illness through proper monitoring and lifestyle adjustments.",
    category: "Internal Medicine",
    date: "April 28, 2024",
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/7626006c-c098-4b20-bb6d-989e9c044b30/managing-chronic-conditions-dd0ebc5e-1775110696006.webp",
    content: "Managing a chronic condition like diabetes or hypertension requires a proactive and consistent approach. It's about being an active participant in your care."
  },
  {
    id: '9',
    title: "Sleep Hygiene: The Foundation of Good Health",
    excerpt: "Improve your sleep quality and boost your energy levels with these simple tips.",
    category: "Wellness",
    date: "April 26, 2024",
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/7626006c-c098-4b20-bb6d-989e9c044b30/sleep-hygiene-7242706e-1775110696411.webp",
    content: "Quality sleep is the foundation of physical health, cognitive function, and emotional stability. Poor sleep hygiene can lead to a host of health problems."
  }
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const postVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    transition: { duration: 0.3 }
  }
};

export function HealthBlog() {
  const [showAll, setShowAll] = useState(false);
  const [selectedPost, setSelectedPost] = useState<(typeof posts)[0] | null>(null);

  const displayedPosts = showAll ? posts : posts.slice(0, 3);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-xl"
        >
          <h2 className="text-blue-600 font-bold tracking-wide uppercase text-sm mb-3">Health Blog</h2>
          <h3 className="text-4xl font-bold text-slate-900 mb-4">Latest Medical Insights</h3>
        </motion.div>
        
        <motion.button 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setShowAll(!showAll)}
          className="flex items-center gap-2 text-white bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-full font-bold transition-all cursor-pointer shadow-lg shadow-blue-200 self-start md:self-end"
        >
          {showAll ? (
            <>Show Less <ChevronUp className="w-5 h-5" /></>
          ) : (
            <>Browse All Articles <ArrowRight className="w-5 h-5" /></>
          )}
        </motion.button>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <AnimatePresence mode="popLayout">
          {displayedPosts.map((post) => (
            <motion.article
              key={post.id}
              layout
              variants={postVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="bg-white rounded-3xl overflow-hidden group border border-slate-100 hover:shadow-2xl hover:shadow-blue-50 transition-all duration-500 flex flex-col h-full"
            >
              <div className="h-56 overflow-hidden relative shrink-0">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm text-blue-600 px-3 py-1 rounded-full text-xs font-bold uppercase shadow-sm">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-4 text-slate-500 text-sm mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4 text-blue-500" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="w-4 h-4 text-blue-500" />
                    <span>Medical Team</span>
                  </div>
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {post.title}
                </h4>
                <p className="text-slate-600 text-sm mb-6 line-clamp-3 leading-relaxed flex-grow">
                  {post.excerpt}
                </p>
                <motion.button 
                  whileHover={{ gap: "12px" }}
                  onClick={() => setSelectedPost(post)}
                  className="text-slate-900 font-bold flex items-center gap-2 cursor-pointer mt-auto"
                >
                  Read Full Article <ArrowRight className="w-4 h-4 text-blue-600" />
                </motion.button>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>

      <Dialog open={!!selectedPost} onOpenChange={(open) => !open && setSelectedPost(null)}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto p-0 rounded-3xl border-none shadow-2xl">
          {selectedPost && (
            <div className="flex flex-col">
              <div className="relative h-64 md:h-80 w-full shrink-0">
                <img 
                  src={selectedPost.image} 
                  alt={selectedPost.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <button 
                  onClick={() => setSelectedPost(null)}
                  className="absolute top-4 right-4 p-2 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/40 transition-colors z-10"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase mb-2 inline-block">
                    {selectedPost.category}
                  </span>
                  <h2 className="text-xl md:text-2xl font-bold text-white leading-tight">
                    {selectedPost.title}
                  </h2>
                </div>
              </div>
              
              <div className="p-6 md:p-8">
                <div className="flex items-center gap-6 text-slate-500 text-xs mb-6 pb-6 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-blue-600" />
                    <span>{selectedPost.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4 text-blue-600" />
                    <span>Medical Team</span>
                  </div>
                </div>

                <div className="prose prose-slate max-w-none">
                  <p className="text-slate-600 text-base leading-relaxed mb-4">
                    {selectedPost.content}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-100 flex justify-between items-center">
                  <div className="flex gap-4">
                    <Share2 className="w-5 h-5 text-slate-400 hover:text-blue-600 cursor-pointer transition-colors" />
                    <Link className="w-5 h-5 text-slate-400 hover:text-blue-400 cursor-pointer transition-colors" />
                    <Mail className="w-5 h-5 text-slate-400 hover:text-blue-700 cursor-pointer transition-colors" />
                  </div>
                  <button 
                    onClick={() => setSelectedPost(null)}
                    className="text-blue-600 font-bold text-sm hover:text-blue-700 transition-colors"
                  >
                    Close Article
                  </button>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}