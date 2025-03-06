import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";

const LandingPage = () => {
  // Fade-in animation for sections as they come into view
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
   
    <div className="flex flex-col min-h-screen bg-[#2F2F2F] text-white">
  <Navbar/>
      <div className="relative h-[66vh] mb-4 overflow-hidden">
        {/* Background Image with subtle zoom animation - Keeping the original image */}
        <motion.div
          className="absolute inset-0 bg-[url('/hero.png')] bg-cover bg-center"        
          />
        
       
        
        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <motion.h1 
            className="text-5xl font-bold text-[#FFCB74] mb-6"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            The future is
            <br />
            in your hand
          </motion.h1>
          
          <motion.button
            className="bg-[#FFCB74] text-black px-8 py-3 rounded-full font-medium hover:bg-amber-400 transition"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
          </motion.button>
        </div>
        
        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <svg className="w-6 h-10 text-[#FFCB74]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </div>

      {/* What We Offer Section */}
      <motion.div 
        className="px-6 py-16 bg-[#2F2F2F]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={fadeInUp}
      >
        <h2 className="text-4xl font-bold text-[#FFCB74] text-center mb-12">
          What we offers
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, index) => (
            <motion.div 
              key={index} 
              className="bg-black p-6 rounded"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
            >
              <div className="mb-4">
                <motion.img
                  src="/api/placeholder/30/30"
                  alt="user icon"
                  className="w-8 h-8"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                />
              </div>
              <h3 className="text-xl font-semibold text-[#FFCB74] mb-4">
                One to One Interaction
              </h3>
              <p className="text-sm text-gray-300">
                What We Offer: Idesigns, illustrations, and graphic elements
                from the world's best designers. Want more inspiration?
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Active User Stats */}
      <motion.div 
        className="px-4 py-12 bg-gray-100 text-gray-900"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={fadeInUp}
      >
        <h2 className="text-3xl font-bold text-center mb-8">Active users</h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center max-w-2xl mx-auto">
          {[
            { count: "50+", label: "Students" },
            { count: "50+", label: "Alumni" },
            { count: "50+", label: "Get help" }
          ].map((item, index) => (
            <motion.div 
              key={index} 
              className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
            >
              <motion.div 
                className="text-3xl font-bold text-[#FFCB74]"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 + index * 0.2 }}
              >
                {item.count}
              </motion.div>
              <div className="text-sm font-medium mt-2">{item.label}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Testimonials */}
      <motion.div 
        className="px-4 py-16 bg-[#2F2F2F]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={fadeInUp}
      >
        <h2 className="text-3xl font-bold text-[#FFCB74] text-center mb-10">
          Testimonials
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {Array.from({ length: 3 }).map((_, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center bg-black p-6 rounded-lg"
              initial={{ opacity: 0, x: index === 0 ? -50 : index === 2 ? 50 : 0 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
            >
              <motion.div 
                className="w-20 h-20 rounded-full bg-[#FFCB74] mb-4 overflow-hidden"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  type: "spring", 
                  stiffness: 260, 
                  damping: 20, 
                  delay: 0.3 + index * 0.2 
                }}
              >
                <img
                  src="/api/placeholder/100/100"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <motion.div 
                className="flex mb-4 text-[#FFCB74]"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.5 + index * 0.2 }}
              >
                {Array.from({ length: 5 }).map((_, i) => (
                  <motion.svg
                    key={i}
                    className="w-4 h-4 fill-current"
                    viewBox="0 0 24 24"
                    initial={{ opacity: 0, rotateY: 90 }}
                    whileInView={{ opacity: 1, rotateY: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.5 + index * 0.2 + i * 0.1 }}
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </motion.svg>
                ))}
              </motion.div>
              <p className="text-sm text-center text-white mb-4">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                ac augue nec magna facilisis. Exceptional service that exceeded
                my expectations!"
              </p>
              <div className="text-sm font-semibold text-[#FFCB74]">
                John Doe
              </div>
              <div className="text-xs text-gray-400">Senior Designer</div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Footer */}
      <motion.footer 
        className="px-4 py-8 bg-black text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex justify-center space-x-6 mb-6">
          {["facebook", "twitter", "instagram"].map((social, index) => (
            <motion.a
              key={social}
              href="#"
              className="text-gray-400 hover:text-[#FFCB74]"
              whileHover={{ y: -5, color: "#FFCB74" }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
            >
              <span className="sr-only">{social}</span>
              <div className="w-6 h-6 bg-gray-700 rounded-full"></div>
            </motion.a>
          ))}
        </div>
        <motion.p 
          className="text-sm text-gray-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          © 2025 Your Company. All rights reserved.
        </motion.p>
      </motion.footer>
    </div>
  );
};

export default LandingPage;