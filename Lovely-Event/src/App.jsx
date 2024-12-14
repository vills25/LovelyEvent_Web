import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Contact from './pages/Contact';
import Categories from "./pages/Categories";
import FAQ from "./pages/FAQ";
import AboutUs from './pages/Aboutus';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import EventDetails from './pages/EventDetails';

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/categories/:id" element={<EventDetails />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>;
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;