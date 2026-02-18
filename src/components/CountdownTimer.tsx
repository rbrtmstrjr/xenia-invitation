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
    <div className="flex flex-col items-center">
      <motion.div
        className="w-22 h-22 sm:w-28 sm:h-28 rounded-2xl flex items-center justify-center
          shadow-sm animate-pulse-glow"
        style={{ backgroundColor: "#7E30FF" }}
      >
        <motion.span
          key={value}
          initial={{ y: -8, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="font-heading text-4xl sm:text-5xl text-white font-extrabold"
        >
          {String(value).padStart(2, "0")}
        </motion.span>
      </motion.div>
      <span className="mt-3 text-xs sm:text-sm font-body tracking-widest uppercase text-neutral-500">
        {label}
      </span>
    </div>
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
    <section className="py-12 sm:py-16">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-body text-sm tracking-[0.3em] uppercase text-neutral-500 mb-8"
        >
          Counting down to the blessed day
        </motion.p>

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
    </section>
  );
}
