import React from "react";
import BarberCard from "./BarberCard";

const barbers = [
  { name: "John", experience: "5 yrs" },
  { name: "Mike", experience: "3 yrs" },
  { name: "David", experience: "7 yrs" },
];

const BarbersPage = ({ setCurrentPage, selectedBarber, setSelectedBarber }) => {
  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">Choose a Barber</h2>

      <div className="grid gap-4">
        {barbers.map((barber, index) => (
          <BarberCard
            key={index}
            barber={barber}
            selected={selectedBarber?.name === barber.name}
            onSelect={() => {
              setSelectedBarber(barber);
              setCurrentPage("datetime");
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default BarbersPage;
