// App.tsx
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Slide = {
  id: number;
  title: string;
  desc: string;
  img: string;
};

const slides: Slide[] = [
  {
    id: 1,
    title: "Public Transport Escalators",
    desc: "",
    img: "/Yatra website_Public transport escalators 400-300.png",
  },
  {
    id: 2,
    title: "Passenger Elevators",
    desc: "",
    img: "/Yatra website_Passenger elevators (size - 400-300) .png",
  },
  {
    id: 3,
    title: "MRL Elevators",
    desc: "",
    img: "/Yatra website_MRL elevators(size - 400-300).png",
  },
];

export default function App() {
  const [current, setCurrent] = useState(0);

  // autoplay every 5s
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-hidden text-white">
      {/* Background Image */}
      <AnimatePresence mode="wait">
        <motion.div
          key={slides[current].id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <img
            src={slides[current].img}
            alt={slides[current].title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-between h-screen max-w-7xl mx-auto px-8">
        {/* Main Title/Desc (Optional – you can remove if not needed) */}
        <div className="max-w-xl">
          <motion.h2
            key={slides[current].title}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-bold mb-6"
          >
            {slides[current].title}
          </motion.h2>
          <motion.p
            key={slides[current].desc}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-lg leading-relaxed text-gray-200"
          >
            {slides[current].desc}
          </motion.p>
        </div>

        {/* Vertical Thumbnails with Transparent Overlay Title */}
        <div className="w-52 flex flex-col gap-4 overflow-y-auto scrollbar-hide max-h-[80vh]">
          {slides.map((slide, i) => (
            <motion.div
              key={slide.id}
              whileHover={{ scale: 1.05 }}
              onClick={() => setCurrent(i)}
              className={`relative cursor-pointer rounded-xl overflow-hidden transition-all shadow-lg ${
                i === current ? "ring-4 ring-blue-500 scale-105" : "opacity-70"
              }`}
            >
              <img
                src={slide.img}
                alt={slide.title}
                className="w-full h-32 object-cover"
              />
              {/* Transparent Overlay with Title */}
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <h3 className="text-sm font-semibold text-white text-center px-2">
                  {slide.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
