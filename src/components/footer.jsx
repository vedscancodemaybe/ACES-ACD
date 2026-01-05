import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#0d0d0d] border-t border-gray-800 text-gray-400">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col gap-8">

        {/* Top section */}
        <div className="flex flex-col md:flex-row md:justify-between gap-6">

          {/* ACES Info */}
          <div className="text-center md:text-left">
            <h3 className="text-white font-semibold text-lg">ACES</h3>
            <p className="text-sm mt-2 max-w-sm">
              Association of Computer Engineering Students <br />
              MIT ADT University, Pune
            </p>
          </div>

          {/* Legal Links */}
          <div className="flex flex-wrap justify-center md:justify-end gap-6 text-sm">
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
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800"></div>

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
