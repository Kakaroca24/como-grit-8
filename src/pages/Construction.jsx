import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ArrowRight, CircleCheck as CheckCircle } from "lucide-react";

export default function Construction() {

  const { t } = useTranslation();

  const services = [
    {
      title: t("constructionService1Title"),
      desc: t("constructionService1Desc"),
      image: "https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      title: t("constructionService2Title"),
      desc: t("constructionService2Desc"),
      image: "https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      title: t("constructionService3Title"),
      desc: t("constructionService3Desc"),
      image: "https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      title: t("constructionService4Title"),
      desc: t("constructionService4Desc"),
      image: "https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=600"
    }

  ];

  return (
    <div className="bg-white text-slate-800">

      {/* HERO */}
      <section
        className="relative h-[70vh] flex items-center justify-center text-white"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1503387762-592deb58ef4e')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 text-center max-w-3xl px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {t("constructionHeroTitle")}
          </h1>

          <p className="text-lg text-gray-200">
            {t("constructionHeroText")}
          </p>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="py-20 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        <img
          src="https://images.unsplash.com/photo-1487958449943-2429e8be8625"
          alt="construction building site"
          className="rounded-lg shadow-lg"
        />

        <div>
          <h2 className="text-3xl font-bold mb-6">
            {t("constructionAboutTitle")}
          </h2>

          <p className="text-slate-600 leading-relaxed mb-4">
            {t("constructionAboutText1")}
          </p>

          <p className="text-slate-600 leading-relaxed">
            {t("constructionAboutText2")}
          </p>
        </div>

      </section>

      {/* SERVICES - 3x3 Grid with Images */}
      <section className="bg-slate-100 py-20 px-6">

        <div className="max-w-7xl mx-auto">

          <h2 className="text-4xl font-bold text-center mb-4">
            {t("constructionServicesTitle")}
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-12"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {services.map((service, idx) => (
              <div
                key={idx}
                className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:scale-105"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <h3 className="absolute bottom-4 left-4 right-4 text-white font-bold text-xl">
                    {service.title}
                  </h3>
                </div>

                <div className="p-6">
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              </div>
            ))}

          </div>

        </div>

      </section>

   
      {/* CTA - Redesigned */}
      <section className="relative py-24 px-6 overflow-hidden">

        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.pexels.com/photos/585419/pexels-photo-585419.jpeg?auto=compress&cs=tinysrgb&w=1920')"
          }}
        ></div>

        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-slate-800/90 to-blue-900/85"></div>

        <div className="relative z-10 max-w-5xl mx-auto text-center">

          <div className="inline-block bg-blue-600/20 backdrop-blur-sm border border-blue-500/30 rounded-full px-6 py-2 mb-6">
            <span className="text-blue-300 font-semibold text-sm uppercase tracking-wider">
              Ready to Build?
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            {t("constructionCtaTitle")}
          </h2>

          <p className="text-slate-300 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            {t("constructionCtaText")}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link
              className="group relative overflow-hidden bg-white text-slate-900 px-10 py-5 text-lg font-bold transition-all duration-300 inline-flex items-center gap-3 rounded-lg shadow-2xl hover:shadow-white/20 hover:scale-105 active:scale-95"
              to="/contact"
            >
              <span className="relative z-10">{t("contactUs")}</span>
              <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>

           
          </div>

          <div className="grid sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-3 text-white">
              <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
              <span className="text-sm font-medium">Licensed & Insured</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-white">
              <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
              <span className="text-sm font-medium">Quality Guaranteed</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-white">
              <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
              <span className="text-sm font-medium">On-Time Delivery</span>
            </div>
          </div>

        </div>

      </section>

    </div>
  );
}