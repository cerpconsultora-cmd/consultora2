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
          Checklist Auditoría SST: Prepará a tu empresa
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-xl text-gris mb-12 leading-relaxed"
        >
          Las multas por incumplimiento en Salud y Seguridad en el Trabajo (SST) son altísimas, pero totalmente evitables. Descargá nuestro checklist de auditoría SST para evaluar internamente los puntos críticos de tu operación.
        </motion.p>

        <div className="prose prose-lg prose-blue max-w-none text-gray-700 mb-12">
          <p className="mb-6 leading-relaxed">El Legajo Técnico es el corazón documental de la seguridad en tu empresa. En una auditoría típica, el inspector solicitará la nómina del personal, constancias de entrega de EPP (Elementos de Protección Personal), y las mediciones ambientales (puesta a tierra, ruido, iluminación).</p>
          <p className="mb-6 leading-relaxed">Otro punto crítico es la prevención de incendios. ¿Tenés los extintores vigentes y con tarjeta al día? ¿Las luces de emergencia funcionan? ¿Hay cartelería indicativa de salidas y riesgos específicos?</p>
          <p className="mb-6 leading-relaxed">No esperes a la intimación. Utilizá nuestro <strong>Checklist Auditoría SST</strong> para realizar una autoevaluación estructurada. Una vez que identifiques los desvíos, podés contactar a nuestros profesionales para regularizar tu situación técnica y legal.</p>
        </div>

        <LeadMagnet 
          title="Descargá el Checklist de Auditoría SST" 
          description="Obtené nuestro PDF gratuito con los 50 puntos críticos que todo inspector de la Superintendencia de Riesgos del Trabajo (SRT) revisa en una auditoría oficial." 
          pdfName="checklist-sst-previtec.pdf" 
        />
      </article>

      <CTA />
    </main>
  );
}
