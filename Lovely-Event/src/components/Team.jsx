import React from "react";

const team = [
  { name: "John Doe", role: "Owner", image: "/assets/owner.jpg" },
  { name: "Emily Smith", role: "Event Planner", image: "/assets/planner.jpg" },
  { name: "Michael Brown", role: "Designer", image: "/assets/designer.jpg" },
  { name: "Sarah Lee", role: "Coordinator", image: "/assets/coordinator.jpg" },
  { name: "David Wilson", role: "Logistics", image: "/assets/logistics.jpg" },
];

const Team = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Meet the Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {team.map((member, index) => (
            <div
              key={index}
              className="text-center shadow-md bg-white p-6 rounded-lg"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 mx-auto mb-4 rounded-full object-cover"
              />
              <h3 className="text-xl font-bold">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
