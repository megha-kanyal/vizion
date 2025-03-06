import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Auser() {
  const targets = [75, 60, 90]; // Different numbers for each category
  const [counts, setCounts] = useState([0, 0, 0]); // Initial state
  const [hasAnimated, setHasAnimated] = useState(false); // Track if animation has run

  const animateNumbers = () => {
    if (hasAnimated) return; // Prevent re-animation

    targets.forEach((target, index) => {
      let start = 0;
      const step = Math.ceil(target / 50); // Adjust step for smooth counting

      const interval = setInterval(() => {
        setCounts((prev) => {
          const newCounts = [...prev];
          newCounts[index] = Math.min(newCounts[index] + step, target);
          return newCounts;
        });
      }, 30);

      setTimeout(() => clearInterval(interval), 3000); // Stops after 3s
    });

    setHasAnimated(true);
  };

  return (
    <motion.div
      className="bg-gray-200 h-screen flex flex-col items-center justify-center"
      onViewportEnter={animateNumbers} // Trigger animation when visible
    >
      <motion.h2
        className="text-4xl font-bold mb-8"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Active User
      </motion.h2>

      <div className="flex justify-center space-x-16">
        {["Students", "Alumni", "Get help"].map((item, index) => (
          <motion.div
            key={index}
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <p className="text-5xl font-bold">{counts[index]}+</p>
            <p className="text-2xl font-semibold">{item}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
