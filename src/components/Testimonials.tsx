import React from "react";

interface Testimonial {
  text: string;
  name: string;
  building: string; // instead of title/avatar
}

const testimonials: Testimonial[] = [
  {
    text: "The Vaibhav model has transformed the mobility in our office. Smooth, quiet, and very reliable!",
    name: "Ravi Sharma",
    building: "Skyline Towers",
  },
  {
    text: "Installation of the Param model was seamless. Our tenants love the advanced features and the VIP service.",
    name: "Anita Desai",
    building: "Elite Residency",
  },
  {
    text: "Unnati lifts are perfect for our commercial complex. Easy to maintain and responsive service.",
    name: "Vikram Singh",
    building: "City Center Mall",
  },
  {
    text: "Prarambh model suits our small residential building perfectly. Affordable yet high-quality service.",
    name: "Sunita Rao",
    building: "Greenview Apartments",
  },
];

const Testimonials: React.FC = () => {
  const column1 = [...testimonials, ...testimonials];
  const column2 = [...testimonials.slice().reverse(), ...testimonials.slice().reverse()];
  const column3 = [...testimonials, ...testimonials];

  return (
    <section className="py-16 bg-white">
      <div className="text-center max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#214361]">What Our Clients Say</h2>
        <p className="mt-4 text-[#214361] text-lg">
          Hear from our customers about their experience with our lifts and services
        </p>
      </div>

      <div className="relative overflow-hidden mt-16 max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 h-[600px]">
          {/* Column 1 */}
          <div className="overflow-hidden relative">
            <div className="animate-col-1 flex flex-col space-y-6">
              {column1.map((t, idx) => (
                <TestimonialCard key={`col1-${idx}`} testimonial={t} />
              ))}
            </div>
          </div>

          {/* Column 2 */}
          <div className="overflow-hidden relative">
            <div className="animate-col-2 flex flex-col space-y-6">
              {column2.map((t, idx) => (
                <TestimonialCard key={`col2-${idx}`} testimonial={t} />
              ))}
            </div>
          </div>

          {/* Column 3 */}
          <div className="overflow-hidden relative">
            <div className="animate-col-3 flex flex-col space-y-6">
              {column3.map((t, idx) => (
                <TestimonialCard key={`col3-${idx}`} testimonial={t} />
              ))}
            </div>
          </div>
        </div>

        {/* Gradient overlay */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 w-full h-20 bg-gradient-to-b from-white to-transparent" />
          <div className="absolute bottom-0 w-full h-20 bg-gradient-to-t from-white to-transparent" />
        </div>
      </div>

      {/* Keyframes + animations */}
      <style>{`
        @keyframes scrollUp {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }

        .animate-col-1 {
          animation: scrollUp 20s linear infinite;
        }
        .animate-col-2 {
          animation: scrollUp 18s linear infinite;
        }
        .animate-col-3 {
          animation: scrollUp 22s linear infinite;
        }
      `}</style>
    </section>
  );
};

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => (
  <div className="bg-[#f9f9f9] rounded-lg p-6 shadow-sm space-y-3">
    <p className="text-[#214361] text-sm">{testimonial.text}</p>
    <div>
      <p className="font-semibold text-[#214361]">{testimonial.name}</p>
      <p className="text-xs text-[#214361]">{testimonial.building}</p>
    </div>
  </div>
);

export default Testimonials;
