// src/components/PricingSection.tsx
import { useState } from "react";

const pricingPlans = {
  prarambh: {
    title: "Prarambh (Silver Model)",
    description:
      "Our most wide range model almost suited for any building type with various options.",
    subtext: "Basic Service Package",
    features: [
      "Monthly general inspection",
      "Emergency alarm check",
      "Lubrication of basic components",
      "Minor adjustments",
      "Phone support during working hours",
    ],
  },
  unnati: {
    title: "Unnati (Gold Model)",
    description: "Next level of performance, look and control.",
    subtext: "Standard Service Package",
    features: [
      "All Silver services +",
      "Bi-weekly inspection",
      "Replacement of minor wear & tear parts (e.g., bulbs, switches)",
      "24/7 emergency helpline",
      "Basic cleaning of lift shaft",
    ],
  },
  vaibhav: {
    title: "Vaibhav (Diamond Model)",
    description:
      "State-of-the-art mobility with exclusive design and advanced technology.",
    subtext: "Premium Service Package",
    features: [
      "All Gold services +",
      "Weekly inspection",
      "Priority response time",
      "Safety system diagnostics",
      "Software/firmware update if applicable",
      "Annual AMC (Annual Maintenance Contract) coverage",
    ],
  },
  param: {
    title: "Param (Platinum Model)",
    description:
      "Greatest in luxury, technology and innovation for elite spaces.",
    subtext: "Comprehensive/Elite Service Package",
    features: [
      "All Diamond services +",
      "Daily monitoring (IoT or remote tracking if available)",
      "Free replacement of all mechanical/electrical parts (except major motor/gear system)",
      "Dedicated service manager",
      "Free modernization consultation (when required)",
      "VIP service – no downtime guarantee",
    ],
  },
};

const PricingSection = () => {
  const [selectedPlan, setSelectedPlan] = useState<
    "prarambh" | "unnati" | "vaibhav" | "param"
  >("prarambh");

  return (
    <section className="w-full bg-gray-100 py-16 px-4 md:px-24 flex flex-col items-center gap-12">
      <div className="text-center">
        <h2 className="text-3xl font-bold" style={{ color: "#214361" }}>
          Our Lift Models
        </h2>
        <p className="text-gray-700 mt-4 text-center max-w-2xl">
          Each model is adaptable, tailor-made, and designed to match function with impressive skill.
        </p>
      </div>

      {/* Toggle Buttons */}
      <div className="flex gap-6 items-center justify-center flex-wrap">
        {["prarambh", "unnati", "vaibhav", "param"].map((plan) => (
          <button
            key={plan}
            onClick={() =>
              setSelectedPlan(
                plan as "prarambh" | "unnati" | "vaibhav" | "param"
              )
            }
            className="px-4 py-2 rounded-full border transition-colors duration-300"
            style={{
              backgroundColor: selectedPlan === plan ? "#214361" : "#ffffff",
              color: selectedPlan === plan ? "#ffffff" : "#4B5563",
              borderColor: "#214361",
            }}
          >
            {pricingPlans[plan as keyof typeof pricingPlans].title.split(" ")[0]}
          </button>
        ))}
      </div>

      {/* Pricing Cards */}
      <div className="w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-8">
        {Object.entries(pricingPlans).map(([key, plan]) => (
          <div
            key={key}
            className="p-6 rounded-lg shadow-lg flex flex-col justify-between transition-transform duration-300 relative bg-white"
            style={{
              border: selectedPlan === key ? "2px solid #214361" : "1px solid #e5e7eb",
              transform: selectedPlan === key ? "scale(1.05)" : "scale(1)",
              minHeight: "450px", // medium card height
            }}
          >
            {/* Popular Badge */}
            {key === "vaibhav" && (
              <div className="absolute top-2 right-2 bg-yellow-400 px-2 py-1 rounded">
                <p className="text-xs font-bold">Popular</p>
              </div>
            )}

            <div className="flex flex-col flex-1">
              <div>
                <h3 className="text-xl font-semibold" style={{ color: "#214361" }}>
                  {plan.title}
                </h3>
                <p className="text-gray-600 mt-1">{plan.description}</p>
              </div>

              <div className="mt-4">
                <p className="text-sm text-gray-500">{plan.subtext}</p>
              </div>

              <div className="mt-4 flex-1">
                <p className="font-medium">Services Included:</p>
                <ul className="mt-2 list-disc list-inside space-y-1 text-gray-700">
                  {plan.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-6">
              <a
                href="#"
                className="inline-block w-full text-center py-2 rounded-lg font-medium"
                style={{ backgroundColor: "#214361", color: "#ffffff" }}
              >
                Contact us for pricing
              </a>
            </div>
          </div>
        ))}
      </div>

     
      
    </section>
  );
};

export default PricingSection;
