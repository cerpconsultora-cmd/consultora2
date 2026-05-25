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
          Checklist: ¿Estás listo para una inspección de la SRT?
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-xl text-gris mb-12 leading-relaxed"
        >
          Las multas por incumplimiento en Seguridad e Higiene son altísimas, pero evitables. Conocer los puntos ciegos de tu instalación te permite corregirlos antes de la llegada del inspector.
        </motion.p>

        <div className="prose prose-lg prose-blue max-w-none text-gray-700">
          <p className="mb-6 leading-relaxed">El Legajo Técnico es el corazón documental de la seguridad en tu empresa. Debe incluir la nómina del personal, las capacitaciones realizadas, el registro de entrega de EPP (Elementos de Protección Personal) y la medición de puesta a tierra.</p>
          <p className="mb-6 leading-relaxed">Otro punto crítico son las instalaciones eléctricas y el riesgo de incendio. ¿Tenés los extintores cargados y con tarjeta al día? ¿Las luces de emergencia funcionan? ¿Hay cartelería indicativa de salidas?</p>
          <p className="mb-6 leading-relaxed">No esperes a la intimación. Utilizá nuestro material para realizar una auto-auditoría inicial y luego contactá a nuestros profesionales matriculados para regularizar tu situación.</p>
        </div>

        <LeadMagnet 
          title="Descargá el Checklist de Auditoría SST" 
          description="Obtené nuestro PDF gratuito con los 50 puntos críticos que todo inspector de la Superintendencia de Riesgos del Trabajo revisa al visitar una planta o comercio." 
          pdfName="checklist-sst-previtec.pdf" 
        />
      </article>

      <CTA />
    </main>
  );
}
