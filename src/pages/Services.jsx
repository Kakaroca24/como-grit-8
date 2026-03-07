import React from 'react';

import Service1 from '../assets/service1.webp'

import Service2 from '../assets/service2.webp'
import Service3 from '../assets/service3.webp'
import Service4 from '../assets/service4.webp'
import Service5 from '../assets/service5.webp'
import Service6 from '../assets/service6.webp'


const servicesData = [
  {
    id: 1,
    title: "Metal Construction",
    description: "We cut shapes according to your specifications quickly and precisely using the latest laser cutting technology. We operate a 4kW fiber laser capable of cutting steel, stainless steel, aluminum, copper, and brass.",
    bullets: [
      "High Precision: Exceptional cutting accuracy down to the finest detail.",
      "Clean Cuts: Minimal material deformation, no rough edges.",
       "Clean Cuts: Minimal material deformation, no rough edges."
    ],
    imageUrl: Service1,
  },
  {
    id: 2,
    title: "Metal Melting",
    description: "Using advanced press brakes, we shape sheet metal into complex forms with high repeatability and tight tolerances. Perfect for both prototype development and mass production.",
    bullets: [
      "Bending forces up to 200 tons.",
       "Bending forces up to 200 tons.",
      "Max bending lengths up to 3 meters."
    ],
    imageUrl: Service2,
  },
  {
    id: 3,
    title: "Water Jet Cutting",
    description: "We offer high-quality powder coating services for metal components. This process provides a more durable finish than conventional paints and is highly resistant to impact, moisture, chemicals, and extreme weather.",
    bullets: [
      "Eco-friendly with virtually no volatile organic compounds (VOCs).",
            "Eco-friendly with virtually no volatile organic compounds (VOCs).",

      "Wide variety of colors and textures available."
    ],
    imageUrl: Service3,
  },
  {
    id: 4,
    title: "Laser Cutting",
    description: "Our state-of-the-art CNC machining centers deliver high-tolerance parts from a variety of raw materials. Whether you need a single custom prototype or thousands of production units, we have you covered.",
    bullets: [
      "3-axis and 5-axis milling capabilities.",
            "3-axis and 5-axis milling capabilities.",

      "Strict quality control and inspection processes."
    ],
    imageUrl: Service4,
  },
  {
    id: 5,
    title: "Custom Metal Cutting and Forming",
    description: "We provide professional MIG, TIG, and arc welding services. Our certified welders ensure strong, clean, and structurally sound joints for everything from delicate assemblies to heavy industrial frameworks.",
    bullets: [
      "Certified and highly experienced welding technicians.",
            "Certified and highly experienced welding technicians.",

      "Expertise in steel, stainless steel, and aluminum."
    ],
    imageUrl: Service5,
  },
  {
    id: 6,
    title: "Metal Casting",
    description: "To ensure your parts are ready for assembly or the end-user, we offer a range of finishing services. From deburring and sandblasting to threading and countersinking, we handle the final details.",
    bullets: [
      "Removes sharp edges and burrs for safety.",
            "Removes sharp edges and burrs for safety.",

      "Prepares surfaces for painting, coating, or plating."
    ],
    imageUrl: Service6,
  }
];

export default function Services() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-white">
      
      {/* Page Header */}
      <div className="text-center mb-20">
        <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">Our Services</h1>
        <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
          Delivering precision, quality, and efficiency across all of our industrial solutions.
        </p>
      </div>

      {/* Services List */}
      <div className="space-y-24">
        {servicesData.map((service) => (
          <div key={service.id} className="flex flex-col lg:flex-row items-center gap-12">
            
            {/* Left Side: Text Content */}
            <div className="lg:w-1/2 flex flex-col justify-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">{service.title}</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <div className="mb-8">
                <h4 className="font-bold text-gray-900 mb-3">Key Highlights:</h4>
                <ul className="space-y-3 text-gray-600">
                  {service.bullets.map((bullet, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
             
            </div>

            {/* Right Side: Image */}
            <div className="lg:w-1/2 w-full">
              <img 
                src={service.imageUrl} 
                alt={service.title} 
                className="w-full h-[400px] object-cover rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              />
            </div>
            
          </div>
        ))}
      </div>
    </div>
  );
}