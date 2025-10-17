// src/components/Timeline.tsx
import { useEffect, useState } from "react";

type TimelineItem = {
  year: string;
  label: string;
  description: string;
  image: string;
};

const timelineData: TimelineItem[] = [
  {
    year: "2019",
    label: "2019 - The beginning",
    description:
      "In 2014, we started focusing on things which will be give more modernization to our india like shopping malls, Hospitals ,villas. We far look up to this, we feel the elevators and escalators are having boring designs and unsafe .",
    image:
      "https://cdn.prod.website-files.com/67ee4eb1923bd785f5798a15/67f35979e95ae26acb59fd35_aWUKTYgn2lFO8hTBrjMLDVSo.avif",
  },
  {
    year: "2020",
    label: "2020",
    description:
      "We redirected our energy toward meaningful growth and creating value for our prode country india have a deep research to give modernization designs, comfort to people , more luxury way of elevators and escalators",
    image:
      "https://cdn.prod.website-files.com/67ee4eb1923bd785f5798a15/67f359c155131a860cd34d1c_ckRCLJhCDdDrmiK8H2vndoNsKVw.avif",
  },
  {
    year: "2021",
    label: "2021",
    description:
      "We decided to keep company on Elevators and Escalators and which makes us main target and preaped road path to make elevator and escalator company which makes Top most leading company in innovation and designs . What ever the painpoints are there in elevators this makes us advantage to create more asthectic design and main priority to safety",
    image:
      "https://cdn.prod.website-files.com/67ee4eb1923bd785f5798a15/67f359ddcaa8fffb804bff72_rR14g3WImxgt334smZoi37gjNEI.avif",
  },
  {
    year: "2023",
    label: "2023",
    description: "Opened a New Office in Hyderabad .in the name of Yatra Elevators And Escalators",
    image:
      "https://cdn.prod.website-files.com/67ee4eb1923bd785f5798a15/67f35a07c25035f3f79aac91_XrEUdU8ev2Wcad16kTBqjdr0Ak.avif",
  },
  {
    year: "2025",
    label: "2025 - Present",
    description: "Top-rated service , Asthetic designs and innovative in Elevators and Escalators in the name of Yatra.",
    image:
      "https://cdn.prod.website-files.com/67ee4eb1923bd785f5798a15/67f35a1fc265c97bdb00a94e_7dD1XVQddJexonscP2yohnBEf0.avif",
  },
];

const Timeline = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  // autoplay
  useEffect(() => {
    const duration = 5000; // 5s per slide
    const interval = 50; // update every 50ms
    let elapsed = 0;

    const timer = setInterval(() => {
      elapsed += interval;
      setProgress((elapsed / duration) * 100);

      if (elapsed >= duration) {
        setActiveIndex((prev) => (prev + 1) % timelineData.length);
        elapsed = 0;
        setProgress(0);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [activeIndex]);

  return (
    <section className="py-16 bg-white relative">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#214361] to-[#4f6b91] text-transparent bg-clip-text mb-10">
          How we got here
        </h2>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="text-left">
            <p className="text-7xl font-bold text-[#214361]">
              {timelineData[activeIndex].year}
            </p>
            <p className="mt-4 text-gray-700 leading-relaxed text-lg">
              {timelineData[activeIndex].description}
            </p>
          </div>

          <div>
            <img
              src={timelineData[activeIndex].image}
              alt={timelineData[activeIndex].label}
              className="w-full rounded-2xl shadow-lg"
            />
          </div>
        </div>

        {/* Tab menu */}
        <div className="mt-12 flex flex-wrap justify-center gap-6 relative">
          {timelineData.map((item, index) => (
            <div
              key={item.year}
              onClick={() => {
                setActiveIndex(index);
                setProgress(0);
              }}
              className={`cursor-pointer px-4 py-2 text-sm font-medium rounded-md border transition-all relative w-40 text-center
                ${
                  activeIndex === index
                    ? "border-[#214361] text-[#214361]"
                    : "border-gray-300 text-gray-600 hover:border-[#214361]/50"
                }`}
            >
              {item.label}
              <div
                className="absolute bottom-0 left-0 h-1 bg-[#214361] rounded-full transition-all duration-100"
                style={{
                  width: activeIndex === index ? `${progress}%` : "0%",
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
