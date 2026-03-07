import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.png";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-12">

          {/* Logo */}
          <div>
            <div className="flex items-center mb-4 bg-white">
              <Link to="/">
                <img
                  src={Logo}
                  alt="COMO GRIT Logo"
                  className="w-40 h-auto object-contain"
                />
              </Link>
            </div>

            <p className="text-slate-400 leading-relaxed">
              {t("footerDesc")}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">
              {t("footerQuickLinks")}
            </h3>

            <div className="space-y-2">

              <Link
                to="/"
                className="block text-slate-400 hover:text-white transition-colors"
              >
                {t("footerHome")}
              </Link>

              <Link
                to="/About"
                className="block text-slate-400 hover:text-white transition-colors"
              >
                {t("footerAbout")}
              </Link>

              <Link
                to="/Services"
                className="block text-slate-400 hover:text-white transition-colors"
              >
                {t("footerServices")}
              </Link>

              <Link
                to="/Gallery"
                className="block text-slate-400 hover:text-white transition-colors"
              >
                {t("Gallery")}
              </Link>

              <Link
                to="/Contact"
                className="block text-slate-400 hover:text-white transition-colors"
              >
                {t("footerContact")}
              </Link>

            </div>
          </div>

          {/* Services */}
         <div>
  <h3 className="text-lg font-bold mb-4">Our Services</h3>

  <ul className="space-y-2 text-slate-400 ">
    <li className="hover:text-white transition-colors">Metal Construction
</li>
    <li className="hover:text-white transition-colors">Laser Cutting
</li>
    <li className="hover:text-white transition-colors">Water Jet Cutting
</li>
    <li className="hover:text-white transition-colors">Metal Casting
</li>
    <li className="hover:text-white transition-colors">Metal Forming
</li>
<li className="hover:text-white transition-colors">Metal Processing
</li>
  </ul>
</div>

 <div>
  <h3 className="text-lg font-bold mb-4">Contact Information</h3>

  <ul className="space-y-2 text-slate-400">
        <li> <a className="text-white transition-colors bold font-medium">Como Grit d.o.o</a></li>

    <li>Email: <a className="hover:text-white transition-colors">service@comogrit.com</a></li>
    <li>Phone: <a className="hover:text-white transition-colors">+1 111 111 111</a></li>
        <li>Address: <a className="hover:text-white transition-colors">Rooseveltova 12, 21000 Split</a></li>

  </ul>
</div>

        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-400">
          <p>
            &copy; {new Date().getFullYear()} COMO GRIT. {t("copyright")}
          </p>
        </div>
      </div>
    </footer>
  );
}