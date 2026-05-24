"use client";

import { motion } from "framer-motion";
import { Search, PenTool, CheckCircle, ArrowRight } from "lucide-react";

export default function Process() {
  const steps = [
    {
      icon: Search,
      title: "1. Diagnóstico Inicial",
      desc: "Evaluamos las instalaciones y procesos para identificar riesgos potenciales y desvíos normativos."
    },
    {
      icon: PenTool,
      title: "2. Diseño del Plan",
      desc: "Desarrollamos protocolos, mapas de riesgo y manuales adaptados a la realidad de tu organización."
    },
    {
      icon: CheckCircle,
      title: "3. Implementación",
      desc: "Capacitamos a tu equipo, formamos brigadas y realizamos simulacros para poner a prueba el sistema."
    }
  ];

  return (
    <section className="py-24 px-6 bg-gray-50 border-y border-gray-200">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-heading font-bold text-azul mb-6"
          >
            Cómo Trabajamos
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gris max-w-2xl mx-auto"
          >
            Nuestra metodología garantiza una transición fluida desde la identificación de riesgos hasta la respuesta efectiva.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Línea conectora desktop */}
          <div className="hidden md:block absolute top-1/2 left-[10%] right-[10%] h-0.5 bg-gray-200 -translate-y-1/2 z-0" />

          {steps.map((step, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="relative z-10 bg-white p-8 rounded-2xl shadow-xl shadow-gray-200/50 text-center border border-gray-100"
            >
              <div className="w-20 h-20 mx-auto bg-azul rounded-full flex items-center justify-center text-white mb-6 shadow-lg shadow-azul/30">
                <step.icon className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-heading font-bold text-azul mb-4">{step.title}</h3>
              <p className="text-gris text-sm leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
