import React from 'react';

// Assets Imports
import service1 from '../assets/service1.webp';
import service2 from '../assets/service2.webp';
import service3 from '../assets/service3.webp'
import service4 from '../assets/service4.webp'
import service5 from '../assets/service5.webp'
import service6 from '../assets/service6.webp'

const Services = () => {
  const services = [
    {
      id: "01.",
      title: "Metal Construction",
      image: service1,
      className: "md:col-span-4 h-[450px]" 
    },
    {
      id: "02.",
      title: "Metal Melting",
      image: service2,
      className: "md:col-span-8 h-[450px]"
    },
    {
      id: "03.",
      title: "Water Jet Cutting",
      image: service3,
      className: "md:col-span-7 h-[500px]"
    },
    {
      id: "04.",
      title: "Laser Cutting",
      image: service4,
      className: "md:col-span-5 h-[500px]"
    },
    {
      id: "05.",
      title: "Custom Metal Cutting and Forming",
      image: service5,
      className: "md:col-span-6 h-[550px]"
    },
    {
      id: "06.",
      title: "Metal Casting",
      image: service6,
      className: "md:col-span-6 h-[550px]"
    }
  ];

  return (
    <section id="services" className="py-24 bg-white">
      {/* Header */}
      <div className="max-w-[1400px] mx-auto px-6 mb-12">
        <h2 className="text-4xl font-bold text-slate-900 mb-4 uppercase tracking-tight">Our Services</h2>
        <div className="w-20 h-1 bg-blue-600"></div>
      </div>

      {/* Grid */}
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-2 px-6">
        {services.map((service) => (
          <div 
            key={service.id} 
            className={`group relative overflow-hidden cursor-pointer w-full rounded-sm ${service.className} md:h-auto min-h-[400px]`}
          >
            {/* Background Image - Added transform-gpu to fix lag */}
            <img 
              src={service.image} 
              alt={service.title} 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out transform-gpu group-hover:scale-105"
            />

            {/* Default Dark Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent transition-opacity duration-500 group-hover:opacity-0"></div>

            {/* Blue Sliding Overlay - Reduced opacity to 60, added transform-gpu */}
            <div className="absolute inset-0 bg-blue-600/60 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out transform-gpu"></div>

            {/* Content Layer */}
            <div className="relative h-full p-10 flex flex-col justify-between z-10">
              <span className="text-white/60 text-xl font-mono group-hover:text-white transition-colors">
                {service.id}
              </span>

              <div>
                <h3 className="text-white text-3xl font-bold mb-6 transform-gpu group-hover:-translate-y-2 transition-transform duration-500">
                  {service.title}
                </h3>
                {/* Button was removed from here */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;