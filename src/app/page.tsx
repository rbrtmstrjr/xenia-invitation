"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import LoadingScreen from "@/components/LoadingScreen";
import Hero from "@/components/Hero";
import StoryMessage from "@/components/StoryMessage";
import CountdownTimer from "@/components/CountdownTimer";
import PhotoGallery from "@/components/PhotoGallery";
import GodparentsSection from "@/components/GodparentsSection";
import EventDetails from "@/components/EventDetails";
import Footer from "@/components/Footer";

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      <LoadingScreen onComplete={() => setLoaded(true)} />
      {loaded && (
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Hero />
          <div className="flex justify-center py-2 sm:py-3">
            <svg viewBox="0 0 200 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-64 sm:w-80 md:w-96 text-amethyst-400">
              <line x1="0" y1="12" x2="200" y2="12" stroke="currentColor" strokeWidth="0.8" />
              <circle cx="100" cy="12" r="2.5" fill="currentColor" />
              <ellipse cx="46" cy="8" rx="5" ry="2.5" transform="rotate(-30 46 8)" stroke="currentColor" strokeWidth="0.7" fill="none" />
              <path d="M60,12 Q55,6 48,8" stroke="currentColor" strokeWidth="0.8" fill="none" />
              <ellipse cx="54" cy="6" rx="4.5" ry="2" transform="rotate(-40 54 6)" stroke="currentColor" strokeWidth="0.7" fill="none" />
              <path d="M65,12 Q62,5 56,6" stroke="currentColor" strokeWidth="0.8" fill="none" />
              <ellipse cx="64" cy="8" rx="4" ry="1.8" transform="rotate(-25 64 8)" stroke="currentColor" strokeWidth="0.7" fill="none" />
              <path d="M72,12 Q70,7 65,8" stroke="currentColor" strokeWidth="0.8" fill="none" />
              <ellipse cx="73" cy="9" rx="3.5" ry="1.5" transform="rotate(-20 73 9)" stroke="currentColor" strokeWidth="0.7" fill="none" />
              <path d="M80,12 Q78,8 74,9" stroke="currentColor" strokeWidth="0.8" fill="none" />
              <ellipse cx="83" cy="10" rx="3" ry="1.3" transform="rotate(-15 83 10)" stroke="currentColor" strokeWidth="0.7" fill="none" />
              <path d="M88,12 Q87,9 84,10" stroke="currentColor" strokeWidth="0.8" fill="none" />
              <ellipse cx="154" cy="8" rx="5" ry="2.5" transform="rotate(30 154 8)" stroke="currentColor" strokeWidth="0.7" fill="none" />
              <path d="M140,12 Q145,6 152,8" stroke="currentColor" strokeWidth="0.8" fill="none" />
              <ellipse cx="146" cy="6" rx="4.5" ry="2" transform="rotate(40 146 6)" stroke="currentColor" strokeWidth="0.7" fill="none" />
              <path d="M135,12 Q138,5 144,6" stroke="currentColor" strokeWidth="0.8" fill="none" />
              <ellipse cx="136" cy="8" rx="4" ry="1.8" transform="rotate(25 136 8)" stroke="currentColor" strokeWidth="0.7" fill="none" />
              <path d="M128,12 Q130,7 135,8" stroke="currentColor" strokeWidth="0.8" fill="none" />
              <ellipse cx="127" cy="9" rx="3.5" ry="1.5" transform="rotate(20 127 9)" stroke="currentColor" strokeWidth="0.7" fill="none" />
              <path d="M120,12 Q122,8 126,9" stroke="currentColor" strokeWidth="0.8" fill="none" />
              <ellipse cx="117" cy="10" rx="3" ry="1.3" transform="rotate(15 117 10)" stroke="currentColor" strokeWidth="0.7" fill="none" />
              <path d="M112,12 Q113,9 116,10" stroke="currentColor" strokeWidth="0.8" fill="none" />
            </svg>
          </div>
          <StoryMessage />
          <CountdownTimer />
          <PhotoGallery />
          <GodparentsSection />
          <EventDetails />
          <Footer />
        </motion.main>
      )}
    </>
  );
}
