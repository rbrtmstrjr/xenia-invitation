"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import invitationData from "@/data/invitationData.json";

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          {/* Left cloud panel */}
          <motion.div
            className="absolute top-0 left-0 w-1/2 h-full"
            initial={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
          >
            {/* Cloud base */}
            <div
              className="absolute inset-0"
              style={{
                background: "linear-gradient(135deg, #ebddff 0%, #f2dcf8 50%, #ffd3e9 100%)",
              }}
            />
            {/* Cloud puffs along the right edge */}
            <div className="absolute top-0 -right-16 w-32 h-full">
              {[10, 25, 40, 55, 70, 85].map((top, i) => (
                <motion.div
                  key={i}
                  className="absolute rounded-full"
                  style={{
                    top: `${top}%`,
                    right: i % 2 === 0 ? "-10px" : "5px",
                    width: `${80 + (i % 3) * 30}px`,
                    height: `${60 + (i % 2) * 25}px`,
                    background: "linear-gradient(135deg, #ebddff, #f2dcf8)",
                    filter: "blur(8px)",
                  }}
                  animate={{
                    x: [0, 4, 0],
                    scale: [1, 1.03, 1],
                  }}
                  transition={{
                    duration: 3 + i * 0.3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </div>
          </motion.div>

          {/* Right cloud panel */}
          <motion.div
            className="absolute top-0 right-0 w-1/2 h-full"
            initial={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
          >
            {/* Cloud base */}
            <div
              className="absolute inset-0"
              style={{
                background: "linear-gradient(225deg, #fff8d8 0%, #ffe8d4 50%, #ffd3e9 100%)",
              }}
            />
            {/* Cloud puffs along the left edge */}
            <div className="absolute top-0 -left-16 w-32 h-full">
              {[15, 30, 45, 60, 75, 90].map((top, i) => (
                <motion.div
                  key={i}
                  className="absolute rounded-full"
                  style={{
                    top: `${top}%`,
                    left: i % 2 === 0 ? "-10px" : "5px",
                    width: `${80 + (i % 3) * 30}px`,
                    height: `${60 + (i % 2) * 25}px`,
                    background: "linear-gradient(225deg, #fff8d8, #ffe8d4)",
                    filter: "blur(8px)",
                  }}
                  animate={{
                    x: [0, -4, 0],
                    scale: [1, 1.03, 1],
                  }}
                  transition={{
                    duration: 3 + i * 0.3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </div>
          </motion.div>

          {/* Center content — baby name */}
          <motion.div
            className="relative z-10 text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.p
              className="font-heading text-4xl sm:text-5xl md:text-6xl text-amethyst-800 tracking-wide mb-2"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            >
              {invitationData.baby.fullName}
            </motion.p>
            <p className="font-body text-xs tracking-[0.3em] uppercase text-amethyst-500">
              Christening Celebration
            </p>

            {/* Loading dots */}
            <div className="flex justify-center gap-1.5 mt-6">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="w-1.5 h-1.5 rounded-full bg-amethyst-400"
                  animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1.2, 0.8] }}
                  transition={{
                    duration: 1.2,
                    repeat: Infinity,
                    delay: i * 0.2,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
