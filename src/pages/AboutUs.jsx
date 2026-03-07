import React from 'react';
import { ShieldCheck, Cpu, Clock, Check } from 'lucide-react';

// Assets Imports
import AboutHero from '../assets/abouthero.webp';
import service4 from '../assets/service4.webp';
import service5 from '../assets/service5.webp';
import service6 from '../assets/service6.webp';

const AboutUs = () => {
  // Data for the 3 feature cards using your imported assets
  const features = [
    {
      title: "Uncompromising Quality",
      description: "We use top-of-the-line equipment and certified materials to ensure every component meets the highest industry standards.",
      image: service4,
      icon: <ShieldCheck className="w-6 h-6 text-blue-600" />
    },
    {
      title: "Technical Expertise",
      description: "Our experienced team of professionals ensures optimal solutions for every project, from simple parts to complex structures.",
      image: service5,
      icon: <Cpu className="w-6 h-6 text-blue-600" />
    },
    {
      title: "Fast and Reliable Delivery",
      description: "We respect strict deadlines and guarantee efficiency through optimized production processes and modern technological solutions.",
      image: service6,
      icon: <Clock className="w-6 h-6 text-blue-600" />
    }
  ];

  // Data for the 2x2 highlight grid
  const highlights = ["Professionalism", "Quality", "Precision", "Experience"];

  return (
    <div className="min-h-screen bg-white">
      <div className="pt-[100px]">
        <div className="max-w-7xl mx-auto px-6 py-16">
          
          {/* Header Section */}
          <div className="mb-12">
            <h1 className="text-5xl font-bold text-slate-900 mb-4">Experts in Metal Processing</h1>
            <div className="w-20 h-1 bg-blue-600"></div>
          </div>

          {/* Our Story Section */}
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Story</h2>
              
              <div className="text-base text-slate-600 leading-7 space-y-4 mb-8">
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
                  Why Choose Us?
                  <span className="absolute -bottom-2 left-0 w-20 h-1 bg-blue-600"></span>
                </h2>
                <div className="space-y-4 text-base text-slate-600 leading-relaxed">
                  <p>
                    Whether you need mass production or custom-made metal components, we're here to provide top-quality service and support. Our mission is to build long-term partnerships based on trust, quality, and precision.
                  </p>
                  <p>
                    Our vision is to continuously advance our technology and workforce, driven by ongoing investments in innovation and knowledge to expand our project scope.
                  </p>
                </div>
              </div>
              <div className="hidden lg:block">
                <div className="bg-blue-600/5 rounded-2xl p-8 border border-blue-100">
                  <p className="text-blue-800 font-medium italic text-xl leading-snug">
                    "Our expertise in CNC machining, laser cutting, and metal structure fabrication guarantees outstanding results for every client."
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