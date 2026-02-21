"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import invitationData from "@/data/invitationData.json";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
}

function calculateTimeLeft(targetDate: string): TimeLeft {
  const diff = new Date(targetDate).getTime() - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0 };
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
  };
}

function TimeBlock({ value, label }: { value: number; label: string }) {
  return (
    <motion.div
      className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl flex flex-col items-center justify-center
        shadow-sm animate-pulse-glow"
      style={{ backgroundColor: "white" }}
    >
      <motion.span
        key={value}
        initial={{ y: -6, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="font-heading text-3xl sm:text-4xl text-amethyst-800 font-extrabold leading-none"
      >
        {String(value).padStart(2, "0")}
      </motion.span>
      <span className="mt-1 text-[10px] sm:text-xs font-body tracking-widest uppercase text-amethyst-800">
        {label}
      </span>
    </motion.div>
  );
}

function LavenderBorder({ flip = false }: { flip?: boolean }) {
  return (
    <div
      className={`w-full h-20 sm:h-24 ${flip ? "scale-y-[-1]" : ""}`}
      style={{
        backgroundImage: "url(/images/decorations/lavander.png)",
        backgroundRepeat: "repeat-x",
        backgroundSize: "auto 100%",
        backgroundPosition: "center",
        margin: flip ? "-8px 0 0 0" : "0 0 -8px 0",
      }}
    />
  );
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setTimeLeft(calculateTimeLeft(invitationData.event.date));
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(invitationData.event.date));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  if (!mounted) return null;

  return (
    <section className="py-4 sm:py-8">
      <div className="px-0 sm:px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          {/* Top lavender border */}
          <LavenderBorder />

          {/* Pastel gradient container */}
          <div
            className="rounded-sm px-6 py-10 sm:py-14 text-center shadow-sm"
            style={{ background: "linear-gradient(160deg, #ebddff 0%, #f2dcf8 25%, #ffd3e9 50%, #ffe8d4 75%, #fff8d8 100%)" }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <div className="flex justify-center mb-4">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-amethyst-400" strokeWidth="1.5">
                  <path d="M6 2h12M6 22h12M7 2v4a6 6 0 006 6 6 6 0 00-6 6v4M17 2v4a6 6 0 01-6 6 6 6 0 006 6v4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <p className="font-body text-sm tracking-[0.3em] uppercase text-amethyst-800">
                Counting down to the blessed day
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="flex justify-center gap-5 sm:gap-8"
            >
              <motion.div variants={itemVariants}>
                <TimeBlock value={timeLeft.days} label="Days" />
              </motion.div>
              <motion.div variants={itemVariants}>
                <TimeBlock value={timeLeft.hours} label="Hours" />
              </motion.div>
              <motion.div variants={itemVariants}>
                <TimeBlock value={timeLeft.minutes} label="Minutes" />
              </motion.div>
            </motion.div>
          </div>

          {/* Bottom lavender border */}
          <LavenderBorder flip />
        </motion.div>
      </div>
    </section>
  );
}
