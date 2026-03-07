import { useState } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { useTranslation } from "react-i18next";

export default function Contact() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({ name:'', email:'', phone:'', message:'' });
  const [submitted, setSubmitted] = useState(false);

  const contactInfo = [
    { icon: Phone, title: t("nav.contact"), details: "+1 (555) 123-4567", link: "tel:+15551234567" },
    { icon: Mail, title: "Email", details: "info@comogrit.com", link: "mailto:info@comogrit.com" },
    { icon: MapPin, title: "Address", details: "1234 Industrial Blvd, ST 12345", link: null }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name:'', email:'', phone:'', message:'' });
    }, 3000);
  };

  const handleChange = (e) => setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">{t("contactTitle")}</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">{t("contactSubtitle")}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <form onSubmit={handleSubmit} className="bg-slate-50 border-2 border-slate-200 p-8">
              {submitted ? (
                <div className="bg-green-50 border-2 border-green-500 p-6 text-center">
                  <h3 className="text-xl font-bold text-green-800 mb-2">{t("thankYouTitle")}</h3>
                  <p className="text-green-700 text-sm">{t("thankYouMessage")}</p>
                </div>
              ) : (
                <>
                  <h3 className="text-2xl font-bold text-slate-900 mb-6">{t("sendMessageTitle")}</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-semibold text-slate-900 mb-2">{t("fullName")}</label>
                      <input type="text" name="name" required value={formData.name} onChange={handleChange} className="w-full px-4 py-2 border-2 border-slate-300 focus:border-blue-600 focus:outline-none bg-white text-sm"/>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-900 mb-2">{t("emailAddress")}</label>
                      <input type="email" name="email" required value={formData.email} onChange={handleChange} className="w-full px-4 py-2 border-2 border-slate-300 focus:border-blue-600 focus:outline-none bg-white text-sm"/>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-900 mb-2">{t("phoneNumber")}</label>
                      <input type="tel" name="phone" required value={formData.phone} onChange={handleChange} className="w-full px-4 py-2 border-2 border-slate-300 focus:border-blue-600 focus:outline-none bg-white text-sm"/>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-900 mb-2">{t("messageLabel")}</label>
                      <textarea name="message" rows={4} required value={formData.message} onChange={handleChange} placeholder={t("messagePlaceholder")} className="w-full px-4 py-2 border-2 border-slate-300 focus:border-blue-600 focus:outline-none resize-none bg-white text-sm"/>
                    </div>
                    <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 font-semibold transition-colors flex items-center justify-center gap-2 text-sm">
                      {t("sendMessage")} <Send className="w-4 h-4"/>
                    </button>
                  </div>
                </>
              )}
            </form>
          </div>

          <div className="space-y-6 mb-8">
            {contactInfo.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-600 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">{item.title}</h3>
                    {item.link ? (
                      <a href={item.link} className="text-slate-600 hover:text-blue-600 transition-colors text-sm">{item.details}</a>
                    ) : (
                      <p className="text-slate-600 text-sm">{item.details}</p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}