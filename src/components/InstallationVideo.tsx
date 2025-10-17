// src/components/InstallationVideo.tsx
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const InstallationVideo = () => {
  const slides = [
    { type: "video", src: "https://www.youtube.com/embed/YOUR_VIDEO_ID" },
    { type: "image", src: "/Home page-2.png" },
    { type: "image", src: "/service4.png" },
    { type: "image", src: "/solution1.png" },
    { type: "image", src: "/Home page.png" },
    { type: "image", src: "/Yatra website_Our story.png" },
  ];

  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="w-full bg-gray-100 py-16 px-0 flex flex-col items-center gap-8 relative">
      <h2 className="text-3xl font-bold text-[#214361]">Yatara Is The Future</h2>
      <p className="text-gray-700 text-center max-w-2xl px-4">
       At Yatra Escalators and Elevators, we understand that commercial spaces require more than just vertical mobility in fact they require solutions that are jet speed, trustworthy and designed to handle maximum foot traffic with so much ease. Whether it's a shopping mall, office complex, airport or convention center, our elevators and escalators are designed to improve the flow of people efficiently while maintaining the best standards of safety and aesthetics.
      </p>

      <div className="w-full max-w-6xl aspect-video relative">
        {/* Video or Image */}
        {slides[current].type === "video" ? (
          <iframe
            className="w-full h-full rounded-lg shadow-lg"
            src={slides[current].src}
            title="Yatra Installation Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        ) : (
          <img
            src={slides[current].src}
            alt={`Slide ${current}`}
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        )}

        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white rounded-full p-2 shadow-md"
        >
          <ChevronLeft className="w-6 h-6 text-[#214361]" />
        </button>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white rounded-full p-2 shadow-md"
        >
          <ChevronRight className="w-6 h-6 text-[#214361]" />
        </button>
      </div>
    </section>
  );
};

export default InstallationVideo;
