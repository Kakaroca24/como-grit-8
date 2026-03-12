import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, MessageSquare, Image as ImageIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

import HomeHero from '../../assets/homehero.webp';
import Logo from '../../assets/Logo.png';
import AboutHero from '../../assets/image17.webp';

import gallery1 from "../../assets/gallery7.webp";
import gallery2 from "../../assets/gallery8.webp";
import image3 from '../../assets/image3.webp'
import gallery4 from "../../assets/gallery5.webp";

import image1 from '../../assets/image1.webp'
import image2 from '../../assets/image2.webp'
import image4 from '../../assets/image4.webp'
import image11 from '../../assets/image11.webp'
import image12 from '../../assets/image12.webp'
import image13 from '../../assets/image13.webp';
import image14 from '../../assets/image14.webp'
import image15 from '../../assets/image15.webp'
import image16 from '../../assets/image16.webp'
import image17 from '../../assets/image20.webp'

const Counter = ({ end, duration = 2000, shouldStart }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!shouldStart) return;

    let startTime = null;
    const endValue = parseInt(end);

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easeProgress = progress * (2 - progress);
      const currentCount = Math.floor(easeProgress * endValue);
      setCount(currentCount);

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  }, [end, duration, shouldStart]);

  return <span>{count}</span>;
};

function Hero() {
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
              Precizna metalna izrada, građevinarstvo i industrijska rješenja
            </h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Napredna obrada metala, građevinska stručnost i najsuvremenije tehnologije rezanja koje pružaju iznimnu kvalitetu, izdržljivost i preciznost za vaše industrijske i građevinske projekte.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/hr/contact"
                className="group relative overflow-hidden bg-blue-600 text-white px-8 py-4 text-lg font-semibold transition-all duration-300 inline-flex items-center gap-2 rounded-lg shadow-lg active:scale-95"
              >
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
                <MessageSquare className="w-5 h-5 text-blue-100" />
                <span className="relative">Kontaktirajte nas</span>
                <ArrowRight className="relative w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                to="/hr/gallery"
                className="group relative overflow-hidden bg-white border-2 border-blue-600 text-blue-600 px-8 py-4 text-lg font-semibold transition-all duration-300 inline-flex items-center gap-2 rounded-lg active:scale-95"
              >
                <div className="absolute inset-0 bg-blue-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                <ImageIcon className="relative w-5 h-5 group-hover:text-white transition-colors" />
                <span className="relative group-hover:text-white transition-colors">Pogledajte projekte</span>
                <ArrowRight className="relative w-5 h-5 group-hover:translate-x-1 group-hover:text-white transition-all" />
              </Link>
            </div>
          </div>

          <div className="relative flex items-center justify-center lg:w-1/3">
            <div className="absolute w-72 h-72 md:w-96 md:h-96 lg:w-[400px] lg:h-[400px]">
              <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path
                  fill="white"
                  d="M38.1,-65.4C49.1,-58.4,57.6,-48,64.4,-36.3C71.2,-24.5,76.3,-11.3,77.2,2.4C78.1,16.1,74.7,30.3,67.1,42.2C59.5,54.1,47.7,63.7,34.7,69.5C21.7,75.3,7.5,77.4,-6.2,75.4C-19.9,73.4,-33.1,67.3,-45.3,58.8C-57.5,50.3,-68.8,39.4,-74.3,26.3C-79.9,13.2,-79.8,-2,-75.4,-15.8C-71,-29.6,-62.4,-41.9,-51.4,-48.9C-40.4,-55.9,-27.1,-57.6,-15.1,-63.3C-3,-69.1,7.9,-78.9,20.4,-78.6C32.9,-78.3,27.1,-72.4,38.1,-65.4Z"
                  transform="translate(100 100)"
                />
              </svg>
            </div>
            <img
              src={Logo}
              alt="Logo"
              className="relative z-10 w-56 md:w-72 lg:w-80 h-auto object-contain"
            />
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
      `}} />
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <h1 className="text-5xl font-bold text-slate-900 mb-4 flex items-center gap-4">
            O tvrtki COMO GRIT d.o.o
            <img
              src="https://flagcdn.com/hr.svg"
              alt="Croatia Flag"
              className="w-12 h-auto rounded shadow-sm inline-block"
            />
          </h1>
          <div className="w-20 h-1 bg-blue-600"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-20 items-center">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Naša priča</h2>
            <div className="text-base text-slate-600 leading-7 space-y-4 mb-10">
              <p>Osnovan sa strašću prema izvrsnosti i preciznosti, COMO GRIT d.o.o je vodeća hrvatska tvrtka koja od samog početka pruža vrhunska industrijska rješenja. Sa sjedištem u Hrvatskoj, započeli smo s jednostavnom misijom: pružiti iznimnu kvalitetu izrade i pouzdanost svakom klijentu.</p>
              <p>Tijekom godina razvili smo se iz malog tima u predanu skupinu kvalificiranih stručnjaka koji dijele našu posvećenost kvaliteti i inovacijama. Naš put u hrvatskom industrijskom sektoru obilježen je stalnim napretkom, tehnološkim razvojem i snažnim fokusom na zadovoljstvo klijenata.</p>
              <p>Danas je COMO GRIT d.o.o prepoznatljivo i pouzdano ime u industriji, poznato po stručnosti u obradi i izradi metala, kao i po radu na građevinskim projektima za stambene i nestambene objekte. Posvećeni smo pružanju vrhunskih rezultata na svakom projektu.</p>
            </div>

            <Link
              to="/hr/about"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-700 transition-colors group"
            >
              Saznajte više o nama
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

function Services() {
  const services = [
    {
      id: "01.",
      title: "Metalna konstrukcija",
      image: image13,
      className: "md:col-span-4 h-[450px]"
    },
    {
      id: "02.",
      title: "Taljenje metala",
      image: image3,
      className: "md:col-span-8 h-[450px]"
    },
    {
      id: "03.",
      title: "Rezanje vodenim mlazom",
      image: image15,
      className: "md:col-span-7 h-[500px]"
    },
    {
      id: "04.",
      title: "Lasersko rezanje",
      image: image16,
      className: "md:col-span-5 h-[500px]"
    },
    {
      id: "05.",
      title: "Prilagođeno rezanje i oblikovanje metala",
      image: image14,
      className: "md:col-span-6 h-[550px]"
    },
    {
      id: "06.",
      title: "Lijevanje metala",
      image: image4,
      className: "md:col-span-6 h-[550px]"
    },
    {
      id: "07.",
      title: "Izrada alatnih alata za obradu",
      image: image1,
      className: "md:col-span-8 h-[450px]"
    },
    {
      id: "08.",
      title: "CNC obrada",
      image: image2,
      className: "md:col-span-4 h-[450px]"
    },
    {
      id: "09.",
      title: "Industrijska obrada aluminija",
      image: image11,
      className: "md:col-span-8 h-[450px]"
    },
    {
      id: "11.",
      title: "Metalni koncentrati",
      image: image12,
      className: "md:col-span-4 h-[450px]"
    },
    {
      id: "12.",
      title: "CNC proizvodnja preciznih auto dijelova",
      image: image17,
      className: "md:col-span-6 h-[550px]"
    },
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 mb-12">
        <h2 className="text-4xl font-bold text-slate-900 mb-4 uppercase tracking-tight">Naše usluge</h2>
        <div className="w-20 h-1 bg-blue-600"></div>
      </div>

      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-2 px-6">
        {services.map((service) => (
          <div
            key={service.id}
            className={`group relative overflow-hidden cursor-pointer w-full rounded-sm ${service.className} md:h-auto min-h-[400px]`}
          >
            <img
              src={service.image}
              alt={service.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out transform-gpu group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent transition-opacity duration-500 group-hover:opacity-0"></div>
            <div className="absolute inset-0 bg-blue-600/60 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out transform-gpu"></div>
            <div className="relative h-full p-10 flex flex-col justify-between z-10">
              <span className="text-white/60 text-xl font-mono group-hover:text-white transition-colors">
                {service.id}
              </span>
              <div>
                <h3 className="text-white text-3xl font-bold mb-6 transform-gpu group-hover:-translate-y-2 transition-transform duration-500">
                  {service.title}
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function StatsSection() {
  const [hasInview, setHasInview] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasInview(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    { value: "4", label: "Godina iskustva", suffix: "+" },
    { value: "100", label: "Stopa uspjeha", suffix: "%" },
    { value: "200", label: "Klijenti", suffix: "+" },
    { value: "200", label: "Projekti", suffix: "+" }
  ];

  return (
    <section ref={sectionRef} className="bg-[#1a1c1e] py-20 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className={`max-w-xl transition-all duration-1000 ${hasInview ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <h2 className="text-4xl font-bold mb-6 leading-tight">
              Iskustvo i zadovoljstvo kupaca
            </h2>
            <div className="w-16 h-1 bg-blue-600 mb-8"></div>
            <p className="text-slate-400 text-lg leading-relaxed">
              Naša stručnost, preciznost i predanost kvaliteti čine nas pouzdanim partnerom za klijente iz više industrijskih sektora.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-y-12 gap-x-8">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col">
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl md:text-6xl font-black text-white inline-block min-w-[1ch]">
                    <Counter end={stat.value} shouldStart={hasInview} />
                  </span>
                  {stat.suffix && (
                    <span className="text-4xl font-bold text-blue-600">
                      {stat.suffix}
                    </span>
                  )}
                </div>
                <div className={`mt-2 h-1 bg-blue-600 mb-3 transition-all duration-1000 delay-300 ${hasInview ? 'w-8' : 'w-0'}`}></div>
                <p className="text-slate-400 font-medium uppercase tracking-wider text-sm">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function GalleryPreview() {
  const images = [gallery1, gallery2, image3, gallery4];

  return (
    <section id="gallery" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900 mb-4 uppercase tracking-tight">
            Neki od naših projekata
          </h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto mb-4"></div>
        </div>

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

        <div className="mt-12 flex justify-center">
          <Link
            to="/hr/gallery"
            className="bg-slate-900 text-white px-7 py-3 rounded-lg text-sm font-bold hover:bg-blue-600 transition flex items-center gap-2"
          >
            Istražite više projekata
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen">
      <main className="pt-72px">
        <Hero />
        <About />
        <Services />
        <StatsSection />
        <GalleryPreview />
      </main>
    </div>
  );
}
