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
    <footer>
      {/* Top lavender border */}
      <div
        className="w-full h-24 sm:h-32"
        style={{
          backgroundImage: "url(/images/decorations/lavander.png)",
          backgroundRepeat: "repeat-x",
          backgroundSize: "auto 100%",
          backgroundPosition: "center",
        }}
      />

      <div className="max-w-2xl mx-auto px-6 text-center py-16 sm:py-20">
        {/* Header */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-8"
        >
          <div className="flex justify-center mb-4">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-amethyst-400" strokeWidth="1.5">
              <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 000-7.78z" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <p className="font-body text-sm tracking-[0.3em] uppercase text-amethyst-800 mb-3">
            {parentsMessage.subtitle}
          </p>
          <h2 className="font-cursive text-4xl sm:text-5xl text-amethyst-800">
            {parentsMessage.heading}
          </h2>
          <div className="flex justify-center mt-4">
            <div className="gradient-divider" />
          </div>
        </motion.div>

        {/* Message */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="font-body text-base sm:text-lg leading-relaxed text-neutral-700 mb-8 space-y-4"
        >
          {parentsMessage.message.split("\n\n").map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </motion.div>

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
          <p className="font-cursive text-4xl text-gradient-primary mb-2 overflow-visible py-2 leading-relaxed">
            {baby.fullName}
          </p>
          <p className="font-body text-xs text-neutral-400">
            Made with love for {baby.fullName}&apos;s Christening
          </p>
        </motion.div>
      </div>

      {/* Bottom lavender border */}
      <div
        className="w-full h-24 sm:h-32"
        style={{
          backgroundImage: "url(/images/decorations/lavander.png)",
          backgroundRepeat: "repeat-x",
          backgroundSize: "auto 100%",
          backgroundPosition: "center",
        }}
      />
    </footer>
  );
}
