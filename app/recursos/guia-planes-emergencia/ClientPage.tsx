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
          Cómo diseñar un Plan de Emergencias efectivo
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-xl text-gris mb-12 leading-relaxed"
        >
          Un plan de emergencias no es solo un papel para cumplir con la SRT. Es la diferencia entre un susto y una tragedia. En esta guía te explicamos paso a paso qué debe contener, cómo asignar roles y por qué la Ley 19.587 lo exige.
        </motion.p>

        <div className="prose prose-lg prose-blue max-w-none text-gray-700">
          <p className="mb-6 leading-relaxed">Las emergencias médicas, incendios o amenazas no avisan. Tener un plan estructurado garantiza que cada empleado sepa exactamente qué hacer, adónde ir y a quién reportar.</p>
          <p className="mb-6 leading-relaxed">Según la normativa vigente, todo establecimiento con personal en relación de dependencia debe contar con un Plan de Evacuación aprobado por Defensa Civil o Bomberos.</p>
          <p className="mb-6 leading-relaxed">Los tres pilares de un buen plan son: 1) Análisis de riesgos (qué puede pasar). 2) Asignación de roles (quién hace qué). 3) Vías de escape y punto de encuentro seguro.</p>
        </div>

        <LeadMagnet 
          title="Descargá la Plantilla de Plan de Emergencias" 
          description="Recibí en tu correo un PDF gratuito con el esqueleto oficial para armar el plan de tu empresa, junto a un checklist de control de extintores." 
          pdfName="plantilla-emergencias-previtec.pdf" 
        />
      </article>

      <CTA />
    </main>
  );
}
