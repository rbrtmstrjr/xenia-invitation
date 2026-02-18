"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import invitationData from "@/data/invitationData.json";

export default function Hero() {
  const { baby } = invitationData;

  return (
    <section className="relative min-h-screen flex items-end justify-center overflow-hidden">
      {/* Background image */}
      <Image
        src="/images/hero/xenia-hero.png"
        alt={`${baby.fullName} hero`}
        fill
        className="object-cover"
        sizes="100vw"
        priority
      />

      {/* Gradient overlay at the bottom for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

      {/* Content — positioned at the bottom */}
      <div className="relative z-10 text-center px-6 max-w-2xl mx-auto pb-16 sm:pb-20">
        {/* Baby name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl
            text-white tracking-wide
            drop-shadow-lg leading-tight mb-3"
        >
          {baby.firstName.toUpperCase()} {baby.middleName.toUpperCase()}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="font-body text-sm tracking-[0.3em] uppercase text-white/80 mb-2"
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
          <div className="w-20 h-[1px] bg-gradient-to-r from-transparent via-white/60 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
