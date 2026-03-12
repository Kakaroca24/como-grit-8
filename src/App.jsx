import { Routes, Route, Navigate } from "react-router-dom"
import { useParams } from "react-router-dom"

import Footer from './components/Footer'
import NavbarEN from './components/NavbarEN'
import NavbarDE from './components/NavbarDE'
import NavbarHR from './components/NavbarHR'

import HomeEN from './pages/en/Home'
import HomeDE from './pages/de/Home'
import HomeHR from './pages/hr/Home'

import 'flag-icons/css/flag-icons.min.css'

const navbars = {
  en: NavbarEN,
  de: NavbarDE,
  hr: NavbarHR
}

const pages = {
  en: {
    home: HomeEN
  },
  de: {
    home: HomeDE
  },
  hr: {
    home: HomeHR
  }
}

function LanguageWrapper() {
  const { lang } = useParams()
  const NavBar = navbars[lang] || NavbarEN
  const pagesToUse = pages[lang] || pages.en

  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="" element={<pagesToUse.home />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <Routes>
      <Route path="/:lang/*" element={<LanguageWrapper />} />
      <Route path="/" element={<Navigate to="/en" replace />} />
      <Route path="*" element={<Navigate to="/en" replace />} />
    </Routes>
  )
}
