import React from "react";

const StepsSection = () => {
  const steps = [
    {
      id: "01",
      title: "Create Account",
      desc: "Sign up for free in seconds. No credit card required to get started.",
      icon: "fa-user",
    },
    {
      id: "02",
      title: "Choose Products",
      desc: "Browse our catalog and select the tools that fit your needs.",
      icon: "fa-box",
    },
    {
      id: "03",
      title: "Start Creating",
      desc: "Download and start using your premium tools immediately.",
      icon: "fa-rocket",
    },
  ];

  return (
    <section className="py-20 bg-[#F9FAFC] text-center">
      <h2 className="text-4xl font-bold mb-3">Get Started In 3 Steps</h2>
      <p className="text-gray-500 mb-12">
        Start using premium digital tools in minutes, not hours.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 lg:px-40">
        {steps.map((step) => (
          <div
            key={step.id}
            className="relative bg-white p-8 rounded-2xl shadow-sm"
          >
        
            <div className="absolute top-4 right-4 bg-purple-600 text-white text-sm px-3 py-1 rounded-full">
              {step.id}
            </div>

            {/* Icon */}
            <div className="flex justify-center mb-5">
              <div className="bg-purple-100 text-purple-600 p-6 rounded-full text-2xl">
                <i className={`fa-solid ${step.icon}`}></i>
              </div>
            </div>

            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
            <p className="text-gray-500 text-sm">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StepsSection;