import { useState } from "react"
import { Menu, X, ChevronDown } from "lucide-react" // Added ChevronDown
import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"
import "flag-icons/css/flag-icons.min.css"
import Logo from "../assets/Logo.png"

const flags = {
  en: "gb",
  hr: "hr",
  de: "de"
}

const languages = {
  en: "English",
  hr: "Hrvatski",
  de: "Deutsch"
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
  // Added 't' so you can translate your nav links
  const { t, i18n } = useTranslation() 

  const currentLang = i18n.language ? i18n.language.split("-")[0] : "en"

  const navLinks = [
    // Tip: Use your translation keys here, e.g., t("nav.home") instead of "Home"
    { path: "/", label: "Home" }, 
    { path: "/about", label: "About Us" },
    { path: "/services", label: "Services" },
    { path: "/gallery", label: "Gallery" },
    { path: "/contact", label: "Contact Us" }
  ]

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang)
  }

  return (
    <header className="sticky top-0 bg-white border-b border-slate-200 z-50">
      <nav className="max-w-7xl mx-auto px-6 py-2">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src={Logo}
              alt="COMO GRIT Logo"
              className="w-44 md:w-48 h-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-slate-700 hover:text-blue-600 font-semibold transition-colors"
              >
                {link.label}
              </Link>
            ))}

            {/* Language Dropdown */}
            <div className="relative group">
              {/* FIX: Added w-36 (fixed width) and justify-between so text changes don't shift layout */}
              <button className="w-36 px-3 py-1 border rounded border-slate-300 hover:border-blue-600 font-semibold flex items-center justify-between gap-2 transition-colors">
                <div className="flex items-center gap-2">
                  <span className={`fi fi-${flags[currentLang]} w-5 h-5 rounded-sm overflow-hidden`} />
                  {languages[currentLang]}
                </div>
                <ChevronDown className="w-4 h-4 text-slate-500" />
              </button>

              <div className="absolute right-0 mt-2 w-full bg-white border border-slate-300 rounded shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 overflow-hidden">
                {/* Cleaned up: Mapping over the languages object dynamically */}
                {Object.entries(languages).map(([code, name]) => (
                  <button
                    key={code}
                    onClick={() => changeLanguage(code)}
                    className="w-full text-left px-4 py-2 hover:bg-blue-50 flex items-center gap-3 transition-colors"
                  >
                    <span className={`fi fi-${flags[code]} w-5 h-5 rounded-sm overflow-hidden`} />
                    {name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-slate-900"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute left-0 top-full w-full bg-white border-t border-slate-200 py-4 shadow-md">
            <div className="flex flex-col gap-4 px-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-left text-slate-700 hover:text-blue-600 font-semibold py-2 transition-colors"
                >
                  {link.label}
                </Link>
              ))}

              {/* Mobile Language Switch */}
              <div className="flex flex-wrap gap-4 pt-4 border-t border-slate-100">
                {Object.entries(languages).map(([code, name]) => (
                  <button
                    key={code}
                    onClick={() => {
                      changeLanguage(code)
                      setMobileMenuOpen(false) // Close menu on select
                    }}
                    className={`flex items-center gap-2 px-3 py-2 rounded ${
                      currentLang === code ? 'bg-blue-50 text-blue-600' : 'hover:bg-slate-50'
                    }`}
                  >
                    <span className={`fi fi-${flags[code]} w-5 h-5 rounded-sm overflow-hidden`} />
                    {name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}