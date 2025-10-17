// app/page.tsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const elevatorTypes = [
  {
    id: 1,
    name: "Passenger Elevator",
    image: "/Yatra website_Capsule elevators(size - 400-300) .png",
    bg: "/Yatra website_Capsule elevators(size - 400-300) .png",
  },
  {
    id: 2,
    name: "Hospital Elevator",
    image: "/Yatra website_Home elevators  (size - 400-300) .png",
    bg: "/Yatra website_Home elevators  (size - 400-300) .png",
  },
  {
    id: 3,
    name: "Commercial Elevator",
    image: "/Yatra website_Passenger elevators (size - 400-300) .png",
    bg: "/Yatra website_Passenger elevators (size - 400-300) .png",
  },
];

export default function HeroSection() {
  const [activeBg, setActiveBg] = useState(elevatorTypes[0].bg);

  return (
    <section className="relative min-h-screen flex items-center justify-start overflow-hidden">
      {/* 🔥 Background Image with fade animation (90% size) */}
      <div className="absolute inset-0 flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.img
            key={activeBg}
            src={activeBg}
            alt="Background"
            className="w-[95%] h-[90%] object-cover rounded-2xl shadow-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          />
        </AnimatePresence>
      </div>

      {/* Content (Glass Cards) */}
      <div className="relative z-10 flex flex-col gap-8 p-10 md:p-20 w-full max-w-lg">
        {elevatorTypes.map((item) => (
          <motion.div
            key={item.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => setActiveBg(item.bg)}
            className={`cursor-pointer rounded-2xl p-6 bg-white/30 backdrop-blur-sm shadow-xl border border-white/40 transition ${
              activeBg === item.bg ? "ring-4 ring-[#214361]" : ""
            }`}
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-40 object-cover rounded-xl"
            />
            <h3 className="mt-4 text-xl font-semibold text-white drop-shadow">
              {item.name}
            </h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
