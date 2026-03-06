import { HiOutlineTicket } from "react-icons/hi2";
import { FaFacebookF, FaTwitter, FaGithub, FaLinkedinIn } from "react-icons/fa";

const socialIcons = [FaFacebookF, FaTwitter, FaGithub, FaLinkedinIn];

const Footer = () => (
  <footer className="bg-slate-900 dark:bg-slate-950 text-slate-300 mt-auto transition-colors duration-300">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
        {/* Brand */}
        <div className="sm:col-span-2 lg:col-span-1">
          <a href="#" className="flex items-center gap-2.5 mb-4">
            <div className="w-9 h-9 rounded-xl bg-linear-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
              <HiOutlineTicket className="text-white text-lg" />
            </div>
            <span className="text-xl font-display font-bold text-white">SupportZone</span>
          </a>
          <p className="text-sm text-slate-400 leading-relaxed mb-5 max-w-xs">
            Streamline your customer support workflow. Track, manage, and resolve tickets with ease and confidence.
          </p>
          <div className="flex items-center gap-3">
            {socialIcons.map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-9 h-9 rounded-lg bg-slate-800 dark:bg-slate-800/80 hover:bg-indigo-600 flex items-center justify-center text-slate-400 hover:text-white transition-all"
              >
                <Icon className="text-sm" />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-display font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2.5">
            {["Home", "Dashboard", "Tickets", "Reports"].map((link) => (
              <li key={link}>
                <a href="#" className="text-sm text-slate-400 hover:text-indigo-400 transition-colors">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="text-white font-display font-semibold mb-4">Support</h4>
          <ul className="space-y-2.5">
            {["Help Center", "FAQ", "Documentation", "API Reference"].map((link) => (
              <li key={link}>
                <a href="#" className="text-sm text-slate-400 hover:text-indigo-400 transition-colors">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-display font-semibold mb-4">Contact Us</h4>
          <ul className="space-y-2.5 text-sm text-slate-400">
            <li>support@supportzone.com</li>
            <li>+880 1234-567890</li>
            <li>Dhaka, Bangladesh</li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-slate-500">
          &copy; {new Date().getFullYear()} SupportZone. All rights reserved.
        </p>
        <div className="flex items-center gap-6 text-sm text-slate-500">
          {["Terms", "Privacy", "Cookies"].map((t) => (
            <a key={t} href="#" className="hover:text-indigo-400 transition-colors">
              {t}
            </a>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;