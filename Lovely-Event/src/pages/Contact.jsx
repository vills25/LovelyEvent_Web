import React from "react";

const Contact = () => {
  return (
    <div className="pt-16 pb-8">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
        <form className="max-w-lg mx-auto space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 border rounded"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 border rounded"
          />
          <textarea
            placeholder="Your Message"
            rows="5"
            className="w-full p-3 border rounded"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-pink-500 text-white py-3 rounded hover:bg-pink-600 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
