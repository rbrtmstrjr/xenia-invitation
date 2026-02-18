"use client";

import { motion } from "framer-motion";
import invitationData from "@/data/invitationData.json";

export default function Hero() {
  const { baby } = invitationData;

  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-16 pb-10">
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-2xl mx-auto">
        {/* Decorative ornament */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center mb-6"
        >
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.8" className="text-amethyst-300/50">
            <path d="M12 2L2 7l10 5 10-5-10-5z" />
            <path d="M2 17l10 5 10-5" />
            <path d="M2 12l10 5 10-5" />
          </svg>
        </motion.div>

        {/* Baby name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl
            text-amethyst-800 tracking-wide
            text-shadow-glow leading-tight mb-4"
        >
          {baby.firstName.toUpperCase()} {baby.middleName.toUpperCase()}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="font-body text-sm tracking-[0.3em] uppercase text-amethyst-500 mb-2"
        >
          Christening Celebration
        </motion.p>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex justify-center mt-4"
        >
          <div className="gradient-divider" />
        </motion.div>
      </div>
    </section>
  );
}
