"use client";

import { motion } from "framer-motion";
import CTA from "@/components/CTA";
import LeadMagnet from "@/components/LeadMagnet";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function ClientPage() {
  return (
    <main className="pt-24 pb-0 bg-white">
      <article className="max-w-4xl mx-auto px-6 py-12">
        <Link href="/recursos" className="inline-flex items-center gap-2 text-cian font-bold hover:text-azul transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" /> Volver a Recursos
        </Link>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-heading font-bold text-azul mb-6 leading-tight"
        >
          Simulacros de Evacuación: La práctica que salva vidas
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-xl text-gris mb-12 leading-relaxed"
        >
          Tener un plan escrito no sirve de nada si el personal no sabe ejecutarlo bajo presión. Los simulacros fijan el conocimiento mediante la memoria muscular y el trabajo en equipo.
        </motion.p>

        <div className="prose prose-lg prose-blue max-w-none text-gray-700">
          <p className="mb-6 leading-relaxed">La legislación recomienda realizar al menos un simulacro anual, pero en industrias de alto riesgo o escuelas, lo ideal es una frecuencia semestral. El objetivo no es hacerlo rápido, sino hacerlo seguro.</p>
          <p className="mb-6 leading-relaxed">Durante un simulacro se miden los tiempos de respuesta de los líderes de evacuación, la efectividad del sistema de alarmas y el comportamiento de las personas frente a vías obstruidas simuladas.</p>
          <p className="mb-6 leading-relaxed">Nuestra consultora organiza, coordina y audita simulacros, entregando posteriormente un informe técnico de mejoras que se adjunta al Legajo Técnico para presentar ante las autoridades.</p>
        </div>

        <LeadMagnet 
          title="Descargá la Guía de Coordinación de Simulacros" 
          description="Un manual corporativo en PDF con las pautas exactas para organizar un simulacro de evacuación efectivo, asignar los roles de la brigada y evitar errores comunes." 
          pdfName="guia-coordinacion-simulacros.pdf" 
        />
      </article>

      <CTA />
    </main>
  );
}
