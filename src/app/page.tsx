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
