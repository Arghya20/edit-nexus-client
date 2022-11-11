import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useTitle from "../hooks/useTitle";
import OurProducts from "../OurProducts/OurProducts";
import ServiceCard from "../ServiceCard/ServiceCard";
import HeroSection from "./HeroSection/HeroSection";
import Stats from "./Stats/Stats";

const Home = () => {
  useTitle("Home");
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://video-editing-service-server.vercel.app/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="bg-gray-50 w-full">
      <HeroSection></HeroSection>
      <div>
        <h2 className="text-5xl text-center my-10 font-bold text-blue-800">
          Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto w-3/4 gap-4 sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
          {/* // {dec.length > 100 ? dec.slice(0, 100) + '...' : dec} */}
          {services.slice(0, 3).map((service) => (
            <ServiceCard key={service._id} service={service}></ServiceCard>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-10  pb-12">
        <Link
          to="/Services"
          className="bg-gray-700 hover:bg-gray-800 py-3 px-16  rounded-full text-white shadow-xl"
        >
          See all
        </Link>
      </div>
      <div className="sm:max-w-xl md:max-w-full lg:max-w-screen-xl mx-auto ">
        <h2 className="text-5xl text-center  font-bold bg-green  text-blue-800 mt-24 -mb-10">
          Our Products
        </h2>
        <OurProducts></OurProducts>
      </div>
      <Stats></Stats>
    </div>
  );
};

export default Home;
