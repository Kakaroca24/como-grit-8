import React from 'react';
import { ShieldCheck, Cpu, Clock, Check } from 'lucide-react';
import { useTranslation } from "react-i18next";

// Assets Imports
import AboutHero from '../assets/image17.webp';
import service1 from '../assets/image16.webp';
import service2 from '../assets/image14.webp';
import service3 from '../assets/image4.webp';

const AboutUs = () => {
  const { t } = useTranslation();

  // Data for the 3 feature cards using your imported assets
  const features = [
    {
      title: t("uncompromisingQuality"),
      description: t("uncompromisingQualityDesc"),
      image: service1,
      icon: <ShieldCheck className="w-6 h-6 text-blue-600" />
    },
    {
      title: t("technicalExpertise"),
      description: t("technicalExpertiseDesc"),
      image: service2,
      icon: <Cpu className="w-6 h-6 text-blue-600" />
    },
    {
      title: t("fastReliableDelivery"),
      description: t("fastReliableDeliveryDesc"),
      image: service3,
      icon: <Clock className="w-6 h-6 text-blue-600" />
    }
  ];

  // Data for the 2x2 highlight grid
  const highlights = [t("professionalism"), t("quality"), t("precision"), t("experience")];

  return (
    <div className="min-h-screen bg-white">
      <div className="pt-[100px]">
        <div className="max-w-7xl mx-auto px-6 py-16">

          {/* Header Section */}
          <div className="mb-12">
            <h1 className="text-5xl font-bold text-slate-900 mb-4">{t("aboutPageTitle")}</h1>
            <div className="w-20 h-1 bg-blue-600"></div>
          </div>

          {/* Our Story Section */}
          <div className="grid md:grid-cols-2 gap-12 mb-20">
           <div>
  <div className="flex items-center gap-3 mb-6">
    <h2 className="text-3xl font-bold text-slate-900">
      {t("aboutPageStory")}
    </h2>

    {/* Croatian Flag */}
    <span className="fi fi-hr text-2xl"></span>
  </div>

  <div className="text-base text-slate-600 leading-7 space-y-4 mb-8">
    <p>{t("aboutPageText1")}</p>
    <p>{t("aboutPageText2")}</p>
    <p>{t("aboutPageText3")}</p>
  </div>

  {/* 2x2 Tick Checkboxes */}
  <div className="grid grid-cols-2 gap-y-4 gap-x-2">
    {highlights.map((item) => (
      <div key={item} className="flex items-center gap-3">
        <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0">
          <Check className="w-4 h-4 text-white" strokeWidth={4} />
        </div>
        <span className="text-slate-900 font-bold text-base">{item}</span>
      </div>
    ))}
  </div>
</div>

            <div className="bg-gradient-to-br from-slate-100 to-slate-50 rounded-lg p-6 flex flex-col justify-center">
              <div className="aspect-video bg-slate-300 rounded-lg flex items-center justify-center mb-6 overflow-hidden shadow-lg">
                <img 
                  src={AboutHero} 
                  alt="COMO GRIT Team" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* --- Why Choose Us Section --- */}
          <div className="py-12 border-t border-slate-100">
            <div className="grid lg:grid-cols-2 gap-12 mb-16 items-center">
              <div>
                <h2 className="text-4xl font-bold text-slate-900 mb-6 relative inline-block">
                  {t("whyChooseUs")}
                  <span className="absolute -bottom-2 left-0 w-20 h-1 bg-blue-600"></span>
                </h2>
                <div className="space-y-4 text-base text-slate-600 leading-relaxed">
                  <p>{t("whyChooseUsText1")}</p>
                  <p>{t("whyChooseUsText2")}</p>
                </div>
              </div>
              <div className="hidden lg:block">
                <div className="bg-blue-600/5 rounded-2xl p-8 border border-blue-100">
                  <p className="text-blue-800 font-medium italic text-xl leading-snug">
                    "{t("whyChooseUsQuote")}"
                  </p>
                </div>
              </div>
            </div>

            {/* 3 Cards Section */}
            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 group"
                >
                  <div className="h-56 overflow-hidden">
                    <img 
                      src={feature.image} 
                      alt={feature.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  
                  <div className="p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-blue-50 rounded-lg">
                        {feature.icon}
                      </div>
                      <h3 className="text-xl font-bold text-slate-900">
                        {feature.title}
                      </h3>
                    </div>
                    <p className="text-slate-600 leading-relaxed text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AboutUs;