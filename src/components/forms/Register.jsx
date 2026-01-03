import React, { useState } from "react";
import { useParams, Navigate } from "react-router-dom";

const EVENTS = {
  "acd-2k26": {
    title: "ACES Community Day 2026",
    price: 499, // UI only
    registrationOpen: true,
  },
  "dil-chahta-hai": {
    title: "Dil Chahta Hai",
    price: 0,
    registrationOpen: false,
  },
};

const Register = () => {
  const { eventId } = useParams();
  const event = EVENTS[eventId];

  if (!event) return <Navigate to="/error" />;
  if (!event.registrationOpen) return <Navigate to="/" />;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    college: "",
    year: "",
    day: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePayment = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // 1️⃣ Create order (ONLY eventId sent)
      const orderRes = await fetch(
        "http://localhost:5000/api/payment/create-order",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ eventId }),
        }
      );

      if (!orderRes.ok) {
        throw new Error("Order creation failed");
      }

      const order = await orderRes.json();

      // 2️⃣ Razorpay options
      const options = {
        key: "rzp_test_XXXXXXXXXX", // 🔴 REPLACE with your Razorpay TEST Key ID
        amount: order.amount,
        currency: "INR",
        name: event.title,
        description: "Event Registration",
        order_id: order.id,

        handler: async function (response) {
          try {
            const verifyRes = await fetch(
              "http://localhost:5000/api/payment/verify-and-register",
              {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  eventId,
                  razorpay_order_id: response.razorpay_order_id,
                  razorpay_payment_id: response.razorpay_payment_id,
                  razorpay_signature: response.razorpay_signature,
                  userData: formData,
                }),
              }
            );

            const result = await verifyRes.json();

            if (result.success) {
              alert("✅ Registration successful! Ticket sent to email.");
            } else {
              alert("❌ Payment verification failed.");
            }
          } catch (err) {
            console.error("Verification error:", err);
            alert("❌ Verification failed. Please contact support.");
          }
        },

        modal: {
          ondismiss: function () {
            alert("Payment cancelled by user");
          },
        },

        prefill: {
          name: formData.name,
          email: formData.email,
          contact: formData.phone,
        },

        theme: { color: "#7c3aed" },
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch (err) {
      console.error("Payment init error:", err);
      alert("Oops! Something went wrong. Payment Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-black px-4">
      <form
        onSubmit={handlePayment}
        className="w-full max-w-lg bg-[#1a1a1a] rounded-2xl p-8 border border-gray-700"
      >
        <h2 className="text-3xl font-bold text-center text-white mb-1">
          Registration for
        </h2>
        <h3 className="text-xl font-semibold text-center text-purple-400 mb-6">
          {event.title}
        </h3>

        <div className="space-y-4">
          <input name="name" placeholder="Full Name" required onChange={handleChange}
            className="w-full bg-[#262626] text-white px-4 py-3 rounded-lg border border-gray-600" />

          <input name="email" type="email" placeholder="Email" required onChange={handleChange}
            className="w-full bg-[#262626] text-white px-4 py-3 rounded-lg border border-gray-600" />

          <input name="phone" placeholder="Phone Number" required onChange={handleChange}
            className="w-full bg-[#262626] text-white px-4 py-3 rounded-lg border border-gray-600" />

          <input name="college" placeholder="College / Organization" required onChange={handleChange}
            className="w-full bg-[#262626] text-white px-4 py-3 rounded-lg border border-gray-600" />

          <select name="year" required onChange={handleChange}
            className="w-full bg-[#262626] text-white px-4 py-3 rounded-lg border border-gray-600">
            <option value="">Select Year</option>
            <option>1st Year</option>
            <option>2nd Year</option>
            <option>3rd Year</option>
            <option>4th Year</option>
          </select>

          <select name="day" required onChange={handleChange}
            className="w-full bg-[#262626] text-white px-4 py-3 rounded-lg border border-gray-600">
            <option value="">Select Event Day</option>
            <option>29 January</option>
            <option>30 January</option>
            <option>Both Days</option>
          </select>
        </div>

        <button
          disabled={loading}
          className="w-full mt-6 bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-full text-lg"
        >
          {loading ? "Processing..." : `Proceed to Payment ₹${event.price}`}
        </button>

        <p className="text-center text-sm text-gray-400 mt-4">
          Secure payment powered by Razorpay
        </p>
      </form>
    </div>
  );
};

export default Register;
