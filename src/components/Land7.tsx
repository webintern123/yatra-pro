import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

/* ---------- Types ---------- */
type Slide = {
  id: number;
  name: string;
  desc: string;
  color: string;
  imgUrl: string;
  topSpeed: number;
  mph: number;
  mileRange: number;
};

/* ---------- Data (replace with your actual elevator images) ---------- */
const elevatorImg = "/Yatra website_MRL elevators(size - 400-300).png";
const escalatorImg = "/Yatra website_Commer escala(size - 400-300).png";
const hospital = "/Yatra website_Hospital elevators(size - 400-300).png";
const mrl = "/Yatra website400x600_Public transport escalators.png";

const slides: Slide[] = [
  {
    id: 1,
    name: "Passenger Elevator",
    desc: "Yatra’s Passenger Elevators are contemplatively designed to provide serene, calm and most significant vertical mobility in a diverse architectural environment to deliver smooth, safe, and energy efficient vertical mobility for residential and commercial buildings alike.",
    color: "#214361",
    imgUrl: elevatorImg,
    topSpeed: 1.75,
    mph: 1.2,
    mileRange: 20,
  },
  {
    id: 2,
    name: "Commercial Escalator",
    desc: "Yatra’s Commercial Escalators designed for people and users where those deal with high Standards visuals and uncompromisable Security Systems. Developed for malls, office complexes, convention centres, and public spaces, our elevators and escalators. ",
    color: "#214361",
    imgUrl: escalatorImg,
    topSpeed: 0.9,
    mph: 1.0,
    mileRange: 15,
  },
  {
    id: 3,
    name: "Hospital Elevator ",
    desc: "Yatra’s Hospital/Bed Elevators Instituted with quiet, controlled acoustic environments, structural integrity, and advanced medical equipment and accommodations that prioritizes patient convenience and safety and security. Designed with meticulous determination to patient needs, these elevators provide whisper-quiet operation and exceptional stability rather than insecure mobility, enabling that every journey is as cozy and assuring as possible for patients and their families",
    color: "#214361",
    imgUrl: hospital,
    topSpeed: 1.75,
    mph: 1.2,
    mileRange: 20,
  },
  {
    id: 4,
    name: "Public Transport Escalator",
    desc: "yatra’s public transport Escalators are reliable, moreover, It has high energy efficient resources to strive for innovation, with customizable speed ranges (up to 2.5 m/s), intelligent door operation, and superior leveling accuracy developed for malls, office complexes, convention centres, and public spaces. ",
    color: "#214361",
    imgUrl: mrl,
    topSpeed: 1.75,
    mph: 1.2,
    mileRange: 20,
  },
];

/* ---------- Animated number hook ---------- */
function useAnimatedNumber(value: number, duration = 800, decimals = 0) {
  const [display, setDisplay] = useState<number>(value);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    let start: number | null = null;
    const from = display;
    const to = value;
    const diff = to - from;

    const step = (timestamp: number) => {
      if (start === null) start = timestamp;
      const elapsed = timestamp - start;
      const t = Math.min(1, elapsed / duration);
      const eased = t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
      const current = from + diff * eased;
      setDisplay(parseFloat(current.toFixed(decimals)));
      if (t < 1) rafRef.current = requestAnimationFrame(step);
    };

    rafRef.current = requestAnimationFrame(step);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return display;
}

/* ---------- Component ---------- */
export default function App() {
  const [active, setActive] = useState(0);
  const [animForward, setAnimForward] = useState(true);

  const activeSlide = slides[active];
  const speed = useAnimatedNumber(activeSlide.topSpeed, 800, 2);
  const load = useAnimatedNumber(activeSlide.mph, 800, 1);
  const capacity = useAnimatedNumber(activeSlide.mileRange);

  return (
    <div className="w-full min-h-screen bg-white text-[#214361] relative overflow-hidden">
      {/* Header */}
      <header className="absolute top-0 left-0 w-full px-6 py-6 flex items-center justify-between z-30">
        <h1 className="text-2xl font-bold text-[#214361]">
          Yatra Elevators & Escalators
        </h1>
        <img
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1780138/hamburger.svg"
          alt="menu"
          className="h-6 invert"
        />
      </header>

      {/* Text Left */}
      <aside className="absolute top-1/4 left-6 z-20 max-w-lg">
        <h2 className="text-5xl font-bold mb-4 leading-tight">
          {activeSlide.name}
        </h2>
        <p className="text-gray-600 mb-6">{activeSlide.desc}</p>
        <button
          className="px-6 py-2 border-2 rounded-full font-medium"
          style={{
            borderColor: activeSlide.color,
            color: activeSlide.color,
          }}
        >
          Get Quote
        </button>

        {/* Stats */}
        <div className="flex gap-6 mt-8 text-[#214361]">
          <div>
            <div className="text-3xl font-bold">{speed} m/s</div>
            <div className="text-sm text-gray-500">Speed</div>
          </div>
          <div>
            <div className="text-3xl font-bold">{load} T</div>
            <div className="text-sm text-gray-500">Load</div>
          </div>
          <div>
            <div className="text-3xl font-bold">{capacity} Persons</div>
            <div className="text-sm text-gray-500">Capacity</div>
          </div>
        </div>
      </aside>

      {/* Elevator/Escalator Right */}
      <div className="flex justify-center items-center h-screen relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSlide.id}
            initial={{ opacity: 0, x: animForward ? 200 : -200, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: animForward ? -200 : 200, scale: 0.9 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="relative flex flex-col items-center justify-center"
          >
            {/* Glow */}
            <div
              className="absolute w-[1000px] h-[1000px] rounded-full blur-3xl"
              style={{
                background: `radial-gradient(circle, ${activeSlide.color}30 0%, transparent 70%)`,
              }}
            />

            {/* Product only (floor removed, image smaller, shifted right) */}
            <div className="relative z-20 translate-x-32">
  <motion.img
    src={activeSlide.imgUrl}
    alt={activeSlide.name}
    className="w-[750px] max-w-full"
    whileHover={{ scale: 1.05, rotate: 1 }}
    transition={{ type: "spring", stiffness: 200 }}
  />
</div>


          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation */}
      <div className="absolute bottom-10 left-6 flex gap-4 z-30">
        <button
          onClick={() => {
            setAnimForward(false);
            setActive((prev) => (prev - 1 + slides.length) % slides.length);
          }}
          className="px-4 py-2 border rounded-full border-[#214361] text-[#214361]"
        >
          Prev
        </button>
        <button
          onClick={() => {
            setAnimForward(true);
            setActive((prev) => (prev + 1) % slides.length);
          }}
          className="px-4 py-2 border rounded-full border-[#214361] text-[#214361]"
        >
          Next
        </button>
      </div>
    </div>
  );
} 