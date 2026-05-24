"use client";

import { motion } from "framer-motion";
import { ClipboardCheck, Map, BookOpen, AlertTriangle } from "lucide-react";
import CTA from "@/components/CTA";

export default function GestionPreventivaPage() {
  const steps = [
    { title: "Planes de Emergencia", icon: ClipboardCheck, desc: "Estructuramos manuales operativos para saber exactamente qué hacer antes, durante y después de un evento." },
    { title: "Evacuación", icon: Map, desc: "Diseño de rutas seguras, cálculo de tiempos y puntos de encuentro estratégicos." },
    { title: "Mapas de Riesgo", icon: AlertTriangle, desc: "Identificación visual de las zonas críticas dentro de la planta o institución." },
    { title: "Protocolos y Contingencias", icon: BookOpen, desc: "Documentación institucional formal adaptada a la legislación vigente de tu provincia y municipio." }
  ];

  return (
    <main className="pt-24 pb-0 bg-gray-50">
      <section className="bg-gris text-white py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-azul/50 mix-blend-multiply" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-heading font-bold mb-6"
          >
            Gestión <span className="text-cian">Preventiva</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-200"
          >
            Planificación estratégica y documentación para anticiparse a los incidentes.
          </motion.p>
        </div>
      </section>

      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          {steps.map((step, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-10 rounded-3xl shadow-md border border-gray-100 flex gap-6"
            >
              <div className="w-16 h-16 shrink-0 bg-blue-50 text-azul rounded-2xl flex items-center justify-center">
                <step.icon className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-xl font-heading font-bold text-azul mb-3">{step.title}</h3>
                <p className="text-gris leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <CTA />
    </main>
  );
}
