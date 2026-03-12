import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from "react-i18next";

// Animated Number Component
const Counter = ({ end, duration = 2000, shouldStart }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);

  useEffect(() => {
    if (!shouldStart) return;

    let startTime = null;
    const endValue = parseInt(end);

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // Easing function for a smoother finish (easeOutQuad)
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

const StatsSection = () => {
  const { t } = useTranslation();
  const [hasInview, setHasInview] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Only trigger when scrolling into view
        if (entry.isIntersecting) {
          setHasInview(true);
        }
      },
      { threshold: 0.3 } // Triggers when 30% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    { value: "4", label: t("yearsExperience"), suffix: "+" },
    { value: "100", label: t("successRate"), suffix: "%" },
    { value: "200", label: t("clients"), suffix: "+" },
    { value: "200", label: t("projects"), suffix: "+" }
  ];

  return (
    <section ref={sectionRef} className="bg-[#1a1c1e] py-20 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Side: Text Content */}
          <div className={`max-w-xl transition-all duration-1000 ${hasInview ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <h2 className="text-4xl font-bold mb-6 leading-tight">
              {t("statsTitle")}
            </h2>
            <div className="w-16 h-1 bg-blue-600 mb-8"></div>
            <p className="text-slate-400 text-lg leading-relaxed">
              {t("statsDescription")}
            </p>
          </div>

          {/* Right Side: Stats Grid */}
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
};

export default StatsSection;