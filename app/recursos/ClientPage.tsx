"use client";

import { motion } from "framer-motion";
import { BookOpen, FileText, ArrowRight } from "lucide-react";
import CTA from "@/components/CTA";
import Link from "next/link";

export default function ClientPage() {
  const guides = [
    {
      title: "Guía Definitiva: Planes de Emergencia y Evacuación",
      desc: "Aprendé cómo estructurar un Plan de Emergencias efectivo para tu empresa y descargá la plantilla oficial.",
      href: "/recursos/guia-planes-emergencia"
    },
    {
      title: "Checklist para Auditorías de Seguridad e Higiene",
      desc: "Autoevaluación para saber si tu empresa cumple con las normativas de la SRT antes de una inspección.",
      href: "/recursos/checklist-auditoria-sst"
    },
    {
      title: "Por qué y cada cuánto hacer Simulacros",
      desc: "Todo lo que necesitas saber sobre los simulacros de evacuación en el ámbito laboral y educativo.",
      href: "/recursos/importancia-simulacros"
    }
  ];

  return (
    <main className="pt-24 pb-0 bg-gray-50">
      <section className="bg-azul text-white py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-cian/20 text-cian px-4 py-1.5 rounded-full text-sm font-bold tracking-wide mb-6"
          >
            <BookOpen className="w-4 h-4" />
            CENTRO DE CONOCIMIENTO
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-heading font-bold mb-6"
          >
            Recursos <span className="text-cian">Técnicos</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-300 max-w-2xl mx-auto"
          >
            Documentación, guías y checklists gratuitos para ayudarte a gestionar la seguridad y responder ante emergencias.
          </motion.p>
        </div>
      </section>

      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {guides.map((guide, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <Link href={guide.href} className="block h-full bg-white rounded-3xl p-8 border border-gray-100 hover:border-cian hover:shadow-xl transition-all group">
                <div className="w-14 h-14 bg-blue-50 text-azul rounded-2xl flex items-center justify-center mb-6 group-hover:bg-azul group-hover:text-white transition-colors">
                  <FileText className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-heading font-bold text-azul mb-4 group-hover:text-cian transition-colors">{guide.title}</h3>
                <p className="text-gris mb-8 leading-relaxed">{guide.desc}</p>
                <div className="flex items-center gap-2 text-cian font-bold text-sm uppercase tracking-wide">
                  Leer Guía <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
      
      <CTA />
    </main>
  );
}
