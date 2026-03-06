import { useState } from "react";
import { HiOutlineTicket, HiBars3, HiXMark, HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";

const navLinks = ["Home", "Tickets", "About", "Contact"];

const Navbar = ({ isDark, setIsDark }) => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-b border-slate-100 dark:border-slate-700/50 shadow-sm transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-xl bg-linear-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/20 group-hover:shadow-indigo-500/40 transition-shadow">
              <HiOutlineTicket className="text-white text-lg" />
            </div>
            <span className="text-xl font-display font-bold bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              SupportZone
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((item) => (
              <a
                key={item}
                href="#"
                className="px-4 py-2 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 rounded-lg hover:bg-indigo-50/70 dark:hover:bg-indigo-900/20 transition-all"
              >
                {item}
              </a>
            ))}

            {/* Dark / Light Toggle */}
            <button
              onClick={() => setIsDark(!isDark)}
              className="ml-2 p-2 rounded-lg text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all cursor-pointer"
              aria-label="Toggle dark mode"
            >
              {isDark ? (
                <HiOutlineSun className="text-xl text-amber-400" />
              ) : (
                <HiOutlineMoon className="text-xl" />
              )}
            </button>

            <button className="ml-2 px-5 py-2.5 bg-linear-to-r from-indigo-500 to-purple-600 text-white text-sm font-semibold rounded-xl hover:shadow-lg hover:shadow-indigo-500/30 active:scale-[0.97] transition-all cursor-pointer">
              + New Ticket
            </button>
          </div>

          {/* Mobile: toggle + hamburger */}
          <div className="md:hidden flex items-center gap-1">
            <button
              onClick={() => setIsDark(!isDark)}
              className="w-10 h-10 flex items-center justify-center rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition-colors cursor-pointer"
              aria-label="Toggle dark mode"
            >
              {isDark ? (
                <HiOutlineSun className="text-xl text-amber-400" />
              ) : (
                <HiOutlineMoon className="text-xl" />
              )}
            </button>
            <button
              onClick={() => setOpen(!open)}
              className="w-10 h-10 flex items-center justify-center rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition-colors cursor-pointer"
            >
              {open ? <HiXMark className="text-2xl" /> : <HiBars3 className="text-2xl" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          open ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 pb-4 space-y-1 border-t border-slate-100 dark:border-slate-700/50 pt-3 bg-white dark:bg-slate-900 transition-colors">
          {navLinks.map((item) => (
            <a
              key={item}
              href="#"
              className="block px-4 py-2.5 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 rounded-lg transition-colors"
            >
              {item}
            </a>
          ))}
          <button className="w-full mt-2 px-5 py-2.5 bg-linear-to-r from-indigo-500 to-purple-600 text-white text-sm font-semibold rounded-xl cursor-pointer">
            + New Ticket
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;