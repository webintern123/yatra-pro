// app/page.tsx
"use client";
import { useEffect, useState } from "react";

const slides = [
  { id: 1, image: "/Yatra website_Commer escala(size - 400-300).png", logo: "/Yata white .svg" },
  { id: 2, image: "/Yatra website_Passenger elevators (size - 400-300) .png", logo: "/Yata white .svg" },
  { id: 3, image: "/Yatra website_MRL elevators(size - 400-300).png", logo: "/Yata white .svg" },
  { id: 4, image: "/Yatra website_Public transport escalators 400-300.png", logo: "/Yata white .svg" },
];

export default function Page() {
  const bars = 50;
  const delay = 60;      // wave speed
  const duration = 800;  // bar slide speed

  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let cancelled = false;
    const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

    const run = async () => {
      while (!cancelled) {
        // progress curtain reveal
        for (let i = 1; i <= bars; i++) {
          if (cancelled) return;
          setProgress(i);
          await sleep(delay);
        }

        // wait a little before switching next
        await sleep(500);

        setActive((prev) => (prev + 1) % slides.length);
        setProgress(0); // reset for next cycle
      }
    };

    run();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {/* Current and Next slides stacked */}
      {slides.map((slide, i) => (
        <div
          key={slide.id}
          className={`absolute inset-0 flex items-center justify-center transition-opacity duration-700 ${
            i === active ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <img
            src={slide.image}
            alt={`Slide ${slide.id}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/30">
            {slide.logo && <img src={slide.logo} alt="logo" className="w-60" />}
          </div>
        </div>
      ))}

      {/* Curtain Bars */}
      <div className="absolute inset-0 flex pointer-events-none">
        {Array.from({ length: bars }).map((_, i) => {
          const revealed = i < progress;
          const widthPercent = 100 / bars;
          const left = i * widthPercent;
          const translateX = revealed ? 0 : i % 2 === 0 ? -100 : 100;

          return (
            <div
              key={i}
              className="absolute top-0 h-full bg-black"
              style={{
                left: `${left}%`,
                width: `${widthPercent}%`,
                transform: `translateX(${translateX}%)`,
                transition: `transform ${duration}ms ease-out`,
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
