import { useState } from 'react';
import { Phone, Mail, MapPin, Building2, Instagram, Facebook, MessageCircle, CircleCheck as CheckCircle2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function ContactUs() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        fullName: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 3000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const contactInfo = {
    address: "Rooseveltova 12, 21000 Split, Croatia",
    phone: "+385 1 234 5678",
    email: "service@comogrit.com",
    socialMedia: [
      { name: "Instagram", icon: Instagram, url: "https://instagram.com/comogrit", handle: "@comogrit" },
      { name: "Facebook", icon: Facebook, url: "https://facebook.com/comogrit", handle: "COMO GRIT d.o.o" },
      { name: "WhatsApp", icon: MessageCircle, url: "https://wa.me/385912345678", handle: "+385 91 234 5678" },
      { name: "Viber", icon: Phone, url: "viber://chat?number=385912345678", handle: "+385 91 234 5678" }
    ]
  };

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <div className="pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-20">

          <div className="text-center mb-16 sm:mb-24 animate-fadeInUp">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              {t('contactPageTitle')}
            </h1>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6 animate-expandWidth"></div>
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed px-4">
              {t('contactPageSubtitle')}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 mb-16">

            <div className="bg-slate-50 border-2 border-slate-200 rounded-xl shadow-lg p-6 sm:p-8 hover:border-blue-600 transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] animate-slideInLeft">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
                <div className="w-1 h-6 bg-blue-600 animate-expandHeight"></div>
                {t('contactFormTitle')}
              </h2>

              {submitted ? (
                <div className="bg-green-50 border-2 border-green-500 rounded-lg p-8 text-center animate-bounceIn">
                  <CheckCircle2 className="w-12 h-12 text-green-600 mx-auto mb-2" />
                  <h3 className="text-2xl font-bold text-green-800 mb-2">{t('thankYouFormTitle')}</h3>
                  <p className="text-green-700">{t('thankYouFormMessage')}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
                  <div className="animate-fadeInUp" style={{ animationDelay: '0.35s' }}>
                    <label htmlFor="fullName" className="block text-sm font-semibold text-slate-900 mb-2">
                      {t('fullNameLabel')}
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg bg-white text-slate-900 placeholder-slate-500 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/30 focus:outline-none transition-all duration-300"
                      placeholder={t('fullNamePlaceholder')}
                    />
                  </div>

                  <div className="animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
                    <label htmlFor="email" className="block text-sm font-semibold text-slate-900 mb-2">
                      {t('emailLabel')}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg bg-white text-slate-900 placeholder-slate-500 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/30 focus:outline-none transition-all duration-300"
                      placeholder={t('emailPlaceholder')}
                    />
                  </div>

                  <div className="animate-fadeInUp" style={{ animationDelay: '0.45s' }}>
                    <label htmlFor="subject" className="block text-sm font-semibold text-slate-900 mb-2">
                      {t('subjectLabel')}
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg bg-white text-slate-900 placeholder-slate-500 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/30 focus:outline-none transition-all duration-300"
                      placeholder={t('subjectPlaceholder')}
                    />
                  </div>

                  <div className="animate-fadeInUp" style={{ animationDelay: '0.5s' }}>
                    <label htmlFor="message" className="block text-sm font-semibold text-slate-900 mb-2">
                      {t('messageTextLabel')}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg bg-white text-slate-900 placeholder-slate-500 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/30 focus:outline-none transition-all duration-300 resize-none"
                      placeholder={t('messageTextPlaceholder')}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 mt-6 animate-fadeInUp animate-pulse-soft"
                    style={{ animationDelay: '0.6s' }}
                  >
                    {t('sendButtonText')}
                  </button>
                </form>
              )}
            </div>

            <div className="bg-slate-50 border-2 border-slate-200 rounded-xl shadow-lg p-6 sm:p-8 hover:border-blue-600 transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] animate-slideInRight">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
                <div className="w-1 h-6 bg-blue-600 animate-expandHeight"></div>
                {t('contactInfoTitle')}
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4 animate-fadeInUp" style={{ animationDelay: '0.45s' }}>
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center animate-scaleIn" style={{ animationDelay: '0.5s' }}>
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1 text-sm sm:text-base">{t('addressLabel')}</h3>
                    <p className="text-slate-600 text-xs sm:text-sm">{contactInfo.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 animate-fadeInUp" style={{ animationDelay: '0.55s' }}>
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center animate-scaleIn" style={{ animationDelay: '0.6s' }}>
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1 text-sm sm:text-base">{t('phoneLabel')}</h3>
                    <a href={`tel:${contactInfo.phone}`} className="text-blue-600 hover:text-blue-700 text-xs sm:text-sm font-medium transition-colors">
                      {contactInfo.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 animate-fadeInUp" style={{ animationDelay: '0.65s' }}>
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center animate-scaleIn" style={{ animationDelay: '0.7s' }}>
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1 text-sm sm:text-base">{t('emailContactLabel')}</h3>
                    <a href={`mailto:${contactInfo.email}`} className="text-blue-600 hover:text-blue-700 text-xs sm:text-sm font-medium transition-colors">
                      {contactInfo.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 border-2 border-slate-200 rounded-xl shadow-lg overflow-hidden hover:border-blue-600 transition-all duration-500 hover:shadow-2xl hover:scale-[1.01] animate-slideInUp">
            <div className="p-6 sm:p-8 border-b-2 border-slate-200 bg-white">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-3 mb-2 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
                <MapPin className="w-6 h-6 text-blue-600" />
                {t('ourLocationTitle')}
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm mt-2">Rooseveltova 12, 21000 Split, Croatia</p>
            </div>
            <div className="w-full h-96 bg-slate-100">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d1446.9875022032882!2d16.451569238962932!3d43.50285698829211!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sRooseveltova%2012%2C%2021000%20Split%2C%20Croatia!5e0!3m2!1sen!2s!4v1772888431955!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="COMO GRIT Location - Rooseveltova 12, Split, Croatia"
                className="w-full h-full"
              ></iframe>
            </div>
          </div>

        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideInUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.8); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes bounceIn {
          0% { opacity: 0; transform: scale(0.3); }
          50% { opacity: 1; transform: scale(1.05); }
          100% { opacity: 1; transform: scale(1); }
        }
        @keyframes expandWidth {
          from { width: 0; }
          to { width: 80px; }
        }
        @keyframes expandHeight {
          from { height: 0; }
          to { height: 24px; }
        }
        @keyframes pulseSoft {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.8; }
        }
        .animate-fadeInUp { animation: fadeInUp 0.6s ease-out forwards; opacity: 0; }
        .animate-slideInLeft { animation: slideInLeft 0.7s ease-out forwards; opacity: 0; }
        .animate-slideInRight { animation: slideInRight 0.7s ease-out forwards; opacity: 0; }
        .animate-slideInUp { animation: slideInUp 0.7s ease-out forwards; opacity: 0; }
        .animate-scaleIn { animation: scaleIn 0.5s ease-out forwards; opacity: 0; }
        .animate-bounceIn { animation: bounceIn 0.6s ease-out forwards; opacity: 0; }
        .animate-expandWidth { animation: expandWidth 0.8s ease-out forwards; }
        .animate-expandHeight { animation: expandHeight 0.6s ease-out forwards; }
        .animate-pulse-soft { animation: pulseSoft 2s cubic-bezier(0.4, 0, 0.6, 1) infinite; }
      `}} />
    </div>
  );
}