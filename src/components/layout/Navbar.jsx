import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Solutions", href: "#solutions" },
  { label: "Projects", href: "#projects" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/70 bg-white/90 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/90">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
        {/* Logo */}
        <a
          href="#home"
          onClick={closeMenu}
          className="flex items-center gap-3"
          aria-label="Go to homepage"
        >
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-linear-to-br from-indigo-600 to-fuchsia-500 text-lg font-black text-white shadow-lg shadow-indigo-200">
            AK
          </span>

          <span className="leading-tight">
            <span className="block text-lg font-extrabold tracking-tight text-slate-900">
              Avinash Kunnure<span className="text-indigo-600">.</span>
            </span>
            <span className="text-xs font-medium text-slate-500">
              Software Engineer
            </span>
          </span>
        </a>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-slate-600 transition hover:text-indigo-600"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <a href="#contact" className="hidden items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-slate-200 transition hover:-translate-y-0.5 hover:bg-indigo-600 lg:inline-flex" >
          Let's Talk
          <ArrowUpRight size={16} />
        </a>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setIsOpen((current) => !current)}
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 text-slate-800 transition hover:bg-slate-100 lg:hidden"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-slate-100 bg-white dark:border-slate-800 dark:bg-slate-950 lg:hidden"
          >
            <div className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-5 sm:px-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className="rounded-xl px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-indigo-50 hover:text-indigo-600"
                >
                  {link.label}
                </a>
              ))}

              <a
                href="#contact"
                onClick={closeMenu}
                className="mt-3 inline-flex items-center justify-center gap-2 rounded-xl bg-linear-to-r from-indigo-600 to-fuchsia-600 px-5 py-3.5 text-sm font-bold text-white"
              >
                Let's Talk
                <ArrowUpRight size={16} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}