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
      <div className="relative overflow-hidden rounded-2xl glass-card shadow-sm
        hover:shadow-lg hover:border-amethyst-200/40 transition-all duration-300">
        {/* Photo */}
        <div className="relative aspect-[3/4] overflow-hidden">
          <Image
            src={photo}
            alt={name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 45vw, 200px"
            loading="lazy"
          />
          {/* Gradient overlay at the bottom for name legibility */}
          <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/50 to-transparent" />
        </div>

        {/* Name inside the card */}
        <div className="absolute inset-x-0 bottom-0 p-3 text-center">
          <p className="font-body text-sm font-medium text-white drop-shadow-md">{name}</p>
        </div>
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
          <p className="font-body text-sm tracking-[0.3em] uppercase text-rose-500 mb-3">
            Guided by Faith
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl text-amethyst-900">
            The Godparents
          </h2>
          <div className="flex justify-center mt-4">
            <div className="gradient-divider" />
          </div>
          <p className="mt-5 font-body text-sm text-neutral-500 max-w-md mx-auto">
            Those who will lovingly guide {baby.firstName} on her spiritual journey
          </p>
        </motion.div>

        {/* Godmothers */}
        <div className="mb-12">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-heading text-xl text-amethyst-700 mb-6"
          >
            The Godmother
          </motion.h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-5">
            {godparents.godmothers.map((gm, idx) => (
              <PersonCard key={idx} name={gm.name} photo={gm.photo} index={idx} />
            ))}
          </div>
        </div>

        {/* Godfathers */}
        <div>
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-heading text-xl text-amethyst-700 mb-6"
          >
            The Godfather
          </motion.h3>
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
