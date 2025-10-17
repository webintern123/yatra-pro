// src/components/Land2.tsx
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
  { x: 0, z: 0, scale: 1.25, opacity: 1 },
  { x: 90, z: -300, scale: 1.05, opacity: 0.9 },
  { x: 180, z: -600, scale: 0.95, opacity: 0.75 },
  { x: 300, z: -900, scale: 0.85, opacity: 0.6 },
];

const Land2: React.FC = () => {
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
  );
};

export default Land2;
