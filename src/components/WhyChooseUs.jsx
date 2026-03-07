import { Gauge, Shield, Clock, Settings, Users } from 'lucide-react';
import { useTranslation } from "react-i18next";

export default function WhyChooseUs() {
  const { t } = useTranslation();
  const features = t("whyChooseUsFeatures", { returnObjects: true });
  const icons = [Gauge, Shield, Clock, Settings, Users];

  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">{t("whyChooseUsTitle")}</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">{t("whyChooseUsSubtitle")}</p>
        </div>

        {/* Features Row */}
        <div className="flex flex-wrap justify-center gap-6">
          {features.map((feature, idx) => {
            const Icon = icons[idx] || Gauge;
            return (
              <div
                key={idx}
                className="flex flex-col items-center gap-4 p-4 w-48 bg-slate-800 border-2 border-slate-700 hover:border-blue-600 transition-colors duration-300 text-center"
              >
                {/* Icon */}
                <div className="w-14 h-14 bg-blue-600 flex items-center justify-center rounded-full">
                  <Icon className="w-7 h-7" />
                </div>
                {/* Text */}
                <h3 className="text-lg font-bold">{feature.title}</h3>
                <p className="text-slate-300 text-sm leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}