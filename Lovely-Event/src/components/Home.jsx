import React from "react";

const Home = () => {
  return (
    <div className="pt-16">
      <section className="bg-cover bg-center h-screen" style={{ backgroundImage: `url('https://png.pngtree.com/thumb_back/fw800/background/20231008/pngtree-d-render-vibrant-balloon-decorations-for-an-exciting-birthday-party-and-image_13522638.png')` }}>
        <div className="container mx-auto text-center text-white h-full flex flex-col justify-center">
          <h1 className="text-5xl font-bold mb-4">LovelyEvent.India</h1>
          <p className="text-lg mb-6">Order online and get fresh flower delivery from us.</p>
          <div>
            <button className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-700 mr-4">Contact Us</button>
            <button className="bg-transparent border border-white px-4 py-2 rounded hover:bg-white hover:text-black">Explore Now</button>
          </div>
        </div>
      </section>
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Planned Work", icon: "🗓️" },
              { title: "Value for Money", icon: "💰" },
              { title: "Wide Themes", icon: "🎨" },
              { title: "Dedicated Workers", icon: "👷" },
            ].map((item, index) => (
              <div key={index} className="p-4 shadow-lg rounded bg-white">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-gray-600 mt-2">Description about {item.title}.</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
