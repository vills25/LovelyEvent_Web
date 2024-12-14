import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const eventDetails = {
  1: {
    name: "Baby Shower",
    description: "Celebrate the joy of parenthood with our exclusive Baby Shower events.",
    images: ["/assets/baby-shower1.jpg", "/assets/baby-shower2.jpg"],
  },
  2: {
    name: "Birthday",
    description: "Make your birthdays unforgettable with our premium decoration services.",
    images: ["/assets/birthday1.jpg", "/assets/birthday2.jpg"],
  },
  
};

const EventDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const event = eventDetails[id];

  if (!event) {
    return <p className="text-center text-lg mt-16">Event not found!</p>;
  }

  return (
    <div className="pt-16 pb-8">
      <div className="container mx-auto">
        <button
          className="text-pink-500 hover:underline mb-4"
          onClick={() => navigate(-1)}
        >
          &larr; Back to Categories
        </button>
        <h2 className="text-3xl font-bold mb-4">{event.name}</h2>
        <p className="text-gray-700 mb-8">{event.description}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {event.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`${event.name} ${index + 1}`}
              className="w-full h-64 object-cover rounded shadow"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
