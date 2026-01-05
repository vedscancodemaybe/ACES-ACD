import { useEffect } from "react";

const Privacy = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
    return (
      <div className="mt-10 min-h-screen bg-black text-white px-6 pt-28 pb-12 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
  
        <p className="mb-4">
          ACES respects your privacy and is committed to protecting the personal information
          of users visiting our website.
        </p>
  
        <h2 className="text-xl font-semibold mt-6 mb-2">1. Information We Collect</h2>
        <p>
          We may collect personal details such as name, email address, phone number,
          and academic or organizational information when voluntarily provided.
        </p>
  
        <h2 className="text-xl font-semibold mt-6 mb-2">2. Use of Information</h2>
        <p>
          Information collected is used solely for event registrations, communication,
          and internal coordination of ACES activities.
        </p>
  
        <h2 className="text-xl font-semibold mt-6 mb-2">3. Payment Security</h2>
        <p>
          All payment transactions are handled securely by Razorpay.
          ACES does not store sensitive financial information.
        </p>
  
        <h2 className="text-xl font-semibold mt-6 mb-2">4. Data Protection</h2>
        <p>
          Personal data is stored securely and accessed only by authorized members of ACES.
          We do not sell or share user data with third parties.
        </p>
  
        <p className="mt-8">
          By using this website, you consent to this Privacy Policy.
        </p>
      </div>
    );
  };
  
  export default Privacy;
  