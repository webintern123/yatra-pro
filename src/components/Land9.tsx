// src/components/HeroSection.tsx
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface HeroThumb {
  id: number;
  src: string;
  alt: string;
}

const heroThumbs: HeroThumb[] = [
  { id: 1, src: "/Yatra website_Commer escala(size - 400-300).png", alt: "thumb-4" },
  { id: 2, src: "/Yatra website_Passenger elevators (size - 400-300) .png", alt: "thumb-3" },
  { id: 3, src: "/Yatra website_MRL elevators(size - 400-300).png", alt: "thumb-2" },
  { id: 4, src: "/Yatra website_Public transport escalators 400-300.png", alt: "thumb-1" },
  { id: 5, src: "/Yatra website_Hydraulic elevators(size - 400-300).png", alt: "thumb-5" },
  { id: 6, src: "/Yatra website_Capsule elevators(size - 400-300) .png", alt: "thumb-6" },
  { id: 7, src: "/Yatra website_Home elevators  (size - 400-300) .png", alt: "thumb-7" },
];

const positions = [
  { x: -300, z: -900, scale: 0.85, opacity: 0.6 },
  { x: -180, z: -600, scale: 0.95, opacity: 0.75 },
  { x: -90, z: -300, scale: 1.05, opacity: 0.9 },
  { x: 0, z: 0, scale: 1.25, opacity: 1 }, // center focus
  { x: 90, z: -300, scale: 1.05, opacity: 0.9 },
  { x: 180, z: -600, scale: 0.95, opacity: 0.75 },
  { x: 300, z: -900, scale: 0.85, opacity: 0.6 },
];

const HeroSection: React.FC = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % heroThumbs.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const getPosition = (i: number) => {
    const posIndex = (i - index + heroThumbs.length) % heroThumbs.length;
    return positions[posIndex] || positions[0];
  };

  return (
    <section className="relative w-full h-screen bg-white flex flex-col justify-start items-center text-center px-4 overflow-hidden pt-32">
      
      {/* Hero Text */}
      <h1 className="text-5xl md:text-6xl font-bold mb-4 animate-fade-in text-[#214361]">
        YATRA ELEVATORS & ESCALATORS
      </h1>
      <p className="text-lg md:text-2xl mb-8 animate-fade-in delay-200 text-gray-600">
        Modern, Smart & Safe Elevator Cabins & Escalators
      </p>

      {/* CTA Buttons */}
      <div className="flex gap-6 animate-fade-in delay-400 mb-12">
        <button className="px-6 py-3 bg-[#214361] text-white font-semibold rounded-full hover:bg-gray-800 transition">
          Explore Products
        </button>
        <button className="px-6 py-3 border-2 border-[#214361] text-[#214361] font-semibold rounded-full hover:bg-[#214361] hover:text-white transition">
          Request a Demo
        </button>
      </div>

      {/* Rotating Cabin Carousel */}
      <div className="relative w-full h-[850px] flex items-center justify-center overflow-hidden perspective-[1500px]">
        <div className="relative w-full h-full flex items-center justify-center transform-style-preserve-3d">
          {heroThumbs.map((thumb, i) => {
            const { x, z, scale, opacity } = getPosition(i);
            return (
              <motion.div
                key={thumb.id}
                className="absolute"
                animate={{
                  x,
                  z,
                  scale,
                  opacity,
                }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                style={{ zIndex: i === index ? 50 : 10 }}
              >
                <img
                  src={thumb.src}
                  alt={thumb.alt}
                  className="w-[480px] rounded-2xl shadow-2xl"
                />
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Tailwind Animations */}
      <style>{`
        @keyframes fade-in {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in { animation: fade-in 1s forwards; }
      `}</style>
    </section>
  );
};

export default HeroSection;
