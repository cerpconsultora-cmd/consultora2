"use client";

import { motion } from "framer-motion";
import { MapPin, ArrowRight, Phone } from "lucide-react";
import CTA from "@/components/CTA";
import Link from "next/link";

export default function ClientPage() {
  return (
    <main className="pt-24 pb-0 bg-gray-50">
      <section className="bg-azul text-white py-20 px-6 relative overflow-hidden">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 relative z-10">
          <div className="md:w-2/3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 bg-cian/20 text-cian px-4 py-1.5 rounded-full text-sm font-bold tracking-wide mb-6"
            >
              <MapPin className="w-4 h-4" />
              COBERTURA REGIONAL
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-heading font-bold mb-6"
            >
              Seguridad e Higiene en <span className="text-amarillo">Santa Fe</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-gray-300 leading-relaxed max-w-xl mb-6"
            >
              Somos la consultora estratégica de las industrias, puertos y empresas comerciales de la región centro. Brindamos soporte técnico para bajar la siniestralidad y cumplir las normativas provinciales y de la SRT.
            </motion.p>
            <motion.ul 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-3 mb-8"
            >
              {[
                "Asesoría para Polos Industriales y Agroindustria.",
                "Gestión de Riesgos en zonas portuarias y logísticas.",
                "Auditorías en planta y control de contratistas.",
                "Planes de Evacuación para comercio local y oficinas."
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-blue-100 font-medium">
                  <ArrowRight className="w-5 h-5 text-cian shrink-0 mt-0.5" />
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </motion.ul>
          </div>
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="md:w-1/3 w-full"
          >
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20">
               <h3 className="text-xl font-heading font-bold mb-4 text-center">Contactá a un especialista</h3>
               <p className="text-gray-300 text-sm mb-6 text-center">Nuestros ingenieros y licenciados matriculados realizan visitas periódicas a la ciudad de Santa Fe, Santo Tomé y Sauce Viejo.</p>
               <Link href="/contacto" className="w-full flex items-center justify-center gap-2 bg-cian text-azul font-bold py-4 px-6 rounded-xl hover:bg-yellow-400 transition-colors shadow-lg shadow-cian/20">
                 <Phone className="w-5 h-5" />
                 Agendar Reunión
               </Link>
            </div>
          </motion.div>
        </div>
      </section>
      <CTA />
    </main>
  );
}
