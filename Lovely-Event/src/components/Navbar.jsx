import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4 fixed top-0 w-full z-10 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">
          LovelyEvent.India
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="hover:text-pink-500">Home</Link>
          </li>
          <li>
            <Link to="/categories" className="hover:text-pink-500">Events</Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-pink-500">About Us</Link>
          </li>
          <li>
            <Link to="/faq" className="hover:text-pink-500">FAQ</Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-pink-500">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
