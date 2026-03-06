import { useState } from "react";
import { HiOutlineTicket, HiBars3, HiXMark } from "react-icons/hi2";

const navLinks = ["Home", "Tickets", "About", "Contact"];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-100 shadow-sm">
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
                className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-indigo-600 rounded-lg hover:bg-indigo-50/70 transition-all"
              >
                {item}
              </a>
            ))}
            <button className="ml-4 px-5 py-2.5 bg-linear-to-r from-indigo-500 to-purple-600 text-white text-sm font-semibold rounded-xl hover:shadow-lg hover:shadow-indigo-500/30 active:scale-[0.97] transition-all">
              + New Ticket
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl hover:bg-slate-100 text-slate-600 transition-colors"
          >
            {open ? (
              <HiXMark className="text-2xl" />
            ) : (
              <HiBars3 className="text-2xl" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          open ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 pb-4 space-y-1 border-t border-slate-100 pt-3">
          {navLinks.map((item) => (
            <a
              key={item}
              href="#"
              className="block px-4 py-2.5 text-sm font-medium text-slate-600 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors"
            >
              {item}
            </a>
          ))}
          <button className="w-full mt-2 px-5 py-2.5 bg-linear-to-r from-indigo-500 to-purple-600 text-white text-sm font-semibold rounded-xl">
            + New Ticket
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;