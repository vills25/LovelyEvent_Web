import React from "react";
import { useNavigate } from "react-router-dom";

const eventCategories = [
  { id: 1, name: "Baby Shower", image: "/assets/baby-shower.jpg" },
  { id: 2, name: "Birthday", image: "/assets/birthday.jpg" },
  { id: 3, name: "Corporate", image: "/assets/corporate.jpg" },
  { id: 4, name: "Haldi", image: "/assets/haldi.jpg" },
  { id: 5, name: "Vana Rasam", image: "/assets/vana-rasam.jpg" },
  { id: 6, name: "Mahendi", image: "/assets/mahendi.jpg" },
  { id: 7, name: "Varmala", image: "/assets/varmala.jpg" },
  { id: 8, name: "Dulha Entry", image: "/assets/dulha-entry.jpg" },
  { id: 9, name: "Dulhan Entry", image: "/assets/dulhan-entry.jpg" },
  { id: 10, name: "Engagement", image: "/assets/engagement.jpg" },
];

const Categories = () => {
  const navigate = useNavigate();

  const handleCardClick = (categoryId) => {
    navigate(`/categories/${categoryId}`);
  };

  return (
    <div className="pt-16 pb-8">
      <section className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Event Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {eventCategories.map((category) => (
            <div
              key={category.id}
              className="relative rounded overflow-hidden shadow-lg cursor-pointer"
              onClick={() => handleCardClick(category.id)}
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-300">
                <h3 className="text-white text-xl font-semibold">
                  {category.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Categories;
