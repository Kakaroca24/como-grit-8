import { useState } from "react"
import { Menu, X, ChevronDown } from "lucide-react"
import { Link } from "react-router-dom"
import "flag-icons/css/flag-icons.min.css"
import Logo from "../assets/Logo.png"

export default function NavbarHR() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { path: "/hr", label: "Početna" },
    { path: "/hr/about", label: "O nama" },
    { path: "/hr/services", label: "Usluge" },
    { path: "/hr/gallery", label: "Galerija" },
    { path: "/hr/contact", label: "Kontakt" },
    { path: "/hr/construction", label: "Izgradnja Zgrada" }
  ]

  const languageLinks = {
    en: "/en",
    hr: "/hr",
    de: "/de"
  }

  return (
    <header className="sticky top-0 bg-white border-b border-slate-200 z-50">
      <nav className="max-w-7xl mx-auto px-6 py-2">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link to="/hr" className="flex items-center">
            <img
              src={Logo}
              alt="COMO GRIT Logo"
              className="w-44 md:w-48 h-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">

            {navLinks.map((link) => {
              const isConstruction = link.path === "/hr/construction"

              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`font-semibold transition-all px-3 py-1 rounded
                  ${
                    isConstruction
                      ? "border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white hover:shadow-lg hover:scale-105"
                      : "text-slate-700 hover:text-blue-600"
                  }`}
                >
                  {link.label}
                </Link>
              )
            })}

            {/* Language Dropdown */}
            <div className="relative group">
              <button className="w-36 px-3 py-1 border rounded border-slate-300 hover:border-blue-600 font-semibold flex items-center justify-between gap-2 transition-colors">
                <div className="flex items-center gap-2">
                  <span className={`fi fi-hr w-5 h-5 rounded-sm overflow-hidden`} />
                  Hrvatski
                </div>
                <ChevronDown className="w-4 h-4 text-slate-500" />
              </button>

              <div className="absolute right-0 mt-2 w-full bg-white border border-slate-300 rounded shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 overflow-hidden">
                <Link
                  to={languageLinks.en}
                  className="w-full text-left px-4 py-2 hover:bg-blue-50 flex items-center gap-3 transition-colors"
                >
                  <span className={`fi fi-gb w-5 h-5 rounded-sm overflow-hidden`} />
                  English
                </Link>
                <Link
                  to={languageLinks.hr}
                  className="w-full text-left px-4 py-2 hover:bg-blue-50 flex items-center gap-3 transition-colors"
                >
                  <span className={`fi fi-hr w-5 h-5 rounded-sm overflow-hidden`} />
                  Hrvatski
                </Link>
                <Link
                  to={languageLinks.de}
                  className="w-full text-left px-4 py-2 hover:bg-blue-50 flex items-center gap-3 transition-colors"
                >
                  <span className={`fi fi-de w-5 h-5 rounded-sm overflow-hidden`} />
                  Deutsch
                </Link>
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

              {navLinks.map((link) => {
                const isConstruction = link.path === "/hr/construction"

                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`text-left font-semibold py-2 transition-all rounded px-2
                    ${
                      isConstruction
                        ? "border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
                        : "text-slate-700 hover:text-blue-600"
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              })}

              {/* Mobile Language Switch */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-100">
                <Link
                  to={languageLinks.en}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-2 px-3 py-2 rounded hover:bg-slate-100 text-slate-600"
                >
                  <span className={`fi fi-gb w-4 h-4 rounded-sm overflow-hidden`} />
                  English
                </Link>
                <Link
                  to={languageLinks.hr}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-2 px-3 py-2 rounded bg-blue-50 text-blue-600 font-semibold"
                >
                  <span className={`fi fi-hr w-4 h-4 rounded-sm overflow-hidden`} />
                  Hrvatski
                </Link>
                <Link
                  to={languageLinks.de}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-2 px-3 py-2 rounded hover:bg-slate-100 text-slate-600"
                >
                  <span className={`fi fi-de w-4 h-4 rounded-sm overflow-hidden`} />
                  Deutsch
                </Link>
              </div>

            </div>
          </div>
        )}

      </nav>
    </header>
  )
}
