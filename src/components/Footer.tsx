"use client";

import { motion } from "framer-motion";
import invitationData from "@/data/invitationData.json";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } },
};

export default function Footer() {
  const { parentsMessage, baby } = invitationData;

  return (
    <footer className="py-16 sm:py-24 pb-12">
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
            {parentsMessage.subtitle}
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl text-amethyst-900">
            {parentsMessage.heading}
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
          {parentsMessage.message}
        </motion.p>

        {/* Sign off */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <p className="font-heading text-sm italic text-amethyst-600 mb-1">
            {parentsMessage.signOff}
          </p>
          <p className="font-heading text-lg text-amethyst-800">
            {parentsMessage.parents}
          </p>
        </motion.div>

        {/* Baby name signature */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-12 pt-8 border-t border-amethyst-200/30"
        >
          <p className="font-script text-3xl text-gradient-primary mb-2">
            {baby.fullName}
          </p>
          <p className="font-body text-xs text-neutral-400">
            Made with love for {baby.fullName}&apos;s Christening
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
