"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ShieldAlert } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHome = pathname === "/";
  // Si no estamos en la home, la barra siempre debe ser blanca (isSolid = true)
  const isSolid = !isHome || scrolled;

  const navLinks = [
    { name: "Inicio", href: "/" },
    { name: "Nosotros", href: "/nosotros" },
    { name: "Seguridad e Higiene", href: "/seguridad-higiene" },
    { name: "Emergencias", href: "/emergencias" },
    { name: "Capacitación", href: "/capacitacion" },
    { name: "Gestión Preventiva", href: "/gestion-preventiva" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isSolid ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <ShieldAlert className={`w-8 h-8 ${isSolid ? "text-azul" : "text-white"} group-hover:text-cian transition-colors`} />
            <span className={`font-heading font-bold text-2xl tracking-tight ${isSolid ? "text-azul" : "text-white"}`}>
              PREVITEC
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1 lg:space-x-4 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isSolid
                    ? "text-gris hover:text-azul hover:bg-gray-100"
                    : "text-gray-100 hover:text-white hover:bg-white/10"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/contacto"
              className="ml-4 px-5 py-2.5 rounded-full bg-cian text-white font-medium text-sm hover:bg-opacity-90 transition-all shadow-lg hover:shadow-cyan-500/30"
            >
              Contacto
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md focus:outline-none ${isSolid ? "text-azul" : "text-white"}`}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white shadow-xl absolute w-full overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-3 rounded-md text-base font-medium text-gris hover:text-azul hover:bg-gray-50 border-b border-gray-100 last:border-none"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/contacto"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center mt-4 px-5 py-3 rounded-md bg-azul text-white font-medium text-base hover:bg-opacity-90"
              >
                Solicitar Asesoramiento
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
