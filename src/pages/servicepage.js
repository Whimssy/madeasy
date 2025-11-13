import React, { useState } from "react";
import StandardCleaningOptions from "./StandardCleaningOptions";
import "./servicepage.css";


const services = [
  {
    id: 1,
    name: "STANDARD CLEANING",
    image: "https://plus.unsplash.com/premium_photo-1678718604563-5268de669666?q=80&w=388&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    name: "DEEP CLEANING",
    image: "https://plus.unsplash.com/premium_photo-1676810460522-bc963e5554d8?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    name: "LAUNDRY SERVICES",
    image: "https://images.unsplash.com/photo-1594303471920-b66b769a6b8f?q=80&w=874&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    name: "CUSTOM REQUESTS",
    image: "https://plus.unsplash.com/premium_photo-1661320841083-7d7fc8da21ec?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

function Services() {
  const [showStandardOptions, setShowStandardOptions] = useState(false);

  const handleCardClick = (serviceName) => {
    if (serviceName === "STANDARD CLEANING") {
      setShowStandardOptions(true);
    }
  };

  return (
    <div className="services-container">
      {!showStandardOptions ? (
        <div className="card-grid">
          {services.map((service) => (
            <div
              key={service.id}
              className="service-card"
              onClick={() => handleCardClick(service.name)}
            >
              <img src={service.image} alt={service.name} className="card-image" />
              <div className="card-content">
                <h2>{service.name}</h2>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <StandardCleaningOptions />
      )}
    </div>
  );
}

export default Services;