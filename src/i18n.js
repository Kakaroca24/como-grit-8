import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      // Header
      nav: { about: "About", services: "Services", projects: "Projects", contact: "Contact" },

      // Hero
      heroTitle: "Precision Metal Fabrication & Industrial Solutions",
      heroText: "Advanced metal processing and cutting technologies delivering exceptional quality and precision for your industrial projects",
      requestQuote: "Request a Quote",

      // About
      aboutTitle: "About COMO GRIT",
      aboutText1: "With decades of combined experience in the metal fabrication industry, COMO GRIT stands as a trusted partner for precision metalwork and industrial solutions. Our commitment to excellence drives everything we do, from initial consultation to final delivery.",
      aboutText2: "We combine traditional craftsmanship with cutting-edge technology to deliver superior results. Our state-of-the-art machinery, including advanced laser and water jet cutting systems, ensures that every project meets the highest standards of quality and precision.",

      // Services
      servicesTitle: "Our Services",
      servicesSubtitle: "Comprehensive metal fabrication and processing solutions tailored to your industrial needs",
      services: [
        { title: "Metal Construction", description: "Structural steel work and custom metal construction for industrial and commercial applications" },
        { title: "Metal Forming", description: "Precision bending, rolling, and forming services for complex metal components" },
        { title: "Iron & Aluminum Melting", description: "High-capacity melting facilities for ferrous and non-ferrous metal processing" },
        { title: "Metal Casting", description: "Advanced casting techniques for creating complex metal parts with exceptional detail" },
        { title: "Laser Cutting", description: "High-precision laser cutting for intricate designs and tight tolerances" },
        { title: "Water Jet Cutting", description: "Versatile cutting solution for heat-sensitive materials and thick metals" }
      ],

      // WhyChooseUs
      whyChooseUsTitle: "Why Choose COMO GRIT",
      whyChooseUsSubtitle: "Industry-leading capabilities backed by years of expertise",
      whyChooseUsFeatures: [
        { title: "High Precision Machinery", description: "State-of-the-art equipment ensuring accuracy down to the micron" },
        { title: "Industrial-Grade Materials", description: "Only the finest metals and alloys for superior durability" },
        { title: "Fast Turnaround", description: "Efficient processes to meet your deadlines without compromising quality" },
        { title: "Custom Solutions", description: "Tailored fabrication services to match your exact specifications" },
        { title: "Skilled Technicians", description: "Experienced professionals with expertise in advanced metalworking" }
      ],

      // Gallery
      galleryTitle: "Our Projects",
      gallerySubtitle: "A showcase of our precision metalwork and industrial fabrication capabilities",
      galleryProjects: [
        { title: "Structural Steel Work", image: "https://images.pexels.com/photos/585419/pexels-photo-585419.jpeg?auto=compress&cs=tinysrgb&w=800" },
        { title: "Laser Cutting Project", image: "https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800" },
        { title: "Custom Metal Fabrication", image: "https://images.pexels.com/photos/1094767/pexels-photo-1094767.jpeg?auto=compress&cs=tinysrgb&w=800" },
        { title: "Industrial Components", image: "https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=800" },
        { title: "Precision Cutting", image: "https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800" },
        { title: "Metal Processing", image: "https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?auto=compress&cs=tinysrgb&w=800" }
      ],

      // QuoteForm
      quoteTitle: "Request a Quote",
      quoteSubtitle: "Tell us about your project and we'll get back to you with a detailed quote",
      fullName: "Full Name *",
      emailAddress: "Email Address *",
      phoneNumber: "Phone Number *",
      projectDescription: "Project Description *",
      descriptionPlaceholder: "Please describe your project requirements, materials, dimensions, and any specific details...",
      submitRequest: "Submit Request",
      quoteThankYouTitle: "Thank You!",
      quoteThankYouMessage: "We've received your request and will contact you shortly.",

      // Contact
      contactTitle: "Contact Us",
      contactSubtitle: "Get in touch with our team to discuss your metal fabrication needs",
      sendMessage: "Send Message",
      sendMessageTitle: "Send us a Message",
      thankYouTitle: "Thank You!",
      thankYouMessage: "We've received your message and will get back to you soon.",
      messageLabel: "Message *",
      messagePlaceholder: "Tell us about your inquiry...",
      businessHoursTitle: "Business Hours",
      mondayFriday: "Monday - Friday:",
      mondayFridayTime: "7:00 AM - 6:00 PM",
      saturday: "Saturday:",
      saturdayTime: "8:00 AM - 2:00 PM",
      sunday: "Sunday:",
      sundayTime: "Closed",

      // Footer
      footerDesc: "Precision metal fabrication and industrial solutions with cutting-edge technology and expert craftsmanship.",
      footerQuickLinks: "Quick Links",
      footerHome: "Home",
      footerAbout: "About Us",
      footerServices: "Services",
      footerProjects: "Projects",
      footerContact: "Contact",
      footerOurServices: "Our Services",
      footerServiceList: [
        "Metal Construction",
        "Laser Cutting",
        "Water Jet Cutting",
        "Metal Casting",
        "Metal Forming",
        "Metal Processing"
      ],
      copyright: "All rights reserved."
    }
  },
  hr: {
    translation: {
      nav: { about: "O nama", services: "Usluge", projects: "Projekti", contact: "Kontakt" },
      heroTitle: "Precizna obrada metala i industrijska rješenja",
      heroText: "Napredne tehnologije obrade i rezanja metala za vrhunsku kvalitetu i preciznost vaših projekata",
      requestQuote: "Zatražite ponudu",

      aboutTitle: "O COMO GRIT",
      aboutText1: "S desetljećima iskustva u industriji obrade metala, COMO GRIT je pouzdan partner za precizne metalne radove i industrijska rješenja. Naša predanost izvrsnosti pokreće sve što radimo, od inicijalne konzultacije do završne isporuke.",
      aboutText2: "Kombiniramo tradicionalno majstorstvo s modernom tehnologijom kako bismo postigli vrhunske rezultate. Naša najsuvremenija oprema, uključujući napredne sustave laserskog i vodeno-mlaznog rezanja, osigurava da svaki projekt zadovoljava najviše standarde kvalitete i preciznosti.",

      servicesTitle: "Naše usluge",
      servicesSubtitle: "Sveobuhvatna rješenja za obradu i izradu metala",
      services: [
        { title: "Metalna konstrukcija", description: "Strukturni čelični radovi i prilagođena metalna konstrukcija za industrijske i komercijalne primjene" },
        { title: "Obrada metala", description: "Precizno savijanje, valjanje i oblikovanje složenih metalnih komponenti" },
        { title: "Taljenje željeza i aluminija", description: "Kapacitetna postrojenja za taljenje željeznih i neželjeznih metala" },
        { title: "Lijevanje metala", description: "Napredne tehnike lijevanja za izradu složenih metalnih dijelova s izuzetnom preciznošću" },
        { title: "Lasersko rezanje", description: "Visokoprecizno lasersko rezanje za složene dizajne i stroge tolerancije" },
        { title: "Rezanje vodenim mlazom", description: "Svestrano rezanje osjetljivih materijala i debelih metala" }
      ],

      whyChooseUsTitle: "Zašto odabrati COMO GRIT",
      whyChooseUsSubtitle: "Vodeće mogućnosti u industriji podržane godinama iskustva",
      whyChooseUsFeatures: [
        { title: "Precizni strojevi", description: "Najmodernija oprema koja osigurava točnost do mikrona" },
        { title: "Industrijski materijali", description: "Samo najbolji metali i legure za vrhunsku izdržljivost" },
        { title: "Brza izrada", description: "Učinkoviti procesi koji zadovoljavaju vaše rokove bez kompromisa u kvaliteti" },
        { title: "Prilagođena rješenja", description: "Izrada po mjeri koja odgovara vašim točnim zahtjevima" },
        { title: "Iskusni tehničari", description: "Iskusni profesionalci s ekspertizom u naprednoj obradi metala" }
      ],

      galleryTitle: "Naši projekti",
      gallerySubtitle: "Prikaz naših preciznih metalnih i industrijskih radova",
      galleryProjects: [
        { title: "Strukturni čelični radovi", image: "https://images.pexels.com/photos/585419/pexels-photo-585419.jpeg?auto=compress&cs=tinysrgb&w=800" },
        { title: "Laserski projekt", image: "https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800" },
        { title: "Prilagođena metalna izrada", image: "https://images.pexels.com/photos/1094767/pexels-photo-1094767.jpeg?auto=compress&cs=tinysrgb&w=800" },
        { title: "Industrijski dijelovi", image: "https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=800" },
        { title: "Precizno rezanje", image: "https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800" },
        { title: "Obrada metala", image: "https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?auto=compress&cs=tinysrgb&w=800" }
      ],

      quoteTitle: "Zatražite ponudu",
      quoteSubtitle: "Recite nam o svom projektu i javit ćemo vam se s detaljnom ponudom",
      fullName: "Ime i prezime *",
      emailAddress: "Email adresa *",
      phoneNumber: "Broj telefona *",
      projectDescription: "Opis projekta *",
      descriptionPlaceholder: "Molimo opišite svoj projekt: materijale, dimenzije i sve detalje...",
      submitRequest: "Pošaljite zahtjev",
      quoteThankYouTitle: "Hvala!",
      quoteThankYouMessage: "Primili smo vaš zahtjev i uskoro ćemo vas kontaktirati.",

      contactTitle: "Kontakt",
      contactSubtitle: "Kontaktirajte naš tim kako biste razgovarali o vašim potrebama obrade metala",
      sendMessage: "Pošalji poruku",
      sendMessageTitle: "Pošaljite nam poruku",
      thankYouTitle: "Hvala!",
      thankYouMessage: "Primili smo vašu poruku i javit ćemo vam se uskoro.",
      messageLabel: "Poruka *",
      messagePlaceholder: "Recite nam nešto o vašem upitu...",
      businessHoursTitle: "Radno vrijeme",
      mondayFriday: "Ponedjeljak - Petak:",
      mondayFridayTime: "7:00 - 18:00",
      saturday: "Subota:",
      saturdayTime: "8:00 - 14:00",
      sunday: "Nedjelja:",
      sundayTime: "Zatvoreno",

      footerDesc: "Precizna obrada metala i industrijska rješenja uz vrhunsku tehnologiju i stručnu izradu.",
      footerQuickLinks: "Brze poveznice",
      
      footerServiceList: [
        "Metalna konstrukcija",
        "Lasersko rezanje",
        "Rezanje vodenim mlazom",
        "Lijevanje metala",
        "Obrada metala",
        "Obrada i dorada metala"
      ],
      copyright: "Sva prava pridržana."
    }
  }
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: { escapeValue: false }
});

export default i18n;