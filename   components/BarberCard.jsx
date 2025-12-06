import React from "react";

const BarberCard = ({ barber, onSelect, selected }) => {
  return (
    <div
      onClick={onSelect}
      className={`p-4 border rounded-lg cursor-pointer ${
        selected ? "border-black bg-gray-200" : "border-gray-300"
      }`}
    >
      <h3 className="text-lg font-bold">{barber.name}</h3>
      <p className="text-gray-600">Experience: {barber.experience}</p>
    </div>
  );
};

export default BarberCard;
