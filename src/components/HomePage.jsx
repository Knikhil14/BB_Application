import React from "react";

const HomePage = ({ setCurrentPage }) => {
  return (
    <div className="p-8 text-center">
      <h2 className="text-3xl font-bold mb-6">Welcome to Barber Booking</h2>

      <button
        className="px-6 py-3 bg-black text-white rounded-lg"
        onClick={() => setCurrentPage("services")}
      >
        Book a Service
      </button>
    </div>
  );
};

export default HomePage;
