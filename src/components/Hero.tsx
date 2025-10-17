// src/components/Hero.tsx
import { motion } from "framer-motion";
import logo from "/Yata white .svg"; // <-- Add your logo image in assets folder
import ElevatorDemo from "./ElevatorDemo";

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen bg-[#214361] flex items-center">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        
        {/* Left Text */}
        <motion.div className="md:w-1/2 text-left">
          
          {/* Logo */}
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <img src={logo} alt="Yatra Elevators Logo" className="w-32 md:w-40" />
          </motion.div>

          {/* Animated Heading */}
<div className="text-3xl md:text-4xl font-bold text-white whitespace-nowrap">
  <motion.span
    initial={{ y: -60, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ delay: 0.2, type: "spring", stiffness: 120, damping: 14 }}
  >
    Yatra Elevators & Escalators
  </motion.span>
</div>


          {/* Description */}
          <motion.p
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg md:text-xl text-white/80 max-w-lg mt-4"
          >
            Advanced elevators and escalators for residential towers, Hotels workspaces, malls, and hospitals – powered by 24/7 service and future-ready tech.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex mt-6 gap-4 flex-wrap"
          >
            <a className="bg-white text-[#214361] px-6 py-3 rounded-lg font-semibold hover:bg-[#e0e0e0] transition">
              Start a 7-day free trial
            </a>
            <a className="border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#214361] transition">
              Request a demo
            </a>
          </motion.div>
        </motion.div>

        {/* Right Hologram */}
<motion.div
  className="md:w-1/2 flex justify-center items-center mt-10 md:mt-0"
  animate={{ y: [0, -15, 0] }}
  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
>
  {/* Hologram Box with 3D Elevator */}
  <div className="relative w-96 h-96 md:w-[28rem] md:h-[28rem] 
                  bg-gradient-to-tr from-white/20 via-white/10 to-white/20 
                  rounded-xl shadow-xl backdrop-blur-lg overflow-hidden">
    <ElevatorDemo />
  </div>
</motion.div>

      </div>
    </section>
  );
};

export default Hero;
