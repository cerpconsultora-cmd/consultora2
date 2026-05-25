"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ShieldAlert, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHome = pathname === "/";
  const isSolid = !isHome || scrolled;

  const navLinks = [
    { name: "Inicio", href: "/" },
    { name: "Nosotros", href: "/nosotros" },
    { 
      name: "Servicios", 
      href: "#",
      subLinks: [
        { name: "Seguridad e Higiene", href: "/seguridad-higiene" },
        { name: "Respuesta a Emergencias", href: "/emergencias" },
        { name: "Capacitación Técnica", href: "/capacitacion" },
        { name: "Gestión Preventiva", href: "/gestion-preventiva" },
        { name: "Auditorías SST", href: "/seguridad-higiene/auditorias-sst" },
        { name: "Evaluación de Riesgos", href: "/seguridad-higiene/evaluacion-de-riesgos" },
        { name: "Simulacros de Evacuación", href: "/emergencias/simulacros-de-evacuacion" },
        { name: "Planes de Evacuación", href: "/gestion-preventiva/planes-de-evacuacion" }
      ]
    },
    {
      name: "Soluciones",
      href: "#",
      subLinks: [
        { name: "Industrias y Plantas", href: "/soluciones/industrias" },
        { name: "Empresas y PyMEs", href: "/soluciones/empresas" },
        { name: "Escuelas", href: "/soluciones/escuelas" },
        { name: "Eventos Masivos", href: "/soluciones/eventos-masivos" }
      ]
    },
    {
      name: "Recursos",
      href: "/recursos",
      subLinks: [
        { name: "Ver todos los recursos", href: "/recursos" },
        { name: "Planes de Emergencia (Guía)", href: "/recursos/guia-planes-emergencia" },
        { name: "Auditoría SST (Checklist)", href: "/recursos/checklist-auditoria-sst" },
        { name: "Importancia Simulacros", href: "/recursos/importancia-simulacros" }
      ]
    },
    {
      name: "Zonas",
      href: "#",
      subLinks: [
        { name: "Paraná", href: "/zonas/parana" },
        { name: "Santa Fe", href: "/zonas/santa-fe" },
        { name: "Corrientes", href: "/zonas/corrientes" }
      ]
    }
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
              <div key={link.name} className="relative group">
                {link.subLinks ? (
                  <button className={`flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isSolid
                      ? "text-gris hover:text-azul hover:bg-gray-100"
                      : "text-gray-100 hover:text-white hover:bg-white/10"
                  }`}>
                    {link.name}
                    <ChevronDown className="w-4 h-4" />
                  </button>
                ) : (
                  <Link
                    href={link.href}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      isSolid
                        ? "text-gris hover:text-azul hover:bg-gray-100"
                        : "text-gray-100 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    {link.name}
                  </Link>
                )}
                
                {/* Desktop Dropdown */}
                {link.subLinks && (
                  <div className="absolute left-0 top-full mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top translate-y-2 group-hover:translate-y-0">
                    <div className="py-2">
                      {link.subLinks.map((subLink) => (
                        <Link
                          key={subLink.name}
                          href={subLink.href}
                          className="block px-4 py-2 text-sm text-gris hover:text-azul hover:bg-gray-50"
                        >
                          {subLink.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
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
            className="md:hidden bg-white shadow-xl absolute w-full overflow-hidden max-h-[85vh] overflow-y-auto"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <div key={link.name}>
                  {link.subLinks ? (
                    <div>
                      <button 
                        onClick={() => setOpenMobileDropdown(openMobileDropdown === link.name ? null : link.name)}
                        className="w-full flex justify-between items-center px-3 py-3 rounded-md text-base font-medium text-gris hover:text-azul hover:bg-gray-50 border-b border-gray-100"
                      >
                        {link.name}
                        <ChevronDown className={`w-5 h-5 transition-transform ${openMobileDropdown === link.name ? 'rotate-180' : ''}`} />
                      </button>
                      <AnimatePresence>
                        {openMobileDropdown === link.name && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden bg-gray-50"
                          >
                            {link.subLinks.map((subLink) => (
                              <Link
                                key={subLink.name}
                                href={subLink.href}
                                onClick={() => setIsOpen(false)}
                                className="block pl-8 pr-3 py-3 text-sm text-gris hover:text-azul border-b border-gray-100 last:border-none"
                              >
                                {subLink.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="block px-3 py-3 rounded-md text-base font-medium text-gris hover:text-azul hover:bg-gray-50 border-b border-gray-100"
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
              <Link
                href="/contacto"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center mt-6 px-5 py-3 rounded-md bg-azul text-white font-medium text-base hover:bg-opacity-90"
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
