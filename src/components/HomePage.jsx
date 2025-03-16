
import React from "react";
import { Link } from "react-router-dom";
import Notices from "./Notices";
import Events from "./Events";

const HomePage = () => {
  return (
    <div>
      {/* College Photo Section */}
      <div className="w-full">
        <img src="sgsits_img" alt="College" className="w-full h-64 object-cover" />
      </div>

      {/* Heading */}
      <h1 className="text-center text-2xl font-bold mt-4">
        SAROJINI NAIDU GIRLS HOSTEL - SMART HOSTEL HUB
      </h1>

      {/* Navigation Bar */}
      <nav className="bg-blue-500 text-white p-4 mt-4">
        <ul className="flex justify-center space-x-6">
          <li><Link to="/attendance" className="hover:underline">Student Attendance</Link></li>
          <li><Link to="/marketplace" className="hover:underline">Marketplace</Link></li>
          <li><Link to="/contact" className="hover:underline">Contact</Link></li>
          <li><Link to="/about" className="hover:underline">About Us</Link></li>
        </ul>
      </nav>

      {/* Notices and Events Sections */}
      <div className="container mx-auto mt-6 px-4">
        <Notices />
        <Events />
      </div>
    </div>
  );
};

export default HomePage;
