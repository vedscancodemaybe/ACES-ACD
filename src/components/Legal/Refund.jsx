import { useEffect } from "react";

const Refund = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
    return (
      <div className="mt-10 min-h-screen bg-black text-white px-6 pt-28 pb-12 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Refund & Cancellation Policy</h1>
  
        <p className="mb-4">
          Refund eligibility depends on the nature of the event organized by ACES.
        </p>
  
        <ul className="list-disc pl-6 space-y-2">
          <li>
            For paid events, refund policies (if any) will be clearly mentioned on the event registration page.
          </li>
          <li>
            Unless explicitly stated, all registrations are non-refundable and non-transferable.
          </li>
          <li>
            In case an event is cancelled by ACES, participants will be informed regarding refund procedures.
          </li>
          <li>
            Refunds, if applicable, will be processed via the original payment method as per Razorpay timelines.
          </li>
        </ul>
      </div>
    );
  };
  
  export default Refund;
  