import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import gallery1 from "../assets/gallery7.webp";
import gallery2 from "../assets/gallery8.webp";
import image3 from '../assets/image3.webp'
import gallery4 from "../assets/gallery5.webp";

export default function GalleryPreview() {
  const { t } = useTranslation();

  const images = [gallery1, gallery2, image3, gallery4];

  return (
    <section id="gallery" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900 mb-4 uppercase tracking-tight">
            {t("galleryTitle")}
          </h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto mb-4"></div>
        
        </div>

        {/* Gallery */}
        <div className="grid grid-cols-2 gap-5 max-w-4xl mx-auto">
          {images.map((image, idx) => (
            <div
              key={idx}
              className="relative overflow-hidden rounded-lg h-60"
            >
              <img
                src={image}
                alt={`Gallery ${idx + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="mt-12 flex justify-center">
          <Link
            to="/gallery"
            className="bg-slate-900 text-white px-7 py-3 rounded-lg text-sm font-bold hover:bg-blue-600 transition flex items-center gap-2"
          >
            {t("exploreMore", "Explore More Projects")}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}