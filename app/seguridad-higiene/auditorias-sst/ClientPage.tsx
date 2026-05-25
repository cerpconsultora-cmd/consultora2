"use client";

import { motion } from "framer-motion";
import { ClipboardCheck, ArrowRight, CheckCircle2 } from "lucide-react";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Link from "next/link";

export default function ClientPage() {
  return (
    <main className="pt-24 pb-0 bg-gray-50">
      {/* Hero Service */}
      <section className="bg-azul text-white py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5" />
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12 relative z-10">
          <div className="md:w-2/3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block bg-cian/20 text-cian px-4 py-1.5 rounded-full text-sm font-bold tracking-wide mb-6"
            >
              SERVICIO ESPECIALIZADO
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-heading font-bold mb-6"
            >
              Auditorías SST
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-gray-300 leading-relaxed max-w-xl"
            >
              Evaluamos el estado real de tu empresa frente a la normativa de Riesgos del Trabajo. Prevení accidentes y sanciones con un diagnóstico preciso.
            </motion.p>
          </div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="md:w-1/3 flex justify-center"
          >
            <div className="w-48 h-48 bg-cian/10 rounded-full flex items-center justify-center border border-cian/20 shadow-2xl shadow-cian/20">
               <ClipboardCheck className="w-24 h-24 text-cian" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Detailed Content */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">
           <div>
             <h2 className="text-3xl font-heading font-bold text-azul mb-6">El verdadero costo de una inspección fallida</h2>
             <p className="text-gris leading-relaxed mb-6">
               Las multas por incumplimiento de la Ley 19.587 de Seguridad e Higiene o las intimaciones de la SRT pueden paralizar la producción de tu planta. Una auditoría preventiva es la inversión más rentable para evitar dolores de cabeza legales.
             </p>
             
             <div className="bg-blanco p-6 rounded-2xl border-l-4 border-cian mb-8 shadow-sm">
               <h4 className="font-bold text-azul mb-2">Caso de Éxito: Industria Metalúrgica en Parque Industrial</h4>
               <p className="text-sm text-gris italic">
                 "PREVITEC realizó un relevamiento completo 30 días antes de nuestra recertificación anual. Detectaron 12 puntos ciegos en tableros eléctricos y falta de señalética que hubieran resultado en clausura. Regularizamos a tiempo y pasamos la inspección sin objeciones."
               </p>
             </div>

             <h3 className="text-xl font-heading font-bold text-azul mb-4">¿Qué entregamos al finalizar?</h3>
             <ul className="space-y-4 mb-8">
               {[
                 "Informe Técnico detallado con respaldo fotográfico.",
                 "Matriz Legal de desvíos detectados y su nivel de criticidad.",
                 "Plan de Acción correctivo valorizado y priorizado.",
                 "Firma de profesional matriculado válida ante ART/SRT."
               ].map((ben, i) => (
                 <li key={i} className="flex items-start gap-3 font-medium text-azul">
                   <CheckCircle2 className="w-6 h-6 text-cian shrink-0 mt-0.5" />
                   <span className="text-sm leading-relaxed">{ben}</span>
                 </li>
               ))}
             </ul>
           </div>

           <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-gray-100 sticky top-32">
              <h3 className="text-2xl font-heading font-bold text-azul mb-4">Asegurá tu tranquilidad operativa hoy</h3>
              <p className="text-gris mb-8">Completá este formulario rápido. Un auditor senior evaluará tu caso y te enviará una propuesta de relevamiento inicial en menos de 24 horas.</p>
              
              <Link href="/contacto" className="w-full inline-flex justify-center items-center gap-2 bg-azul text-white font-bold py-4 px-8 rounded-xl hover:bg-cian transition-colors group mb-4 shadow-lg shadow-blue-900/20">
                Coordinar Relevamiento
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <p className="text-xs text-center text-gray-400">Atención directa en Litoral Argentino (Entre Ríos, Santa Fe, Corrientes).</p>
           </div>
        </div>
      </section>

      <CTA />
    </main>
  );
}
