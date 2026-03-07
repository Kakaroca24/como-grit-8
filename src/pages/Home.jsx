import Hero from '../components/Hero'
import About from '../components/AboutComponent';
import Services from '../components/ServicesComponent';
import WhyChooseUs from '../components/WhyChooseUs';
import Gallery from '../components/GalleryComponent';
import Contact from '../components/ContactComponent';
import StatsSection from '../components/StatsSection';
import 'flag-icons/css/flag-icons.min.css';

export default function Home() {
  return (
   <div className="min-h-screen">
      
      <main className="pt-72px">
        <Hero />
        <About />
        <Services />
        <StatsSection />
       
        <Gallery />
        
      </main>
     
    </div>
  )
}