// src/components/FeatureSection.tsx
import { useEffect, useRef } from "react";

const features = [
  { title: "Why Elevators & Escalators? ", desc: "Our growth has always originated from listening to the advancing needs of the globe around us. As contemporary infrastructure scales upward, the want for structured vertical mobility becomes more pivotal than ever. " },
  { title: "Our Mission", desc: "Our mission is to promote day to day living by designing innovative, forward thinking spaces and solutions that encourage trust, innovation, and sustainability. With each and every project, from magnificent homes to contemporary infrastructure, we always aim to deliver incomparable quality and dedicated design that inspires communities and enhances lives. " },
  { title: "Leadership Team", desc: "Has an inspiring and accomplished leadership team that navigates our mission with intention and integrity. With ingrained expertise across various industries, our leaders bring a futuristic approach that moulds innovation with responsibility. They not only direct our organization toward brilliance but also motivate us to create solutions that serve a better social cause. Led by their insight and steady commitment to values, we continue to build a legacy that delegates communities, supports sustainability, and designs a brighter, more comprehensive future." },
  { title: "Manufacturing", desc: "Our manufacturing process is the foundation for our dedication to quality, capability, and innovation. With the latest facilities and a meticulous quality assurance framework, we guarantee that every elevator and escalator produced under the Yatra brand reaches the highest industry standards. Our production units are furnished with leading-edge machinery and follow environmentally conscious methodologies to reduce waste and energy use. From raw material selection to final assembly, every step indicates our dedication to resilience, safety, and performance." },
  { title: "Sustainability & Green Practices", desc: "sustainability is not considered as secondary in fact it stands as our primary and it is our focal point of our innovation and purpose. With fast growing urbanization and an urgent need for conscious oriented climate development, we are committed to build a greener tomorrow through each and every purpose, product, process, and partnership.Our vertical mobility solutions under the Yatra brand are directed towards a strong emphasis on designs that are eco-friendly, energy efficient, and environment friendly" },
];

// Array of lift images
const liftImages = [
  "/Yatra website_Home elevators  (size - 400-300) .png",
  "/Yatra website_Commer escala(size - 400-300).png",
  "/Yatra website_Capsule elevators(size - 400-300) .png",
  "/Yatra website_Public transport escalators 400-300.png",

];

const FeatureSlider = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollRef.current;
    const imageContainer = imageRef.current;
    if (!container || !imageContainer) return;

    let scrollTop = 0;
    const featuresHeight = container.scrollHeight / 2; // duplicated features height

    const animate = () => {
      scrollTop += 1; // scroll speed
      if (scrollTop >= featuresHeight) scrollTop = 0;

      container.scrollTop = scrollTop;

      // Image scroll in sync
      const imageHeight = imageContainer.scrollHeight / 2;
      const imageScroll = (scrollTop / featuresHeight) * imageHeight;
      imageContainer.scrollTop = imageScroll;

      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, []);

  return (
    <section className="w-full flex flex-col md:flex-row bg-gray-50 py-20 px-4 md:px-24 gap-12">
      {/* Left side: vertical auto-looping features */}
      <div className="w-full md:w-1/2 h-[600px] overflow-hidden relative">
        <div ref={scrollRef} className="h-full overflow-hidden">
          <div className="flex flex-col space-y-8">
            {[...features, ...features].map((feature, idx) => (
              <div key={idx} className="bg-white rounded-lg p-8 shadow-lg flex flex-col gap-4">
                <h3 className="text-[#214361] font-semibold text-lg md:text-xl">{feature.title}</h3>
                <p className="text-gray-700 text-sm md:text-base">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right side: multiple lift images auto-loop scroll with heading */}
      <div className="w-full md:w-1/2 h-[600px] overflow-hidden relative flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#214361] mb-8">Yatra Elevators & Escalators</h2>
        <div ref={imageRef} className="h-full overflow-hidden w-full">
          <div className="flex flex-col space-y-8 items-center">
            {[...liftImages, ...liftImages].map((src, idx) => (
              <img
                key={idx}
                src={src}
                alt={`Lift ${idx + 1}`}
                className="rounded-lg shadow-lg max-h-[280px] md:max-h-[320px]"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSlider;
