import React from "react";

const PricingSection = () => {
  const plans = [
    {
      name: "Starter",
      price: "$0",
      desc: "Perfect for getting started",
      features: [
        "Access to 10 free tools",
        "Basic templates",
        "Community support",
        "1 project per month",
      ],
      button: "Get Started Free",
      highlight: false,
    },
    {
      name: "Pro",
      price: "$29",
      desc: "Best for professionals",
      features: [
        "Access to all premium tools",
        "Unlimited templates",
        "Priority support",
        "Unlimited projects",
        "Cloud sync",
        "Advanced analytics",
      ],
      button: "Start Pro Trial",
      highlight: true,
    },
    {
      name: "Enterprise",
      price: "$99",
      desc: "For teams and businesses",
      features: [
        "Everything in Pro",
        "Team collaboration",
        "Custom integrations",
        "Dedicated support",
        "SLA guarantee",
        "Custom branding",
      ],
      button: "Contact Sales",
      highlight: false,
    },
  ];

  return (
    <section className="py-20 text-center">
      <h2 className="text-4xl font-bold mb-3">
        Simple, Transparent Pricing
      </h2>
      <p className="text-gray-500 mb-12">
        Choose the plan that fits your needs. Upgrade or downgrade anytime.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 md:px-20">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`rounded-2xl p-8 ${
              plan.highlight
                ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white scale-105"
                : "bg-[#F2F2F2]"
            }`}
          >
         
            {plan.highlight && (
              <div className="mb-3 inline-block bg-[#FEF3C6] text-[#BB4D00] text-xs px-3 py-1 rounded-full">
                Most Popular
              </div>
            )}

            <h3 className="text-xl font-semibold">{plan.name}</h3>
            <p className="text-sm mb-4 opacity-80">{plan.desc}</p>

            <h1 className="text-4xl font-bold mb-4">
              {plan.price}
              <span className="text-lg">/month</span>
            </h1>

            <ul className="text-left space-y-2 mb-6">
              {plan.features.map((f, i) => (
                <li key={i} className="flex items-center gap-2">
                  <i className="fa-solid fa-check text-green-400"></i>
                  {f}
                </li>
              ))}
            </ul>

            <button
              className={`w-full py-2 rounded-full font-semibold ${
                plan.highlight
                  ? "bg-white text-purple-600"
                  : "bg-gradient-to-r from-purple-600 to-indigo-600 text-white"
              }`}
            >
              {plan.button}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PricingSection;