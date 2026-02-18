"use client";

import { motion } from "framer-motion";
import invitationData from "@/data/invitationData.json";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } },
};

export default function StoryMessage() {
  const { invitation } = invitationData;

  return (
    <section className="py-16 sm:py-20">
      <div className="max-w-2xl mx-auto px-6 text-center">
        {/* Header */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-8"
        >
          <p className="font-body text-sm tracking-[0.3em] uppercase text-amethyst-500 mb-3">
            {invitation.subtitle}
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl text-amethyst-900">
            {invitation.heading}
          </h2>
          <div className="flex justify-center mt-4">
            <div className="gradient-divider" />
          </div>
        </motion.div>

        {/* Message */}
        <motion.p
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="font-body text-base sm:text-lg leading-relaxed text-neutral-700 mb-8"
        >
          {invitation.message}
        </motion.p>

        {/* Blessing */}
        <motion.p
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="font-heading text-lg sm:text-xl italic text-rose-600 leading-relaxed"
        >
          &ldquo;{invitation.blessing}&rdquo;
        </motion.p>
      </div>
    </section>
  );
}
