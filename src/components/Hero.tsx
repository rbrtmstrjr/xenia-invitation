"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import invitationData from "@/data/invitationData.json";

const pastelColors = [
  "#D6BAFF", "#FFA7D3", "#FFF0B0", "#B8E6FF", "#FFD1A9",
  "#C5F0C0", "#F5C2E0", "#E0C8FF", "#FFDAB9", "#B5D8FF",
];

function useFireflies(count: number) {
  return useMemo(() =>
    Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      size: 3 + Math.random() * 5,
      color: pastelColors[Math.floor(Math.random() * pastelColors.length)],
      duration: 14 + Math.random() * 8,
      delay: Math.random() * 6,
      drift: (Math.random() - 0.5) * 40,
    })),
  [count]);
}

export default function Hero() {
  const { baby } = invitationData;
  const fireflies = useFireflies(35);

  return (
    <section className="relative min-h-screen flex items-end justify-center overflow-hidden">
      {/* Background image */}
      <Image
        src="/images/hero/xenia-hero.jpg"
        alt={`${baby.fullName} hero`}
        fill
        className="object-cover"
        sizes="100vw"
        priority
      />

      {/* Gradient overlay — blends into the pastel background */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to top, #ebddff 0%, #ebddff80 15%, transparent 50%)",
        }}
      />

      {/* Fireflies */}
      <div className="absolute inset-0 z-[1] pointer-events-none">
        {fireflies.map((f) => (
          <motion.div
            key={f.id}
            className="absolute rounded-full"
            style={{
              left: `${f.x}%`,
              bottom: 0,
              width: f.size,
              height: f.size,
              backgroundColor: f.color,
              boxShadow: `0 0 ${f.size * 2}px ${f.size}px ${f.color}80`,
            }}
            animate={{
              x: [0, f.drift, -f.drift * 0.5, f.drift * 0.3],
              y: ["0vh", "-110vh"],
              opacity: [0, 0.8, 0.6, 0],
            }}
            transition={{
              y: { duration: f.duration, repeat: Infinity, delay: f.delay, ease: "linear" },
              x: { duration: f.duration * 0.8, repeat: Infinity, delay: f.delay, ease: "easeInOut" },
              opacity: { duration: f.duration, repeat: Infinity, delay: f.delay, ease: "linear" },
            }}
          />
        ))}
      </div>

      {/* Content — positioned at the bottom */}
      <div className="relative z-10 text-center px-6 max-w-2xl mx-auto pb-16 sm:pb-20">
        {/* Baby name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="font-cursive text-6xl sm:text-7xl md:text-8xl lg:text-9xl
            text-amethyst-900
            drop-shadow-sm leading-tight mb-3"
        >
          {baby.firstName} {baby.middleName}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="font-body text-sm tracking-[0.3em] uppercase text-amethyst-600 mb-2"
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
