"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const typingText = "I'm Xenia Gail";
const CHAR_DELAY = 200;

export default function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(true);
  const [displayedText, setDisplayedText] = useState("");
  const [typingDone, setTypingDone] = useState(false);
  const [showInvite, setShowInvite] = useState(false);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  useEffect(() => {
    if (!isVisible) {
      document.body.style.overflow = "";
    }
  }, [isVisible]);

  useEffect(() => {
    if (displayedText.length < typingText.length) {
      const timer = setTimeout(() => {
        setDisplayedText(typingText.slice(0, displayedText.length + 1));
      }, CHAR_DELAY);
      return () => clearTimeout(timer);
    } else {
      setTypingDone(true);
      setTimeout(() => setShowInvite(true), 1200);
      setTimeout(() => setShowButton(true), 3000);
    }
  }, [displayedText]);

  const handleEnter = useCallback(() => {
    setIsVisible(false);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Left cloud panel */}
          <motion.div
            className="absolute top-0 left-0 w-1/2 h-full"
            exit={{ x: "-100%" }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
          >
            <div
              className="absolute inset-0"
              style={{
                background: "linear-gradient(135deg, #ebddff 0%, #f2dcf8 50%, #ffd3e9 100%)",
              }}
            />
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
                  animate={{ x: [0, 4, 0], scale: [1, 1.03, 1] }}
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
            exit={{ x: "100%" }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
          >
            <div
              className="absolute inset-0"
              style={{
                background: "linear-gradient(225deg, #fff8d8 0%, #ffe8d4 50%, #ffd3e9 100%)",
              }}
            />
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
                  animate={{ x: [0, -4, 0], scale: [1, 1.03, 1] }}
                  transition={{
                    duration: 3 + i * 0.3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </div>
          </motion.div>

          {/* Corner flowers — revealed with button */}
          <AnimatePresence>
            {showButton && (
              <>
                {/* Top left */}
                <div className="absolute -top-4 -left-4 w-48 sm:w-56 md:w-72 z-20 pointer-events-none"
                  style={{ transform: "scale(-1, -1)" }}>
                  <motion.img src="/images/decorations/flower.svg" alt=""
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="w-full h-auto" />
                </div>
                {/* Top right */}
                <div className="absolute -top-4 -right-4 w-48 sm:w-56 md:w-72 z-20 pointer-events-none"
                  style={{ transform: "scaleY(-1)" }}>
                  <motion.img src="/images/decorations/flower.svg" alt=""
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                    className="w-full h-auto" />
                </div>
                {/* Bottom left */}
                <div className="absolute -bottom-4 -left-4 w-48 sm:w-56 md:w-72 z-20 pointer-events-none"
                  style={{ transform: "scaleX(-1)" }}>
                  <motion.img src="/images/decorations/flower.svg" alt=""
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
                    className="w-full h-auto" />
                </div>
                {/* Bottom right */}
                <div className="absolute -bottom-4 -right-4 w-48 sm:w-56 md:w-72 z-20 pointer-events-none">
                  <motion.img src="/images/decorations/flower.svg" alt=""
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                    className="w-full h-auto" />
                </div>
              </>
            )}
          </AnimatePresence>

          {/* Center content */}
          <div className="relative z-10 text-center px-6 max-w-lg">
            {/* "Hello" — fixed, no typing */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="font-heading text-lg sm:text-xl text-amethyst-600 mb-2"
            >
              Hello
            </motion.p>

            {/* "I'm Xenia Gail" — typing animation, large */}
            <div className="min-h-[60px] sm:min-h-[75px] flex items-center justify-center mt-4 sm:mt-6">
              <p className="font-heading text-6xl sm:text-7xl md:text-8xl text-amethyst-800 tracking-wide sm:whitespace-nowrap uppercase font-light">
                {displayedText}
                {!typingDone && (
                  <motion.span
                    className="inline-block w-[2px] h-[0.9em] bg-amethyst-500 ml-0.5 align-middle"
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.6, repeat: Infinity }}
                  />
                )}
              </p>
            </div>

            {/* Invite text — revealed after typing finishes */}
            <AnimatePresence>
              {showInvite && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="mt-3 font-body text-sm sm:text-base text-amethyst-500 leading-relaxed"
                >
                  and you&apos;re invited to witness my 1st Birthday &amp; Christening
                </motion.p>
              )}
            </AnimatePresence>

            {/* View Invitation button */}
            <AnimatePresence>
              {showButton && (
                <motion.button
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  onClick={handleEnter}
                  className="mt-8 px-8 py-3 rounded-full font-body text-sm tracking-widest uppercase
                    text-white shadow-lg
                    hover:shadow-xl hover:scale-105
                    active:scale-95
                    transition-all duration-200 cursor-pointer"
                  style={{ background: "linear-gradient(135deg, #b963e9, #de549e)" }}
                >
                  View Invitation
                </motion.button>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
