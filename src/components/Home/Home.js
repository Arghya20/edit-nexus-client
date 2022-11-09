import React, { useEffect, useState } from "react";
import ServiceCard from "../ServiceCard/ServiceCard";
import HeroSection from "./HeroSection/HeroSection";

const Home = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="bg-green-50 w-full">
      <HeroSection></HeroSection>
      <div>
        <h2 className="text-2xl text-center my-10 font-semibold bg-green underline text-red-800">
          Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto w-3/4 gap-4 sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
          {services.map((service) => (
            <ServiceCard service={service}></ServiceCard>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-10  pb-12">
        <button className="bg-gray-700 hover:bg-gray-800 py-3 px-16  rounded-full text-white shadow-xl">
          See all
        </button>
      </div>
    </div>
  );
};

export default Home;
