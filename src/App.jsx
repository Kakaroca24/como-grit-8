import { Routes, Route } from "react-router-dom"

import Header from "./components/Header"
import Footer from './components/Footer'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Services from './pages/Services'
import Gallery from './pages/Gallery'
import ContactUs from './pages/ContactUs'
import Construction from "./pages/Construction"
import 'flag-icons/css/flag-icons.min.css'

export default function App() {
  return (
    <div>
     
<Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<AboutUs />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/Contact" element={<ContactUs />} />
        <Route path="/Construction" element={<Construction />} />

      </Routes>
<Footer />
     

    </div>
  )
}