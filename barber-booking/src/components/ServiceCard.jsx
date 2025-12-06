import React from "react";

const ServiceCard = ({ service, onSelect, selected }) => {
  return (
    <div
      onClick={onSelect}
      className={`p-4 border rounded-lg cursor-pointer ${
        selected ? "border-black bg-gray-200" : "border-gray-300"
      }`}
    >
      <h3 className="text-lg font-bold">{service.name}</h3>
      <p className="text-gray-600">${service.price}</p>
    </div>
  );
};

export default ServiceCard;
