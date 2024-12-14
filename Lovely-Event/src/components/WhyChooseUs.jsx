import React from "react";

const whyChooseUs = [
  { id: 1, title: "Planned Work", icon: "🗓️", description: "Meticulous planning for flawless execution." },
  { id: 2, title: "Value for Money", icon: "💰", description: "Affordable services without compromising quality." },
  { id: 3, title: "Wide Themes", icon: "🎨", description: "Diverse themes tailored to your preferences." },
  { id: 4, title: "Dedicated Workers", icon: "💪", description: "A passionate team committed to your success." },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Why Choose Us</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {whyChooseUs.map((item) => (
            <div
              key={item.id}
              className="text-center bg-white shadow-md p-6 rounded-lg transition-transform transform hover:scale-105"
            >
              <div className="text-5xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
