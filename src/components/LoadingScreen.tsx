"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const typingText = "Xenia Gail";
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
          {/* Background */}
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(160deg, #ebddff 0%, #f2dcf8 25%, #ffd3e9 50%, #ffe8d4 75%, #fff8d8 100%)",
            }}
          />

          {/* Scattered clouds */}
          <div className="absolute inset-0 z-[1] pointer-events-none">
            <svg width="0" height="0">
              <defs>
                <linearGradient id="cloudA" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ebddff" stopOpacity="0.7" />
                  <stop offset="100%" stopColor="#ffd3e9" stopOpacity="0.5" />
                </linearGradient>
                <linearGradient id="cloudB" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ffd3e9" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#fff8d8" stopOpacity="0.5" />
                </linearGradient>
                <linearGradient id="cloudC" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ffe8d4" stopOpacity="0.65" />
                  <stop offset="100%" stopColor="#ebddff" stopOpacity="0.45" />
                </linearGradient>
              </defs>
            </svg>
            {[
              { top: "-2%", left: "-5%", w: 320, h: 180, fill: "url(#cloudA)", blur: 6, dur: 5, dx: 8, dy: -4, path: "M25,130 Q8,95 40,70 Q28,35 75,25 Q100,4 150,18 Q200,0 250,28 Q290,18 305,55 Q320,78 298,108 Q310,140 268,152 Q220,165 170,148 Q118,160 68,145 Q30,155 25,130 Z" },
              { top: "12%", left: "65%", w: 200, h: 110, fill: "url(#cloudB)", blur: 5, dur: 4.5, dx: -6, dy: -3, path: "M15,78 Q5,55 22,40 Q15,18 45,14 Q62,2 88,10 Q118,0 148,15 Q172,8 185,32 Q200,45 185,65 Q192,82 165,88 Q135,96 105,85 Q72,94 42,84 Q18,90 15,78 Z" },
              { top: "72%", left: "60%", w: 280, h: 155, fill: "url(#cloudA)", blur: 7, dur: 5.5, dx: -7, dy: 4, path: "M22,110 Q6,82 32,58 Q42,28 85,35 Q115,10 158,18 Q198,2 235,25 Q265,15 275,48 Q288,68 270,95 Q280,122 242,132 Q200,145 158,130 Q112,142 68,128 Q30,138 22,110 Z" },
              { top: "85%", left: "5%", w: 180, h: 100, fill: "url(#cloudC)", blur: 5, dur: 4, dx: 5, dy: 3, path: "M12,72 Q4,52 20,38 Q12,16 40,12 Q55,1 80,8 Q105,0 132,14 Q155,8 168,30 Q180,42 168,60 Q175,76 150,82 Q122,90 95,78 Q65,86 38,78 Q16,84 12,72 Z" },
              { top: "30%", left: "-8%", w: 250, h: 138, fill: "url(#cloudB)", blur: 6, dur: 4.8, dx: 10, dy: -5, path: "M18,98 Q5,72 28,52 Q18,25 58,20 Q80,3 118,14 Q155,0 192,20 Q222,12 238,42 Q250,58 235,82 Q245,105 210,115 Q175,128 138,112 Q100,125 62,110 Q28,120 18,98 Z" },
              { top: "55%", left: "15%", w: 160, h: 90, fill: "url(#cloudC)", blur: 4, dur: 3.8, dx: 6, dy: -3, path: "M10,64 Q3,46 18,34 Q10,14 35,10 Q48,1 70,7 Q92,0 115,12 Q135,7 148,26 Q160,38 148,54 Q155,68 130,74 Q105,82 82,70 Q56,78 32,68 Q14,74 10,64 Z" },
              { top: "5%", left: "25%", w: 140, h: 78, fill: "url(#cloudA)", blur: 4, dur: 3.5, dx: -4, dy: 3, path: "M8,56 Q2,40 15,28 Q8,12 30,8 Q42,1 60,6 Q80,0 100,10 Q118,5 128,22 Q140,32 128,48 Q134,60 112,65 Q90,72 70,60 Q48,68 28,60 Q12,65 8,56 Z" },
              { top: "42%", left: "75%", w: 190, h: 105, fill: "url(#cloudC)", blur: 5, dur: 4.2, dx: -8, dy: -2, path: "M14,75 Q4,54 22,40 Q14,18 42,13 Q58,1 85,9 Q112,0 140,14 Q165,7 178,30 Q190,44 178,62 Q185,78 158,84 Q130,92 100,80 Q70,90 42,80 Q18,86 14,75 Z" },
            ].map((cloud, i) => (
              <motion.div
                key={i}
                className="absolute"
                style={{ top: cloud.top, left: cloud.left, width: cloud.w, height: cloud.h }}
                animate={{ x: [0, cloud.dx, 0], y: [0, cloud.dy, 0] }}
                transition={{
                  duration: cloud.dur,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.3,
                }}
              >
                <svg viewBox={`0 0 ${cloud.w} ${cloud.h}`} className="w-full h-full" style={{ filter: `blur(${cloud.blur}px)` }}>
                  <path d={cloud.path} fill={cloud.fill} />
                </svg>
              </motion.div>
            ))}
          </div>

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
              Hello I&apos;m
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
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.2, ease: "easeInOut" }}
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
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
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
