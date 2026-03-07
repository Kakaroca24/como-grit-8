import React from 'react';
import { useTranslation } from "react-i18next";
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom'; // or 'next/link' if using Next.js
import AboutHero from '../assets/abouthero.webp';

function About() {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="mb-12">
          <h1 className="text-5xl font-bold text-slate-900 mb-4">About COMO GRIT</h1>
          <div className="w-20 h-1 bg-blue-600"></div>
        </div>

        {/* Our Story Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-20 items-center">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Story</h2>
            
            <div className="text-base text-slate-600 leading-7 space-y-4 mb-10">
              <p>
                Founded with a passion for excellence and precision, COMO GRIT has been delivering premium solutions since our inception. We started with a simple mission: to provide exceptional craftsmanship and reliability to every client we serve.
              </p>
              <p>
                Over the years, we've grown from a small team to a dedicated workforce of skilled professionals who share our commitment to quality and innovation. Our journey has been marked by continuous improvement, technological advancement, and an unwavering focus on customer satisfaction.
              </p>
              <p>
                Today, COMO GRIT stands as a trusted name in the industry, known for our expertise, precision, and commitment to delivering outstanding results on every project.
              </p>
            </div>

            {/* Call to Action Button */}
            <Link 
              to="/about" 
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-700 transition-colors group"
            >
              Learn More About Us
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="bg-gradient-to-br from-slate-100 to-slate-50 rounded-lg p-6 flex flex-col justify-center">
            <div className="aspect-video bg-slate-300 rounded-lg flex items-center justify-center overflow-hidden shadow-lg">
              <img 
                src={AboutHero} 
                alt="COMO GRIT Team" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default About;