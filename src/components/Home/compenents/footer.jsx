// src/components/footer.jsx

import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-8 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-4 flex flex-col items-center gap-4">

        {/* Existing footer content (logo, description, etc.) */}
        <p className="text-sm text-center">
          © {new Date().getFullYear()} ACES – MIT ADT University
        </p>

        {/* 🔐 Legal Links (ADD THIS) */}
        <div className="flex flex-wrap justify-center gap-6 text-sm">
          <Link to="/terms" className="hover:text-white">
            Terms & Conditions
          </Link>
          <Link to="/privacy" className="hover:text-white">
            Privacy Policy
          </Link>
          <Link to="/refund" className="hover:text-white">
            Refund Policy
          </Link>
          <Link to="/contact" className="hover:text-white">
            Contact Us
          </Link>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
