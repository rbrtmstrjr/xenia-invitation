"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useMotionValue } from "framer-motion";
import Image from "next/image";
import invitationData from "@/data/invitationData.json";

const rotations = [-6, 4, -3, 5, -4, 3, -5, 2, -4, 6, -2, 4, -5, 3];
const sagOffsets = [0, 10, 18, 24, 20, 12, 4, 12, 20, 24, 18, 10, 4, 14];

function Clothespin() {
  return (
    <svg width="20" height="40" viewBox="0 0 20 40" fill="none">
      <rect x="4" y="0" width="12" height="7" rx="2" fill="#c9a86c" />
      <circle cx="10" cy="9.5" r="3" fill="none" stroke="#b8935a" strokeWidth="1.5" />
      <rect x="4" y="12" width="4.5" height="24" rx="1.5" fill="#d4b07a" />
      <rect x="11.5" y="12" width="4.5" height="24" rx="1.5" fill="#c9a56c" />
      <path d="M8.5 32 L10 40 L11.5 32" fill="none" stroke="#b8935a" strokeWidth="0.5" />
    </svg>
  );
}

function Lightbox({
  image,
  onClose,
}: {
  image: { src: string; alt: string };
  onClose: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8
        bg-black/80 backdrop-blur-sm cursor-pointer"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`Photo: ${image.alt}`}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="relative max-w-4xl w-full max-h-[85vh] cursor-default"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden">
          <Image src={image.src} alt={image.alt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 80vw" />
        </div>
        <button
          onClick={onClose}
          className="absolute -top-2 -right-2 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm
            flex items-center justify-center text-white/80 hover:text-white hover:bg-white/20 transition-colors"
          aria-label="Close lightbox"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>
      </motion.div>
    </motion.div>
  );
}

export default function PhotoGallery() {
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);
  const [dragLimit, setDragLimit] = useState(0);
  const isDragging = useRef(false);
  const constraintsRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const { gallery } = invitationData;

  useEffect(() => {
    function calcLimit() {
      if (!constraintsRef.current) return;
      const container = constraintsRef.current;
      const scrollContent = container.querySelector<HTMLElement>("[data-drag-track]");
      if (!scrollContent) return;
      const overflow = scrollContent.scrollWidth - container.offsetWidth;
      setDragLimit(overflow > 0 ? -overflow - 32 : 0);
    }
    calcLimit();
    window.addEventListener("resize", calcLimit);
    return () => window.removeEventListener("resize", calcLimit);
  }, []);

  return (
    <section className="py-16 sm:py-20 overflow-hidden">
      <div className="px-0 sm:px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="font-body text-sm tracking-[0.3em] uppercase text-neutral-500 mb-3">
            Captured Memories
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl text-amethyst-900">
            Precious Moments
          </h2>
          <div className="flex justify-center mt-4">
            <div className="gradient-divider" />
          </div>
        </motion.div>

        {/* Clothesline */}
        <div className="relative overflow-hidden" ref={constraintsRef}>
          {/* Curved rope SVG — follows the photos */}
          <motion.svg
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="absolute top-0 left-0 w-full h-14 pointer-events-none z-0"
            viewBox="0 0 1200 56"
            preserveAspectRatio="none"
            fill="none"
          >
            <path
              d="M-20,8 C150,6 250,28 400,34 C550,40 650,42 750,38 C850,34 950,22 1100,12 L1220,8"
              stroke="#c4a06a"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          </motion.svg>

          {/* Photos on the line — drag to scroll horizontally */}
          <motion.div
            drag="x"
            dragConstraints={{ left: dragLimit, right: 0 }}
            dragElastic={0.1}
            dragTransition={{ bounceStiffness: 300, bounceDamping: 30 }}
            onDragStart={() => { isDragging.current = true; }}
            onDragEnd={() => { setTimeout(() => { isDragging.current = false; }, 100); }}
            style={{ x }}
            className="flex gap-5 sm:gap-7 lg:gap-9 pt-4 pb-6 px-4
              cursor-grab active:cursor-grabbing relative z-10"
            data-drag-track
          >
            {gallery.map((img, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ delay: idx * 0.12, duration: 0.6, ease: "easeOut" }}
                className="relative group cursor-pointer shrink-0"
                style={{
                  rotate: `${rotations[idx % rotations.length]}deg`,
                  marginTop: `${sagOffsets[idx % sagOffsets.length]}px`,
                }}
                onClick={() => { if (!isDragging.current) setSelectedImage(img); }}
              >
                {/* Clothespin */}
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-10">
                  <Clothespin />
                </div>

                {/* Polaroid frame */}
                <motion.div
                  whileHover={{ scale: 1.08, rotate: 0, y: -6 }}
                  transition={{ duration: 0.25 }}
                  className="bg-white p-2 pb-5 rounded-sm shadow-md
                    hover:shadow-xl transition-shadow duration-300
                    w-32 sm:w-36 md:w-40 lg:w-44"
                >
                  <div className="relative aspect-[3/4] overflow-hidden rounded-sm">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 130px, 176px"
                      loading="lazy"
                    />
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <Lightbox image={selectedImage} onClose={() => setSelectedImage(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}
