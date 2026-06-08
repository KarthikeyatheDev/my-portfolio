import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import NavLink from "./NavLink";
import ThemeToggle from "./ThemeToggle";

const NAV_ITEMS = [
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 dark:bg-neutral-950/90 backdrop-blur-xl border-b border-neutral-200/80 dark:border-neutral-800/80 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="text-sm font-semibold tracking-tight text-neutral-900 dark:text-neutral-100 hover:text-neutral-600 dark:hover:text-neutral-400 transition-colors"
        >
          KM<span className="text-neutral-400 dark:text-neutral-600"></span>
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-1">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <NavLink href={item.href}>{item.label}</NavLink>
            </li>
          ))}
        </ul>

        {/* Desktop right side */}
        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <a
            href="mailto:mkarthikeya122@gmail.com"
            className="inline-flex items-center gap-2 text-sm font-medium bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 px-4 py-2 rounded-full hover:bg-neutral-700 dark:hover:bg-neutral-200 transition-colors duration-200"
          >
            Get in touch
          </a>
        </div>

        {/* Mobile right side */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <button
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((v) => !v)}
            className="flex flex-col gap-[5px] p-2"
          >
            <span
              className={`block w-5 h-[1.5px] bg-neutral-800 dark:bg-neutral-200 transition-transform duration-200 ${menuOpen ? "rotate-45 translate-y-[6.5px]" : ""}`}
            />
            <span
              className={`block w-5 h-[1.5px] bg-neutral-800 dark:bg-neutral-200 transition-opacity duration-200 ${menuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block w-5 h-[1.5px] bg-neutral-800 dark:bg-neutral-200 transition-transform duration-200 ${menuOpen ? "-rotate-45 -translate-y-[6.5px]" : ""}`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden overflow-hidden bg-white dark:bg-neutral-950 border-b border-neutral-200 dark:border-neutral-800"
          >
            <ul className="px-6 py-4 flex flex-col gap-1">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="block py-2 text-sm text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href="mailto:mkarthikeya122@gmail.com"
                  className="inline-flex items-center text-sm font-medium bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 px-4 py-2 rounded-full"
                >
                  Get in touch
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;