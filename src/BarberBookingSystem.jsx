import React, { useState } from "react";
import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";
import ServicesPage from "./components/ServicesPage";
import BarbersPage from "./components/BarbersPage";
import DateTimePage from "./components/DateTimePage";
import CustomerForm from "./components/CustomerForm";
import ConfirmationPage from "./components/ConfirmationPage";

const BarberBookingSystem = () => {
  const [currentPage, setCurrentPage] = useState("home");
  const [selectedService, setSelectedService] = useState(null);
  const [selectedBarber, setSelectedBarber] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");

  return (
    <div className="min-h-screen bg-gray-100">
      <NavBar setCurrentPage={setCurrentPage} />

      {currentPage === "home" && (
        <HomePage setCurrentPage={setCurrentPage} />
      )}

      {currentPage === "services" && (
        <ServicesPage
          setCurrentPage={setCurrentPage}
          selectedService={selectedService}
          setSelectedService={setSelectedService}
        />
      )}

      {currentPage === "barbers" && (
        <BarbersPage
          setCurrentPage={setCurrentPage}
          selectedBarber={selectedBarber}
          setSelectedBarber={setSelectedBarber}
        />
      )}

      {currentPage === "datetime" && (
        <DateTimePage
          setCurrentPage={setCurrentPage}
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          selectedTime={selectedTime}
          setSelectedTime={setSelectedTime}
        />
      )}

      {currentPage === "details" && (
        <CustomerForm
          customerName={customerName}
          setCustomerName={setCustomerName}
          customerPhone={customerPhone}
          setCustomerPhone={setCustomerPhone}
          setCurrentPage={setCurrentPage}
        />
      )}

      {currentPage === "confirm" && (
        <ConfirmationPage
          selectedService={selectedService}
          selectedBarber={selectedBarber}
          selectedDate={selectedDate}
          selectedTime={selectedTime}
          customerName={customerName}
          customerPhone={customerPhone}
        />
      )}
    </div>
  );
};

export default BarberBookingSystem;
