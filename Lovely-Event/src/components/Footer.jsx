import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
            <p>Lovely Event Decorators</p>
            <p>123 Event Street, Your City</p>
            <p>Email: contact@lovelyevent.india</p>
            <p>Phone: +1 (234) 567-8910</p>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
            <ul>
              <li className="mb-2">
                <a href="#home" className="hover:underline">
                  Home
                </a>
              </li>
              <li className="mb-2">
                <a href="#categories" className="hover:underline">
                  Event Categories
                </a>
              </li>
              <li className="mb-2">
                <a href="#faq" className="hover:underline">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:underline">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Get In Touch</h2>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full p-2 border border-gray-700 rounded"
                  placeholder="Your Name"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-2 border border-gray-700 rounded"
                  placeholder="Your Email"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  className="w-full p-2 border border-gray-700 rounded"
                  placeholder="Your Message"
                  rows="4"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-pink-500 hover:bg-pink-600 text-white py-2 px-4 rounded"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-8">
          <p>
            &copy; {new Date().getFullYear()} Lovely Event Decorators. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
