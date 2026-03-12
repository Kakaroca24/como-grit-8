import { ArrowRight, MessageSquare, Image as ImageIcon } from 'lucide-react';
import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom';
import HomeHero from '../assets/homehero.webp';
import Logo from '../assets/Logo.png'

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div
        className={`absolute inset-0 bg-cover bg-center opacity-25`}
        style={{ backgroundImage: `url(${HomeHero})` }}
      ></div>
      <div className="relative max-w-7xl mx-auto px-6 py-32 lg:py-40">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="max-w-3xl">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              {t("heroTitle")}
            </h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              {t("heroText")}
            </p>
            
            <div className="flex flex-wrap gap-4">
              {/* Contact Button - Shimmering Effect */}
              <Link
                to="/contact"
                className="group relative overflow-hidden bg-blue-600 text-white px-8 py-4 text-lg font-semibold transition-all duration-300 inline-flex items-center gap-2 rounded-lg shadow-lg active:scale-95"
              >
                {/* Shimmer overlay */}
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
                
                <MessageSquare className="w-5 h-5 text-blue-100" />
                <span className="relative">{t("contactUsBtn")}</span>
                <ArrowRight className="relative w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>

              {/* Gallery Button - Sliding Fill Effect */}
              <Link
                to="/gallery"
                className="group relative overflow-hidden bg-white border-2 border-blue-600 text-blue-600 px-8 py-4 text-lg font-semibold transition-all duration-300 inline-flex items-center gap-2 rounded-lg active:scale-95"
              >
                {/* Blue fill layer */}
                <div className="absolute inset-0 bg-blue-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />

                <ImageIcon className="relative w-5 h-5 group-hover:text-white transition-colors" />
                <span className="relative group-hover:text-white transition-colors">
                  {t("viewProjects")}
                </span>
                <ArrowRight className="relative w-5 h-5 group-hover:translate-x-1 group-hover:text-white transition-all" />
              </Link>
            </div>
          </div>

          {/* Logo with Swipe Background */}
         <div className="relative flex items-center justify-center lg:w-1/3">
  {/* White Swipe Background - Scaled down for a tighter fit */}
  <div className="absolute w-72 h-72 md:w-96 md:h-96 lg:w-[400px] lg:h-[400px]">
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <path 
        fill="white" 
        d="M38.1,-65.4C49.1,-58.4,57.6,-48,64.4,-36.3C71.2,-24.5,76.3,-11.3,77.2,2.4C78.1,16.1,74.7,30.3,67.1,42.2C59.5,54.1,47.7,63.7,34.7,69.5C21.7,75.3,7.5,77.4,-6.2,75.4C-19.9,73.4,-33.1,67.3,-45.3,58.8C-57.5,50.3,-68.8,39.4,-74.3,26.3C-79.9,13.2,-79.8,-2,-75.4,-15.8C-71,-29.6,-62.4,-41.9,-51.4,-48.9C-40.4,-55.9,-27.1,-57.6,-15.1,-63.3C-3,-69.1,7.9,-78.9,20.4,-78.6C32.9,-78.3,27.1,-72.4,38.1,-65.4Z" 
        transform="translate(100 100)" 
      />
    </svg>
  </div>
  
  {/* Logo - Kept large and prominent */}
  <img 
    src={Logo} 
    alt="Logo" 
    className="relative z-10 w-56 md:w-72 lg:w-80 h-auto object-contain" 
  />
</div>

          
        </div>
      </div>

      {/* Required CSS Animation */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
      `}} />
    </section>
  );
}