import React from 'react';
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function GalleryPreview() {
  const { t } = useTranslation();
  // Assuming this returns an array of projects
  const projects = t("galleryProjects", { returnObjects: true }) || [];

  return (
    <section id="gallery" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-6 uppercase tracking-tight">
            {t("galleryTitle")}
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            {t("gallerySubtitle")}
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <div 
              key={idx} 
              className="group relative overflow-hidden aspect-square rounded-xl cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-500"
            >
              {/* Image only - No opacity filters, just smooth zoom */}
              <img
                src={project.image}
                alt={project.title || "Gallery Image"}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out transform-gpu group-hover:scale-110"
              />
            </div>
          ))}
        </div>

        {/* Call to Action Button */}
        <div className="mt-16 flex justify-center">
          <Link
            to="/gallery"
            className="group relative overflow-hidden bg-slate-900 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-blue-600 transition-colors duration-300 shadow-lg active:scale-95 inline-flex items-center gap-3 border border-transparent hover:border-blue-500"
          >
            <span className="relative z-10 uppercase tracking-wider text-sm">
              {t("exploreMore", "Explore More Projects")}
            </span>
            <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

      </div>
    </section>
  );
}