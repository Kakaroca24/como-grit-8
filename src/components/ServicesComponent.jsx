import React from 'react';
import { useTranslation } from "react-i18next";

// Assets Imports
import image1 from '../assets/image1.webp'
import image2 from '../assets/image2.webp'
import image3 from '../assets/image3.webp'
import image4 from '../assets/image4.webp'
import image11 from '../assets/image11.webp'
import image12 from '../assets/image12.webp'

import image13 from '../assets/image13.webp';
import image14 from '../assets/image14.webp'
import image15 from '../assets/image15.webp'
import image16 from '../assets/image16.webp'
import image17 from '../assets/image20.webp'


const Services = () => {
  const { t } = useTranslation();

  const services = [
    {
      id: "01.",
      title: t("metalConstruction"),
      image: image13,
      className: "md:col-span-4 h-[450px]"
    },
    {
      id: "02.",
      title: t("metalMelting"),
      image: image3,
      className: "md:col-span-8 h-[450px]"
    },
    {
      id: "03.",
      title: t("waterJetCutting"),
      image: image15,
      className: "md:col-span-7 h-[500px]"
    },
    {
      id: "04.",
      title: t("laserCutting"),
      image: image16,
      className: "md:col-span-5 h-[500px]"
    },
    {
      id: "05.",
      title: t("customMetalCutting"),
      image: image14,
      className: "md:col-span-6 h-[550px]"
    },
    {
      id: "06.",
      title: t("metalCasting"),
      image: image4,
      className: "md:col-span-6 h-[550px]"
    },
    {
      id: "07.",
      title: t("machiningToolsFabrication"),
      image: image1,
      className: "md:col-span-8 h-[450px]"
    },
    {
      id: "08.",
      title: t("cncMachining"),
      image: image2,
      className: "md:col-span-4 h-[450px]"
    },
    {
      id: "09.",
      title: t("aluminumProcessing"),
      image: image11,
      className: "md:col-span-8 h-[450px]"
    },
    {
      id: "11.",
      title: t("metalConcetrate"),
      image: image12,
className: "md:col-span-4 h-[450px]"
    },
    {
      id: "12.",
      title: t("CNCManufacturingAutoParts"),
      image: image17,
      className: "md:col-span-6 h-[550px]"
    },
  ];

  return (
    <section id="services" className="py-24 bg-white">
      {/* Header */}
      <div className="max-w-[1400px] mx-auto px-6 mb-12">
        <h2 className="text-4xl font-bold text-slate-900 mb-4 uppercase tracking-tight">{t("servicesTitle")}</h2>
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