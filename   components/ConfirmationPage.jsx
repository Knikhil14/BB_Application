import React from "react";

const ConfirmationPage = ({
  selectedService,
  selectedBarber,
  selectedDate,
  selectedTime,
  customerName,
  customerPhone,
}) => {
  return (
    <div className="p-6 text-center">
      <h2 className="text-2xl font-bold mb-4">Booking Confirmed</h2>

      <p className="text-lg mb-3">Service: {selectedService?.name}</p>
      <p className="text-lg mb-3">Barber: {selectedBarber?.name}</p>
      <p className="text-lg mb-3">Date: {selectedDate}</p>
      <p className="text-lg mb-3">Time: {selectedTime}</p>
      <p className="text-lg mb-3">Name: {customerName}</p>
      <p className="text-lg mb-3">Phone: {customerPhone}</p>

      <p className="mt-6 text-green-600 font-semibold">
        Thank you! Your appointment is confirmed.
      </p>
    </div>
  );
};

export default ConfirmationPage;
