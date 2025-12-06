import React from "react";
import ServiceCard from '../components/ServiceCard';


const services = [
  { name: "Haircut", price: 20 },
  { name: "Beard Trim", price: 10 },
  { name: "Hair + Beard", price: 25 },
];

const ServicesPage = ({ setCurrentPage, selectedService, setSelectedService }) => {
  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">Choose a Service</h2>

      <div className="grid gap-4">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            service={service}
            selected={selectedService?.name === service.name}
            onSelect={() => {
              setSelectedService(service);
              setCurrentPage("barbers");
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;
