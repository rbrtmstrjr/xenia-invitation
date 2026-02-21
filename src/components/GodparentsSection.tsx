"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import invitationData from "@/data/invitationData.json";

const cardVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const },
  }),
};

function PersonCard({
  name,
  photo,
  index,
}: {
  name: string;
  photo: string;
  index: number;
}) {
  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-20px" }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="group"
    >
      {/* Clothespin above */}
      <div className="flex justify-center -mb-4 relative z-10">
        <svg width="16" height="32" viewBox="0 0 20 40" fill="none">
          <rect x="4" y="0" width="12" height="7" rx="2" fill="#c9a86c" />
          <circle cx="10" cy="9.5" r="3" fill="none" stroke="#b8935a" strokeWidth="1.5" />
          <rect x="4" y="12" width="4.5" height="24" rx="1.5" fill="#d4b07a" />
          <rect x="11.5" y="12" width="4.5" height="24" rx="1.5" fill="#c9a56c" />
          <path d="M8.5 32 L10 40 L11.5 32" fill="none" stroke="#b8935a" strokeWidth="0.5" />
        </svg>
      </div>
      {/* Polaroid frame */}
      <div className="relative bg-white p-2 rounded-sm shadow-md
        hover:shadow-xl transition-shadow duration-300">
        {/* Flower decoration */}
        <img
          src="/images/decorations/flower.svg"
          alt=""
          className="absolute -top-3 -left-3 w-16 h-16 z-20 pointer-events-none"
          style={{ transform: "scale(-1, -1)" }}
        />
        <div className="relative aspect-[3/4] overflow-hidden rounded-sm">
          <Image
            src={photo}
            alt={name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 45vw, 200px"
            loading="lazy"
          />
        </div>
        {/* Name inside the frame */}
        <p className="font-body text-sm font-medium text-neutral-400 text-center py-3">{name}</p>
      </div>
    </motion.div>
  );
}

export default function GodparentsSection() {
  const { godparents, baby } = invitationData;

  return (
    <section className="py-16 sm:py-20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex justify-center mb-4">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-amethyst-400" strokeWidth="1.5">
              <path d="M12 2v20M2 12h20" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M12 2c-2 3-3 6-3 10s1 7 3 10c2-3 3-6 3-10s-1-7-3-10z" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <p className="font-body text-sm tracking-[0.3em] uppercase text-amethyst-800 mb-3">
            Guided by Faith
          </p>
          <h2 className="font-cursive text-4xl sm:text-5xl text-amethyst-800">
            The Godparents
          </h2>
          <div className="flex justify-center mt-4">
            <div className="gradient-divider" />
          </div>
          <p className="mt-5 font-body text-base sm:text-lg leading-relaxed max-w-2xl mx-auto text-center" style={{ color: "#66558D" }}>
            Chosen with love and deep trust, these incredible souls will stand beside {baby.firstName} as her guides in faith, her mentors in life, and her second parents in heart. With their prayers and loving support, they will help nurture her faith and walk with her as she grows.
          </p>
        </motion.div>

        {/* Godmothers */}
        <div className="mb-12">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-6"
          >
            <div className="flex justify-center mb-3">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-pink-400">
                <circle cx="12" cy="8" r="5.5" stroke="currentColor" strokeWidth="2" />
                <line x1="12" y1="13.5" x2="12" y2="22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <line x1="8.5" y1="18" x2="15.5" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
            <h3 className="font-heading text-xl text-amethyst-700">The Godmother</h3>
          </motion.div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-5">
            {godparents.godmothers.map((gm, idx) => (
              <PersonCard key={idx} name={gm.name} photo={gm.photo} index={idx} />
            ))}
          </div>
        </div>

        {/* Godfathers */}
        <div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-6"
          >
            <div className="flex justify-center mb-3">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-blue-400">
                <circle cx="10" cy="12" r="5.5" stroke="currentColor" strokeWidth="2" />
                <line x1="14" y1="8" x2="22" y2="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <polyline points="17,2 22,2 22,7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3 className="font-heading text-xl text-amethyst-700">The Godfather</h3>
          </motion.div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-5">
            {godparents.godfathers.map((gf, idx) => (
              <PersonCard key={idx} name={gf.name} photo={gf.photo} index={idx} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
