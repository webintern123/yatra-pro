// src/components/Navbar.tsx
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-[#214361] shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between text-white">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img src="/Yata white .svg" alt="Logo" className="h-12 md:h-14" />
          
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-10 text-lg font-medium">
         <a href="/hero" className="hover:text-gray-300 transition">Land5</a>
          <a href="/land" className="hover:text-gray-300 transition">Land</a>
          <a href="/land1" className="hover:text-gray-300 transition">Land1</a>
          <a href="/land2" className="hover:text-gray-300 transition">Land2</a>
          <a href="/land3" className="hover:text-gray-300 transition">Land3</a>
          <a href="/land4" className="hover:text-gray-300 transition">Land4</a>
           <a href="/land6" className="hover:text-gray-300 transition">Land6</a>
            <a href="/land7" className="hover:text-gray-300 transition">Land7</a>
           <a href="/land8" className="hover:text-gray-300 transition">Land8</a>
            <a href="/land9" className="hover:text-gray-300 transition">Land9</a>
            <a href="/land10" className="hover:text-gray-300 transition">Land10</a>


        </div>

        {/* Buttons */}
        <div className="hidden md:flex items-center space-x-6 text-lg">
          
          <a
            href="#"
            className="bg-white text-[#214361] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Get free trial
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#214361] px-6 pb-6 space-y-4 text-white text-lg font-medium">
          <a href="#" className="block hover:text-gray-300 transition">Features</a>
          <a href="#" className="block hover:text-gray-300 transition">Pricing</a>
          <a href="#" className="block hover:text-gray-300 transition">About</a>
          <a href="#" className="block hover:text-gray-300 transition">Blog</a>
          <a href="#" className="block hover:text-gray-300 transition">Contact</a>
          <a href="#" className="block hover:text-gray-300 transition">Login</a>
          <a
            href="#"
            className="block text-center bg-white text-[#214361] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Get free trial
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
