import React from "react";

const CustomerForm = ({
  customerName,
  setCustomerName,
  customerPhone,
  setCustomerPhone,
  setCurrentPage,
}) => {
  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">Your Details</h2>

      <input
        type="text"
        placeholder="Your Name"
        className="block w-full p-3 border rounded mb-4"
        value={customerName}
        onChange={(e) => setCustomerName(e.target.value)}
      />

      <input
        type="text"
        placeholder="Phone Number"
        className="block w-full p-3 border rounded mb-4"
        value={customerPhone}
        onChange={(e) => setCustomerPhone(e.target.value)}
      />

      <button
        className="px-6 py-3 bg-black text-white rounded-lg"
        onClick={() => setCurrentPage("confirm")}
      >
        Submit
      </button>
    </div>
  );
};

export default CustomerForm;
