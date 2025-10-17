// src/App.tsx
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Slide = {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  specs: string[];
};

const slides: Slide[] = [
  {
    id: 1,
    title: "Passenger Elevator",
    subtitle: "Smart & Safe",
    image: "/Yatra website_Home elevators  (size - 400-300) .png",
    specs: ["1.5 m/s Speed", "13 Persons", "1000 Kg Capacity"],
  },
  {
    id: 2,
    title: "Commercial Elevator",
    subtitle: "Reliable & Strong",
    image: "/Yatra website_Commer escala(size - 400-300).png",
    specs: ["2.5 m/s Speed", "20 Persons", "1600 Kg Capacity"],
  },
  {
    id: 3,
    title: "Escalator",
    subtitle: "Modern & Efficient",
    image: "/Yatra website_Passenger elevators (size - 400-300) .png",
    specs: ["35° Inclination", "0.65 m/s Speed", "Energy Efficient"],
  },
];

export default function App() {
  const [active, setActive] = useState(0);

  // Handle scroll (mousewheel) to change slides
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (e.deltaY > 0) {
        setActive((prev) => (prev + 1) % slides.length);
      } else {
        setActive((prev) => (prev - 1 + slides.length) % slides.length);
      }
    };
    window.addEventListener("wheel", handleWheel);
    return () => window.removeEventListener("wheel", handleWheel);
  }, []);

  return (
    <main className="relative w-full h-screen overflow-hidden bg-white perspective-1000">
      {/* Logo */}
      <div className="absolute top-5 left-10 z-20 font-kaushan text-2xl text-[#214361]">
        Yatra Elevators
      </div>

    {/* Side Number Buttons (left side, bottom) */}
<div className="absolute left-10 bottom-10 z-20 flex flex-col gap-4">
  {slides.map((_, idx) => (
    <button
      key={idx}
      onClick={() => setActive(idx)}
      className={`w-10 h-10 rounded-full border-2 flex items-center justify-center font-bold transition
        ${
          active === idx
            ? "bg-[#214361] border-[#214361] text-white scale-110"
            : "bg-transparent border-[#214361] text-[#214361] hover:bg-[#214361] hover:text-white"
        }`}
    >
      {idx + 1}
    </button>
  ))}
</div>

      {/* Flip Animation */}
      <AnimatePresence mode="wait">
        <motion.div
          key={slides[active].id}
          initial={{ rotateX: -90, opacity: 0, transformOrigin: "top center" }}
          animate={{ rotateX: 0, opacity: 1 }}
          exit={{ rotateX: 90, opacity: 0, transformOrigin: "bottom center" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0 flex flex-col items-center justify-center text-[#214361]"
        >
          {/* Left Panel (grey block for text area) */}
          <div className="absolute left-0 top-0 w-2/5 h-full bg-gray-100 -z-10" />
          {/* Right Panel (blue block for image) */}
          <div className="absolute right-0 top-0 w-3/5 h-full bg-[#214361] -z-10" />

          {/* Text */}
          <div className="absolute top-1/4 left-12">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-[#214361]/80 font-kaushan text-3xl"
            >
              {slides[active].subtitle}
            </motion.div>
            <motion.h1
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-7xl md:text-8xl font-extrabold uppercase text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]"
            >
              {slides[active].title}
            </motion.h1>
          </div>

          {/* Image */}
          <motion.div
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="w-3/5 mt-28"
          >
            <img
              src={slides[active].image}
              alt={slides[active].title}
              className="object-contain w-full h-full"
            />
          </motion.div>

          {/* Specs */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1 }}
            className="absolute bottom-10 left-1/3 flex items-center gap-10 text-[#214361]"
          >
            {slides[active].specs.map((spec, idx) => (
              <span key={idx} className="text-lg">
                {spec}
              </span>
            ))}
            <button className="px-6 py-2 border border-[#214361] rounded-full hover:bg-[#214361] hover:text-white transition">
              Explore More →
            </button>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </main>
  );
}
