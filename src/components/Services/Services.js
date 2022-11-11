import React, { useEffect, useState } from "react";
import useTitle from "../hooks/useTitle";
import ServiceCard from "../ServiceCard/ServiceCard";

const Services = () => {
  useTitle("Services");
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://video-editing-service-server.vercel.app/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 mx-auto w-3/4 gap-4 sm:max-w-xl md:max-w-full lg:max-w-screen-xl my-8">
      {services.map((service) => (
        <ServiceCard key={service._id} service={service}></ServiceCard>
      ))}
    </div>
  );
};

export default Services;
