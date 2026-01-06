import { Link } from "react-router-dom";
import { FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

// 🔽 ADD YOUR LOGO IMAGE HERE
// Place logo file at: src/assets/aces-logo.png
import acesLogo from "../assets/ACESLogo.jpeg";

const Footer = () => {
  return (
    <footer className="bg-[#0d0d0d] border-t border-gray-800 text-gray-400">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col gap-8">

        {/* Top section */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6">

          {/* ACES Logo */}
          <div className="flex justify-center md:justify-start">
            <img
              src={acesLogo}
              alt="ACES Logo"
              className="h-10 object-contain"
            />
          </div>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-end gap-6 text-xl text-white">
            <a
              href="https://www.instagram.com/aces_mitadt/#"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500 transition"
              aria-label="ACES Instagram"
            >
              <FaInstagram />
            </a>

            <a
              href="https://www.linkedin.com/company/aces-mitadt/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition"
              aria-label="ACES LinkedIn"
            >
              <FaLinkedinIn />
            </a>

            <a
              href="https://chat.whatsapp.com/LSoSVdHx0cz1FfvCh3eDqk"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-500 transition"
              aria-label="ACES WhatsApp"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800"></div>

        {/* Legal Links */}
        <div className="flex flex-wrap justify-center gap-6 text-sm">
          <Link to="/terms" className="hover:text-white transition">
            Terms & Conditions
          </Link>
          <Link to="/privacy" className="hover:text-white transition">
            Privacy Policy
          </Link>
          <Link to="/refund" className="hover:text-white transition">
            Refund Policy
          </Link>
          <Link to="/contact" className="hover:text-white transition">
            Contact Us
          </Link>
        </div>

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm">

          {/* Copyright */}
          <p className="text-center md:text-left">
            © {new Date().getFullYear()} ACES – MIT ADT University. All rights reserved.
          </p>

          {/* Razorpay Badge */}
          <div className="flex items-center gap-2 opacity-80">
            <span>Powered by</span>
            <img
              src="https://razorpay.com/assets/razorpay-logo.svg"
              alt="Razorpay"
              className="h-5 object-contain"
            />
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
