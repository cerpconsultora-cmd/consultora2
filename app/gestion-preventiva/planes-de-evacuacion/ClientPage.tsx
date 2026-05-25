"use client";

import { motion } from "framer-motion";
import { Map, ArrowRight, CheckCircle2 } from "lucide-react";
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
              Planes de Evacuación
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-gray-300 leading-relaxed max-w-xl"
            >
              Diseño integral de rutas de escape, mapas de riesgo y protocolos de actuación ante siniestros. Cumplí con la ley y protegé vidas.
            </motion.p>
          </div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="md:w-1/3 flex justify-center"
          >
            <div className="w-48 h-48 bg-cian/10 rounded-full flex items-center justify-center border border-cian/20 shadow-2xl shadow-cian/20">
               <Map className="w-24 h-24 text-cian" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
           <div>
             <h2 className="text-3xl font-heading font-bold text-azul mb-6">Por qué elegir a PREVITEC</h2>
             <p className="text-gris leading-relaxed mb-8">
               Nuestra metodología se basa en la experiencia de campo. No ofrecemos soluciones enlatadas, sino que evaluamos la realidad de tus instalaciones para brindarte una respuesta técnica, legal y operativa.
             </p>
             <ul className="space-y-4">
               {["Diagnóstico preciso y adaptado a tu sector.", "Instructores y auditores matriculados.", "Equipamiento de última generación.", "Certificación con validez legal (ART/SRT)."].map((ben, i) => (
                 <li key={i} className="flex items-center gap-3 font-medium text-azul">
                   <CheckCircle2 className="w-6 h-6 text-cian shrink-0" />
                   {ben}
                 </li>
               ))}
             </ul>
           </div>
           <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100">
              <h3 className="text-2xl font-heading font-bold text-azul mb-6">¿Necesitás cotizar este servicio?</h3>
              <p className="text-gris mb-8">Dejanos tus datos y un especialista se contactará a la brevedad para asesorarte sin compromiso.</p>
              <Link href="/contacto" className="w-full inline-flex justify-center items-center gap-2 bg-azul text-white font-bold py-4 px-8 rounded-full hover:bg-cian transition-colors group">
                Solicitar Presupuesto
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
           </div>
        </div>
      </section>

      <CTA />
    </main>
  );
}
