"use client";

import { motion } from "framer-motion";
import invitationData from "@/data/invitationData.json";

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: "easeOut" as const },
  }),
};

function DetailCard({
  icon,
  title,
  children,
  index,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
  index: number;
}) {
  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="group p-6 rounded-2xl glass-card shadow-sm
        hover:shadow-md hover:border-rose-300/20 transition-all duration-300"
    >
      <motion.div
        className="w-11 h-11 rounded-full flex items-center justify-center
          bg-amethyst-100/50 text-amethyst-600 mb-4
          group-hover:bg-rose-100/50 transition-colors duration-300"
        whileHover={{ scale: 1.1, rotate: 5 }}
      >
        {icon}
      </motion.div>
      <h3 className="font-heading text-lg text-amethyst-900 mb-2">{title}</h3>
      <div className="font-body text-sm text-neutral-600 leading-relaxed">{children}</div>
    </motion.div>
  );
}

function CalendarIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M16 2v4M8 2v4M3 10h18" />
    </svg>
  );
}
function ChurchIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 21H6a1 1 0 0 1-1-1v-8l7-7 7 7v8a1 1 0 0 1-1 1z" />
      <path d="M12 3v4M9 21v-6h6v6M10 5h4" />
    </svg>
  );
}
function VenueIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 21h18" />
      <path d="M5 21V7l7-4 7 4v14" />
      <path d="M9 21v-4h6v4" />
    </svg>
  );
}
function DressIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6.5 2H10l2 5.5L14 2h3.5" />
      <path d="M6 10s-2 1-2 4 3 8 8 8 8-5 8-8-2-4-2-4" />
      <path d="M12 7.5v14.5" />
    </svg>
  );
}

export default function EventDetails() {
  const { event } = invitationData;

  return (
    <section className="py-16 sm:py-20">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex justify-center mb-4">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-amethyst-400" strokeWidth="1.5">
              <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 16.8l-6.2 4.5 2.4-7.4L2 9.4h7.6z" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <p className="font-body text-sm tracking-[0.3em] uppercase text-amethyst-800 mb-3">
            Celebration Details
          </p>
          <h2 className="font-cursive text-4xl sm:text-5xl text-amethyst-800">
            A Sacred Celebration
          </h2>
          <div className="flex justify-center mt-4">
            <div className="gradient-divider" />
          </div>
        </motion.div>

        {/* 4-card grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <DetailCard icon={<CalendarIcon />} title="Date & Time" index={0}>
            <p className="font-medium text-amethyst-800">{event.displayDate}</p>
            <p className="mt-1">{event.time}</p>
          </DetailCard>

          <DetailCard icon={<ChurchIcon />} title="Ceremony" index={1}>
            <p className="font-medium text-amethyst-800">{event.church.name}</p>
            <p className="mt-1">{event.church.address}</p>
          </DetailCard>

          <DetailCard icon={<VenueIcon />} title="Reception" index={2}>
            <p className="font-medium text-amethyst-800">{event.reception.name}</p>
            <p className="mt-1">{event.reception.address}</p>
          </DetailCard>

          <DetailCard icon={<DressIcon />} title="What to Wear" index={3}>
            <p>{event.dressCode}</p>
          </DetailCard>
        </div>
      </div>
    </section>
  );
}
