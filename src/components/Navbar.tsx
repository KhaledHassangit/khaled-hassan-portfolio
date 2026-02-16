import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, Sun, Moon, Languages } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { useLanguage } from "@/contexts/LanguageContext";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { lang, setLang, t } = useLanguage();

  const navItems = [
    { label: t.nav.about, href: "#about" },
    { label: t.nav.skills, href: "#skills" },
    { label: t.nav.projects, href: "#projects" },
    { label: t.nav.experience, href: "#experience" },
    { label: t.nav.architecture, href: "#architecture" },
    { label: t.nav.contact, href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="font-mono text-sm font-semibold text-foreground tracking-tight">
          KH<span className="text-primary">.</span>dev
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.label}
            </a>
          ))}

          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center hover:bg-surface-hover transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={14} className="text-foreground" /> : <Moon size={14} className="text-foreground" />}
          </button>

          {/* Language toggle */}
          <button
            onClick={() => setLang(lang === "en" ? "ar" : "en")}
            className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center hover:bg-surface-hover transition-colors text-xs font-bold text-foreground"
            aria-label="Toggle language"
          >
            {lang === "en" ? "ع" : "EN"}
          </button>

          <a
            href="#contact"
            className="text-sm bg-primary text-primary-foreground px-4 py-2 rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            {t.nav.getInTouch}
          </a>
        </div>

        {/* Mobile toggle */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={toggleTheme}
            className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center text-foreground"
          >
            {theme === "dark" ? <Sun size={14} /> : <Moon size={14} />}
          </button>
          <button
            onClick={() => setLang(lang === "en" ? "ar" : "en")}
            className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center text-xs font-bold text-foreground"
          >
            {lang === "en" ? "ع" : "EN"}
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-foreground"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden glass border-t border-border/50 px-6 py-4 space-y-3"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.label}
            </a>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
