import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ElevatorEscalatorCarousel = () => {
  const categories = {
    Elevators: [
      {
        title: "Passenger Elevator",
        desc: "Yatra’s Passenger Elevators are contemplatively designed to provide serene, calm and most significant vertical mobility in a diverse architectural environment to deliver smooth, safe, and energy efficient vertical mobility for residential and commercial buildings alike. Established with user attractive design, stylistic appeal, appearance standards and we envisioned the long-term journey carried in our minds. Our elevators integrate advanced technology, noise-optimized and cutting - edge control systems to venture every strike. From streamlined interiors to customizable and user -friendly cabin finishes, yatra aims at dynamic design options, advanced architecture and exceptional service to people, our elevators incorporate safety protocols, innovations, hygiene scintillating Interiors spacious to drive stellar lifestyle.",
        features: [
        "Advanced technology integration",
        "Noise-optimized systems",
        "Customizable cabin finishes",
        "Safety protocols",
        "Hygiene standards",
        "Streamlined interiors"
        ],
        main: "/Yatra website400x600_Passenger Elevators.png",
        thumbs: [
          {
            src: "/Yatra website400x600_Passenger Elevators.png",
            title: "Passenger Elevators",
            desc: "Yatra’s Passenger Elevators are contemplatively designed to provide serene, calm and most significant vertical mobility in a diverse architectural environment to deliver smooth, safe, and energy efficient vertical mobility for residential and commercial buildings alike. Established with user attractive design, stylistic appeal, appearance standards and we envisioned the long-term journey carried in our minds. Our elevators integrate advanced technology, noise-optimized and cutting - edge control systems to venture every strike. From streamlined interiors to customizable and user -friendly cabin finishes, yatra aims at dynamic design options, advanced architecture and exceptional service to people, our elevators incorporate safety protocols, innovations, hygiene scintillating Interiors spacious to drive stellar lifestyle.",
            features: [ "Advanced technology integration",
        "Noise-optimized systems",
        "Customizable cabin finishes",
        "Safety protocols",
        "Hygiene standards",
        "Streamlined interiors"],
          },
          {
            src: "/Yatra website_Home elevators  (size - 400-300) .png",
            title: "Home Elevator",
            desc: "Yatra’s Elevators promote jubilant, elegant and enhancing incredible environments into your residence. These are fabricated with cutting-edge technology and modern stylish appearance versatility, these elevators smoothly get adjusted into villas, duplexes and multi-story residences. Yatra’s offerings are capacity monitoring, high tech mobility solutions, backup system, and pathogen resistance. With customizable finishes, compact and dynamic shafts, and dazzling smooth ride quality, our residential elevators ensure the mobility and momentum for all age groups and optimisation to your residence. For the compact and flexibility that simplifies your day, the luxury that intuitively accelerates your lifestyle, or the accessibility that opens up your entire home.",
            features: ["Capacity monitoring",
        "High tech mobility solutions",
        "Backup system",
        "Pathogen resistance",
        "Compact design",
        "Cutting-edge technology",],
          },
          {
            src: "/Yatra website_Hospital elevators(size - 400-300).png",
            title: "Hospital Elevators",
            desc: "Yatra’s Hospital/Bed Elevators Instituted with quiet, controlled acoustic environments, structural integrity, and advanced medical equipment and accommodations that prioritizes patient convenience and safety and security. Designed with meticulous determination to patient needs, these elevators provide whisper-quiet operation and exceptional stability rather than insecure mobility, enabling that every journey is as cozy and assuring as possible for patients and their families. Advanced features like Emergency power bank, safety practices, healthy lifestyle and physically untouched control systems, are more likely to focus on hygiene and cleanliness and essentially critical operations will be enhanced or handled with more care and concern. ",
            features: [
               "Whisper-quiet operation",
        "Emergency power bank",
        "Touchless control systems",
        "Medical equipment compatibility",
        "Enhanced hygiene protocols",
        "Customisable for users",
            ],
          },
           {
            src: "/Yatra website_Freight elevators (size - 400-300).png",
            title: "Freight and Services Elevators",
            desc: "Yatra’s Freight and Service Elevators are designed for maximum potential, solidity and firmness, and flawless performance in rigorous environments. Specifically engineered for heavy-duty commercial use, these elevators cope with substantial loads, bulky advanced equipment, and meticulously prolonged operation, significant for motels, warehouses, hotels, hospitals, astonishing balcony residences, shopping centres, and professional architectures buildings where performance and reliability are essential. Created with fortified cabins, maximum capability motors, moreover customizable interiors, our service elevators enable magnanimous vertical transport of goods. ",
            features: [
                "Designed for maximum potential",
        "Advanced safety operations",
        "Energy effective capability",
        "enable magnanimous vertical transport ",
        "Fortified cabins",
        "Advanced equipment",
            ],
          },
           {
            src: "/Yatra website_Capsule elevators(size - 400-300) .png",
            title: "Capsule Elevators",
            desc: "Yatra's Capsule Elevators are a meritorious blend of scintillating and elegance, constructed to elevate both momentum and across all architectural beauty. Significant for advanced residential high-towers, premiere hotels, malls, and commercial areas, these comprehensive elevators put forward a 360-degree angle bird-eye view, accelerating the visual experience for passengers and people while appreciating the architectural beauty. Constructed exactly with using advanced safety operations and mechanisms and capability which is energy effective.",
            features: [
               "360-degree panoramic views",
        "Advanced safety operations",
        "Energy effective capability",
        "Architectural integration",
        "Visual experience enhancement",
        "Advanced equipment",
            ],
          },
           {
            src: "/Yatra website_MRL elevators(size - 400-300).png",
            title: "MRL Elevators",
            desc: "Yatra’s Machine-Room Less (MRL) Elevators are developed with advanced, sophisticated infrastructure where the space consumption is minimized. Designed in such a way that without the necessity of a traditional mechanical room, these elevators provide strong installation, reduced consumption, and enhanced architectural flexibility, facilitating them significantly as advanced elevators especially authorised in rendering solutions for problems with unpredictable scenarios. MRL elevators are exceptionally advanced, their durability, versatility, superior striking interiors, facilitating control systems, safety guidelines, providing an advanced technology, mobility lift and good environment. Yatra’s Elevators are profoundly designed perfectly for the sophisticated environment.",
            features: [
              "Sophisticated infrastructure ",
        "Strong installation",
        "Reduced consumption",
        "Enhanced architectural flexibility",
        "Facilitating control systems",
        "Advanced technology",
            ],
          },
           {
            src: "/Yatra website_Hydraulic elevators(size - 400-300).png",
            title: "Hydraulic Elevators",
            desc: "Yatra’s Hydraulic Elevators are developed for positioning them as the perfect choice of residence with uncluttered and expansive optimisation. These are engineered with perfect energy optimisation and compact home space area. Safety and Impenetrable security, tamper-proof protection, uncompromisable protection which is absolutely Suitable for residential complexes, building, and business properties. Yatra’s hydraulic solutions have high versatility with convenient vertical mobility that stands as a testament to the absolute legacy of ICONIC. ",
            features: [
               "Developed for positioning",
        "Uncluttered and expansive optimisation",
        "Safety and Impenetrable security ",
        "Tamper-proof protection",
        "Uncompromisable protection ",
        "Advanced technology",
            ],
          },
          
        ],
      },
    ],
    Escalators: [
      {
        title: "Commercial Escalator",
        desc: "Yatra’s Commercial Escalators designed for people and users where those deal with high Standards visuals and uncompromisable Security Systems. Developed for malls, office complexes, convention centres, and public spaces, our elevators and escalators. With facilities like durability and lift mobility, Advanced Sensors, and Safety Features, Optional Customizations. Customizable finishes, firm monitor Systems and MRL Escalators Elevates the sophisticated lifestyle. Backend Iconic’s Legacy, these escalators promise long-term value and elevated vertical movement for every commercial space.",
        features: ["High Standards visuals ",
        "Uncompromisable Security Systems",
        "Safety and Impenetrable security ",
        "Durability and lift mobility",
        "Advanced Sensors ",
        "Customizable  finishes",],
        main: "/Yatra website_Commer escala(size - 400-300).png",
        thumbs: [
          {
            src: "/Yatra website_Commer escala(size - 400-300).png",
            title: "Commercial Escalators",
            desc: "Yatra’s Commercial Escalators designed for people and users where those deal with high Standards visuals and uncompromisable Security Systems. Developed for malls, office complexes, convention centres, and public spaces, our elevators and escalators. With facilities like durability and lift mobility, Advanced Sensors, and Safety Features, Optional Customizations. Customizable finishes, firm monitor Systems and MRL Escalators Elevates the sophisticated lifestyle. Backend Iconic’s Legacy, these escalators promise long-term value and elevated vertical movement for every commercial space.",
            features: ["High Standards visuals ",
        "Uncompromisable Security Systems",
        "Safety and Impenetrable security ",
        "Durability and lift mobility",
        "Advanced Sensors ",
        "Customizable  finishes",],
          },
          {
            src: "/Yatra website_Public transport escalators 400-300.png",
            title: "PublicTransport Escalators",
            desc: "yatra’s public transport Escalators are reliable, moreover, It has high energy efficient resources to strive for innovation, with customizable speed ranges (up to 2.5 m/s), intelligent door operation, and superior leveling accuracy developed for malls, office complexes, convention centres, and public spaces. Our elevators and escalators are equipped with facilities like durability, lift mobility, Advanced Sensors, Safety Features and Optional Customizations. The walkways and transport system are cozy.",
            features: ["Heavy passenger load handling",
        "Energy-efficient drives",
        "Anti-slip steps and safety features",
        "Low-noise operation",
        "Durable construction",
        "Continuous duty design",],
          },
          {
            src: "/Yatra website_Moving walkways escalators 400-300.png",
            title: "Moving WalkWay Escalators",
            desc: "Yatra’s Travelators, which are also known as moving walkways, are created to provide perfect horizontal transportation across large spaces such as airports, malls, transit hubs, and exhibition centers. Designed with user friendly and safety in mind, these systems offer smooth and energy-efficient movement for pedestrians, luggage carts, and trolleys, reducing walking stress and improving traffic flow. With advanced safety features, surfaces that are anti-slip and tailored speed controls. Yatra’s moving walkways conglomerate strength, sleek aesthetics, and cutting-edge technology to deliver a superior travel experience. As part of our promise to innovation and accessibility, our travelators ensure that every step forward is efficient, comfortable and futuristic.",
            features: ["Transportation across large spaces ",
        "Designed with user friendly ",
        "Conglomerate strength",
        "Cutting-edge technology ",
        "Sleek aesthetics",
        "Comfortable and futuristic",],
          },
        ],
      },
    ],
  };

  const [category, setCategory] = useState<"Elevators" | "Escalators">("Elevators");
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeThumb, setActiveThumb] = useState(0);

  const slides = categories[category];
  const currentThumb = slides[activeSlide].thumbs[activeThumb] || {
    src: slides[activeSlide].main,
    title: slides[activeSlide].title,
    desc: slides[activeSlide].desc,
    features: slides[activeSlide].features,
  };

  const prevSlide = () => {
    const prev = activeSlide === 0 ? slides.length - 1 : activeSlide - 1;
    setActiveSlide(prev);
    setActiveThumb(0);
  };

  const nextSlide = () => {
    const next = activeSlide === slides.length - 1 ? 0 : activeSlide + 1;
    setActiveSlide(next);
    setActiveThumb(0);
  };

  const changeCategory = (newCategory: "Elevators" | "Escalators") => {
    setCategory(newCategory);
    setActiveSlide(0);
    setActiveThumb(0);
  };

  return (
    <section className="py-10 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-center text-5xl font-bold mb-8">
         Yatra Products
        </h2>

        {/* Category Buttons */}
        <div className="flex justify-center gap-4 mb-8">
          {(["Elevators", "Escalators"] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => changeCategory(cat)}
              className={`px-6 py-2 rounded ${
                category === cat
                  ? "bg-[#214361] text-white"
                  : "bg-white text-[#214361] border border-[#214361]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="relative grid md:grid-cols-2 gap-8 items-start">
          {/* Left: Image + Thumbnails */}
          <div className="text-center relative">
            <img
              src={currentThumb.src}
              alt={currentThumb.title}
              className="rounded-lg shadow mb-4 mx-auto max-h-[400px] object-contain"
            />

            {/* Arrows */}
            <button
              onClick={prevSlide}
              className="absolute top-1/2 left-0 -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-200"
            >
              <ChevronLeft className="w-6 h-6 text-[#214361]" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute top-1/2 right-0 -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-200"
            >
              <ChevronRight className="w-6 h-6 text-[#214361]" />
            </button>

            {/* Thumbnails */}
            <div className="flex justify-center gap-3 flex-wrap mt-4">
              {slides[activeSlide].thumbs.map((thumb, i) => (
                <img
                  key={i}
                  src={thumb.src}
                  alt={thumb.title}
                  className={`w-20 h-20 object-cover rounded cursor-pointer border ${
                    activeThumb === i ? "border-[#214361]" : "border-gray-300"
                  }`}
                  onClick={() => setActiveThumb(i)}
                />
              ))}
            </div>
          </div>

          {/* Right: Content */}
          <div>
            <h3 className="text-xl font-semibold mb-4">{currentThumb.title}</h3>
            <p className="text-gray-600 mb-4">{currentThumb.desc}</p>
            <ul className="mb-4 space-y-1">
              {currentThumb.features.map((f, i) => (
                <li key={i}>
                  <span className="text-[#214361]">{f}</span>
                </li>
              ))}
            </ul>
            <a
              href="#"
              className="inline-block px-6 py-2 bg-[#214361] text-white rounded shadow hover:bg-[#1a324f]"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ElevatorEscalatorCarousel;
