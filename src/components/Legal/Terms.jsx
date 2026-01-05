import { useEffect } from "react";

const Terms = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
    return (
      <div className="mt-10 min-h-screen bg-black text-white px-6 pt-28 pb-12 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Terms & Conditions</h1>
  
        <p className="mb-4">
          Welcome to the official website of <strong>ACES (Association of Computer Engineering Students)</strong>, MIT ADT University.
          By accessing or using this website, you agree to comply with the following terms and conditions.
        </p>
  
        <h2 className="text-xl font-semibold mt-6 mb-2">1. About ACES</h2>
        <p>
          ACES is a student-driven technical community at MIT ADT University, focused on learning, innovation,
          collaboration, and community engagement through events, workshops, and initiatives.
        </p>
  
        <h2 className="text-xl font-semibold mt-6 mb-2">2. Website Usage</h2>
        <p>
          This website is intended for informational and registration purposes only.
          Users agree not to misuse the platform or engage in activities that may harm its integrity.
        </p>
  
        <h2 className="text-xl font-semibold mt-6 mb-2">3. Event Registrations</h2>
        <p>
          Event registrations may be free or paid as specified. Registration is confirmed only after
          successful payment (if applicable). Registrations are non-transferable unless stated otherwise.
        </p>
  
        <h2 className="text-xl font-semibold mt-6 mb-2">4. Payments</h2>
        <p>
          All payments are securely processed through Razorpay. ACES does not store or have access
          to your payment card or banking details.
        </p>
  
        <h2 className="text-xl font-semibold mt-6 mb-2">5. Liability</h2>
        <p>
          ACES and MIT ADT University are not liable for any personal loss, injury, or damage arising
          from participation in events or use of this website.
        </p>
  
        <p className="mt-8">
          By using this website, you acknowledge that you have read and agreed to these Terms & Conditions.
        </p>
      </div>
    );
  };
  
  export default Terms;
  