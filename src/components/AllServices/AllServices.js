import React, { useEffect, useState } from "react";
import ServiceCard from "../ServiceCard/ServiceCard";

const AllServices = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 mx-auto w-3/4 gap-4 sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
      {services.map((service) => (
        <ServiceCard service={service}></ServiceCard>
      ))}
    </div>
  );
};

export default AllServices;
