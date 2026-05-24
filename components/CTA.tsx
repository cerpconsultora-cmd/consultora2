"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { PhoneCall } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative py-24 px-6 overflow-hidden bg-rojo">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 mix-blend-overlay" />
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-heading font-bold text-white mb-8 leading-tight"
        >
          La emergencia no avisa.<br />
          <span className="text-amarillo">La prevención sí.</span>
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-xl text-white/90 mb-12 max-w-2xl mx-auto"
        >
          No esperes a que ocurra un incidente para actuar. Protegé a tu equipo, asegurá la continuidad de tus operaciones y cumplí con las normativas hoy mismo.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <Link 
            href="/contacto"
            className="inline-flex items-center gap-3 bg-white text-rojo font-bold text-lg px-10 py-5 rounded-full hover:bg-gray-100 hover:scale-105 transition-all shadow-2xl shadow-black/20"
          >
            <PhoneCall className="w-6 h-6" />
            Contactar a un Especialista
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
