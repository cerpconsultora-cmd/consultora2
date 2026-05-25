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
          Guía Planes de Emergencia: Estructurá tu Plan
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-xl text-gris mb-12 leading-relaxed"
        >
          Un Plan de Evacuación es mucho más que un trámite municipal o una exigencia de la ART. Es la herramienta principal para salvar vidas ante un incendio o siniestro.
        </motion.p>

        <div className="prose prose-lg prose-blue max-w-none text-gray-700 mb-12">
          <p className="mb-6 leading-relaxed">Nuestra <strong>guía de planes de emergencia</strong> te enseña cómo estructurar las bases de un plan sólido. En un contexto de crisis corporativa o industrial, el pánico es el principal enemigo. Tener protocolos claros define quién toma el liderazgo, por dónde se evacúa y cómo se contiene la emergencia primaria.</p>
          <p className="mb-6 leading-relaxed">Según la normativa vigente (Ley 19.587), todo establecimiento comercial o industrial debe contar con un Plan de Evacuación firmado por un profesional y aprobado por Bomberos o Defensa Civil local.</p>
          <p className="mb-6 leading-relaxed">Los pilares que desarrollamos en este PDF gratuito incluyen: Análisis de Riesgos y Puntos Críticos (IPERC), Asignación del Líder de Evacuación y Brigadistas, Trazado de Vías de Escape y definición del Punto de Encuentro Seguro.</p>
        </div>

        <LeadMagnet 
          title="Descargá la Guía de Planes de Emergencia" 
          description="Recibí en tu correo un PDF gratuito con el esquema paso a paso para desarrollar el plan de contingencia de tu empresa, más un checklist de control de salidas de emergencia." 
          pdfName="guia-emergencias-previtec.pdf" 
        />
      </article>

      <CTA />
    </main>
  );
}
